const flashcards = [
    { id: 1, event: "Unia Lubelska", date: "1569", era: "[xvi]", area: ["pl"], type: "po" },
    { id: 2, event: "Upadek Cesarstwa Zachodniorzymskiego", date: "476", era: "[st]", area: ["it"], type: "in" },
    { id: 3, event: "Bitwa pod Warną", date: "1444", era: "[sm]", area: ["pl", "tu"], type: "bi" },
    { id: 4, event: "III rozbiór Polski", date: "1795", era: "[xix]", area: ["pl", "ru", "at"], type: "po" },
    { id: 5, event: "Konfederacja Targowicka", date: "1792", era: "[xix]", area: ["pl"], type: "po" },
    { id: 6, event: "Powstanie USA", date: "1776", era: "[xviii]", area: ["us"], type: "in" },
    { id: 7, event: "Uchwalenie Wielkiej Karty Swobód", date: "1215", era: "[sm]", area: ["an"], type: "in" },
    { id: 8, event: "Bitwa pod Maratonem", date: "490 p.n.e", era: "[st]", area: ["gr"], type: "bi" },
    { id: 9, event: "Traktat w Verdun", date: "843", era: "[sm]", area: ["fr","de"], type: "po" },
    { id: 10, event: "Bitwa pod Termopilami", date: "480 p.n.e", era: "[st]", area: ["gr"], type: "bi" },
    { id: 11, event: "Cud Domu Brandenburskiego", date: "1762", era: "[xviii]", area: ["de"], type: "in" },
    { id: 12, event: "Bitwa pod Quebekiem", date: "1759", era: "[xviii]", area: ["uk"], type: "bi" },
    { id: 13, event: "Wydanie Sankcji Pragmatycznej", date: "1713", era: "[xviii]", area: ["at"], type: "in" },
    { id: 14, event: "Herbatka Bostońska", date: "1773", era: "[xviii]", area: ["us"], type: "in" },
    { id: 15, event: "Rewolucja Francuska", date: "1789-1799", era: "[xix]", area: ["fr"], type: "in" },
    { id: 16, event: "Wynalezienie Termometru Celsjusza", date: "1742", era: "[xviii]", area: ["se"], type: "na" },
    { id: 17, event: "Wyprawy Bougainville'a", date: "1766-1769", era: "[xviii]", area: ["fr"], type: "na" },
    { id: 18, event: "Rozwiązanie zakonu jezuitów", date: "1773", era: "[xviii]", area: ["it","pk"], type: "in" },
    { id: 19, event: "Powstanie Wielkiej Brytanii", date: "1707", era: "[xviii]", area: ["uk"], type: "po" },
    { id: 20, event: "Panowanie Piotra I Wielkiego", date: "1682-1725", era: "[xvii]", area: ["ru"], type: "pa" },
    { id: 21, event: "Wielka Wojna Północna", date: "1700-1721", era: "[xviii]", area: ["se","ru","de"], type: "bi" },
    { id: 22, event: "Panowanie Fryderyka Wilhelma Wielkiego Elektora", date: "1640-1688", era: "[xvii]", area: ["de"], type: "pa" },
    { id: 23, event: "Panowanie Fryderyka I", date: "1688-1713", era: "[xvii]", area: ["de"], type: "pa" },
    { id: 24, event: "Panowanie Fryderyka I Wilhelma", date: "1713-1740", era: "[xviii]", area: ["de"], type: "pa" },
    { id: 25, event: "Panowanie Fryderyka II Wielkiego", date: "1740-1786", era: "[xviii]", area: ["de"], type: "pa" },
    { id: 26, event: "Zdobycie Śląska przez Prusy", date: "1740", era: "[xviii]", area: ["de","at"], type: "bi" },
    { id: 27, event: "Wojna Siedmioletnia", date: "1756-1763", era: "[xviii]", area: ["de","fr","uk"], type: "bi" },
    { id: 28, event: "Bitwa pod Kunowicami", date: "1759", era: "[xviii]", area: ["de","at","ru"], type: "bi" },
    { id: 29, event: "Wojna o sukcesję austriacką", date: "1740-1748", era: "[xviii]", area: ["de","at"], type: "bi" },
    { id: 30, event: "Rządy Józefa II", date: "1780-1790", era: "[xix]", area: ["at"], type: "pa" },
    { id: 31, event: "Wojna o sukcesję hiszpańską", date: "1701-1714", era: "[xviii]", area: ["es","fr","at"], type: "bi" },
    { id: 32, event: "Wojna o sukcesję polską", date: "1733-1735", era: "[xviii]", area: ["pl","fr","ru"], type: "bi" },
    { id: 33, event: "I kongres terytorialny", date: "1774", era: "[xviii]", area: ["us"], type: "in" },
    { id: 34, event: "II kongres terytorialny", date: "1775", era: "[xviii]", area: ["us"], type: "in" },
    { id: 35, event: "Wojna o niepodległość USA", date: "1775-1783", era: "[xviii]", area: ["us"], type: "bi" },
    { id: 36, event: "Bitwa pod Lexington", date: "1775", era: "[xviii]", area: ["us"], type: "bi" },
    { id: 37, event: "Bitwa pod Yorktown", date: "1781", era: "[xviii]", area: ["us"], type: "bi" },
    { id: 38, event: "Pokój w Wersalu", date: "1783", era: "[xviii]", area: ["us"], type: "po" },
    { id: 39, event: "Uchwalenie Konstytucji USA", date: "1787", era: "[xviii]", area: ["us"], type: "in" },
    { id: 40, event: "Podwójna Elekcja Ludwika Conti i Fryderyka Augusta Wettina (Augusta II)", date: "1697", era: "[xvii]", area: ["pl"], type: "pa" },
    { id: 41, event: "Unia polsko-saska", date: "1697-1763", era: "[xvii]", area: ["pl", "de"], type: "po" },
    { id: 42, event: "Konfederacje: warszawska i sandomierska", date: "1704", era: "[xviii]", area: ["pl"], type: "po" },
    { id: 43, event: "Abdykacja Augusta II po wkroczeniu wojsk szwedzkich do Saksonii", date: "1706", era: "[xviii]", area: ["pl", "de", "se"], type: "po" },
    { id: 44, event: "Konfederacja tarnogrodzka", date: "1715", era: "[xviii]", area: ["pl"], type: "po" },
    { id: 45, event: "Sejm Niemy", date: "1717", era: "[xviii]", area: ["pl"], type: "po" },
    { id: 46, event: "Odebranie praw dysydentom", date: "1733", era: "[xviii]", area: ["pl"], type: "po" },
    { id: 47, event: "Panowanie Augusta II Mocnego", date: "1697-1733", era: "[xvii]", area: ["pl"], type: "pa" },
    { id: 48, event: "Panowanie Augusta III", date: "1733-1764", era: "[xviii]", area: ["pl"], type: "pa" },
    { id: 49, event: "Sejm pacyfikacyjny uznający Augusta III jedynym legalnym władcą polski", date: "1736", era: "[xviii]", area: ["pl"], type: "po" },
    { id: 50, event: "Stanisław Leszczyński wydaje 'Głos Wolny Wolność Ubezpieczający'", date: "?", era: "[xviii]", area: ["pl"], type: "in" },
    { id: 51, event: "Założenie Collegium Nobilium przez Stanisława Konarskiego", date: "1740", era: "[xviii]", area: ["pl"], type: "na" },
    { id: 52, event: "Otwarcie Biblioteki Załuskich", date: "1747", era: "[xviii]", area: ["pl"], type: "na" },
    { id: 53, event: "Panowanie Stanisława Augusta Poniatowskiego", date: "1764-1795", era: "[xix]", area: ["pl"], type: "pa" },
    { id: 54, event: "Powstanie Szkoły Rycerskiej", date: "1765", era: "[xix]", area: ["pl"], type: "na" },
    { id: 55, event: "Powstanie Komisji Edukacji Narodowej", date: "1773", era: "[xix]", area: ["pl"], type: "na" },
    { id: 56, event: "Sejm Repninowski", date: "1767", era: "[xix]", area: ["pl"], type: "po" },
    { id: 57, event: "Uchwalenie praw kardynalnych, przywrócenie praw dysydentom", date: "1768", era: "[xix]", area: ["pl"], type: "po" },
    { id: 58, event: "Konfederacja Barska", date: "1768-1772", era: "[xix]", area: ["pl"], type: "po" },
    { id: 59, event: "I rozbiór Rzeczypospolitej", date: "1772", era: "[xix]", area: ["pl", "ru", "at"], type: "po" },
    { id: 60, event: "I Sejm rozbiorowy", date: "1773-1775", era: "[xix]", area: ["pl"], type: "po" },
    { id: 61, event: "Rządy królewsko-ambasadorskie", date: "1772-1788", era: "[xix]", area: ["pl"], type: "pa" },
    { id: 62, event: "Sejm Wielki", date: "1788-1792", era: "[xix]", area: ["pl"], type: "po" },
    { id: 63, event: "Uchwalenie ustaw: o sejmikach i o miastach królewskich", date: "1789", era: "[xix]", area: ["pl"], type: "po" },
    { id: 64, event: "Czarna Procesja", date: "1789", era: "[xix]", area: ["pl"], type: "po" },
    { id: 65, event: "II rozbiór Rzeczypospolitej", date: "1793", era: "[xix]", area: ["pl", "ru", "at"], type: "po" },
    { id: 66, event: "Powstanie Kościuszkowskie", date: "1794", era: "[xix]", area: ["pl"], type: "bi" }
];




let currentCardIndex = 0;
let mode = '';  // 'eventToDate' lub 'dateToEvent'
let wrongAnswers = [];
let sessionCards = [];
let sessionAttempts = {}; // Obiekt do śledzenia prób dla każdej fiszki
let groupFilter = 'all'; // 'all', 'pl', 'world'
let eraFilters = []; // Tablica epok
let sortOrder = 'chronological';  // 'chronological' lub 'random'

// Wyświetl menu na początku
document.querySelector('.menu').style.display = 'block';

function startFlashcards(selectedMode) {
    mode = selectedMode;
    groupFilter = document.querySelector('input[name="group"]:checked').value;
    

    // Zaktualizowany kod do formatowania filtrów epok
    eraFilters = Array.from(document.querySelectorAll('input[name="era"]:checked')).map(cb => `[${cb.value}]`);

    console.log("Selected Mode:", mode);
    console.log("Group Filter:", groupFilter);
    console.log("Era Filters:", eraFilters);

    sortMode = document.querySelector('input[name="sort"]:checked').value;
    currentCardIndex = 0;
    wrongAnswers = [];
    sessionCards = getFilteredFlashcards();  
    sessionAttempts = {};

    console.log("Session Cards Before Sorting:", sessionCards);

    sessionCards = sortFlashcards(sessionCards, sortMode);

    console.log("Session Cards After Sorting:", sessionCards);

    sessionCards.forEach(card => {
        sessionAttempts[card.id] = 0;
    });

    if (sortMode === 'random') {
        shuffleArray(sessionCards); 
    }
    
    document.querySelector('.menu').style.display = 'none';
    document.querySelector('.flashcards').style.display = 'block';
    document.querySelector('.summary').style.display = 'none'; // Ukryj podsumowanie
    document.getElementById('advancedOptionsMenu').classList.add('hidden');
    document.getElementById('advancedOptionsButton').classList.add('hidden');
    showInput();
    showButtons();

    showNextCard();
}

function getFilteredFlashcards() {
    console.log("Group Filter:", groupFilter);
    console.log("Era Filters:", eraFilters);

    const countryFilter = document.querySelector('input[name="country"]:checked')?.value || 'all';
    
    // Pobieranie wybranych typów fiszek
    const selectedTypes = Array.from(document.querySelectorAll('input[name="type"]:checked')).map(cb => cb.value);

    const filteredCards = flashcards.filter(card => {
        // Sprawdzanie dopasowania grupy
        const groupMatch = groupFilter === 'all' || 
            (groupFilter === 'pl' && card.area.includes('pl')) || 
            (groupFilter === 'world' && !card.area.includes('pl'));

        // Sprawdzanie dopasowania epoki
        const eraMatch = eraFilters.length === 0 || eraFilters.includes(card.era);

        // Sprawdzanie dopasowania kraju
        const countryMatch = countryFilter === 'all' || card.area.includes(countryFilter);

        // Sprawdzanie dopasowania typu
        const typeMatch = selectedTypes.length === 0 || selectedTypes.includes(card.type);

        // Zwracanie dopasowanych fiszek
        return groupMatch && eraMatch && countryMatch && typeMatch;
    });

    console.log("Filtered Cards:", filteredCards);
    return filteredCards;
}




function toggleAdvancedOptions() {
    const advancedOptionsMenu = document.getElementById('advancedOptionsMenu');
    advancedOptionsMenu.classList.toggle('hidden');
}


function showNextCard() {
    hideButtons();
    hideInput();
    document.getElementById('flashcardContent').style.opacity = 0; // Ukryj zawartość pytania

    if (currentCardIndex < sessionCards.length) {
        const flashcard = sessionCards[currentCardIndex];
        sessionAttempts[flashcard.id] += 1;  // Zwiększ liczbę prób

        if (mode === 'eventToDate') {
            document.getElementById('flashcardContent').innerHTML = `<p><strong>Wydarzenie:</strong> ${flashcard.event}</p>`;
        } else {
            document.getElementById('flashcardContent').innerHTML = `<p><strong>Data:</strong> ${flashcard.date}</p>`;
        }

        // Ustawienie opóźnienia dla ukrycia i pokazania elementów
        setTimeout(() => {
            document.getElementById('flashcardContent').style.opacity = 1; // Upewnij się, że zawartość pytania jest widoczna
            showInput();
            showButtons();
        }, 100); // Opóźnienie 100 ms dla płynności
    } else if (wrongAnswers.length > 0) {
        sessionCards = [...wrongAnswers];  // Przepisz tylko błędne odpowiedzi
        wrongAnswers = [];
        currentCardIndex = 0;
        showNextCard();
    } else {
        showSummary();
    }
}

function checkAnswer() {
    const userInput = document.getElementById('userInput').value.trim();
    const flashcard = sessionCards[currentCardIndex];
    let correctAnswer = '';

    if (mode === 'eventToDate') {
        correctAnswer = flashcard.date;
    } else {
        correctAnswer = flashcard.event;
    }

    hideInput();
    hideButtons();

    document.getElementById('flashcardContent').style.opacity = 1; // Upewnij się, że zawartość pytania jest widoczna

    if (userInput.toLowerCase() === correctAnswer.toLowerCase()) {
        document.getElementById('flashcardContent').innerHTML += `<p class="correct">Poprawnie!</p>`;
        sessionCards.splice(currentCardIndex, 1);  // Usuń poprawnie rozwiązane fiszki z listy
    } else {
        document.getElementById('flashcardContent').innerHTML += `<p class="incorrect">Błąd! Poprawna odpowiedź to: ${correctAnswer}</p>`;
        wrongAnswers.push(flashcard);  // Dodaj do listy do powtórzenia
        sessionCards.splice(currentCardIndex, 1);  // Usuń z głównej listy
    }

    // Opóźnienie, aby komunikat o poprawności się pojawił
    setTimeout(showNextCard, 1000);  // Poczekaj 1 sekunde i wyświetl kolejne pytanie

    // Wyczyść pole odpowiedzi
    document.getElementById('userInput').value = '';
}
function returnToMenu() {
    document.querySelector('.summary').style.display = 'none';
    document.querySelector('.menu').style.display = 'block';
    document.querySelector('.flashcards').style.display = 'none'; // Ukryj fiszki
    document.getElementById('advancedOptionsMenu').classList.add('hidden');
    document.getElementById('advancedOptionsButton').classList.add('hidden');
}

    
function hideFlashcards() {
    // Ukrywa fiszki podczas powrotu do menu
    document.querySelector('.flashcards').style.display = 'none';
    }
function repeatAll() {
    document.querySelector('.summary').style.display = 'none';
    startFlashcards(mode);
}

function repeatIncorrect() {
    // Filtruj tylko fiszki, które zostały odpowiedziane błędnie (próby >1)
    const incorrectCards = flashcards.filter(card => sessionAttempts[card.id] > 1);
    
    if (incorrectCards.length > 0) {
        sessionCards = [...incorrectCards];
        currentCardIndex = 0;
        document.querySelector('.summary').style.display = 'none';
        document.querySelector('.flashcards').style.display = 'block';
        showNextCard();
    } else {
        alert("Nie masz żadnych fiszek do powtórzenia!");
        returnToMenu();
    }
}

function hideButtons() {
    document.querySelectorAll('.flashcards .button').forEach(button => button.style.display = 'none');
}

function showButtons() {
    document.querySelectorAll('.flashcards .button').forEach(button => button.style.display = 'inline-block');
}

function hideInput() {
    document.querySelector('.input-group').style.display = 'none';
}

function showInput() {
    document.querySelector('.input-group').style.display = 'block';
}
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
// Funkcja do przekształcania dat w liczby (pomocna do sortowania)
function parseDate(date) {
    // Sprawdzenie, czy data jest przedziałem lat
    if (date.includes('-')) {
        const [startDate, endDate] = date.split('-').map(d => d.trim());

        // Obsługa przedziałów dat, gdzie mogą być daty p.n.e.
        const parsedStartDate = parseDate(startDate); // Rekursywne wywołanie dla pierwszej daty
        const parsedEndDate = parseDate(endDate);     // Rekursywne wywołanie dla drugiej daty

        // Zwróć pierwszą datę jako reprezentatywną (możesz to zmienić, zależnie od logiki sortowania)
        return parsedStartDate;
    }

    // Obsługuje daty p.n.e.
    if (date.includes("p.n.e")) {
        return -parseInt(date.replace("p.n.e", "").trim());
    }

    // Zwracaj datę jako liczbę (dla dat n.e.)
    return parseInt(date.trim());
}

// Funkcja do losowego sortowania tablicy (Fisher-Yates Shuffle)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

document.addEventListener('DOMContentLoaded', function() {
    const advancedOptionsButton = document.getElementById('advancedOptionsButton');
    const advancedOptionsMenu = document.getElementById('advancedOptionsMenu');

    // Funkcja do obsługi rozwijania i zwijania menu zaawansowanych opcji
    advancedOptionsButton.addEventListener('click', function() {
        if (advancedOptionsMenu.classList.contains('hidden')) {
            advancedOptionsMenu.classList.remove('hidden');
            advancedOptionsMenu.classList.add('visible');
        } else {
            advancedOptionsMenu.classList.remove('visible');
            advancedOptionsMenu.classList.add('hidden');
        }
    });

    // Funkcja do wyświetlania odpowiednich sekcji
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

    // Przykładowe wywołanie funkcji do pokazania sekcji 'flashcards'
    document.querySelector('.menu button[onclick*="startFlashcards"]').addEventListener('click', function() {
        showSection('flashcards');
    });

    // Dodaj odpowiednie wywołania dla innych przycisków
    document.querySelectorAll('.summary .button').forEach(button => {
        button.addEventListener('click', function() {
            showSection('summary');
        });
    });
});




// Dodajemy nasłuchiwacz zdarzeń dla przycisku domku
document.getElementById('homeButton').addEventListener('click', returnToMenu);

// Nasłuchiwacz zdarzeń dla klawisza Esc
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        returnToMenu();
    }
});

// Nasłuchiwacz zdarzeń dla klawisza Enter
document.getElementById('userInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault(); // Zapobiega domyślnemu działaniu klawisza Enter
        checkAnswer();
    }
});


function showAnswer() {
    const flashcard = sessionCards[currentCardIndex];
    let correctAnswer = '';

    if (mode === 'eventToDate') {
        correctAnswer = flashcard.date;
    } else {
        correctAnswer = flashcard.event;
    }

    hideInput();
    hideButtons();

    document.getElementById('flashcardContent').style.opacity = 1; // Upewnij się, że zawartość pytania jest widoczna
    document.getElementById('flashcardContent').innerHTML += `<p class="incorrect">Poprawna odpowiedź to: ${correctAnswer}</p>`;
    wrongAnswers.push(flashcard);  // Dodaj do listy do powtórzenia
    sessionCards.splice(currentCardIndex, 1);  // Usuń z głównej listy
    setTimeout(showNextCard, 1000);  // Od razu wyświetl kolejne pytanie
}

function showSummary() { // Początek funkcji
    hideInput(); // Ukrywa pole wejściowe
    hideButtons(); // Ukrywa przyciski

    document.querySelector('.flashcards').style.display = 'none'; // Ukrywa sekcję fiszek
    document.querySelector('.summary').style.display = 'block'; // Wyświetla sekcję podsumowania
    
    const summaryContent = document.getElementById('summaryContent'); // Pobiera element dla podsumowania
    summaryContent.innerHTML = '<ul>'; // Rozpoczyna listę w HTML

    // Iteracja przez fiszki w sesji
    flashcards.forEach(card => { // Rozpoczyna iterację
        if (sessionAttempts[card.id] > 0) {  // Sprawdza, czy fiszka była częścią sesji
            let correctAnswer = '';
            if (mode === 'eventToDate') { // Jeśli tryb to 'eventToDate'
                correctAnswer = card.date;
                summaryContent.innerHTML += `<li>${card.event}: <strong>${correctAnswer}</strong>. Udało się za <strong><span style="color: green;">${sessionAttempts[card.id] === 1 ? 'pierwszym' : `${sessionAttempts[card.id]} razem`}</span></strong>.</li>`;
            } else { // W przeciwnym razie
                correctAnswer = card.event;
                summaryContent.innerHTML += `<li>${card.date}: <strong>${correctAnswer}</strong>. Udało się za <strong><span style="color: green;">${sessionAttempts[card.id] === 1 ? 'pierwszym' : `${sessionAttempts[card.id]} razem`}</span></strong>.</li>`;
            }
        }
    }); // Kończy iterację

    summaryContent.innerHTML += '</ul>'; // Kończy listę
} // Koniec funkcji
