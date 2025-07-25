async function fetchFlashcardsFromFirestore() {
    const snapshot = await db.collection("flashcards").get();
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}


const firebaseConfig = {
  apiKey: "AIzaSyD-Yo8_fVsKlsPSpL9VMtVhW4ELBplVqx4",
  authDomain: "wykuwator-3000.firebaseapp.com",
  projectId: "wykuwator-3000",
  storageBucket: "wykuwator-3000.appspot.com",
  messagingSenderId: "584824427897",
  appId: "1:584824427897:web:20bd938d979ef9ee710ba8"
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
// ...po firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

let currentRound = 1; // Globalna zmienna do śledzenia bieżącej tury
let currentCardIndex = 0;
let mode = '';  // 'eventToDate' lub 'dateToEvent'
let wrongAnswers = [];
let sessionCards = [];
let sessionAttempts = {}; // Obiekt do śledzenia prób dla każdej fiszki
let groupFilter = 'all'; // 'all', 'pl', 'world'
let countryFilters = []; // Tablica do przechowywania wybranych krajów
let eraFilters = []; // Tablica epok
let sortOrder = 'chronological';  // 'chronological' lub 'random'
let startTime; // Czas rozpoczęcia sesji
let timerInterval; // Referencja do setInterval
let timeoutMode = "default"; // "default", "manual", "custom"
let customTimeoutValue = 2000; // W milisekundach (2 sekundy jako domyślna wartość)
let difficultyFilters = []; // Tablica do przechowywania wybranych poziomów trudności
let completedAnswers = {}; // Mapowanie: id => true/false, czy została odpowiedziana
let solvedThisRound = 0;
let chartInstance = null;
let chartInstance2 = null;
let correctAnswers = { count: 0 };
let incorrectAnswers = { count: 0 };
let skipLeaderboard = false;
let errorMarginEnabled = false;
let errorMarginValue = "";
let yearFrom = null;
let yearTo = null;
let typeFilters = []; // typy fiszek

// ...firebase config, zmienne globalne...

document.addEventListener('DOMContentLoaded', function() {
    // --- LOGOWANIE/REJESTRACJA ---
    const loginRegisterChoice = document.getElementById('login-register-choice');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    
    document.getElementById('login-btn').onclick = function() {
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;
        auth.signInWithEmailAndPassword(email, password)
            .catch(e => document.getElementById('login-error').textContent = e.message);
    };
    document.getElementById('choose-login-btn').onclick = function() {
        loginRegisterChoice.style.display = 'none';
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
    };
    document.getElementById('choose-register-btn').onclick = function() {
        loginRegisterChoice.style.display = 'none';
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
    };
    document.getElementById('register-btn').onclick = function() {
        const username = document.getElementById('register-username').value;
        const email = document.getElementById('register-email').value;
        const password = document.getElementById('register-password').value;
        if (!username) {
            document.getElementById('register-error').textContent = "Podaj nazwę użytkownika!";
            return;
        }
        auth.createUserWithEmailAndPassword(email, password)
            .then(userCredential => {
                return userCredential.user.updateProfile({ displayName: username });
            })
            .catch(e => document.getElementById('register-error').textContent = e.message);
    };
    document.getElementById('logout-btn').onclick = function() { auth.signOut(); };
    document.getElementById('login-back-btn').onclick = function() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'none';
    document.getElementById('login-register-choice').style.display = 'block';
};
auth.onAuthStateChanged(user => {
    const userInfoDiv = document.getElementById('user-info');
    if (user) {
        document.getElementById('firebase-login').style.display = 'none';
        document.getElementById('logout-btn').style.display = 'inline-block';
        // Dodaj span z klasą gold-username
        userInfoDiv.innerHTML = `Zalogowano jako: <span class="gold-username">${user.displayName || user.email}</span>`;
        userInfoDiv.style.display = 'block';
    } else {
        document.getElementById('firebase-login').style.display = 'block';
        document.querySelectorAll('.menu-main').forEach(el => el.style.display = 'none');
        document.querySelector('.flashcards').style.display = 'none';
        document.querySelectorAll('.summary').forEach(el => el.style.display = 'none');
        document.getElementById('logout-btn').style.display = 'none';
        userInfoDiv.textContent = '';
        userInfoDiv.style.display = 'none';
    }
});
    // --- RESZTA NASŁUCHIWACZY I INICJALIZACJI DOM ---
    document.querySelectorAll('input[name="difficulty"]').forEach(checkbox => {
        checkbox.addEventListener('change', function () {
            const value = this.value;
            if (this.checked) {
                difficultyFilters.push(value);
            } else {
                difficultyFilters = difficultyFilters.filter(dif => dif !== value);
            }
            console.log("Wybrane poziomy trudności:", difficultyFilters);
        });
    });

    document.querySelectorAll('input[name="country"]').forEach(checkbox => {
        checkbox.addEventListener('change', function () {
            const value = this.value;
            if (value === 'all') {
                if (this.checked) {
                    countryFilters = ['all'];
                    document.querySelectorAll('input[name="country"]').forEach(cb => {
                        if (cb.value !== 'all') cb.checked = false;
                    });
                } else {
                    countryFilters = [];
                }
            } else {
                if (this.checked) {
                    countryFilters = countryFilters.filter(country => country !== 'all');
                    countryFilters.push(value);
                } else {
                    countryFilters = countryFilters.filter(country => country !== value);
                }
            }
            console.log("Wybrane kraje:", countryFilters);
        });
    });
    document.querySelectorAll('input[name="type"]').forEach(cb => {
    cb.addEventListener('change', function() {
        typeFilters = Array.from(document.querySelectorAll('input[name="type"]:checked')).map(cb => cb.value);
        console.log("Wybrane typy:", typeFilters);
    });
});

    document.querySelectorAll('input[name="timeoutMode"]').forEach(radio => {
        radio.addEventListener('change', function () {
            timeoutMode = this.value;
            const customTimeoutInput = document.getElementById('customTimeout');
            if (timeoutMode === "custom") {
                customTimeoutInput.disabled = false;
                customTimeoutInput.addEventListener('input', function () {
                    const value = parseInt(this.value);
                    if (!isNaN(value) && value > 0) {
                        customTimeoutValue = value * 1000;
                    }
                });
            } else {
                customTimeoutInput.disabled = true;
            }
        });
    });

    document.getElementById('homeButton').addEventListener('click', returnToMenu);
    document.querySelectorAll('.menu-main').forEach(el => el.style.display = 'none');
    let canTrigger = true;
    document.getElementById('userInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && canTrigger) {
            e.preventDefault();
            checkAnswer();
            canTrigger = false;
            setTimeout(() => { canTrigger = true; }, 2000);
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            returnToMenu();
        }
    });

    const advancedOptionsButton = document.getElementById('advancedOptionsButton');
    const advancedOptionsMenu = document.getElementById('advancedOptionsMenu');
    if (advancedOptionsButton && advancedOptionsMenu) {
        advancedOptionsButton.addEventListener('click', function() {
            if (advancedOptionsMenu.classList.contains('hidden')) {
                advancedOptionsMenu.classList.remove('hidden');
                advancedOptionsMenu.classList.add('visible');
            } else {
                advancedOptionsMenu.classList.remove('visible');
                advancedOptionsMenu.classList.add('hidden');
            }
        });
    }

    const optionalNextCheckbox = document.getElementById('optionalNextButton');
    if (optionalNextCheckbox) {
        optionalNextButtonEnabled = optionalNextCheckbox.checked;
        optionalNextCheckbox.addEventListener('change', function() {
            optionalNextButtonEnabled = this.checked;
        });
    }
    fetchLeaderboard();

document.getElementById('enable-error-margin').addEventListener('change', function() {
    errorMarginEnabled = this.checked;
    const input = document.getElementById('error-margin-value');
    input.disabled = !this.checked;
    if (!this.checked) {
        input.value = '';
        errorMarginValue = 0;
    }
});
document.getElementById('error-margin-value').addEventListener('input', function() {
    errorMarginValue = parseInt(this.value) || 0;
});
document.getElementById('year-from').addEventListener('input', function() {
    yearFrom = parseInt(this.value) || null;
});
document.getElementById('year-to').addEventListener('input', function() {
    yearTo = parseInt(this.value) || null;
});
 
    // ...wszystkie Twoje event listenery...
const errorMarginInput = document.getElementById('error-margin-value');
if (errorMarginInput) {
    errorMarginInput.value = '';
}
// Pokaż panel admina tylko dla admina
auth.onAuthStateChanged(async user => {
    if (user) {
        const userDoc = await db.collection("users").doc(user.uid).get();
        const isAdmin = userDoc.exists && userDoc.data().isAdmin === true;
        document.getElementById('admin-panel').style.display = isAdmin ? 'block' : 'none';
    } else {
        document.getElementById('admin-panel').style.display = 'none';
    }
});

// Dodawanie nowej fiszki
document.getElementById('admin-add-flashcard').onclick = async function() {
    const event = document.getElementById('admin-event').value.trim();
    const date = document.getElementById('admin-date').value.trim();
    const era = document.getElementById('admin-era').value.trim();
    const area = document.getElementById('admin-area').value.trim().split(',').map(s => s.trim());
    const type = document.getElementById('admin-type').value.trim();
    const dif = document.getElementById('admin-dif').value.trim();
    const dayDate = document.getElementById('admin-daydate').value.trim();

    if (!event || !date || !era || !area[0] || !type || !dif) {
        document.getElementById('admin-msg').textContent = "Uzupełnij wszystkie pola!";
        return;
    }

    try {
        await db.collection("flashcards").add({
            event, date, era, area, type, dif, dayDate
        });
        document.getElementById('admin-msg').textContent = "Fiszka dodana!";
    } catch (e) {
        document.getElementById('admin-msg').textContent = "Błąd: " + e.message;
    }
};

// Aktualizacja daty dziennej
document.getElementById('admin-update-daydate-btn').onclick = async function() {
    const id = document.getElementById('admin-update-id').value.trim();
    const dayDate = document.getElementById('admin-update-daydate').value.trim();

    if (!id || !dayDate) {
        document.getElementById('admin-msg').textContent = "Podaj ID i datę dzienną!";
        return;
    }

    // Szukaj fiszki po polu id (nie po doc.id Firestore!)
    const query = await db.collection("flashcards").where("id", "==", parseInt(id)).get();
    if (query.empty) {
        document.getElementById('admin-msg').textContent = "Nie znaleziono fiszki o tym ID!";
        return;
    }
    try {
        query.forEach(doc => {
            doc.ref.update({ dayDate });
        });
        document.getElementById('admin-msg').textContent = "Data dzienna zaktualizowana!";
      } catch (e) {
        document.getElementById('admin-msg').textContent = "Błąd: " + e.message;
    }
}; // <-- zamknięcie funkcji onclick
document.getElementById('mode-select').style.display = 'flex';
document.querySelectorAll('.menu-main').forEach(el => el.style.display = 'none');
document.querySelector('.menu-tryb2').style.display = 'none';
document.getElementById('flashcards').style.display = 'none';

document.getElementById('mode-flashcards-btn').onclick = function() {
    document.querySelector('.menutryb').style.display = 'none'; // <-- ukryj całe menu
    document.getElementById('mode-select').style.display = 'none';
    document.querySelectorAll('.menu-main').forEach(el => el.style.display = 'block');
    document.querySelectorAll('.t2').forEach(el => el.style.display = 'none');
    document.querySelectorAll('.fiszki-only').forEach(el => el.style.display = 'block');
};
document.getElementById('mode-tryb2-btn').onclick = function() {
    document.querySelector('.menutryb').style.display = 'none'; // <-- ukryj całe menu
    document.getElementById('mode-select').style.display = 'none';
    document.querySelector('.menu-tryb2').style.display = 'block';
    document.querySelectorAll('.fiszki-only').forEach(el => el.style.display = 'none');
    document.querySelectorAll('.wspolne').forEach(el => el.style.display = 'block');
    document.querySelectorAll('.sybau').forEach(el => el.style.display = 'inline-block');
};

// --- START TRYBU 2 ---
document.getElementById('start-chronology-btn').onclick = function() {
    document.querySelectorAll('.menu-main').forEach(el => el.style.display = 'none');
    document.querySelector('.flashcards').style.display = 'none';
    document.querySelectorAll('.fiszki-only').forEach(el => el.style.display = 'none');
    document.querySelectorAll('.sybau').forEach(el => el.style.display = 'none');
    document.querySelectorAll('.summary').forEach(el => el.style.display = 'none');
    document.getElementById('leaderboard-container').style.display = 'none';
    document.getElementById('chronology-settings').style.display = 'block';
    this.style.display = 'none';
};
document.getElementById('chronology-confirm-btn').onclick = async function() {
    // ZBIERZ AKTUALNE FILTRY!
    groupFilter = document.querySelector('input[name="group"]:checked').value;
    eraFilters = Array.from(document.querySelectorAll('input[name="era"]:checked')).map(cb => cb.value);
    countryFilters = Array.from(document.querySelectorAll('input[name="country"]:checked')).map(cb => cb.value);
    difficultyFilters = Array.from(document.querySelectorAll('input[name="difficulty"]:checked')).map(cb => cb.value);

    document.getElementById('chronology-settings').style.display = 'none';
    document.getElementById('tryb2-game').style.display = 'block';
    await startTryb2Chronology();
};
document.getElementById('back-to-menu-tryb2').onclick = function() {
    returnToMenu();
};
document.getElementById('back-to-menu-tryb1').onclick = function() {
    returnToMenu();
};
// --- LOGIKA TRYBU 2 ---
async function startTryb2Chronology() {
    // Ukryj wszystko poza trybem sortowania
    document.querySelectorAll('.menu-main').forEach(el => el.style.display = 'none');
    document.querySelectorAll('.fiszki-only').forEach(el => el.style.display = 'none');
    document.querySelectorAll('.ni').forEach(el => el.style.display = 'none');
    document.querySelector('.flashcards').style.display = 'none';
    document.querySelectorAll('.summary').forEach(el => el.style.display = 'none');
    document.getElementById('leaderboard-container').style.display = 'none';
    document.getElementById('chronology-settings').style.display = 'none';
    document.getElementById('chronology-summary').style.display = 'none';
    document.getElementById('tryb2-game').style.display = 'block';

    // Reset wyników i stanu
    window.chronologyResults = [];
    window.chronologySets = [];
    window.currentChronologySet = 0;

  const allFlashcards = await fetchFlashcardsFromFirestore();
    const filtered = getFilteredFlashcards(allFlashcards);

    console.log('[Chronology] Liczba fiszek po filtrach:', filtered.length, filtered);
    console.log('[Chronology] groupFilter:', groupFilter);
    console.log('[Chronology] eraFilters:', eraFilters);
    console.log('[Chronology] countryFilters:', countryFilters);
    console.log('[Chronology] difficultyFilters:', difficultyFilters);

    if (!filtered.length) {
        document.getElementById('tryb2-events-list').innerHTML = '<span style="color:red;">Brak wydarzeń do sortowania dla wybranych filtrów!</span>';
        document.getElementById('check-tryb2-btn').style.display = 'none';
        document.getElementById('next-chronology-btn').style.display = 'none';
        console.warn('[Chronology] Brak fiszek po filtrach!');
        return;
    }
    // ...po sprawdzeniu filtered.length...
    const count = parseInt(document.getElementById('chronology-count').value) || 5;
    const setSize = Math.min(6, Math.max(4, filtered.length)); // np. 4-6, ale nie więcej niż liczba fiszek

    let usedIds = new Set(); // <-- globalny zbiór użytych id w tej sesji

    for (let i = 0; i < count; i++) {
        let set = [];
        let usedYears = new Set();
        // Najpierw próbuj z nieużytych dotąd fiszek
        let pool = shuffleArray(filtered.filter(card => !usedIds.has(card.id)));

        for (let j = 0; j < pool.length && set.length < setSize; j++) {
            const card = pool[j];
            const year = parseDate(card.date);
            if (!usedYears.has(year)) {
                set.push(card);
                usedYears.add(year);
                usedIds.add(card.id); // <-- zapamiętaj, że to id już było
            }
        }

        // Jeśli nie udało się zebrać setSize unikalnych lat z nieużytych fiszek, dopełnij z reszty (mogą się powtórzyć id)
        if (set.length < setSize) {
            // Pool z wszystkich fiszek, ale bez tych już w secie
            const remaining = shuffleArray(filtered.filter(card => !set.includes(card)));
            for (let j = 0; j < remaining.length && set.length < setSize; j++) {
                const card = remaining[j];
                const year = parseDate(card.date);
                if (!usedYears.has(year)) {
                    set.push(card);
                    usedYears.add(year);
                    // nie dodawaj do usedIds, bo to już powtórka
                }
            }
        }

        // Jeśli nadal nie udało się zebrać setSize (np. za mało unikalnych lat), dopełnij dowolnymi
        if (set.length < setSize) {
            const remaining = shuffleArray(filtered.filter(card => !set.includes(card)));
            while (set.length < setSize && remaining.length > 0) {
                set.push(remaining.pop());
            }
        }

        window.chronologySets.push(set);
        console.log(`[Chronology] Zestaw ${i + 1}:`, set.map(e => `${e.event} (${e.date})`));
    }
    window.currentChronologySet = 0;
    showChronologySet();
}

function showChronologySet() {
    const idx = window.currentChronologySet;
    const list = document.getElementById('tryb2-events-list');
    const set = (window.chronologySets && window.chronologySets[idx]) ? window.chronologySets[idx] : [];
    if (!set.length) {
    list.innerHTML = '<span style="color:red;">Brak wydarzeń w tym zestawie.</span>';
    document.getElementById('check-tryb2-btn').style.display = 'none';
    document.getElementById('next-chronology-btn').style.display = 'none';
    return;
}
    // Input po prawej, ładnie pod sobą
    list.innerHTML = set.map((card, i) =>
        `<div class="chronology-row">
            <span class="chronology-event">${card.event}</span>
            <input type="number" min="1" max="${set.length}" class="chronology-input" data-id="${card.id}" style="width:60px; margin-left:20px; text-align:right;">
        </div>`
    ).join('');
    document.getElementById('tryb2-result').textContent = '';
    document.getElementById('check-tryb2-btn').style.display = 'inline-block';
    document.getElementById('next-chronology-btn').style.display = 'none';
}
// --- SPRAWDZANIE KOLEJNOŚCI (prosty wariant: użytkownik przepisuje numery) ---
document.getElementById('check-tryb2-btn').onclick = function() {
    const idx = window.currentChronologySet;
    const set = window.chronologySets[idx];
    const inputs = Array.from(document.querySelectorAll('.chronology-input'));

    // Zbierz wartości i posortuj po numerze wpisanym przez użytkownika
    const sortedInputs = inputs
        .map(inp => {
            const card = set.find(c => String(c.id) === String(inp.dataset.id));
            return {
                id: inp.dataset.id,
                value: parseInt(inp.value),
                event: card ? card.event : '',
                date: card ? card.date : ''
            };
        })
        .sort((a, b) => a.value - b.value);

    // Sprawdź, czy wszystkie pola są wypełnione i wartości są unikalne
    if (sortedInputs.some(inp => isNaN(inp.value)) || new Set(sortedInputs.map(i => i.value)).size !== set.length) {
        alert('Uzupełnij wszystkie pola unikalnymi numerami!');
        return;
    }

    // Sprawdź czy daty są w kolejności rosnącej
    let ok = true;
    for (let i = 1; i < sortedInputs.length; i++) {
        if (parseDate(sortedInputs[i].date) < parseDate(sortedInputs[i - 1].date)) {
            ok = false;
            break;
        }
    }

    // Wygeneruj całą listę od nowa z kolorowaniem dat
    const list = document.getElementById('tryb2-events-list');
    list.innerHTML = `<div class="chronology-header">Twoja odpowiedź:</div>` +
    sortedInputs.map((inpObj, i) => {
        const isCorrect = ok
            ? true
            : (i === 0 || parseDate(inpObj.date) >= parseDate(sortedInputs[i - 1].date));
        const color = isCorrect ? 'green' : 'red';
        return `<div class="chronology-row">
            <span class="chronology-event">${inpObj.event}</span>
            <span style="color:${color};font-weight:bold;margin-left:20px;">${inpObj.date}</span>
        </div>`;
    }).join('');
console.log(sortedInputs);
    // Pokaż informację pod spodem
    const resultDiv = document.getElementById('tryb2-result');
    if (ok) {
        resultDiv.innerHTML = `<span style="color:green;">Brawo! Poprawna kolejność.</span>`;
    } else {
        resultDiv.innerHTML = `<span style="color:red;">Błędna kolejność.</span>`;
    }

    if (!window.chronologyResults) window.chronologyResults = [];
    window.chronologyResults.push({set, userOrder: sortedInputs.map(x => x.id), correct: ok});
    document.getElementById('next-chronology-btn').style.display = 'inline-block';
    document.getElementById('check-tryb2-btn').style.display = 'none';
};
function showChronologySummary() {
    document.getElementById('tryb2-game').style.display = 'none';
    document.getElementById('next-chronology-btn').style.display = 'none';
    document.getElementById('chronology-summary').style.display = 'block';
    let html = '<h2>Podsumowanie sortowania</h2>';
    window.chronologyResults.forEach((res, i) => {
        html += `<br><h3>Zestaw ${i+1} (${res.correct ? 'Poprawnie' : 'Błędnie'})</h3><ol>`;
        // Kolejność użytkownika (po id)
        const userOrder = res.userOrder;
        // Kolejność poprawna (po dacie rosnąco)
        const correctOrder = [...res.set].sort((a, b) => parseDate(a.date) - parseDate(b.date)).map(c => c.id);

        // Pobierz fiszki w kolejności użytkownika
        const userCards = userOrder.map(id => res.set.find(c => String(c.id) === String(id)));

        userCards.forEach((card, idx) => {
            const isCorrect = String(card.id) === String(correctOrder[idx]);
            const color = isCorrect ? 'green' : 'red';
            html += `<li style="color:${color};"><b>${card.event}</b> (${card.date})</li>`;
        });
        html += '</ol>';
    });
    document.getElementById('chronology-summary').innerHTML = html + `<button class="button" onclick="returnToMenu()">Powrót do menu</button>`;
}

document.getElementById('next-chronology-btn').onclick = function() {
    window.currentChronologySet++;
    if (window.currentChronologySet < window.chronologySets.length) {
        showChronologySet();
    } else {
        showChronologySummary();
    }
};
}); // <-- To jest JEDYNE zamknięcie DOMContentLoaded!


// TIMER

function startTimer() {
    startTime = Date.now(); // Zapisz czas rozpoczęcia sesji

    // Aktualizuj co sekundę
    timerInterval = setInterval(() => {
        const elapsedTime = Date.now() - startTime; // Oblicz upływający czas
        const minutes = Math.floor(elapsedTime / 60000);
        const seconds = Math.floor((elapsedTime % 60000) / 1000);

        // Formatowanie czasu
        const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

        // Wyświetlenie w HTML
        document.getElementById('live-timer').textContent = `Czas: ${formattedTime}`;
    }, 1000);
}
function stopTimer() {
    clearInterval(timerInterval); // Zatrzymaj licznik
}
function hideButtons() {
    document.querySelectorAll('.guziki .for, .guziki .ch, .guziki .zs').forEach(button => {
        button.style.display = 'none'; // Ukryj guziki z wybranymi klasami
    });
}

function showButtons() {
    document.querySelectorAll('.guziki .for, .guziki .ch, .guziki .zs, .guziki .next-button').forEach(button => {
        button.style.display = 'flex'; // Pokaż także .next-button!
    });
}

// WYSWIETLENIE MENU



// WYKRES

function initializeChart() {
    const ctx = document.getElementById('resultsChart').getContext('2d');
    // Zniszcz poprzedni wykres, jeśli istnieje
    if (chartInstance) {
        chartInstance.destroy();
        chartInstance = null;
    }
    chartInstance = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Poprawne', 'Niepoprawne'],
            datasets: [{
                label: 'Odpowiedzi',
                data: [correctAnswers.count, incorrectAnswers.count], // Użycie aktualnych danych
                backgroundColor: ['#4caf50', '#f44336'], // Kolory: zielony i czerwony
                borderWidth: 1,
            }],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            const label = context.label || '';
                            const value = context.raw || 0;
                            return `${label}: ${value}`;
                        }
                    }
                }
            }
        }
    });
}





// PASEK POSTEPU

function updateRoundInfo() {
    currentRound++;
    const roundInfo = document.getElementById("round-info");
    roundInfo.textContent = `Tura ${currentRound}`; // Aktualizacja napisu
}


function initializeProgressBar() {
    const progressBar = document.getElementById("progress-bar");
    const progressText = document.getElementById("progress-text");
    progressBar.style.width = "0%";
    progressText.textContent = `0/${sessionCards.length}`; // Liczba fiszek w tej turze
}

function updateProgressBar() {
    const progressBar = document.getElementById("progress-bar");
    const progressText = document.getElementById("progress-text");
    const totalCards = sessionCards.length + (typeof solvedThisRound === 'number' ? solvedThisRound : 0);
    // Liczba rozwiązanych w tej turze = startowa liczba fiszek tej tury - bieżąca liczba fiszek
    const solvedCards = (typeof solvedThisRound === 'number' ? solvedThisRound : 0);

    // Oblicz procent wypełnienia
    const progressPercent = totalCards === 0 ? 0 : (solvedCards / totalCards) * 100;

    progressBar.style.width = `${progressPercent}%`;
    progressText.textContent = `${solvedCards}/${totalCards}`;
}
// USUNIECIE DUPLIKATOW


function removeDuplicates(cards) {
    const uniqueCards = [];
    const ids = new Set();

    cards.forEach(card => {
        if (!ids.has(card.id)) {
            ids.add(card.id);
            uniqueCards.push(card);
        }
    });

    return uniqueCards;
}


// FUNKCJA OD WYSTARTOWANIA FISZEK


async function startFlashcards(selectedMode) {
    const flashcardContent = document.getElementById('flashcardContent');
    if (flashcardContent) {
        flashcardContent.innerHTML = '';
    }

    const timerDisplay = document.getElementById('live-timer');
    if (timerDisplay) {
        timerDisplay.textContent = 'Czas: 00:00';
    }
    mode = selectedMode;
    groupFilter = document.querySelector('input[name="group"]:checked').value;
    eraFilters = Array.from(document.querySelectorAll('input[name="era"]:checked')).map(cb => cb.value);
    sortMode = document.querySelector('input[name="sort"]:checked').value;
    currentCardIndex = 0;
    wrongAnswers = [];
    solvedThisRound = 0;

    // --- KLUCZOWA ZMIANA: pobierz fiszki z Firestore ---
    const allFlashcards = await fetchFlashcardsFromFirestore();

    // --- Zmień getFilteredFlashcards, by przyjmował fiszki jako argument ---
    sessionCards = getFilteredFlashcards(allFlashcards);

    const noFlashcardsMsg = document.getElementById('no-flashcards-message');
    if (sessionCards.length === 0) {
        if (noFlashcardsMsg) {
            noFlashcardsMsg.style.display = 'block';
        }
        return;
    } else {
        if (noFlashcardsMsg) {
            noFlashcardsMsg.style.display = 'none';
        }
        document.querySelector(".menu").style.display = "none";
        document.querySelector(".epoki").style.display = "none";
        document.querySelector(".sortowanie").style.display = "none";
        document.querySelector(".ni").style.display = "none";
        document.querySelector(".dif").style.display = "none";
        document.querySelector(".dif2").style.display = "none";
        document.querySelector(".opcjonalne").style.display = "none";
        document.querySelector(".flashcards").style.display = "block";
        document.querySelector(".summary").style.display = "none";
        document.getElementById("advancedOptionsMenu").classList.add("hidden");
        document.getElementById("advancedOptionsButton").classList.add("hidden");
        document.querySelector(".year-range").style.display = "none";      // <-- DODAJ TO
        document.querySelector(".error-margin").style.display = "none";    // <-- DODAJ TO
    }
    sessionAttempts = {};
    currentRound = 0;

    sessionCards = sortFlashcards(sessionCards, sortMode);

    sessionCards.forEach((card) => {
        sessionAttempts[card.id] = 0;
    });

    if (sortMode === "random") {
        shuffleArray(sessionCards);
    }

    showInput();
    showButtons();
    if (!chartInstance) {
        initializeChart();
    }
    chartInstance.data.datasets[0].data = [correctAnswers.count, incorrectAnswers.count];
    chartInstance.update();
    initializeProgressBar();
    updateProgressBar();
    updateRoundInfo();
    startTimer();
    showNextCard();
}


//PRZYGOTOWANIE FISZEK

function getFilteredFlashcards(flashcards) {
    console.log("Group Filter:", groupFilter);
    console.log("Era Filters:", eraFilters);
    console.log("Country Filters:", countryFilters);
    console.log("Type Filters:", typeFilters);
    console.log("Difficulty Filters:", difficultyFilters);
    console.log("ERA FILTERS:", eraFilters);
    console.log("Przykładowa card.era:", flashcards[0]?.era, "typ:", typeof flashcards[0]?.era, "isArray:", Array.isArray(flashcards[0]?.era));

    const filteredCards = flashcards.filter(card => {
        // Grupa
        const groupMatch = groupFilter === 'all' ||
            (groupFilter === 'pl' && (Array.isArray(card.area) ? card.area.includes('pl') : card.area === 'pl')) ||
            (groupFilter === 'world' && (Array.isArray(card.area) ? !card.area.includes('pl') : card.area !== 'pl'));

        // Epoka
        const eraMatch = eraFilters.length === 0 ||
    (Array.isArray(card.era)
        ? card.era.some(e => eraFilters.includes(String(e).replace(/[\[\]]/g, '')))
        : eraFilters.includes(String(card.era).replace(/[\[\]]/g, '')));
        console.log("Porównuję epoki:", eraFilters, "z", card.era, "=>", String(card.era).replace(/[\[\]]/g, ''));

        // Kraj
        const countryMatch = (() => {
            if (countryFilters.length === 0) {
                return groupFilter === 'all' ||
                    (groupFilter === 'pl' && (Array.isArray(card.area) ? card.area.includes('pl') : card.area === 'pl')) ||
                    (groupFilter === 'world' && (Array.isArray(card.area) ? !card.area.includes('pl') : card.area !== 'pl'));
            }
            if (Array.isArray(card.area)) {
                return countryFilters.some(country => card.area.includes(country));
            } else {
                return countryFilters.includes(card.area);
            }
        })();

        // Typ
        const typeMatch = typeFilters.length === 0 || typeFilters.includes(card.type);

        // Poziom trudności
        const difficultyMatch = difficultyFilters.length === 0 || difficultyFilters.includes(String(card.dif));

        // Zakres lat
        let yearMatch = true;
        if (yearFrom !== null || yearTo !== null) {
            const cardYear = parseDate(card.date);
            if (yearFrom !== null && cardYear < yearFrom) yearMatch = false;
            if (yearTo !== null && cardYear > yearTo) yearMatch = false;
        }

        return groupMatch && eraMatch && countryMatch && typeMatch && difficultyMatch && yearMatch;
    });

    const uniqueFilteredCards = removeDuplicates(filteredCards);

    console.log("Filtered Cards (before duplicates removal):", filteredCards);
    console.log("Filtered Cards (after duplicates removal):", uniqueFilteredCards);

    return uniqueFilteredCards;
}
// NIE PAMIETAM
function dontRemember() {
    updateProgressBar();
    checkAnswer();}




// OPCJONALNE PRZEJSCIE DO NASTEPNEJ FISZKI



function addNextButton() {
    const guzikiContainer = document.querySelector('.guziki');
    if (!guzikiContainer) return;

    // Sprawdź, czy przycisk już istnieje
    const existingButton = guzikiContainer.querySelector('.next-button');
    if (existingButton) return;

    const nextButton = document.createElement('button');
    nextButton.textContent = 'Przejdź do następnej';
    nextButton.className = 'next-button';

    nextButton.addEventListener('click', () => {
        // --- KLUCZOWA ZMIANA: usuwamy aktualną fiszkę i przesuwamy indeks ---
        sessionCards.splice(currentCardIndex, 1);
        solvedThisRound++;
        if (currentCardIndex >= sessionCards.length) {
            currentCardIndex = 0;
        }
        nextButton.remove();
        showNextCard();
    });

    guzikiContainer.appendChild(nextButton);
}


// OPCJE ZAAWANSOWANE


function toggleAdvancedOptions() {
    const advancedOptionsMenu = document.getElementById('advancedOptionsMenu');
    advancedOptionsMenu.classList.toggle('hidden');
}



// NASTEPNA FISZKA


function showNextCard() {
    hideButtons();
    document.getElementById('flashcardContent').style.opacity = 0;
    const flashcardContent = document.getElementById('flashcardContent');
    if (!flashcardContent) {
        console.error('Element #flashcardContent nie istnieje.');
        return;
    }
    flashcardContent.innerHTML = '';

    if (sessionCards.length > 0 && currentCardIndex < sessionCards.length) {
        const flashcard = sessionCards[currentCardIndex];
        if (!completedAnswers[flashcard.id]) {
            sessionAttempts[flashcard.id] += 1;
        }
        if (mode === 'eventToDate') {
            flashcardContent.innerHTML = `<p><strong>Wydarzenie:</strong> ${flashcard.event}</p>`;
        } else {
            flashcardContent.innerHTML = `<p><strong>Data:</strong> ${flashcard.date}</p>`;
        }
        setTimeout(() => {
            document.getElementById('flashcardContent').style.opacity = 1;
            showButtons();
            updateProgressBar(); // <-- DODAJ TUTAJ!
        }, 100);
    } else if (wrongAnswers.length > 0) {
        sessionCards = [...wrongAnswers];
        wrongAnswers = [];
        currentCardIndex = 0;
        solvedThisRound = 0;
        updateProgressBar();
        updateRoundInfo();
        showNextCard();
    } else {
        showSummary();
        currentRound = 0;
    }
}





// SPRAWDZENIE ODPOWIEDZI


// Dodaj flagę globalną do obsługi opcji przycisku "Przejdź do następnej"
let optionalNextButtonEnabled = false;



// --- poprawiony checkAnswer ---
function checkAnswer() {
    const userInput = document.getElementById('userInput').value.trim();
    const flashcard = sessionCards[currentCardIndex];
    let correctAnswer = '';

    if (mode === 'eventToDate') {
        correctAnswer = flashcard.date;
    } else {
        correctAnswer = flashcard.event;
    }

    hideButtons();
    document.getElementById('flashcardContent').style.opacity = 1;

    const cardId = flashcard.id;

    let wasCorrect = false;

    if (errorMarginEnabled && mode === 'eventToDate') {
        // Porównaj liczbowo z marginesem
        const userYear = parseDate(userInput);
        const correctYear = parseDate(correctAnswer);
        wasCorrect = Math.abs(userYear - correctYear) <= errorMarginValue;
    } else {
        wasCorrect = normalizeAnswer(userInput) === normalizeAnswer(correctAnswer);
    }
    if (errorMarginEnabled) {
    skipLeaderboard = true;
} else {
    skipLeaderboard = false;
}
    if (wasCorrect) {
    if (errorMarginEnabled && mode === 'eventToDate' && normalizeAnswer(userInput) !== normalizeAnswer(correctAnswer)) {
        document.getElementById('flashcardContent').innerHTML += `<p class="correct">Poprawnie (dzięki marginesowi błędu)!<br>Prawidłowa odpowiedź: <h-da>${correctAnswer}</h-da></p>`;
    } else {
        document.getElementById('flashcardContent').innerHTML += `<p class="correct">Poprawnie!</p>`;
    }
    completedAnswers[cardId] = true;
    correctAnswers.count++;
    if (typeof answerRounds === "undefined") window.answerRounds = {};
    answerRounds[cardId] = currentRound;

    // Jeśli była w wrongAnswers, usuń ją
    const wrongIdx = wrongAnswers.findIndex(c => c.id === cardId);
    if (wrongIdx !== -1) wrongAnswers.splice(wrongIdx, 1);
} else {
        document.getElementById('flashcardContent').innerHTML += `<p class="incorrect">Błąd! Poprawna odpowiedź to:<h-da> ${correctAnswer}</h-da></p>`;
        wrongAnswers.push(flashcard);
        completedAnswers[cardId] = false;
        incorrectAnswers.count++;
    }

    chartInstance.data.datasets[0].data = [correctAnswers.count, incorrectAnswers.count];
    chartInstance.update();

    document.getElementById('userInput').value = '';
    updateProgressBar();

    // --- KLUCZOWA ZMIANA: sprawdź istnienie kontenera .guziki i wywołuj addNextButton po DOM update ---
if (optionalNextButtonEnabled) {
    setTimeout(() => {
        // Upewnij się, że kontener istnieje i jest widoczny
        const guzikiContainer = document.querySelector('.guziki');
        if (guzikiContainer && guzikiContainer.offsetParent !== null) {
            showButtons(); // <-- dodaj to tutaj!
            addNextButton();
        }
    }, 100); // Daj czas na aktualizację DOM
} else {
        setTimeout(() => {
            sessionCards.splice(currentCardIndex, 1);
            solvedThisRound++;
            if (currentCardIndex >= sessionCards.length) {
                currentCardIndex = 0;
            }
            showNextCard();
        }, wasCorrect ? 700 : 1500);
    }
}

function showSummary() {
    hideInput();
    hideButtons();
    stopTimer();
    document.querySelector('.flashcards').style.display = 'none';
    document.querySelectorAll('.menu-main').forEach(el => el.style.display = 'none');
    document.querySelectorAll('.summary').forEach(el => el.style.display = 'block');
    document.getElementById('show-details-btn').style.display = 'inline-block';
    document.getElementById('details-section').style.display = 'none';

    const summaryContent = document.getElementById('summaryContent');
    summaryContent.innerHTML = '';

    // Czas sesji
    const endTime = new Date();
    const totalTime = Math.floor((endTime - startTime) / 1000);
    const minutes = Math.floor(totalTime / 60);
    const seconds = totalTime % 60;
    summaryContent.innerHTML += `
        <li><strong>Całkowity czas sesji:</strong> ${minutes} min ${seconds} sek</li>
    `;

    // Liczby odpowiedzi
    const total = sessionCards.length + wrongAnswers.length;
    const correct = correctAnswers.count;
    const incorrect = incorrectAnswers.count;
    const allIds = Object.keys(sessionAttempts);
    const unanswered = allIds.filter(id => sessionAttempts[id] === 0).length;
    summaryContent.innerHTML += `
        <li><strong>Poprawnych odpowiedzi:</strong> ${correct}</li>
        <li><strong>Niepoprawnych odpowiedzi:</strong> ${incorrect}</li>
        <li><strong>Nieodpowiedzianych:</strong> ${unanswered}</li>
    `;

    // Wykres
    if (chartInstance2) chartInstance2.destroy();
    if (chartInstance) chartInstance.destroy();
    const ctx2 = document.getElementById('resultsChart2').getContext('2d');
    chartInstance = new Chart(ctx2, {
        type: 'pie',
        data: {
            labels: ['Poprawne', 'Niepoprawne'],
            datasets: [{
                data: [correct, incorrect],
                backgroundColor: ['#4caf50', '#f44336'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: true },
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            const label = context.label || '';
                            const value = context.raw || 0;
                            return `${label}: ${value}`;
                        }
                    }
                }
            }
        }
    });

    // Szczegóły – ukryte na start
    document.getElementById('details-section').style.display = 'none';
    document.getElementById('show-details-btn').style.display = 'inline-block';

    // Obsługa przycisku "Zobacz szczegóły"
   document.getElementById('show-details-btn').onclick = function() {
    showSummaryDetails();
    document.getElementById('details-section').style.display = 'block';
    this.style.display = 'none';
};

    // Leaderboard
    fetchLeaderboard();
    document.getElementById('leaderboard-container').style.display = 'block';
}
const user = auth.currentUser;
if (user && !skipLeaderboard) {
    const playerName = user.displayName || "Anonim";
    const userRef = db.collection("users").doc(user.uid);
    const sessionSolved = correctAnswers.count + incorrectAnswers.count;
    const sessionCorrect = correctAnswers.count;

    db.runTransaction(async (transaction) => {
        const doc = await transaction.get(userRef);
        if (!doc.exists) {
            transaction.set(userRef, {
                uid: user.uid,
                username: playerName,
                totalSolved: sessionSolved,
                totalCorrect: sessionCorrect
            });
        } else {
            const data = doc.data();
            transaction.update(userRef, {
                totalSolved: (data.totalSolved || 0) + sessionSolved,
                totalCorrect: (data.totalCorrect || 0) + sessionCorrect
            });
        }
    });
}

function showSummaryDetails() {
    const detailsSection = document.getElementById('details-section');
    let html = '';

    // Zbierz ID fiszek z tej sesji
    const sessionCardIds = Object.keys(sessionAttempts).map(Number);

    // Przygotuj mapę: tura -> lista fiszek
    const roundMap = {};
    const wrongList = [];
    const unansweredList = [];

    // Ustal ile było tur (maksymalna liczba prób dla dowolnej fiszki)
    let maxRound = 1;
    sessionCardIds.forEach(cardId => {
        if (sessionAttempts[cardId] > maxRound) maxRound = sessionAttempts[cardId];
    });

    // Dla każdej fiszki ustal w której turze została odgadnięta (jeśli w ogóle)
    sessionCardIds.forEach(cardId => {
        const card = sessionCards.find(c => c.id === cardId) || wrongAnswers.find(c => c.id === cardId);
if (!card && typeof allFlashcards !== 'undefined') {
    // Spróbuj znaleźć w allFlashcards jeśli nie ma w sesji
    card = allFlashcards.find(c => c.id === cardId);
}
        if (!card) return;
        const attempts = sessionAttempts[cardId] || 0;

        const isStillWrong = wrongAnswers.some(wc => wc.id === cardId);
        let solvedRound = null;

        if (
            typeof answerRounds !== 'undefined' &&
            answerRounds[cardId] &&
            completedAnswers[cardId] === true &&
            !isStillWrong
        ) {
            solvedRound = answerRounds[cardId];
        }

        if (solvedRound) {
            if (!roundMap[solvedRound]) roundMap[solvedRound] = [];
            roundMap[solvedRound].push(card);
        } else if (isStillWrong || completedAnswers[cardId] === false) {
            wrongList.push(card);
        } else if (attempts === 0) {
            unansweredList.push(card);
        }
    });

    // Wyświetl podsumowanie wg tur
    for (let round = 1; round <= maxRound; round++) {
        if (roundMap[round] && roundMap[round].length > 0) {
            html += `<h3>Tura ${round} – odgadnięte:</h3><ul>`;
            roundMap[round].forEach(card => {
                const mainInfo = mode === 'eventToDate'
                    ? `<strong>${card.event}</strong> (${card.date})`
                    : `<strong>${card.date}</strong>: ${card.event}`;
                html += `<li style="color: ${round === 1 ? 'green' : 'lightgreen'};">${mainInfo}</li>`;
            });
            html += `</ul>`;
        }
    }

    // Niepoprawne (nieodpowiedziane w powtórce, a wcześniej niepoprawne)
    if (wrongList.length > 0) {
        html += `<h3>Niepoprawne:</h3><ul>`;
        wrongList.forEach(card => {
            const mainInfo = mode === 'eventToDate'
                ? `<strong>${card.event}</strong> (${card.date})`
                : `<strong>${card.date}</strong>: ${card.event}`;
            html += `<li style="color: orange;">${mainInfo}</li>`;
        });
        html += `</ul>`;
    }

    // Nieodpowiedziane (nigdy nie podjęto próby)
    if (unansweredList.length > 0) {
        html += `<h3>Nieodpowiedziane:</h3><ul>`;
        unansweredList.forEach(card => {
            const mainInfo = mode === 'eventToDate'
                ? `<strong>${card.event}</strong> (${card.date})`
                : `<strong>${card.date}</strong>: ${card.event}`;
            html += `<li style="color: gray;">${mainInfo}</li>`;
        });
        html += `</ul>`;
    }

    detailsSection.innerHTML = html;
}
    

function fetchLeaderboard() {
    db.collection("users")
      .orderBy("totalSolved", "desc")
      .orderBy("totalCorrect", "desc")
      .get()
      .then(querySnapshot => {
        const table = document.getElementById("leaderboard-table");
        table.innerHTML = "<tr><th>Gracz</th><th>Rozw.</th><th>% Popr.</th></tr>";
        querySnapshot.forEach(doc => {
          const entry = doc.data();
          const percent = entry.totalSolved > 0
            ? Math.round((entry.totalCorrect / entry.totalSolved) * 100)
            : 0;
          table.innerHTML += `
            <tr>
              <td><span class="gold-username">${entry.username || "Anonim"}</span></td>
              <td>${entry.totalSolved}</td>
              <td>${percent}%</td>
            </tr>
          `;
        });
      });
}
// ...existing code...


// SCHOWANIE FISZEK JAK DO MENU



function hideFlashcards() {
    // Ukrywa fiszki podczas powrotu do menu
    document.querySelector('.flashcards').style.display = 'none';
    }
function hideInput() {
    document.querySelector('.input-group').style.display = 'none';
}

function showInput() {
    document.querySelector('.input-group').style.display = 'block';
}



// SORTOWANIE FISZEK



function sortFlashcards(cards, sortOrder) {
    return cards.sort((a, b) => {
        // Parsowanie daty dla sortowania
        const dateA = parseDate(a.date);
        const dateB = parseDate(b.date);
        
        if (sortOrder === 'chronological') {
            return dateA - dateB;
        } else if (sortOrder === 'random') {
            return Math.random() - 0.5; // Losowe sortowanie
        }
    });
}



// OGARNIANIE DAT



function parseDate(date) {
    // Sprawdzenie, czy data jest przedziałem lat
    if (date.includes('-')) {
        const [startDate, endDate] = date.split('-').map(d => d.trim());
        return parseDate(startDate); // użyj daty początkowej jako reprezentatywnej
    }

    // Obsługa różnych zapisów "p.n.e."
    const pneRegex = /(p[\.\s]*n[\.\s]*e\.?)/i;

    if (pneRegex.test(date)) {
        return -parseInt(date.replace(pneRegex, '').trim());
    }

    return parseInt(date.trim());
}

function normalizeAnswer(text) {
    return text
        .toLowerCase()
        .replace(/p[\.\s]*n[\.\s]*e\.?/gi, 'pne') // ujednolica "p.n.e." do "pne"
        .replace(/\s+/g, '')                     // usuwa wszystkie spacje
        .trim();
}


// LOSOWE



function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}





    
    
    
    // JAKIS SHITPOST
    
    
    
    function showSection(sectionId) {
        // Ukryj wszystkie sekcje
        document.querySelectorAll('.flashcards, .summary').forEach(section => {
            section.style.display = 'none';
        });

        // Ukryj menu opcji zaawansowanych
        advancedOptionsMenu.classList.remove('visible');
        advancedOptionsMenu.classList.add('hidden');

        // Pokaż wybraną sekcję
        const sectionToShow = document.getElementById(sectionId);
        if (sectionToShow) {
            sectionToShow.style.display = 'block';
        }
    }












// POKAZ ODPOWIEDZ



function showAnswer() {
    const flashcard = sessionCards[currentCardIndex];
    let correctAnswer = '';

    if (mode === 'eventToDate') {
        correctAnswer = flashcard.date;
    } else {
        correctAnswer = flashcard.event;
    }
    hideButtons();

    document.getElementById('flashcardContent').style.opacity = 1; // Upewnij się, że zawartość pytania jest widoczna
    document.getElementById('flashcardContent').innerHTML += `<p class="incorrect">Poprawna odpowiedź to: ${correctAnswer}</p>`;
    wrongAnswers.push(flashcard);  // Dodaj do listy do powtórzenia
    sessionCards.splice(currentCardIndex, 1);  // Usuń z głównej listy
    setTimeout(showNextCard, 1000);  // Od razu wyświetl kolejne pytanie
}


// POWTORZ BLEDNE ODPOWIEDZI


function retryWrongAnswers() {
    // Jeśli nie ma błędnych odpowiedzi, nie rób nic
    if (!wrongAnswers || wrongAnswers.length === 0) {
        alert("Nie ma fiszek do powtórzenia!");
        return;
    }

    // Przygotuj nową sesję tylko z błędnymi fiszkami
    sessionCards = wrongAnswers.slice(); // kopiuj tablicę!
    currentCardIndex = 0;
    solvedThisRound = 0;

    // Reset prób i odpowiedzi
    sessionAttempts = {};
    completedAnswers = {};
    sessionCards.forEach(card => {
        sessionAttempts[card.id] = 0;
    });

    // Reset liczników
    correctAnswers.count = 0;
    incorrectAnswers.count = 0;
    if (chartInstance) {
        chartInstance.destroy();
        chartInstance = null;
    }
    initializeChart();
    initializeProgressBar();
    startTimer();
    currentRound = 0;
    updateRoundInfo();

    // Ukryj podsumowanie, pokaż fiszki
    document.querySelectorAll('.summary').forEach(el => el.style.display = 'none');
    document.querySelector('.flashcards').style.display = 'block';
    showInput();
    showNextCard();
}




// JESZCZE RAZ



function resetSession() {
    // Zresetowanie zmiennych globalnych
    currentRound = 1; 
    currentCardIndex = 0; 
    mode = ''; 
    wrongAnswers = []; 
    sessionCards = []; 
    sessionAttempts = {}; 
    groupFilter = 'all'; 
    eraFilters = []; 
    sortOrder = 'chronological'; 
    completedAnswers = {};
    countryFilters = [];
    difficultyFilters = [];

    // Reset zmiennych odpowiedzi
    correctAnswers.count = 0; 
    incorrectAnswers.count = 0; 

    // Reset timera
    stopTimer(); 
    const timerDisplay = document.getElementById('live-timer');
    if (timerDisplay) {
        timerDisplay.textContent = 'Czas: 00:00';
    }

    // Reset paska postępu
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    if (progressBar) {
        progressBar.style.width = '0%';
    }
    if (progressText) {
        progressText.textContent = '0/0';
    }

    // Reset wykresu
    if (chartInstance) {
        chartInstance.destroy(); // Zniszczenie istniejącego wykresu
        chartInstance = null; // Usunięcie referencji
    }
 // Czyszczenie widoku fiszek
    const flashcardContent = document.getElementById('flashcardContent');
    if (flashcardContent) {
        flashcardContent.innerHTML = ''; // Wyczyść treść fiszki
    }
    // Re-inicjalizacja wykresu z pustymi danymi
    initializeChart();
    console.log('Zresetowano wszystkie dane sesji, w tym wykres, pasek, licznik czasu oraz odpowiedzi.');
}





// POWROT DO MENU


function returnToMenu() {
    // Ukryj wszystkie sekcje główne
    document.querySelectorAll('.menu-main').forEach(el => el.style.display = 'none');
    document.querySelector('.flashcards').style.display = 'none';
    document.querySelectorAll('.summary').forEach(el => el.style.display = 'none');
    document.querySelectorAll('.t2').forEach(el => el.style.display = 'none');
    document.getElementById('chronology-settings').style.display = 'none';
    document.getElementById('tryb2-game').style.display = 'none';
    document.getElementById('chronology-summary').style.display = 'none';
    
    // Pokaż całe menu wyboru trybu (nagłówek + przyciski)
    document.querySelector('.menutryb').style.display = 'block';
    document.getElementById('mode-select').style.display = 'flex'; // <-- DODAJ TO!
    document.querySelector('.diva').style.display = 'block'; // <-- DODAJ TO!
    // Resetuj sesję
    resetSession();
}
function hideAllMainSections() {
    document.querySelectorAll('.menu-main').forEach(el => el.style.display = 'none');
    document.querySelector('.flashcards').style.display = 'none';
    document.querySelectorAll('.summary').forEach(el => el.style.display = 'none');
    document.getElementById('leaderboard-container').style.display = 'none';
    document.getElementById('chronology-settings').style.display = 'none';
    document.getElementById('tryb2-game').style.display = 'none';
    document.getElementById('chronology-summary').style.display = 'none';
}



