const flashcards = [
    { id: 1, event: "Unia Lubelska", date: "1569", era: "[xvi]", area: ["pl"], type: "po", dif: "1"},
    { id: 2, event: "Upadek Cesarstwa Zachodniorzymskiego", date: "476", era: "[st]", area: ["it"], type: "po", dif: "1" },
    { id: 3, event: "Bitwa pod Warną", date: "1444", era: "[sm]", area: ["pl", "tu", "hu"], type: "wo", dif: "1" },
    { id: 4, event: "III rozbiór Polski", date: "1795", era: "[xviii]", area: ["pl", "ru", "at"], type: "po", dif: "1" },
    { id: 5, event: "Konfederacja Targowicka", date: "1792", era: "[xviii]", area: ["pl"], type: "po", dif: "1" },
    { id: 6, event: "Powstanie USA", date: "1776", era: "[xviii]", area: ["us"], type: "po", dif: "1" },
    { id: 7, event: "Uchwalenie Wielkiej Karty Swobód", date: "1215", era: "[sm]", area: ["uk"], type: "po", dif: "2" },
    { id: 8, event: "Bitwa pod Maratonem", date: "490 p.n.e", era: "[st]", area: ["gr"], type: "wo", dif: "1" },
    { id: 9, event: "Traktat w Verdun", date: "843", era: "[sm]", area: ["fr","de"], type: "po", dif: "1" },
    { id: 10, event: "Bitwa pod Termopilami i Salaminą", date: "480 p.n.e", era: "[st]", area: ["gr"], type: "wo", dif: "1" },
    { id: 11, event: "Cud Domu Brandenburskiego", date: "1762", era: "[xviii]", area: ["de"], type: "po", dif: "2" },
    { id: 12, event: "Bitwa pod Quebekiem", date: "1760", era: "[xviii]", area: ["uk"], type: "wo" , dif: "3"},
    { id: 13, event: "Wydanie Sankcji Pragmatycznej", date: "1713", era: "[xviii]", area: ["at"], type: "po", dif: "2"},
    { id: 14, event: "Herbatka Bostońska", date: "1773", era: "[xviii]", area: ["us"], type: "po", dif: "1" },
    { id: 15, event: "Rewolucja Francuska", date: "1789-1799", era: "[xix]", area: ["fr"], type: "wo", dif: "1"},
    { id: 16, event: "Wynalezienie Termometru Celsjusza", date: "1742", era: "[xviii]", area: ["se"], type: "sk", dif: "3" },
    { id: 17, event: "Wyprawy Bougainville'a", date: "1766-1769", era: "[xviii]", area: ["fr"], type: "sk", dif: "3" },
    { id: 18, event: "Rozwiązanie zakonu jezuitów", date: "1773", era: "[xviii]", area: ["it","ko"], type: "po" , dif: "2"},
    { id: 19, event: "Powstanie Wielkiej Brytanii", date: "1707", era: "[xviii]", area: ["uk"], type: "po" , dif: "2"},
    { id: 20, event: "Panowanie Piotra I Wielkiego", date: "1682-1725", era: "[xvii]", area: ["ru"], type: "pa" , dif: "3"},
    { id: 21, event: "Wielka Wojna Północna", date: "1700-1721", era: "[xviii]", area: ["se","ru","de"], type: "wo" , dif: "2"},
    { id: 22, event: "Panowanie Fryderyka Wilhelma Wielkiego Elektora", date: "1640-1688", era: "[xvii]", area: ["de"], type: "pa" , dif: "4"},
    { id: 23, event: "Panowanie Fryderyka I", date: "1688-1713", era: "[xvii]", area: ["de"], type: "pa", dif: "3" },
    { id: 24, event: "Panowanie Fryderyka I Wilhelma", date: "1713-1740", era: "[xviii]", area: ["de"], type: "pa", dif: "2" },
    { id: 25, event: "Panowanie Fryderyka II Wielkiego", date: "1740-1786", era: "[xviii]", area: ["de"], type: "pa", dif: "2" },
    { id: 26, event: "Zdobycie Śląska przez Prusy", date: "1740", era: "[xviii]", area: ["de","at"], type: "wo", dif: "2" },
    { id: 27, event: "Wojna Siedmioletnia", date: "1756-1763", era: "[xviii]", area: ["de","fr","uk"], type: "wo", dif: "1" },
    { id: 28, event: "Bitwa pod Kunowicami", date: "1759", era: "[xviii]", area: ["de","at","ru"], type: "wo", dif: "2" },
    { id: 29, event: "Wojna o sukcesję austriacką", date: "1740-1748", era: "[xviii]", area: ["de","at"], type: "wo" , dif: "2"},
    { id: 30, event: "Panowanie Józefa II", date: "1780-1790", era: "[xix]", area: ["at"], type: "pa" , dif: "2"},
    { id: 31, event: "Wojna o sukcesję hiszpańską", date: "1701-1714", era: "[xviii]", area: ["es","fr","at"], type: "wo" , dif: "2"},
    { id: 32, event: "Wojna o sukcesję polską", date: "1733-1735", era: "[xviii]", area: ["pl","fr","ru"], type: "wo", dif: "2" },
    { id: 33, event: "I kongres terytorialny", date: "1774", era: "[xviii]", area: ["us"], type: "po", dif: "2" },
    { id: 34, event: "II kongres terytorialny", date: "1775", era: "[xviii]", area: ["us"], type: "po" , dif: "1"},
    { id: 35, event: "Wojna o niepodległość USA", date: "1775-1783", era: "[xviii]", area: ["us"], type: "wo", dif: "1" },
    { id: 36, event: "Bitwa pod Lexington", date: "1775", era: "[xviii]", area: ["us"], type: "wo", dif: "2" },
    { id: 37, event: "Bitwa pod Yorktown", date: "1781", era: "[xviii]", area: ["us"], type: "wo", dif: "2" },
    { id: 38, event: "Pokój w Wersalu", date: "1783", era: "[xviii]", area: ["us"], type: "po", dif: "1" },
    { id: 39, event: "Uchwalenie Konstytucji USA", date: "1787", era: "[xviii]", area: ["us"], type: "po", dif: "1" },
    { id: 40, event: "Podwójna Elekcja Ludwika Conti i Fryderyka Augusta Wettina (Augusta II)", date: "1697", era: "[xvii]", area: ["pl"], type: "po", dif: "2" },
    { id: 41, event: "Unia polsko-saska", date: "1697-1763", era: "[xviii]", area: ["pl", "de"], type: "po", dif: "3" },
    { id: 42, event: "Konfederacje: warszawska i sandomierska", date: "1704", era: "[xviii]", area: ["pl"], type: "po", dif: "2" },
    { id: 43, event: "Abdykacja Augusta II po wkroczeniu wojsk szwedzkich do Saksonii", date: "1706", era: "[xviii]", area: ["pl", "de", "se"], type: "po", dif: "2" },
    { id: 44, event: "Konfederacja tarnogrodzka", date: "1715", era: "[xviii]", area: ["pl"], type: "po", dif: "2" },
    { id: 45, event: "Sejm Niemy", date: "1717", era: "[xviii]", area: ["pl"], type: "po", dif: "1" },
    { id: 46, event: "Odebranie praw dysydentom", date: "1733", era: "[xviii]", area: ["pl"], type: "po", dif: "3" },
    { id: 47, event: "Panowanie Augusta II Mocnego", date: "1697-1733", era: "[xviii]", area: ["pl"], type: "pa", dif: "3" },
    { id: 48, event: "Panowanie Augusta III", date: "1733-1764", era: "[xviii]", area: ["pl"], type: "pa", dif: "3" },
    { id: 49, event: "Sejm pacyfikacyjny uznający Augusta III jedynym legalnym władcą polski", date: "1736", era: "[xviii]", area: ["pl"], type: "po", dif: "2" },
    { id: 50, event: "Stanisław Leszczyński wydaje 'Głos Wolny Wolność Ubezpieczający'", date: "1743", era: "[xviii]", area: ["pl"], type: "sk", dif: "3" },
    { id: 51, event: "Założenie Collegium Nobilium przez Stanisława Konarskiego", date: "1740", era: "[xviii]", area: ["pl"], type: "sk", dif: "3" },
    { id: 52, event: "Otwarcie Biblioteki Załuskich", date: "1747", era: "[xviii]", area: ["pl"], type: "sk", dif: "3" },
    { id: 53, event: "Panowanie Stanisława Augusta Poniatowskiego", date: "1764-1795", era: "[xviii]", area: ["pl"], type: "pa", dif: "2" },
    { id: 54, event: "Powstanie Szkoły Rycerskiej", date: "1765", era: "[xviii]", area: ["pl"], type: "sk", dif: "2" },
    { id: 55, event: "Powstanie Komisji Edukacji Narodowej", date: "1773", era: "[xviii]", area: ["pl"], type: "sk", dif: "1" },
    { id: 56, event: "Sejm Repninowski", date: "1767", era: "[xviii]", area: ["pl"], type: "po" , dif: "1"},
    { id: 57, event: "Uchwalenie praw kardynalnych, przywrócenie praw dysydentom", date: "1768", era: "[xviii]", area: ["pl"], type: "po", dif: "2" },
    { id: 58, event: "Konfederacja Barska", date: "1768-1772", era: "[xviii]", area: ["pl"], type: "wo", dif: "1" },
    { id: 59, event: "I rozbiór Rzeczypospolitej", date: "1772", era: "[xviii]", area: ["pl", "ru", "at"], type: "po", dif: "1" },
    { id: 60, event: "I Sejm rozbiorowy", date: "1773-1775", era: "[xviii]", area: ["pl"], type: "po", dif: "2" },
    { id: 61, event: "Rządy królewsko-ambasadorskie", date: "1772-1788", era: "[xviii]", area: ["pl"], type: "po", dif: "2" },
    { id: 62, event: "Sejm Wielki", date: "1788-1792", era: "[xviii]", area: ["pl"], type: "po" , dif: "1"},
    { id: 63, event: "Uchwalenie ustaw: o sejmikach i o miastach królewskich", date: "1789", era: "[xviii]", area: ["pl"], type: "po", dif: "2" },
    { id: 64, event: "Czarna Procesja", date: "1789", era: "[xviii]", area: ["pl"], type: "po", dif: "2" },
    { id: 65, event: "II rozbiór Rzeczypospolitej", date: "1793", era: "[xviii]", area: ["pl", "ru", "at"], type: "po", dif: "1" },
    { id: 66, event: "Powstanie Kościuszkowskie", date: "1794", era: "[xviii]", area: ["pl"], type: "wo", dif: "1" },
    { id: 67, event: "Ogłoszenie doktryny Monroego", date: "1823", era: "[xix]", area: ["us"], type: "po", dif: "2" },
    { id: 68, event: "Powstanie dekabrystów w Rosji", date: "1825", era: "[xix]", area: ["ru"], type: "wo", dif: "2" },
    { id: 69, event: "Uzyskanie niepodległości przez Grecję", date: "1830", era: "[xix]", area: ["gr"], type: "po", dif: "1" },
    { id: 70, event: "Rewolucja lipcowa we Francji", date: "1830", era: "[xix]", area: ["fr"], type: "wo", dif: "1" },
    { id: 71, event: "Rewolucja i ogłoszenie niepodległości Belgii", date: "1830", era: "[xix]", area: ["be"], type: "po", dif: "1" },
    { id: 72, event: "Utworzenie niemieckiego Związku Celnego", date: "1834", era: "[xix]", area: ["de"], type: "po", dif: "2" },
    { id: 73, event: "Wybuch Wiosny Ludów w Europie", date: "1848", era: "[xix]", area: ["fr", "de", "it", "at"], type: "wo", type: "po", dif: "1" },
    { id: 74, event: "Rewolucja lutowa we Francji", date: "1848", era: "[xix]", area: ["fr"], type: "wo", dif: "1"},
    { id: 75, event: "Opublikowanie Manifestu Komunistycznego", date: "1848", era: "[xix]", area: ["de"], type: "sk", dif: "2" },
    { id: 76, event: "Obrady  parlamentu ogólnoniemieckiego we Frankfurcie", date: "1848-1849", era: "[xix]", area: ["de"], type: "po" , dif: "2"},
    { id: 77, event: "Stłumienie rewolucji w Wiedniu i odwołanie reform w monarchii habsburskiej", date: "1848", era: "[xix]", area: ["at"], type: "po", type: "wo", dif: "1" },
    { id: 78, event: "Odwołanie liberalnych reform w Prusach ", date: "1848", era: "[xix]", area: ["de"], type: "po", dif: "2" },
    { id: 80, event: "Bitwa pod Novarą", date: "1849", era: "[xix]", area: ["it"], type: "wo", dif: "2" },
    { id: 81, event: "Stłumienie wystąpień w państwach włoskich", date: "1849", era: "[xix]", area: ["it"], type: "wo", dif: "2" },
    { id: 82, event: "Stłumienie powstania węgierskiego przez Paskiewicza", date: "1849", era: "[xix]", area: ["hu"], type: "wo", dif: "1" },
    { id: 83, event: "Przyjęcie ogólnoniemieckiej konstytucji", date: "1849", era: "[xix]", area: ["de"], type: "po", dif: "1" },
    { id: 84, event: "Zjazd niemieckich liberałów w Hambach", date: "1832", era: "[xix]", area: ["de"], type: "sk" , dif: "2"},
    { id: 85, event: "Reforma ordynacji wyborczej w Wielkiej Brytanii", date: "1832", era: "[xix]", area: ["uk"], type: "po", dif: "2" },
    { id: 86, event: "Zezwolenie na zrzeszanie się w związki zawodowe robotnikom w Wielkiej Brytanii", date: "1824", era: "[xix]", area: ["uk"], type: "po", dif: "2" },
    { id: 87, event: "Uchwalenie praw socjalnych w Wielkiej Brytanii", date: "1834", era: "[xix]", area: ["uk"], type: "po", dif: "2" },
    { id: 88, event: "Zniesienie poddaństwa chłopów w Prusach", date: "1807", era: "[nap]", area: ["de"], type: "po", dif: "2" },
    { id: 89, event: "Początek procesu uwłaszczenia chłopów w Prusach", date: "1811", era: "[nap]", area: ["de"], type: "po", dif: "2" },
    { id: 90, event: "Wojna krymska", date: "1853-1856", era: "[xix]", area: ["ru", "uk"], type: "wo", dif: "1" },
    { id: 91, event: "Panowanie Cesarza Austrii Franciszka I", date: "1804-1835", era: "[xix]", area: ["at"], type: "pa", dif: "1" },
    { id: 92, event: "Panowanie Cara Mikołaja I", date: "1825-1855", era: "[xix]", area: ["ru"], type: "pa", dif: "1" },
    { id: 93, event: "Powstanie Młodych Włoch", date: "1831", era: "[xix]", area: ["it"], type: "po", dif: "2" },
    { id: 94, event: "Powstanie Młodej Europy", date: "1834", era: "[xix]", area: ["eu"], type: "po", dif: "2" },
    { id: 95, event: "Powstanie rządu sardyńskiego", date: "1848", era: "[xix]", area: ["it"], type: "po", dif: "2" },
    { id: 96, event: "Proces zjednoczenia Włoch", date: "1860-1871", era: "[xix]", area: ["it"], type: "po", dif: "1" },
    { id: 97, event: "Powstanie Cesarstwa Niemieckiego", date: "1871", era: "[xix]", area: ["de"], type: "po", dif: "1" },
    { id: 98, event: "Otto von Bismarck zostaje kanclerzem", date: "1862", era: "[xix]", area: ["de"], type: "po", dif: "1" },
    { id: 99, event: "Wojna prusko-austriacka", date: "1866", era: "[xix]", area: ["de", "at"], type: "wo", dif: "1" },
    { id: 100, event: "Przewrót 18 brumaire'a", date: "1799", era: "[nap]", area: ["fr"], type: "po", dif: "1" },
    { id: 101, event: "Uchwalenie Kodeksu Cywilnego Francuzów", date: "1804", era: "[nap]", area: ["fr"], type: "sk", type: "po", dif: "1" },
    { id: 102, event: "Koronacja Cesarska Napoleona", date: "1804", era: "[nap]", area: ["fr"], type: "po", dif: "1" },
    { id: 103, event: "I koalicja Anty-Francuska", date: "1792-1797", era: "[nap]", area: ["fr", "at", "ru", "uk"], type: "wo", dif: "1" },
    { id: 104, event: "Bitwa pod Lodi", date: "1796", era: "[nap]", area: ["fr", "it","at"], type: "wo", dif: "2" },
    { id: 105, event: "Pokój w Campo Formio", date: "1797", era: "[nap]", area: ["fr", "at"], type: "po", dif: "1" },
    { id: 106, event: "II koalicja Anty-Francuska", date: "1798-1802", era: "[nap]", area: ["fr", "ru", "uk", "at"], type: "wo", dif: "1" },
    { id: 107, event: "Pokój w Luneville", date: "1801", era: "[nap]", area: ["fr", "at"], type: "po", dif: "1" },
    { id: 108, event: "Pokój w Amiens", date: "1802", era: "[nap]", area: ["fr", "uk"], type: "po", dif: "1" },
    { id: 109, event: "III koalicja Anty-Francuska", date: "1805", era: "[nap]", area: ["fr", "ru", "at", "uk"], type: "wo", dif: "1" },
    { id: 110, event: "Pokój w Preszburgu", date: "1805", era: "[nap]", area: ["fr", "at"], type: "po", dif: "1" },
    { id: 111, event: "IV koalicja Anty-Francuska", date: "1806-1807", era: "[nap]", area: ["fr", "ru", "de"], type: "wo", dif: "1" },
    { id: 112, event: "Pokój w Tylży", date: "1807", era: "[nap]", area: ["fr", "ru", "de"], type: "po", dif: "1" },
    { id: 113, event: "V koalicja Anty-Francuska", date: "1809", era: "[nap]", area: ["fr", "at"], type: "wo", dif: "1" },
    { id: 114, event: "Pokój w Schonbrunn", date: "1809", era: "[nap]", area: ["fr", "at"], type: "po", dif: "1" },
    { id: 115, event: "VI koalicja Anty-Francuska", date: "1813-1814", era: "[nap]", area: ["fr", "ru", "de", "at"], type: "wo" , dif: "1"},
    { id: 116, event: "Traktat w Fontainebleau", date: "1814", era: "[nap]", area: ["fr", "ru", "de", "at"], type: "po" , dif: "1"},
    { id: 117, event: "VII koalicja Anty-Francuska", date: "1815", era: "[nap]", area: ["fr", "uk", "pr", "at"], type: "wo" },
    { id: 118, event: "Pokój Paryski", date: "1815", era: "[nap]", area: ["fr", "uk", "de", "at"], type: "po", dif: "1" },
    { id: 119, event: "Bitwa pod Marengo", date: "1800", era: "[nap]", area: ["fr", "at"], type: "wo", dif: "2" },
    { id: 120, event: "Bitwa pod Hohenlinden", date: "1800", era: "[nap]", area: ["fr", "at"], type: "wo", dif: "2" },
    { id: 121, event: "Bitwa pod Trafalgarem", date: "1805", era: "[nap]", area: ["fr", "uk"], type: "wo", dif: "2" },
    { id: 122, event: "Bitwa pod Ulm", date: "1805", era: "[nap]", area: ["fr", "at"], type: "wo", dif: "2" },
    { id: 123, event: "Bitwa pod Austerlitz", date: "1805", era: "[nap]", area: ["fr", "ru", "at"], type: "wo", dif: "2" },
    { id: 124, event: "Bitwy pod Jeną i Auerstedt", date: "1806", era: "[nap]", area: ["fr", "de"], type: "wo", dif: "2" },
    { id: 125, event: "Bitwy pod Iławą i Friedlandem", date: "1807", era: "[nap]", area: ["fr", "ru"], type: "bi", dif: "2" },
    { id: 126, event: "Bitwa pod Raszynem", date: "1809", era: "[nap]", area: ["pl", "at"], type: "wo", dif: "2" },
    { id: 127, event: "Bitwa pod Wagram", date: "1809", era: "[nap]", area: ["fr", "at"], type: "wo", dif: "2" },
    { id: 128, event: "Bitwy o Smoleńsk i Borodino", date: "1812", era: "[nap]", area: ["fr", "ru"], type: "wo", dif: "2" },
    { id: 129, event: "Zajęcie Ks. Warszawskiego przez Rosjan", date: "1813", era: "[nap]", area: ["pl", "ru"], type: "wo", dif: "2" },
    { id: 130, event: "Bitwa pod Lutzen", date: "1813", era: "[nap]", area: ["fr", "de"], type: "wo", dif: "2" },
    { id: 131, event: "Bitwa pod Lipskiem", date: "1813", era: "[nap]", area: ["fr", "de", "ru", "at"], type: "wo" , dif: "2"},
    { id: 132, event: "Bitwa pod Waterloo", date: "1815", era: "[nap]", area: ["fr", "uk", "pr"], type: "wo", dif: "1" },
    { id: 133, event: "Oktrojowanie konstytucji Królestwa Polskiego", date: "1815", era: "[xix]", area: ["pl"], type: "po", dif: "1" },
    { id: 134, event: "Założenie Wolnomularstwa Narodowego przez Łukasińskiego", date: "1819", era: "[xix]", area: ["pl"], type: "sk", dif: "2" },
    { id: 135, event: "Powstanie Towarzystwa Patriotycznego", date: "1821", era: "[xix]", area: ["pl"], type: "sk", dif: "2" },
    { id: 136, event: "Założenie Towarzystw Filomatów i Filaretów", date: "1820", era: "[xix]", area: ["pl"], type: "sk", dif: "2" },
    { id: 137, event: "Powstanie Sprzysiężenia Podchorążych", date: "1828", era: "[xix]", area: ["pl"], type: "sk", dif: "2" },
    { id: 138, event: "Utworzenie Banku Polskiego", date: "1828", era: "[xix]", area: ["pl"], type: "sk", dif: "2" },
    { id: 139, event: "Utworzenie Towarzystwa Kredytowego Ziemskiego", date: "1825", era: "[xix]", area: ["pl"], type: "sk", dif: "2" },
    { id: 140, event: "Uwłaszczenie chłopów w Wielkim Księstwie Poznańskim", date: "1823", era: "[xix]", area: ["pl"], type: "po", dif: "2" },
    { id: 141, event: "Utworzenie Galicyjskiego Sejmu Stanowego", date: "1817", era: "[xix]", area: ["pl"], type: "po", dif: "2" },
    { id: 142, event: "Powstanie Listopadowe", date: "1830-1831", era: "[xix]", area: ["pl"], type: "wo", dif: "1" },
    { id: 143, event: "Noc Paskiewiczowska", date: "1831-1856", era: "[xix]", area: ["pl"], type: "po", dif: "2" },
    { id: 144, event: "Wprowadzenie stanu wojennego w Polsce", date: "1833", era: "[xix]", area: ["pl"], type: "po", dif: "2" },
    { id: 145, event: "Powstanie Komitetu Tymczasowego Emigracji", date: "1831", era: "[xix]", area: ["pl"], type: "sk", dif: "2" },
    { id: 146, event: "Powstanie Komitetu Narodowego Polskiego(Wielka Emigracja)", date: "1831", era: "[xix]", area: ["pl"], type: "sk", dif: "2" },
    { id: 147, event: "Powstanie Towarzystwa Demokratycznego Polskiego", date: "1832", era: "[xix]", area: ["pl"], type: "sk", dif: "1" },
    { id: 148, event: "Mały Manifest TDP", date: "1832", era: "[xix]", area: ["pl"], type: "sk", dif: "2" },
    { id: 149, event: "Wielki Manifest TDP", date: "1836", era: "[xix]", area: ["pl"], type: "sk", dif: "2" },
    { id: 150, event: "Powstanie Gromad Ludu Polskiego", date: "1835", era: "[xix]", area: ["pl"], type: "sk", dif: "1" },
    { id: 151, event: "Oddanie do użytku kolei warszawsko-wiedeńskiej", date: "1845", era: "[xix]", area: ["pl"], type: "sk", dif: "2" },
    { id: 152, event: "Noc Flotwellowska", date: "1830-1840", era: "[xix]", area: ["pl"], type: "po", dif: "2" },
    { id: 153, event: "Powstanie 'Kasyna' w Gostyniu", date: "1835", era: "[xix]", area: ["pl"], type: "sk", dif: "2" },
    { id: 154, event: "Nieudana wyprawa płk Zaliwskiego do Królestwa Polskiego", date: "1833", era: "[xix]", area: ["pl"], type: "wo", dif: "2" },
    { id: 155, event: "Stworzenie Stowarzyszenia Ludu Polskiego", date: "1835", era: "[xix]", area: ["pl"], type: "sk", dif: "2" },
    { id: 156, event: "Powstanie Związku Narodu Polskiego", date: "1839", era: "[xix]", area: ["pl"], type: "sk", dif: "2" },
    { id: 157, event: "Powstanie Krakowskie", date: "1846", era: "[xix]", area: ["pl"], type: "wo", dif: "1" },
    { id: 158, event: "Rabacja Galicyjska", date: "1846", era: "[xix]", area: ["pl"], type: "wo", dif: "1" },
    { id: 159, event: "Powstanie biskupstwa misyjnego w Poznaniu", date: "968", era: "[sm]", area: ["pl"], type: "po" , dif: "2"},
    { id: 160, event: "Bitwa pod Cedynią", date: "972", era: "[sm]", area: ["pl"], type: "wo", dif: "1" },
    { id: 161, event: "Śmierć św. Wojciecha w Prusach", date: "997", era: "[sm]", area: ["pl"], type: "sk", dif: "2" },
    { id: 162, event: "Zjazd gnieźnieński", date: "1000", era: "[sm]", area: ["pl"], type: "po", dif: "1" },
    { id: 163, event: "Koronacja Stefana I Wielkiego na króla Węgier", date: "1001", era: "[sm]", area: ["hu"], type: "po", dif: "3" },
    { id: 164, event: "Wojna z cesarzem Henrykiem II", date: "1004-1018", era: "[sm]", area: ["pl", "de"], type: "wo", dif: "1" },
    { id: 165, event: "Koronacja królewska Bolesława Chrobrego i Mieszka II", date: "1025", era: "[sm]", area: ["pl"], type: "po", dif: "1" },
    { id: 166, event: "Najazd Jarosława Mądrego i Konrada II na Polskę, utrata Grodów Czerwieńskich, Łużyc i Milska", date: "1031", era: "[sm]", area: ["pl"], type: "wo", dif: "1" },
    { id: 167, event: "Najazd Brzetysława I na Polskę", date: "1039", era: "[sm]", area: ["pl", "cz"], type: "wo", dif: "2" },
    { id: 168, event: "Początek odbudowy państwa polskiego przez Kazimierza Odnowiciela", date: "1040", era: "[sm]", area: ["pl"], type: "po", dif: "1" },
    { id: 169, event: "Wielka schizma wschodnia", date: "1054", era: "[sm]", area: ["it", "gr", "ko"], type: "po", dif: "1" },
    { id: 170, event: "Bitwa pod Hastings", date: "1066", era: "[sm]", area: ["uk"], type: "wo", dif: "2" },
    { id: 171, event: "Początek reformy gregoriańskiej i sporu o inwestyturę", date: "1075", era: "[sm]", area: ["ko", "de"], type: "po", dif: "1" },
    { id: 172, event: "Ekskomunika Henryka IV", date: "1076", era: "[sm]", area: ["de"], type: "po", dif: "2" },
    { id: 173, event: "Koronacja królewska Bolesława II", date: "1076", era: "[sm]", area: ["pl"], type: "po", dif: "1" },
    { id: 174, event: "Przybycie Henryka IV do Canossy", date: "1077", era: "[sm]", area: ["ko", "de"], type: "po", dif: "1" },
    { id: 175, event: "Śmierć biskupa Stanisława, wygnanie Bolesława II", date: "1079", era: "[sm]", area: ["pl"], type: "po", dif: "1" },
    { id: 176, event: "Podział kraju przez Władysława Hermana pomiędzy synów", date: "1079", era: "[sm]", area: ["pl"], type: "po", dif: "2" },
    { id: 177, event: "Synod w Clermont", date: "1095", era: "[sm]", area: ["fr","ko"], type: "po", dif: "2" },
    { id: 178, event: "I wyprawa krzyżowa", date: "1096-1099", era: "[sm]", area: ["fr", "it", "tu","ko","re"], type: "wo", dif: "1" },
    { id: 179, event: "Zdobycie Jerozolimy przez krzyżowców i powstanie Królestwa Jerozolimskiego", date: "1099", era: "[sm]", area: ["tu","ko","re"], type: "wo" },
    { id: 183, event: "Podporządkowanie Polsce Pomorza Gdańskiego", date: "1116", era: "[sm]", area: ["pl"], type: "po", dif: "3" },
    { id: 185, event: "Podporządkowanie Polsce Pomorza Zachodniego", date: "1122", era: "[sm]", area: ["pl"], type: "po", dif: "3" },
    { id: 186, event: "Śmierć Bolesława Krzywoustego i początek rozbicia dzielnicowego", date: "1138", era: "[sm]", area: ["pl"], type: "po", dif: "1" },
    { id: 188, event: "II wyprawa krzyżowa", date: "1147-1149", era: "[sm]", area: ["fr", "it", "de","ko"], type: "wo", dif: "1" },
    { id: 192, event: "III wyprawa krzyżowa", date: "1189-1192", era: "[sm]", area: ["fr", "it", "de","ko"], type: "wo", dif: "2" },
    { id: 194, event: "IV wyprawa krzyżowa", date: "1202-1204", era: "[sm]", area: ["fr", "it","ko"], type: "wo", dif: "2" },
    { id: 223, event: "Powstanie Akademii Krakowskiej", date: "1364", era: "[sm]", area: ["pl"], type: "sk", dif: "2" },
    { id: 226, event: "Początek samodzielnych rządów Bolesława Krzywoustego", date: "1108", era: "[sm]", area: ["pl"], type: "po", dif: "2" },
    { id: 227, event: "Wojna Polski z królem niemieckim Henrykiem V", date: "1109", era: "[sm]", area: ["pl", "de"], type: "wo", dif: "1" },
    { id: 228, event: "Powstanie kroniki Gala Anonima", date: "1112-1116", era: "[sm]", area: ["pl"], type: "sk", dif: "3" },
    { id: 230, event: "Podpisanie konkordatu wormackiego", date: "1122", era: "[sm]", area: ["it", "de","ko"], type: "po", dif: "2" },
    { id: 233, event: "Wypędzenie Władysława II Wygnańca z Polski", date: "1146", era: "[sm]", area: ["pl"], type: "po", dif: "2" },
    { id: 235, event: "Najazd cesarza Fryderyka I Barbarossy na Polskę", date: "1157", era: "[sm]", area: ["pl", "de"], type: "wo", dif: "2" },
    { id: 236, event: "Objęcie tronu krakowskiego przez Kazimierza II Sprawiedliwego, upadek zasady senioratu", date: "1177", era: "[sm]", area: ["pl"], type: "po", dif: "1" },
    { id: 237, event: "Zjazd w Łęczycy", date: "1180", era: "[sm]", area: ["pl"], type: "po", dif: "1" },
    { id: 239, event: "Powstanie zakonu krzyżackiego", date: "1191", era: "[sm]", area: ["ko","re"], type: "po", dif: "2" },
    { id: 241, event: "Zdobycie Konstantynopola przez krzyżowców i powstanie cesarstwa łacińskiego", date: "1204", era: "[sm]", area: ["tu","ko"], type: "wo" },
    { id: 242, event: "Krucjata przeciwko katarom", date: "1209-1229", era: "[sm]", area: ["fr","ko"], type: "wo" , dif: "2"},
    { id: 243, event: "Lokacja Złotoryi", date: "1211", era: "[sm]", area: ["pl"], type: "sk", dif: "3" },
    { id: 244, event: "Magna Charta Libertatum", date: "1215", era: "[sm]", area: ["uk"], type: "po", dif: "1" },
    { id: 245, event: "Bitwa nad rzeką Kałką", date: "1223", era: "[sm]", area: ["ru"], type: "wo", dif: "2" },
    { id: 246, event: "Zaproszenie krzyżaków do osiedlenia się na ziemi chełmińskiej", date: "1226", era: "[sm]", area: ["pl"], type: "po", dif: "2" },
    { id: 247, event: "Zjazd w Gąsawie, śmierć Leszka Białego", date: "1227", era: "[sm]", area: ["pl"], type: "po", dif: "1" },
    { id: 248, event: "Przybycie krzyżaków do ziemi chełmińskiej", date: "1228", era: "[sm]", area: ["pl"], type: "po", dif: "2" },
    { id: 249, event: "Podbój Rusi przez Mongołów", date: "1236-1240", era: "[sm]", area: ["ru"], type: "wo", dif: "2" },
    { id: 250, event: "Przyłączenie zakonu kawalerów mieczowych do zakonu krzyżackiego", date: "1237", era: "[sm]", area: ["pl", "de"], type: "po", dif: "3" },
    { id: 251, event: "Inwazja mongolska na Polskę i Węgry", date: "1241", era: "[sm]", area: ["pl", "hu"], type: "wo", dif: "1" },
    { id: 252, event: "Bitwa pod Legnicą i śmierć Henryka II Pobożnego", date: "1241", era: "[sm]", area: ["pl"], type: "wo", dif: "1" },
    { id: 253, event: "Chrzest władcy Litwy Mendoga", date: "1251", era: "[sm]", area: ["lt"], type: "po", dif: "3" },
    { id: 254, event: "Koronacja królewska Mendoga", date: "1253", era: "[sm]", area: ["lt"], type: "po", dif: "3" },
    { id: 255, event: "Pierwsze posiedzenie parlamentu angielskiego", date: "1264", era: "[sm]", area: ["uk"], type: "po", dif: "1" },
    { id: 256, event: "Koniec wielkiego bezkrólewia w Niemczech i elekcja Rudolfa I Habsburga na króla niemieckiego", date: "1273", era: "[sm]", area: ["de"], type: "po", dif: "1" },
    { id: 257, event: "Zakończenie podboju Prus przez Krzyżaków", date: "1283", era: "[sm]", area: ["pl"], type: "wo", dif: "2" },
    { id: 258, event: "Upadek Akki", date: "1291", era: "[sm]", area: ["re","ko"], type: "wo", dif: "2" },
    { id: 259, event: "Koronacja Przemysła II", date: "1295", era: "[sm]", area: ["pl"], type: "po", dif: "1" },
    { id: 260, event: "Koronacja Wacława II", date: "1300", era: "[sm]", area: ["cz"], type: "po", dif: "2" },
    { id: 261, event: "Zwołanie pierwszego posiedzenia Stanów Generalnych", date: "1302", era: "[sm]", area: ["fr"], type: "po", dif: "1" },
    { id: 262, event: "Rzeź Gdańska", date: "1308", era: "[sm]", area: ["pl"], type: "wo", dif: "3" },
    { id: 263, event: "Początek niewoli awiniońskiej", date: "1309", era: "[sm]", area: ["fr","ko"], type: "po", dif: "2" },
    { id: 264, event: "Opanowanie Pomorza Gdańskiego przez Krzyżaków", date: "1309", era: "[sm]", area: ["pl","de"], type: "wo", dif: "2" },
    { id: 265, event: "Koronacja królewska Władysława Łokietka", date: "1320", era: "[sm]", area: ["pl"], type: "po", dif: "1" },
    { id: 266, event: "Bitwa pod Płowcami", date: "1331", era: "[sm]", area: ["pl"], type: "wo", dif: "2" },
    { id: 267, event: "Panowanie Kazimierza Wielkiego", date: "1333-1370", era: "[sm]", area: ["pl"], type: "pa", dif: "1"},
    { id: 268, event: "Pierwszy zjazd w Wyszehradzie", date: "1335", era: "[sm]", area: ["pl", "hu", "cz"], type: "po", dif: "2" },
    { id: 269, event: "Wojna stuletnia", date: "1337-1453", era: "[sm]", area: ["fr", "uk"], type: "wo", dif: "1" },
    { id: 270, event: "II zjazd w Wyszehradzie", date: "1338-1339", era: "[sm]", area: ["pl", "hu", "cz"], type: "po", dif: "2" },
    { id: 271, event: "Podbój Rusi Halickiej", date: "1340-1366", era: "[sm]", area: ["pl", "ru"], type: "wo", dif: "2" },
    { id: 272, event: "Pokój w Kaliszu z Krzyżakami", date: "1343", era: "[sm]", area: ["pl"], type: "po", dif: "2" },
    { id: 273, event: "Epidemia dżumy w Europie", date: "1348-1352", era: "[sm]", area: ["fr","de","it","gb"], type: "sk", dif: "1" },
    { id: 274, event: "Wydanie Złotej Bulli przez Karola IV Luksemburga", date: "1356", era: "[sm]", area: ["de"], type: "po", dif: "1" },
    { id: 275, event: "Opracowanie statutów piotrkowskiego i wiślickiego", date: "1356-1362", era: "[sm]", area: ["pl"], type: "sk",type: "po", dif: "2" },
    { id: 277, event: "Nadanie przywileju koszyckiego", date: "1374", era: "[sm]", area: ["pl"], type: "po", dif: "1" },
    { id: 278, event: "Bitwa na Kulikowym Polu", date: "1380", era: "[sm]", area: ["ru"], type: "wo", dif: "1" },
    { id: 279, event: "Unia w Krewie", date: "1385", era: "[sm]", area: ["pl", "lt"], type: "po", dif: "1" },
    { id: 280, event: "Koronacja królewska Władysława Jagiełły", date: "1386", era: "[sm]", area: ["pl"], type: "po", dif: "1" },
    { id: 281, event: "Wielka Wojna z Zakonem Krzyżackim", date: "1409-1411", era: "[sm]", area: ["pl", "de"], type: "wo", dif: "1" },
    { id: 282, event: "I Pokój Toruński", date: "1411", era: "[sm]", area: ["pl", "de"], type: "po", dif: "1" },
    { id: 283, event: "Zawarcie Unii w Horodle", date: "1413", era: "[sm]", area: ["pl", "lt"], type: "po", dif: "2" },
    { id: 284, event: "Sobór w Konstancji", date: "1414-1418", era: "[sm]", area: ["de","ko","cz"], type: "po", dif: "2" },
    { id: 285, event: "Bitwa pod Azincourt", date: "1415", era: "[sm]", area: ["fr"], type: "wo", dif: "2" },
    { id: 189, event: "Śmierć Jana Hussa", date: "1415", era: "[sm]", area: ["cz"], type: "po", dif: "2" },
    { id: 286, event: "Wybuch wojen husyckich w Czechach", date: "1419", era: "[sm]", area: ["cz"], type: "wo" , dif: "2"},
    { id: 287, event: "Spalenie na stosie Joanny d'Arc", date: "1431", era: "[sm]", area: ["fr"], type: "wo", dif: "1" },
    { id: 288, event: "Utworzenie Związku Pruskiego", date: "1440", era: "[sm]", area: ["pl"], type: "po", dif: "2" },
    { id: 289, event: "Upadek Konstantynopola", date: "1453", era: "[sm]", area: ["tu","gr"], type: "wo" , dif: "1"},
    { id: 290, event: "Wojna Trzynastoletnia", date: "1454-1466", era: "[sm]", area: ["pl", "de"], type: "wo", dif: "1" },
    { id: 291, event: "Przywilej cerekwicko-nieszawski", date: "1454", era: "[sm]", area: ["pl"], type: "po", dif: "2" },
    { id: 292, event: "II Pokój Toruński", date: "1466", era: "[sm]", area: ["pl", "de"], type: "po", dif: "1" },
    { id: 293, event: "Wynalezienie druku", date: "1450", era: "[sm]", area: ["de"], type: "sk", dif: "1" },
    { id: 294, event: "Wojna Dwóch Róż", date: "1455-1485", era: "[sm]", area: ["uk"], type: "wo", dif: "2" },
    { id: 295, event: "Wynalezienie pisma", date: "4000 p.n.e.", era: "[st]", area: [], type: "sk", dif: "1" },
    { id: 296, event: "Spisanie Kodeksu Hammurabiego", date: "1700 p.n.e.", era: "[st]", area: ["re"], type: "sk", dif: "2" },
    { id: 297, event: "Panowanie Saula, Dawida i Salomona w Królestwie Izraela", date: "1000 p.n.e.", era: "[st]", area: ["re"], type: "po" , dif: "3"},
    { id: 298, event: "Wielka kolonizacja", date: "800 p.n.e.", era: "[st]", area: ["gr"], type: "po", dif: "2" },
    { id: 299, event: "Pierwsze igrzyska olimpijskie", date: "776 p.n.e.", era: "[st]", area: ["gr"], type: "sk", dif: "1" },
    { id: 300, event: "Założenie Rzymu", date: "753 p.n.e.", era: "[st]", area: ["it"], type: "po", dif: "1" },
    { id: 301, event: "Spisanie praw Drakona", date: "621 p.n.e.", era: "[st]", area: ["gr"], type: "po", dif: "2" },
    { id: 302, event: "Strząśnienie długów Solona", date: "594 p.n.e.", era: "[st]", area: ["gr"], type: "sk", dif: "1" },
    { id: 303, event: "Początek Republiki Rzymskiej", date: "509 p.n.e.", era: "[st]", area: ["it"], type: "po", dif: "1" },
    { id: 304, event: "Utworzenie Związku Morskiego", date: "478 p.n.e.", era: "[st]", area: ["gr"], type: "po", dif: "1" },
    { id: 305, event: "Wojna peloponeska", date: "431-404 p.n.e.", era: "[st]", area: ["gr"], type: "wo", dif: "1" },
    { id: 306, event: "Bitwa pod Cheroneą", date: "338 p.n.e.", era: "[st]", area: ["gr"], type: "wo", dif: "2" },
    { id: 307, event: "Panowanie Aleksandra Wielkiego", date: "336-323 p.n.e.", era: "[st]", area: ["gr"], type: "pa", dif: "2" },
    { id: 308, event: "Bitwa pod Granikos", date: "334 p.n.e.", era: "[st]", area: ["gr"], type: "wo", dif: "2" },
    { id: 309, event: "Bitwa pod Issos", date: "333 p.n.e.", era: "[st]", area: ["sy"], type: "wo", dif: "1" },
    { id: 310, event: "Bitwa pod Gaugamelą", date: "331 p.n.e.", era: "[st]", area: ["ir"], type: "wo", dif: "2" },
    { id: 311, event: "I wojna punicka", date: "264-241 p.n.e.", era: "[st]", area: ["it"], type: "wo", dif: "1" },
    { id: 312, event: "II wojna punicka", date: "218-201 p.n.e.", era: "[st]", area: ["it"], type: "wo", dif: "1" },
    { id: 313, event: "Bitwa pod Kannami", date: "216 p.n.e.", era: "[st]", area: ["it"], type: "wo", dif: "1" },
    { id: 314, event: "Bitwa pod Zamą", date: "202 p.n.e.", era: "[st]", area: ["tn"], type: "wo", dif: "2" },
    { id: 315, event: "III wojna punicka", date: "149-146 p.n.e.", era: "[st]", area: ["tn"], type: "wo", dif: "2" },
    { id: 316, event: "I triumwirat", date: "60-53 p.n.e.", era: "[st]", area: ["it"], type: "po", dif: "2" },
    { id: 317, event: "Zabójstwo Juliusza Cezara", date: "44 p.n.e.", era: "[st]", area: ["it"], type: "po", dif: "1" },
    { id: 318, event: "II triumwirat", date: "43-36 p.n.e.", era: "[st]", area: ["it"], type: "po", dif: "2" },
    { id: 319, event: "Bitwa pod Akcjum", date: "31 p.n.e.", era: "[st]", area: ["gr"], type: "po", dif: "2" },
    { id: 320, event: "Wprowadzenie pryncypatu", date: "27 p.n.e.", era: "[st]", area: ["it"], type: "po", dif: "1" },
    { id: 321, event: "Edykt mediolański", date: "313", era: "[st]", area: ["it","ko"], type: "po", dif: "1" },
    { id: 322, event: "Edykt Teodozjusza", date: "380", era: "[st]", area: ["it","ko"], type: "po", dif: "1" },
    { id: 323, event: "Podział cesarstwa rzymskiego", date: "395", era: "[st]", area: ["it"], type: "po", dif: "1" },
    { id: 324, event: "Chrzest Chlodwiga I", date: "496", era: "[sm]", area: ["fr"], type: "po", dif: "2" },
    { id: 325, event: "Panowanie Justyniana I Wielkiego", date: "527-565", era: "[sm]", area: ["tr"], type: "pa", dif: "1" },
    { id: 326, event: "Hidżra", date: "622", era: "[sm]", area: ["re"], type: "sk", dif: "1" },
    { id: 327, event: "Bitwa pod Poitiers", date: "732", era: "[sm]", area: ["fr"], type: "wo", dif: "1" },
    { id: 328, event: "Początek dynastii Karolingów", date: "751", era: "[sm]", area: ["fr"], type: "po", dif: "2" },
    { id: 329, event: "Powstanie Państwa Kościelnego", date: "756", era: "[sm]", area: ["it","ko"], type: "po", dif: "1" },
    { id: 330, event: "Koronacja cesarska Karola Wielkiego", date: "800", era: "[sm]", area: ["fr"], type: "po", dif: "1" },
    { id: 331, event: "Powstanie Państwa Wielkomorawskiego", date: "801", era: "[sm]", area: ["cz"], type: "po", dif: "2" },
    { id: 332, event: "Bitwa na Lechowym Polu", date: "955", era: "[sm]", area: ["de"], type: "wo", dif: "2" },
    { id: 333, event: "Koronacja cesarska Ottona I", date: "962", era: "[sm]", area: ["de"], type: "po", dif: "1" },
    { id: 334, event: "Zdobycie Grenady, koniec rekonkwisty", date: "1492", era: "[xvi]", area: ["es"], type: "wo", dif: "2" },  
    { id: 335, event: "Pierwsza wyprawa Kolumba, odkrycie Ameryki", date: "1492", era: "[xvi]", area: ["es"], type: "sk", dif: "1" },  
    { id: 336, event: "Pierwszy sejm walny", date: "1493", era: "[xvi]", area: ["pl"], type: "po", dif: "1" },  
    { id: 337, event: "Traktat w Tordesillas", date: "1494", era: "[xvi]", area: ["pt", "es"], type: "po", dif: "1" },  
    { id: 338, event: "Wyprawa Vasco Da Gamy", date: "1498", era: "[xvi]", area: ["pt"], type: "sk", dif: "2" },  
    { id: 339, event: "Konstytucja Nihil Novi (Radomska)", date: "1505", era: "[xvi]", area: ["pl"], type: "1" },  
    { id: 340, event: "Bitwa pod Orszą", date: "1514", era: "[xvi]", area: ["pl", "lt", "ru"], type: "wo", dif: "2" },  
    { id: 341, event: "Zjazd w Wiedniu", date: "1515", era: "[xvi]", area: ["at"], type: "po", dif: "1" },  
    { id: 342, event: "Ogłoszenie tez Marcina Lutra, początek reformacji", date: "1517", era: "[xvi]", area: ["de"], type: "sk", dif: "1" },  
    { id: 343, event: "Ostatnia wojna z zakonem krzyżackim", date: "1519-1521", era: "[xvi]", area: ["pl", "de"], type: "wo", dif: "2" },  
    { id: 344, event: "Wyprawa Magellana", date: "1519-1522", era: "[xvi]", area: ["es"], type: "sk", dif: "1" },  
    { id: 345, event: "Podbój Meksyku przez Cortesa", date: "1519-1524", era: "[xvi]", area: ["es", "re"], type: "wo", dif: "1" },  
    { id: 346, event: "Powstanie Prus Książęcych", date: "1525", era: "[xvi]", area: ["pl", "de"], type: "po", dif: "2" },  
    { id: 347, event: "Hołd pruski", date: "1525", era: "[xvi]", area: ["pl", "de"], type: "po", dif: "1" },  
    { id: 348, event: "Bitwa pod Mohaczem", date: "1526", era: "[xvi]", area: ["hu","tu"], type: "wo", dif: "2" },  
    { id: 349, event: "Przyłączenie Mazowsza do Polski", date: "1526", era: "[xvi]", area: ["pl"], type: "po", dif: "2" },  
    { id: 350, event: "Sacco di Roma", date: "1527", era: "[xvi]", area: ["it","de","fr"], type: "wo", dif: "1" },  
    { id: 351, event: "Elekcja Vivente Rege Zygmunta Augusta", date: "1529", era: "[xvi]", area: ["pl"], type: "po", dif: "2" },  
    { id: 352, event: "Pokój wieczysty z Turcją", date: "1533", era: "[xvi]", area: ["pl", "tu"], type: "po", dif: "2" },  
    { id: 353, event: "Akt supremacji, powstanie anglikanizmu", date: "1534", era: "[xvi]", area: ["uk"], type: "po", dif: "1" },  
    { id: 354, event: "Założenie jezuitów", date: "1534", era: "[xvi]", area: ["it","ko"], type: "sk", dif: "1" },  
    { id: 355, event: "Początek działalności Kalwina", date: "1536", era: "[xvi]", area: ["fr"], type: "sk", dif: "2" },  
    { id: 356, event: "Wojna kokosza (rokosz lwowski)", date: "1537", era: "[xvi]", area: ["pl"], type: "wo", dif: "1" },  
    { id: 357, event: "Sobór trydencki", date: "1545-1563", era: "[xvi]", area: ["it","ko"], type: "po", dif: "1" },  
    { id: 358, event: "Pierwsza wojna szmalkaldzka", date: "1546-1547", era: "[xvi]", area: ["de"], type: "wo", dif: "3" },  
    { id: 359, event: "Koronacja Iwana IV Groźnego na Cara Wszechrusi", date: "1547", era: "[xvi]", area: ["ru"], type: "po", dif: "2" },  
    { id: 360, event: "Druga wojna szmalkaldzka", date: "1552", era: "[xvi]", area: ["de"], type: "wo", dif: "3" },  
    { id: 361, event: "Pokój w Augsburgu", date: "1555", era: "[xvi]", area: ["de"], type: "po", dif: "1" },  
    { id: 362, event: "Podział imperium Habsburgów na część hiszpańską i austriacką", date: "1556", era: "[xvi]", area: ["es", "at","de"], type: "po", dif: "2" },  
    { id: 363, event: "Sekularyzacja Inflant", date: "1561", era: "[xvi]", area: ["pl"], type: "po", dif: "3" },  
    { id: 364, event: "Wybuch wojen religijnych we Francji", date: "1562", era: "[xvi]", area: ["fr"], type: "wo", dif: "1" },  
    { id: 365, event: "Złożenie hołdu Zygmuntowi II Augustowi przez Gottharda Kettlera", date: "1562", era: "[xvi]", area: ["pl"], type: "po", dif: "2" },  
    { id: 366, event: "Bitwa pod Lepanto", date: "1571", era: "[xvi]", area: ["gr","tu","ko"], type: "wo", dif: "1" },  
    { id: 367, event: "Noc św. Bartłomieja", date: "1572", era: "[xvi]", area: ["fr"], type: "wo", dif: "1" },  
    { id: 368, event: "Koniec panowania dynastii Jagiellonów, pierwsze bezkrólewie", date: "1572", era: "[xvi]", area: ["pl"], type: "po", dif: "2" },  
    { id: 369, event: "Konfederacja Warszawska, pierwsza wolna elekcja", date: "1573", era: "[xvi]", area: ["pl"], type: "po", dif: "1" },  
    { id: 370, event: "Panowanie Stefana Batorego", date: "1576-1586", era: "[xvi]", area: ["pl"], type: "pa", dif: "2" },  
    { id: 371, event: "Utworzenie Trybunału Koronnego i piechoty wybranieckiej", date: "1578", era: "[xvi]", area: ["pl"], type: "po", dif: "1" },  
    { id: 372, event: "Wojna z Moskwą (Batory)", date: "1578-1581", era: "[xvi]", area: ["pl", "ru"], type: "wo", dif: "1" },  
    { id: 373, event: "Rozejm w Jamie Zapolskim", date: "1582", era: "[xvi]", area: ["pl", "ru"], type: "po", dif: "2" },  
    { id: 374, event: "Panowanie Wazów w Polsce", date: "1587-1613", era: "[xvi]", area: ["pl"], type: "po", dif: "3" },  
    { id: 375, event: "Powstanie Niderlandów", date: "1588", era: "[xvi]", area: ["nl"], type: "po", dif: "2" },  
    { id: 376, event: "Klęska Wielkiej Armady", date: "1588", era: "[xvi]", area: ["es", "uk"], type: "wo", dif: "1" },  
    { id: 377, event: "Unia brzeska", date: "1596", era: "[xvi]", area: ["pl"], type: "po", dif: "1" },  
    { id: 378, event: "Edykt nantejski", date: "1598", era: "[xvi]", area: ["fr"], type: "po", dif: "1" },  
    { id: 379, event: "Wielka smuta", date: "1598-1613", era: "[xvi]", area: ["ru"], type: "po", dif: "2" },
    { id: 380, event: "I wojna polsko-szwedzka o Inflanty", date: "1600-1611", era: "[xvii]", area: ["pl", "se"], type: "wo", dif: "1" },  
    { id: 381, event: "I dymitriada", date: "1604-1606", era: "[xvii]", area: ["pl", "ru"], type: "wo", dif: "2" },  
    { id: 382, event: "Bitwa pod Kircholmem", date: "1605", era: "[xvii]", area: ["pl", "se"], type: "wo", dif: "1" },  
    { id: 383, event: "Rokosz Zebrzydowskiego", date: "1606-1607", era: "[xvii]", area: ["pl"], type: "wo", dif: "2" },  
    { id: 384, event: "Wojna z Moskwą (podymitriadowa)", date: "1609-1618", era: "[xvii]", area: ["pl", "ru"], type: "wo", dif: "1" },  
    { id: 385, event: "Bitwa pod Kłuszynem i zajęcie Moskwy", date: "1610", era: "[xvii]", area: ["pl", "ru"], type: "wo", dif: "1" },  
    { id: 386, event: "Przejęcie władzy w Prusach Książęcych przez brandenburską linię Hohenzollernów", date: "1618", era: "[xvii]", area: ["de"], type: "po", dif: "3" },  
    { id: 387, event: "Wojna trzydziestoletnia", date: "1618-1648", era: "[xvii]", area: ["de", "fr","se","cz"], type: "wo", dif: "1" },  
    { id: 388, event: "Rozejm w Dywilinie", date: "1619", era: "[xvii]", area: ["pl", "ru"], type: "po", dif: "2" },  
    { id: 389, event: "Pokój westfalski", date: "1648", era: "[xvii]", area: ["de", "eu"], type: "po", dif: "1" },  
    { id: 390, event: "Bitwa pod Białą Górą", date: "1620", era: "[xvii]", area: ["cz"], type: "wo", dif: "2" },  
    { id: 391, event: "Bitwa pod Cecorą", date: "1620", era: "[xvii]", area: ["pl", "tu"], type: "wo", dif: "2" },  
    { id: 392, event: "Bitwa pod Chocimiem", date: "1621", era: "[xvii]", area: ["pl", "tu"], type: "wo", dif: "1" },  
    { id: 393, event: "Wojna ze Szwecją (Gustaw Adolf)", date: "1626-1629", era: "[xvii]", area: ["pl", "se"], type: "wo", dif: "1" },  
    { id: 394, event: "Bitwa pod Oliwą", date: "1627", era: "[xvii]", area: ["pl", "se"], type: "wo", dif: "2" },  
    { id: 395, event: "Rozejm w Altmarku", date: "1629", era: "[xvii]", area: ["pl", "se"], type: "wo", dif: "1" },  
    { id: 396, event: "Wojna smoleńska", date: "1632-1634", era: "[xvii]", area: ["pl", "ru"], type: "wo", dif: "1" },  
    { id: 397, event: "Pokój w Polanowie", date: "1634", era: "[xvii]", area: ["pl", "ru"], type: "po", dif: "2" },  
    { id: 398, event: "Rozejm w Sztumskiej Wsi", date: "1635", era: "[xvii]", area: ["pl", "se"], type: "po", dif: "2" },  
    { id: 399, event: "Wojna domowa w Anglii", date: "1642-1648", era: "[xvii]", area: ["uk"], type: "wo", dif: "1" },  
    { id: 400, event: "Panowanie Ludwika XIV", date: "1643-1715", era: "[xvii]", area: ["fr"], type: "pa", dif: "2" },  
    { id: 401, event: "Wybuch powstania Chmielnickiego", date: "1648", era: "[xvii]", area: ["pl"], type: "wo", dif: "1" },  
    { id: 402, event: "Śmierć Władysława IV Wazy", date: "1648", era: "[xvii]", area: ["pl"], type: "po", dif: "2" },  
    { id: 403, event: "Ścięcie Karola I, ogłoszenie Anglii Republiką", date: "1649", era: "[xvii]", area: ["uk"], type: "po", dif: "1" },  
    { id: 404, event: "Uchwalenie aktu nawigacyjnego", date: "1651", era: "[xvii]", area: ["uk"], type: "po", dif: "2" },  
    { id: 405, event: "Bitwa pod Beresteczkiem, ugoda w Białej Cerkwi", date: "1651", era: "[xvii]", area: ["pl"], type: "wo", dif: "1" },  
    { id: 406, event: "Oliver Cromwell lordem protektorem", date: "1653-1658", era: "[xvii]", area: ["uk"], type: "po", dif: "1" },  
    { id: 407, event: "Ugoda perejasławska, atak Rosji na Polskę", date: "1654", era: "[xvii]", area: ["pl", "ru"], type: "wo", dif: "1" },  
    { id: 408, event: "Potop szwedzki", date: "1655-1660", era: "[xvii]", area: ["pl", "se"], type: "wo", dif: "1" },  
    { id: 409, event: "Traktat w Radnot", date: "1656", era: "[xvii]", area: ["pl", "se"], type: "po", dif: "2" },  
    { id: 410, event: "Traktaty welawsko-bydgoskie", date: "1657", era: "[xvii]", area: ["pl", "de"], type: "po", dif: "1" },  
    { id: 411, event: "Unia w Hadziaczu", date: "1658", era: "[xvii]", area: ["pl"], type: "po", dif: "1" },  
    { id: 412, event: "Restauracja Monarchii w Anglii", date: "1660", era: "[xvii]", area: ["uk"], type: "po", dif: "2" },  
    { id: 413, event: "Pokój w Oliwie", date: "1660", era: "[xvii]", area: ["pl", "se"], type: "po", dif: "1" },  
    { id: 414, event: "Rokosz Lubomirskiego", date: "1665-1666", era: "[xvii]", area: ["pl"], type: "wo", dif: "2" },  
    { id: 415, event: "Traktat w Buczaczu", date: "1672", era: "[xvii]", area: ["pl", "tu"], type: "po", dif: "2" },  
    { id: 416, event: "Druga bitwa pod Chocimiem", date: "1673", era: "[xvii]", area: ["pl", "tu"], type: "wo", dif: "1" },  
    { id: 417, event: "Odsiecz wiedeńska", date: "1683", era: "[xvii]", area: ["pl", "at", "tu"], type: "wo", dif: "1" },  
    { id: 418, event: "Powstanie Ligi Świętej", date: "1684", era: "[xvii]", area: ["ko","it","pl","ru"], type: "po", dif: "2" },  
    { id: 419, event: "Pokój Grzymułtowskiego", date: "1686", era: "[xvii]", area: ["pl", "ru"], type: "po", dif: "1" },  
    { id: 420, event: "Sławetna rewolucja w Anglii", date: "1688", era: "[xvii]", area: ["uk"], type: "wo", dif: "1" },  
    { id: 421, event: "Pokój w Karłowicach", date: "1699", era: "[xvii]", area: ["pl", "tu", "at"], type: "po", dif: "1" },  
    { id: 422, event: "Powstanie Królestwa Prus", date: "1701", era: "[xviii]", area: ["de"], type: "po", dif: "1" },  
    { id: 423, event: "Bitwa pod Połtawą", date: "1709", era: "[xviii]", area: ["ru", "se"], type: "wo", dif: "1" },
    { id: 424, event: "Wynalezienie maszyny parowej", date: "1769", era: "[xviii]", area: ["uk"], type: "sk" },  
    { id: 425, event: "Uchwalenie konstytucji Francji (rewolucja burżuazyjna)", date: "1791", era: "[xviii]", area: ["fr"], type: "po", dif: "1" },  
    { id: 426, event: "Uchwalenie konstytucji 3 maja", date: "1791", era: "[xviii]", area: ["pl"], type: "po", dif: "1" },  
    { id: 427, event: "Ogłoszenie Francji republiką (Rewolucja Francuska)", date: "1792", era: "[xviii]", area: ["fr"], type: "po", dif: "1" },  
    { id: 428, event: "Ścięcie Ludwika XVI", date: "1793", era: "[xviii]", area: ["fr"], type: "po", dif: "1" },  
    { id: 429, event: "Przewrót termidoriański", date: "1794", era: "[xviii]", area: ["fr"], type: "po", dif: "1" },  
    { id: 430, event: "Wyprawa Napoleona do Egiptu", date: "1798", era: "[xviii]", area: ["fr", "eg"], type: "wo", dif: "1" },  
    { id: 431, event: "Wyprawa legionów polskich na Santo Domingo", date: "1802", era: "[nap]", area: ["pl", "re"], type: "wo", dif: "1" },  
    { id: 432, event: "Utworzenie Księstwa Warszawskiego", date: "1807", era: "[nap]", area: ["pl"], type: "po", dif: "1" },  
    { id: 433, event: "Początek powstania anty-francuskiego w Hiszpanii", date: "1808", era: "[nap]", area: ["es", "fr"], type: "wo", dif: "2" },  
    { id: 434, event: "Kongres wiedeński", date: "1815", era: "[nap]", era: "[xix]", area: ["at"], type: "po", dif: "1" },  
    { id: 435, event: "Powstanie Uniwersytetu Warszawskiego", date: "1816", era: "[xix]", area: ["pl"], type: "sk", dif: "2" },  
    { id: 436, event: "Początek romantyzmu w Polsce", date: "1822", era: "[xix]", area: ["pl"], type: "sk", dif: "2" },  
    { id: 437, event: "Wprowadzenie stanu wyjątkowego na Ziemiach Królestwa Polskiego", date: "1861", era: "[xix]", area: ["pl"], type: "po", dif: "1" },  
    { id: 438, event: "Wojna secesyjna", date: "1861-1865", era: "[xix]", area: ["us"], type: "wo", dif: "1" },  
    { id: 439, event: "Utworzenie Czerwonego Krzyża", date: "1863", era: "[xix]", area: ["it"], type: "sk", dif: "2" },  
    { id: 440, event: "Wybuch powstania styczniowego", date: "1863", era: "[xix]", area: ["pl"], type: "wo", dif: "1" },  
    { id: 441, event: "Wojna niemiecko-duńska", date: "1864", era: "[xix]", area: ["de"], type: "wo", dif: "1" },  
    { id: 442, event: "Powstanie I Międzynarodówki", date: "1864", era: "[xix]", area: ["uk"], type: "sk", dif: "2" },  
    { id: 443, event: "Klęska powstania styczniowego", date: "1864", era: "[xix]", area: ["pl"], type: "wo", dif: "1" },  
    { id: 444, event: "Uwłaszczenie chłopów w Królestwie Polskim", date: "1864", era: "[xix]", area: ["pl"], type: "po", dif: "2" },  
    { id: 445, event: "Zniesienie niewolnictwa w USA", date: "1865", era: "[xix]", area: ["us"], type: "po", dif: "1" },  
    { id: 446, event: "Powstanie Związku Północnoniemieckiego i Austro-Węgier", date: "1867", era: "[xix]", area: ["de", "at"], type: "po", dif: "1" },  
    { id: 447, event: "Otwarcie Kanału Sueskiego", date: "1869", era: "[xix]", area: ["uk"], type: "sk", dif: "1" },  
    { id: 448, event: "Wojna francusko-pruska", date: "1870-1871", era: "[xix]", area: ["fr", "de"], type: "wo", dif: "1" },  
    { id: 449, event: "Komuna Paryska", date: "1871", era: "[xix]", area: ["fr"], type: "po", dif: "2" },  
    { id: 450, event: "Kongres berliński", date: "1878", era: "[xix]", area: ["de", "uk","fr"], type: "po", dif: "1" },  
    { id: 451, event: "Noc apuchtinowska", date: "1879-1897", era: "[xix]", area: ["pl", "ru"], type: "po", dif: "2" },  
    { id: 452, event: "Powstanie Trójprzymierza", date: "1882", era: "[xix]", area: ["de", "it", "at"], type: "po", dif: "1" },  
    { id: 453, event: "Rugi pruskie", date: "1885-1890", era: "[xix]", area: ["pl", "de"], type: "po", dif: "2" },  
    { id: 454, event: "Encyklika Rerum Novarum", date: "1891", era: "[xix]", area: ["ko"], type: "sk", dif: "2" },  
    { id: 455, event: "Powstanie PPS i SDKP(iL)", date: "1893", era: "[xix]", area: ["pl"], type: "sk", dif: "1" },  
    { id: 456, event: "Wynalezienie kinematografu", date: "1895", era: "[xix]", area: ["fr"], type: "sk", dif: "1" },  
    { id: 457, event: "Powstanie SL", date: "1895", era: "[xix]", area: ["pl"], type: "sk", dif: "2" },  
    { id: 458, event: "Pierwsze nowożytne Igrzyska Olimpijskie", date: "1896", era: "[xix]", area: ["gr"], type: "sk", dif: "1" },  
    { id: 459, event: "Powstanie Endecji", date: "1897", era: "[xix]", area: ["pl"], type: "sk", dif: "1" },  
    { id: 460, event: "Strajk we Wrześni", date: "1901", era: "[xix]", area: ["pl"], type: "sk", dif: "2" },  
    { id: 461, event: "Pierwszy lot samolotem", date: "1903", era: "[xix]", area: ["us"], type: "sk", dif: "1" },  
    { id: 462, event: "Nagroda Nobla dla Marii Skłodowskiej-Curie", date: "1903", era: "[xix]", area: ["pl"], type: "sk", dif: "2" },  
    { id: 463, event: "Entente Cordiale", date: "1904", era: "[xix]", area: ["fr", "uk"], type: "po" , dif: "1"},  
    { id: 464, event: "Wojna rosyjsko-japońska", date: "1904-1905", era: "[xix]", area: ["ru", "re"], type: "wo", dif: "1" },  
    { id: 465, event: "I Rewolucja w Rosji", date: "1905", era: "[xix]", area: ["ru"], type: "wo", dif: "1" },  
    { id: 466, event: "Powstanie Trójporozumienia", date: "1907", era: "[xix]", area: ["fr", "uk", "ru"], type: "po", dif: "1" },  
    { id: 467, event: "I wojna bałkańska", date: "1912-1913", era: "[xix]",  area: ["at","ru","tu"], type: "wo", dif: "1" },  
    { id: 468, event: "II wojna bałkańska", date: "1913", era: "[xix]",  area: ["at","ru","tu"], type: "wo", dif: "1" },
    { id: 467, event: "zamach na arcyksięcia Franciszka Ferdynanda w Sarajewie", date: "1914", era: "[ww1]", area: ["at"], type: "po", dif: "1" },
    { id: 468, event: "Bitwa nad Tannenbergiem", date: "1914", era: "[ww1]", area: ["de", "ru"], type: "wo", dif: "1" },
    { id: 469, event: "Bitwa nad Marną", date: "1914", era: "[ww1]", area: ["fr"], type: "wo", dif: "1" },
    { id: 470, event: "Wkroczenie I Kompanii Kadrowej do Królestwa Polskiego", date: "1914", era: "[ww1]", area: ["pl"], type: "wo", dif: "1" },
    { id: 471, event: "Utworzenie Legionów Polskich w Austro-Węgrzech", date: "1914", era: "[ww1]", area: ["pl", "at"], type: "po", dif: "1" },
    { id: 472, event: "Bitwa pod Ypres, pierwsze wykorzystanie gazów bojowych", date: "1915", era: "[ww1]", area: ["fr","de"], type: "wo", dif: "1" },
    { id: 473, event: "Bitwa pod Verdun", date: "1916", era: "[ww1]", area: ["fr"], type: "wo", dif: "1" },
    { id: 474, event: "Bitwa jutlandzka", date: "1916", era: "[ww1]", area: ["re"], type: "wo", dif: "2" },
    { id: 475, event: "Bitwa nad Sommą", date: "1916", era: "[ww1]", area: ["fr"], type: "wo", dif: "1" },
    { id: 476, event: "Akt 5 listopada", date: "1916", era: "[ww1]", area: ["pl"], type: "po", dif: "2" },
    { id: 477, event: "Rewolucja lutowa w Rosji i abdykacja Mikołaja II", date: "1917", era: "[ww1]", area: ["ru"], type: "wo", dif: "1" },
    { id: 478, event: "Przystąpienie USA do IWŚ", date: "1917", era: "[ww1]", area: ["us"], type: "po", dif: "1" },
    { id: 479, event: "Rewolucja październikowa", date: "1917", era: "[ww1]", area: ["ru"], type: "wo", dif: "1" },
    { id: 480, event: "Kryzys przysięgowy, powstanie KNP", date: "1917", era: "[ww1]", area: ["pl"], type: "po", dif: "2" },
    { id: 481, event: "ogłoszenie 14-punktów Wilsona", date: "1918", era: "[ww1]", area: ["us"], type: "po", dif: "1" },
    { id: 482, event: "Pokój brzeski", date: "1918", era: "[ww1]", area: ["ru", "de"], type: "po", dif: "1" },
    { id: 483, event: "Abdykacja Wilhelma II", date: "1918", era: "[ww1]", area: ["de"], type: "po", dif: "1" },
    { id: 484, event: "Podpisanie rozejmu w Compiegne", date: "1918", era: "[ww1]", area: ["fr", "de"], type: "po", dif: "1" },
    { id: 485, event: "Przejęcie władzy wojskowej przez Piłsudskiego", date: "1918", era: "[mw]", area: ["pl"], type: "po", dif: "1" },
    { id: 486, event: "Wojna polsko-ukraińska o Lwów i Galicję Wschodnią", date: "1918-1919", era: "[mw]", area: ["pl"], type: "wo", dif: "2" },
    { id: 487, event: "Powstanie wielkopolskie", date: "1918-1919", era: "[mw]", area: ["pl"], type: "wo", dif: "2" },
    { id: 488, event: "Podpisanie traktatu wersalskiego", date: "1919", era: "[mw]", area: ["fr","de","uk"], type: "po", dif: "1" },
    { id: 489, event: "Traktat w Saint Germain", date: "1919", era: "[mw]", area: ["at"], type: "po", dif: "1" },
    { id: 490, event: "Traktat w Neuilly", date: "1919", era: "[mw]", area: ["re"], type: "po", dif: "2" },
    { id: 491, event: "Traktat w Trianon", date: "1920", era: "[mw]", area: ["hu"], type: "po", dif: "2" },
    { id: 492, event: "Traktat w Sevres", date: "1920", era: "[mw]", area: ["tu"], type: "po", dif: "1" },
    { id: 493, event: "Wybuch wojny polsko-bolszewickiej", date: "1919", era: "[mw]", area: ["pl", "ru"], type: "wo", dif: "1" },
    { id: 494, event: "Uchwalenie małej konstytucji", date: "1919", era: "[mw]", area: ["pl"], type: "po", dif: "1" },
    { id: 495, event: "I powstanie śląskie", date: "1919", era: "[mw]", area: ["pl", "de"], type: "wo", dif: "2" },
    { id: 496, event: "Plebiscyty na Warmii, Mazurach i Powiślu", date: "1920", era: "[mw]", area: ["pl", "de"], type: "po", dif: "1" },
    { id: 497, event: "Bitwa Warszawska", date: "1920", era: "[mw]", area: ["pl","ru"], type: "wo", dif: "1" },
    { id: 498, event: "II powstanie śląskie", date: "1920", era: "[mw]", area: ["pl", "de"], type: "wo", dif: "2" },
    { id: 499, event: "Zajęcie wileńszczyzny przez Żeligowskiego", date: "1920", era: "[mw]", area: ["pl", "lt"], type: "wo", dif: "2" },
    { id: 500, event: "Wprowadzenie NEP w Rosji Sowieckiej", date: "1921", era: "[mw]", area: ["ru"], type: "po", dif: "2" },
    { id: 501, event: "Konstytucja marcowa", date: "1921", era: "[mw]", area: ["pl"], type: "po", dif: "1" },
    { id: 502, event: "Traktat w Rydze", date: "1921", era: "[mw]", area: ["pl", "ru"], type: "po", dif: "1" },
{ id: 503, event: "Wojna polsko-bolszewicka", date: "1919-1921", era: "[mw]", area: ["pl", "ru"], type: "wo", dif: "1" },
{ id: 504, event: "Plebiscyt na Górnym Śląsku", date: "1921", era: "[mw]", area: ["pl", "de"], type: "po", dif: "2" },
{ id: 505, event: "III powstanie śląskie", date: "1921", era: "[mw]", area: ["pl", "de"], type: "wo", dif: "2" },
{ id: 506, event: "Traktat w Rapallo", date: "1922", era: "[mw]", area: ["de", "ru"], type: "po", dif: "1" },
{ id: 507, event: "Marsz na Rzym, przejęcie władzy przez Mussoliniego", date: "1922", era: "[mw]", area: ["it"], type: "po", dif: "1" },
{ id: 508, event: "Powstanie ZSRS", date: "1922", era: "[mw]", area: ["ru"], type: "po", dif: "1" },
{ id: 509, event: "Przyłączenie Litwy Środkowej do Polski", date: "1922", era: "[mw]", area: ["pl", "lt"], type: "po", dif: "2" },
{ id: 510, event: "Zabójstwo prezydenta Gabriela Narutowicza", date: "1922", era: "[mw]", area: ["pl"], type: "po", dif: "1" },
{ id: 511, event: "Pucz monachijski", date: "1923", era: "[mw]", area: ["de"], type: "wo", dif: "2" },
{ id: 512, event: "Reforma walutowa Grabskiego", date: "1924", era: "[mw]", area: ["pl"], type: "po", dif: "2" },
{ id: 513, event: "Układ w Locarno", date: "1925", era: "[mw]", area: ["de", "fr"], type: "po", dif: "1" },
{ id: 514, event: "Przewrót majowy", date: "1926", era: "[mw]", area: ["pl"], type: "wo", dif: "1" },
{ id: 515, event: "Ustawy wyjątkowe we Włoszech", date: "1926", era: "[mw]", area: ["it"], type: "in", dif: "1" },
{ id: 516, event: "Nowela sierpniowa", date: "1926", era: "[mw]", area: ["pl"], type: "po", dif: "1" },
{ id: 517, event: "Utworzenie BBWR", date: "1926", era: "[mw]", area: ["pl"], type: "po", dif: "2" },
{ id: 518, event: "Czarny czwartek, początek Wielkiego Kryzysu", date: "1929", era: "[mw]", area: ["us"], type: "sk", dif: "1" },
{ id: 519, event: "Powstanie Centrolewu", date: "1929", era: "[mw]", area: ["pl"], type: "po", dif: "2" },
{ id: 520, event: "Kongres Obrony Prawa i Wolności Ludu, Wybory Brzeskie", date: "1930", era: "[mw]", area: ["pl"], type: "po", dif: "1" },
{ id: 521, event: "Zajęcie Mandżurii przez wojska japońskie", date: "1931", era: "[mw]", area: ["re"], type: "wo", dif: "2" },
{ id: 522, event: "Proces brzeski", date: "1931-1932", era: "[mw]", area: ["pl"], type: "po", dif: "1" },
{ id: 523, event: "Podpisanie polsko-sowieckiego paktu o nieagresji", date: "1932", era: "[mw]", area: ["pl", "ru"], type: "po", dif: "2" },
{ id: 524, event: "Wielki głód na Ukrainie", date: "1932-1933", era: "[mw]", area: ["ru"], type: "sk", dif: "3" },
{ id: 525, event: "Powołanie Adolfa Hitlera na urząd kanclerza Niemiec", date: "1933", era: "[mw]", area: ["de"], type: "po", dif: "1" },
{ id: 526, event: "Noc długich noży", date: "1934", era: "[mw]", area: ["de"], type: "po", dif: "2" },
{ id: 527, event: "Polsko-niemiecki pakt o nieagresji", date: "1934", era: "[mw]", area: ["pl", "de"], type: "po", dif: "1" },
{ id: 528, event: "Wielka czystka w ZSRS", date: "1934-1939", era: "[mw]", area: ["ru"], type: "po", dif: "1" },
{ id: 529, event: "Przywrócenie powszechnej służby wojskowej w Niemczech, powstanie Wehrmachtu", date: "1935", era: "[mw]", area: ["de"], type: "po" },
{ id: 530, event: "Uchwalenie ustaw norymberskich", date: "1935", era: "[mw]", area: ["de"], type: "po", dif: "1" },
{ id: 531, event: "Atak Włoch na Abisynię", date: "1935", era: "[mw]", area: ["it"], type: "wo", dif: "2" },
{ id: 532, event: "Wojna domowa w Hiszpanii", date: "1936-1939", era: "[mw]", area: ["es"], type: "wo", dif: "1" },
{ id: 533, event: "Remilitaryzacja Nadrenii", date: "1936", era: "[mw]", area: ["de"], type: "po", dif: "1" },
{ id: 534, event: "Pakt antykominternowski", date: "1936", era: "[mw]", area: ["de", "re"], type: "po" , dif: "1"},
{ id: 535, event: "Początek budowy COP", date: "1936", era: "[mw]", area: ["pl"], type: "po", dif: "2" },
{ id: 536, event: "Anschluss Austrii", date: "1938", era: "[mw]", area: ["de", "at"], type: "po", dif: "1" },
{ id: 537, event: "Konferencja monachijska", date: "1938", era: "[mw]", area: ["de", "fr", "it", "uk"], type: "po", dif: "1" },
{ id: 538, event: "Noc kryształowa", date: "1938", era: "[mw]", area: ["de"], type: "sk", dif: "1" },
{ id: 539, event: "Zajęcie Zaolzia", date: "1938", era: "[mw]", area: ["pl", "cz"], type: "wo", dif: "1" },
{ id: 540, event: "Rozbiór Czechosłowacji", date: "1939", era: "[mw]", area: ["de", "cz", "pl"], type: "po", dif: "1" },
{ id: 541, event: "Zajęcie Albanii", date: "1939", era: "[mw]", area: ["it", "al"], type: "wo", dif: "2" },
{ id: 542, event: "Pakt Ribbentrop-Mołotow", date: "1939", era: "[mw]", area: ["de", "ru"], type: "po", dif: "1" },
{ id: 543, event: "Wybuch II wojny światowej", date: "1939", era: "[ww2]", area: ["pl", "de"], type: "wo", dif: "1" },
{ id: 544, event: "Atak Niemiec na Polskę", date: "1939", era: "[ww2]", area: ["pl", "de"], type: "wo", dif: "1" },
{ id: 545, event: "Wojna zimowa", date: "1939-1940", era: "[ww2]", area: ["ru"], type: "wo", dif: "1" },
{ id: 546, event: "Utworzenie Służby Zwycięstwu Polski, Związku Walki Zbrojnej", date: "1939", era: "[ww2]", area: ["pl"], type: "po", dif: "2" },
{ id: 547, event: "Powołanie rządu emigracyjnego gen. Władysława Sikorskiego", date: "1939", era: "[ww2]", area: ["pl"], type: "po", dif: "2" },
{ id: 548, event: "Układ o granicach i przyjaźni między III Rzeszą i ZSRS", date: "1939", era: "[ww2]", area: ["de", "ru"], type: "po", dif: "2" },
{ id: 549, event: "Atak Niemiec na Danię i Norwegię", date: "1940", era: "[ww2]", area: ["de"], type: "wo", dif: "1" },
{ id: 550, event: "Atak Niemiec na Belgię, Holandię, Luksemburg i Francję", date: "1940", era: "[ww2]", area: ["de", "fr"], type: "wo", dif: "1" },
{ id: 551, event: "Włączenie państw bałtyckich i Besarabii do ZSRS", date: "1940", era: "[ww2]", area: ["ru"], type: "po", dif: "1" },
{ id: 552, event: "Bitwa o Anglię", date: "1940", era: "[ww2]", area: ["uk", "de"], type: "wo", dif: "1" },
{ id: 553, event: "Agresja Włoch na Grecję", date: "1940", era: "[ww2]", area: ["it", "gr"], type: "wo", dif: "2" },
{ id: 554, event: "Wymordowanie polskich jeńców wojennych w Katyniu", date: "1940", era: "[ww2]", area: ["pl", "ru"], type: "wo", dif: "1" },
{ id: 555, event: "Utworzenie Auschwitz", date: "1940", era: "[ww2]", area: ["pl","de"], type: "po", dif: "1" },
{ id: 556, event: "Agresja państw Osi na Grecję i Jugosławię", date: "1941", era: "[ww2]", area: ["gr", "it", "de"], type: "wo", dif: "2" },
{ id: 557, event: "Operacja Barbarossa", date: "1941", era: "[ww2]", area: ["de", "ru"], type: "wo", dif: "1" },
{ id: 558, event: "Podpisanie karty atlantyckiej", date: "1941", era: "[ww2]", area: ["uk", "us"], type: "po", dif: "2" },
{ id: 559, event: "Nalot na Pearl Harbor", date: "1941", era: "[ww2]", area: ["us", "re"], type: "wo", dif: "1" },
{ id: 560, event: "Układ Sikorski-Majski", date: "1941", era: "[ww2]", area: ["pl", "ru"], type: "po", dif: "1" },
{ id: 561, event: "Konferencja w Wannsee", date: "1942", era: "[ww2]", area: ["de"], type: "po", dif: "1" },
{ id: 562, event: "Bitwa o Midway", date: "1942", era: "[ww2]", area: ["us", "re"], type: "wo", dif: "1" },
{ id: 563, event: "Bitwa o Stalingrad", date: "1942-1943", era: "[ww2]", area: ["ru", "de"], type: "wo", dif: "1" },
{ id: 564, event: "Operacja Torch", date: "1942", era: "[ww2]", area: ["us", "uk","de","it"], type: "wo", dif: "2" },
{ id: 565, event: "Utworzenie PPR", date: "1942", era: "[ww2]", area: ["pl"], type: "po", dif: "1" },
{ id: 566, event: "Przemianowanie ZWZ na Armię Krajową", date: "1942", era: "[ww2]", area: ["pl"], type: "po", dif: "2" },
{ id: 567, event: "Utworzenie Żegoty", date: "1942", era: "[ww2]", area: ["pl"], type: "po", dif: "2" },
{ id: 568, event: "Bitwa na Łuku Kurskim", date: "1943", era: "[ww2]", area: ["ru", "de"], type: "wo", dif: "2" },
{ id: 569, event: "Desant aliantów na Sycylię", date: "1943", era: "[ww2]", area: ["it"], type: "wo", dif: "2" },
{ id: 570, event: "Kapitulacja Włoch", date: "1943", era: "[ww2]", area: ["it"], type: "po", dif: "1" },
{ id: 571, event: "Konferencja w Teheranie", date: "1943", era: "[ww2]", area: ["us", "uk", "ru"], type: "po", dif: "1" },
{ id: 572, event: "Powstanie w getcie warszawskim", date: "1943", era: "[ww2]", area: ["pl"], type: "wo", dif: "1" },
{ id: 573, event: "Katastrofa w Gibraltarze, śmierć Sikorskiego", date: "1943", era: "[ww2]", area: ["pl"], type: "po", dif: "2" },
{ id: 574, event: "Rzeź wołyńska", date: "1943", era: "[ww2]", area: ["pl"], type: "wo", dif: "1" },
{ id: 575, event: "D-Day, operacja Market Garden", date: "1944", era: "[ww2]", area: ["fr", "uk", "us"], type: "wo", dif: "1" },
{ id: 576, event: "Początek akcji 'Burza'", date: "1944", era: "[ww2]", area: ["pl"], type: "wo", dif: "2" },
{ id: 577, event: "Bitwa o Monte Cassino", date: "1944", era: "[ww2]", area: ["it","pl"], type: "wo", dif: "1" },
{ id: 578, event: "Manifest PKWN", date: "1944", era: "[ww2]", area: ["pl"], type: "po", dif: "2" },
{ id: 579, event: "Powstanie Warszawskie", date: "1944", era: "[ww2]", area: ["pl"], type: "wo", dif: "1" },
{ id: 580, event: "Konferencja w Jałcie", date: "1945", era: "[ww2]", area: ["ru", "uk", "us"], type: "po", dif: "1" },
{ id: 581, event: "Bitwa o Berlin, Śmierć Adolfa Hitlera", date: "1945", era: "[ww2]", area: ["de"], type: "wo", dif: "1" },
{ id: 582, event: "Konferencja w Poczdamie", date: "1945", era: "[ww2]", area: ["de", "uk", "us", "ru"], type: "po" },
{ id: 583, event: "Zrzucenie bomb atomowych na Hiroshimę i Nagasaki", date: "1945", era: "[ww2]", area: ["re","us"], type: "wo", dif: "1" },
{ id: 584, event: "Kapitulacja Niemiec", date: "1945", era: "[ww2]", area: ["de"], type: "po", dif: "1" },
{ id: 585, event: "Kapitulacja Japonii", date: "1945", era: "[ww2]", area: ["de"], type: "po", dif: "1" },
{ id: 586, event: "Powstanie ONZ", date: "1945", era: "[pw]", area: ["us"], type: "sk", dif: "1" },
{ id: 587, event: "Rozwiązanie AK", date: "1945", era: "[pw]", area: ["pl"], type: "po", dif: "2" },
{ id: 588, event: "Powstanie TRJN", date: "1945", era: "[pw]", area: ["pl"], type: "po", dif: "1" },
{ id: 589, event: "Początek zimnej wojny(przemówienie Churchilla)", date: "1946", era: "[pw]", area: ["us", "ru"], type: "po", dif: "1" },
{ id: 590, event: "Sfałszowane prokomunistyczne referendum ludowe", date: "1946", era: "[pw]", area: ["pl"], type: "po", dif: "2" },
{ id: 591, event: "Ogłoszenie doktryny Trumana", date: "1947", era: "[pw]", area: ["us"], type: "po", dif: "2" },
{ id: 592, event: "Plan Marshalla", date: "1947", era: "[pw]", area: ["us", "fr","de"], type: "po", dif: "1" },
{ id: 593, event: "Powstanie Indii i Pakistanu", date: "1947", era: "[pw]", area: ["re"], type: "po", dif: "2" },
{ id: 594, event: "Sfałszowane wybory do Sejmu Ustawodawczego(powojnie)", date: "1947", era: "[pw]", area: ["pl"], type: "in" },
{ id: 595, event: "Akcja Wisła", date: "1947", era: "[pw]", area: ["pl"], type: "po", dif: "1" },
{ id: 596, event: "Proklamacja niepodległości Izraela", date: "1948", era: "[pw]", area: ["re"], type: "po", dif: "2" },
{ id: 597, event: "Kryzys berliński", date: "1948", era: "[pw]", area: ["de", "us", "ru"], type: "po", dif: "1" },
{ id: 598, event: "Utworzenie PZPR", date: "1948", era: "[pw]", area: ["pl"], type: "po", dif: "1" },
{ id: 599, event: "Powstanie RWPG", date: "1949", era: "[pw]", area: ["ru", "pl","cz"], type: "po", dif: "2" },
{ id: 600, event: "powstanie NATO", date: "1949", era: "[pw]", area: ["us", "fr","uk","de"], type: "po", dif: "1" },
{ id: 601, event: "powstanie RFN", date: "1949", era: "[pw]", area: ["de"], type: "po", dif: "1" },
{ id: 602, event: "powstanie ChRL", date: "1949", era: "[pw]", area: ["re"], type: "po", dif: "1" },
{ id: 603, event: "Powstanie NRD", date: "1949", era: "[pw]", area: ["de"], type: "po", dif: "1" },
{ id: 604, event: "Wojna w Korei", date: "1950-1953", era: "[pw]", area: ["re","ru", "us"], type: "wo", dif: "1" },
{ id: 605, event: "Powołanie Europejskiej Wspólnoty Węgla i Stali", date: "1951", era: "[pw]", area: ["fr","de","it"], type: "po", dif: "2" },
{ id: 606, event: "Uchwalenie konstytucji PRL", date: "1952", era: "[pw]", area: ["pl"], type: "po", dif: "1" },
{ id: 607, event: "Śmierć Stalina", date: "1953", era: "[pw]", area: ["ru"], type: "po", dif: "1" },
{ id: 608, event: "Utworzenie Układu Warszawskiego", date: "1955", era: "[pw]", area: ["ru", "pl","cz"], type: "po", dif: "1" },
{ id: 609, event: "XX zjazd KPZS, krytyka Stalina przez Chruszczowa", date: "1956", era: "[pw]", area: ["ru"], type: "po", dif: "2" },
{ id: 610, event: "Rewolucja Węgierska", date: "1956", era: "[pw]", area: ["hu"], type: "wo", dif: "1" },
{ id: 611, event: "Kryzys sueski", date: "1956", era: "[pw]", area: ["uk", "fr", "re"], type: "wo", dif: "2" },
{ id: 612, event: "Poznański czerwiec", date: "1956", era: "[pw]", area: ["pl"], type: "po", dif: "1" },
{ id: 613, event: "Gomułka I sekretarzem KC PZPR", date: "1956", era: "[pw]", area: ["pl"], type: "po", dif: "1" },
{ id: 614, event: "Podpisanie traktatów rzymskich – powstanie EWG i Euroatomu", date: "1957", era: "[pw]", area: ["fr","de","uk","it"], type: "po", dif: "1" },
{ id: 615, event: "Początek polityki wielkiego skoku w Chinach", date: "1958", era: "[pw]", area: ["re"], type: "po", dif: "2" },
{ id: 616, event: "Rok Afryki", date: "1960", era: "[pw]", area: ["re"], type: "po", dif: "2" },
{ id: 617, event: "Pierwszy lot załogowy w Kosmos", date: "1961", era: "[pw]", area: ["ru"], type: "sk", dif: "1" },
{ id: 618, event: "Budowa Muru Berlińskiego", date: "1961", era: "[pw]", area: ["de"], type: "po", dif: "2" },
{ id: 619, event: "Kryzys kubański", date: "1962", era: "[pw]", area: ["us", "ru"], type: "wo", dif: "1" },
{ id: 620, event: "Sobór Watykański II", date: "1962-1965", era: "[pw]", area: ["ko"], type: "po", dif: "2" },
{ id: 621, event: "Wojna w Wietnamie", date: "1964-1973", era: "[pw]", area: ["re", "us"], type: "wo", dif: "1" },
{ id: 622, event: "Rewolucja kulturalna w Chinach", date: "1966", era: "[pw]", area: ["re"], type: "sk", dif: "2" },
{ id: 623, event: "Wojna sześciodniowa na Bliskim Wschodzie", date: "1967", era: "[pw]", area: ["re","us","ru"], type: "wo" , dif: "1"},
{ id: 624, event: "Rewolta studencka w Europie Zachodniej i USA", date: "1968", era: "[pw]", area: ["us", "fr","pl","uk","de"], type: "sk", dif: "2" },
{ id: 625, event: "Stłumienie Praskiej Wiosny", date: "1968", era: "[pw]", area: ["cz", "ru"], type: "wo", dif: "1" },
{ id: 626, event: "Wydarzenia marcowe w Polsce", date: "1968", era: "[pw]", area: ["pl"], type: "po", dif: "1" },
{ id: 627, event: "Lądowanie Apollo 11 na Księżycu", date: "1969", era: "[pw]", area: ["us"], type: "sk", dif: "1" },
{ id: 628, event: "Uznanie przez RFN zachodniej granicy Polski", date: "1970", era: "[pw]", area: ["pl", "de"], type: "po", dif: "2" },
{ id: 629, event: "Strajki na wybrzeżu", date: "1970", era: "[pw]", area: ["pl"], type: "po", dif: "1" },
{ id: 630, event: "Gierek I sekretarzem KC PZPR", date: "1970", era: "[pw]", area: ["pl"], type: "po", dif: "1" },
{ id: 631, event: "Wojna Jom Kippur", date: "1973", era: "[pw]", area: ["re","us"], type: "wo", dif: "1" },
{ id: 632, event: "Początek kryzysu paliwowego", date: "1973", era: "[pw]", area: ["us"], type: "po", dif: "1" },
{ id: 633, event: "Rewolucja goździków w Portugalii", date: "1974", era: "[pw]", area: ["re"], type: "wo", dif: "1" },
{ id: 634, event: "Podpisanie aktu końcowego KBWE", date: "1975", era: "[pw]", area: ["uk", "us","fr","de"], type: "po", dif: "2" },
{ id: 635, event: "Koniec dyktatury Franco w Hiszpanii", date: "1975", era: "[pw]", area: ["es"], type: "po", dif: "2" },
{ id: 636, event: "Nowelizacja Konstytucji PRL", date: "1976", era: "[pw]", area: ["pl"], type: "po", dif: "2" },
{ id: 637, event: "Robotnicze wystąpienia w Radomiu, Ursusie i Płocku", date: "1976", era: "[pw]", area: ["pl"], type: "po", dif: "1" },
{ id: 638, event: "Powstanie Komitetu Obrony Robotników", date: "1976", era: "[pw]", area: ["pl"], type: "sk", dif: "1" },
{ id: 639, event: "Powołanie Ruchu Obrony Praw Człowieka i Obywatela", date: "1977", era: "[pw]", area: ["pl"], type: "sk", dif: "2" },
{ id: 640, event: "Powstanie Wolnych Związków Zawodowych Wybrzeża", date: "1978", era: "[pw]", area: ["pl"], type: "sk", dif: "2" },
{ id: 641, event: "Wojtyła Papieżem", date: "1978", era: "[pw]", area: ["pl", "ko"], type: "sk", dif: "1" },
{ id: 642, event: "Rewolucja islamska w Iranie", date: "1979", era: "[pw]", area: ["re"], type: "wo", dif: "2" },
{ id: 643, event: "Interwencja ZSRR w Afganistanie", date: "1979-1989", era: "[pw]", area: ["re", "ru"], type: "wo", dif: "2" },
{ id: 644, event: "Pierwsza pielgrzymka JP2 do Polski", date: "1979", era: "[pw]", area: ["pl"], type: "sk", dif: "2" },
{ id: 645, event: "Strajk w Stoczni Gdańskiej", date: "1980", era: "[pw]", area: ["pl"], type: "po", dif: "1" },
{ id: 646, event: "Porozumienia sierpniowe, powstanie NSZZ Solidarności", date: "1980", era: "[pw]", area: ["pl"], type: "po", dif: "1" },
{ id: 647, event: "Zamach na JP2", date: "1981", era: "[pw]", area: ["ko", "pl"], type: "sk", dif: "3" },
{ id: 648, event: "Stan wojenny w Polsce", date: "1981-1983", era: "[pw]", area: ["pl"], type: "wo", dif: "1" },
{ id: 649, event: "Pacyfikacja kopalni Wujek", date: "1981", era: "[pw]", area: ["pl"], type: "po", dif: "1" },
{ id: 650, event: "Michaił Gorbaczow sekretarzem generalnym KC KPZR", date: "1985", era: "[pw]", area: ["ru"], type: "po", dif: "2" },
{ id: 651, event: "Podpisanie układu w Schengen", date: "1985", era: "[pw]", area: ["uk","fr","de"], type: "po", dif: "2" },
{ id: 652, event: "Katastrofa w Czarnobylu", date: "1986", era: "[pw]", area: ["ru"], type: "sk", dif: "1" },
{ id: 653, event: "Masakra na placu Tiananmen", date: "1989", era: "[pw]", area: ["re"], type: "wo", dif: "1" },
{ id: 654, event: "Jesień Narodów", date: "1989", era: "[pw]", area: ["pl","de","hu","cz","lt"], type: "sk", dif: "1" },
{ id: 655, event: "Obrady Okrągłego Stołu", date: "1989", era: "[pw]", area: ["pl"], type: "po", dif: "1" },
{ id: 656, event: "I tura częściowo wolnych wyborów", date: "1989", era: "[pw]", area: ["pl"], type: "po", dif: "1" },
{ id: 657, event: "Powołanie rządu Tadeusza Mazowieckiego", date: "1989", era: "[pw]", area: ["pl"], type: "po", dif: "2" },
{ id: 658, event: "Ogłoszenie niepodległości przez Litwę", date: "1990", era: "[ff]", area: ["lt"], type: "po", dif: "1" },
{ id: 659, event: "Zjednoczenie Niemiec (XXw.)", date: "1990", era: "[ff]", area: ["de"], type: "po", dif: "1" },
{ id: 660, event: "Rozwiązanie PZPR, realizacja planu Balcerowicza", date: "1990", era: "[ff]", area: ["pl"], type: "po", dif: "2" },
{ id: 661, event: "Zaprzysiężenie Lecha Wałęsy na prezydenta RP", date: "1990", era: "[ff]", area: ["pl"], type: "po", dif: "1" },
{ id: 662, event: "I wojna w Zatoce Perskiej", date: "1991", era: "[ff]", area: ["re", "us"], type: "wo", dif: "2" },
{ id: 663, event: "Rozpad ZSRR", date: "1991", era: "[ff]", area: ["ru"], type: "po", dif: "1" },
{ id: 664, event: "Powstanie WNP", date: "1991", era: "[ff]", area: ["ru"], type: "po", dif: "2" },
{ id: 665, event: "Wojna w Jugosławii", date: "1991-1995", era: "[ff]", area: ["re"], type: "wo", dif: "1" },
{ id: 666, event: "Podpisanie traktatu z Maastricht o powołaniu Unii Europejskiej", date: "1992", era: "[ff]", area: ["eu"], type: "po" },
{ id: 667, event: "Rozpad Czechosłowacji", date: "1993", era: "[ff]", area: ["cz"], type: "po", dif: "1" },
{ id: 668, event: "Opuszczenie Polski przez ostatnie oddziały rosyjskie", date: "1993", era: "[ff]", area: ["pl"], type: "sk", dif: "1" },
{ id: 669, event: "I wojna czeczeńska", date: "1994-1996", era: "[ff]", area: ["ru"], type: "wo", dif: "2" },
{ id: 670, event: "Uchwalenie konstytucji RP", date: "1997", era: "[ff]", area: ["pl"], type: "po", dif: "1" },
{ id: 671, event: "Przyjęcie Polski do NATO", date: "1999", era: "[ff]", area: ["pl"], type: "po", dif: "1" },
{ id: 672, event: "II wojna czeczeńska", date: "1999-2009", era: "[ff]", area: ["ru"], type: "wo", dif: "2" },
{ id: 673, event: "zamach na World Trade Center", date: "2001", era: "[ff]", area: ["us"], type: "sk", dif: "1" },
{ id: 674, event: "Pomarańczowa rewolucja na Ukrainie", date: "2004", era: "[ff]", area: ["re"], type: "po", dif: "1" },
{ id: 675, event: "Przyjęcie Polski do UE", date: "2004", era: "[ff]", area: ["pl"], type: "po", dif: "1" },
{ id: 676, event: "Przystąpienie Polski do strefy Schengen", date: "2007", era: "[ff]", area: ["pl"], type: "po", dif: "1" },
{ id: 677, event: "Wojna Gruzji z Rosją, Abchazją i Osetią Południową", date: "2008", era: "[ff]", area: ["ru"], type: "wo", dif: "2" },
{ id: 678, event: "Światowy kryzys finansowy(XXIw.)", date: "2008", era: "[ff]", area: ["us"], type: "sk", dif: "1" },
{ id: 679, event: "Początek Arabskiej Wiosny Ludów", date: "2010", era: "[ff]", area: ["re"], type: "wo", dif: "1" },
{ id: 680, event: "Katastrofa smoleńska", date: "2010", era: "[ff]", area: ["pl"], type: "po", dif: "1" },
{ id: 681, event: "Wybuch wojny domowej w Syrii", date: "2011", era: "[ff]", area: ["sy"], type: "wo", dif: "2" },
{ id: 682, event: "Euromajdan", date: "2013", era: "[ff]", area: ["re"], type: "wo", dif: "2" },
{ id: 683, event: "Aneksja Krymu", date: "2014", era: "[ff]", area: ["ru"], type: "wo", dif: "1" },
               ];


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
        document.querySelector('.menu').style.display = 'block';
        document.getElementById('logout-btn').style.display = 'inline-block';
        // Dodaj span z klasą gold-username
        userInfoDiv.innerHTML = `Zalogowano jako: <span class="gold-username">${user.displayName || user.email}</span>`;
        userInfoDiv.style.display = 'block';
    } else {
        document.getElementById('firebase-login').style.display = 'block';
        document.querySelector('.menu').style.display = 'none';
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

    document.querySelector('.menu').style.display = 'block';

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
}); // <-- To jest JEDYNE zamknięcie DOMContentLoaded!
// PRZYCISK DO UKRYTYCH OPCJI
 
 // <-- To jest zamknięcie JEDYNEGO bloku DOMContentLoaded

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


function startFlashcards(selectedMode) {
const flashcardContent = document.getElementById('flashcardContent');
    if (flashcardContent) {
        flashcardContent.innerHTML = ''; // Usuń stare pytanie
    }

const timerDisplay = document.getElementById('live-timer');
    if (timerDisplay) {
        timerDisplay.textContent = 'Czas: 00:00'; // Zresetuj zegar
    }
    mode = selectedMode;
    groupFilter = document.querySelector('input[name="group"]:checked').value;
    eraFilters = Array.from(document.querySelectorAll('input[name="era"]:checked')).map((cb) => `[${cb.value}]`);
    console.log("Selected Mode:", mode);
    console.log("Group Filter:", groupFilter);
    console.log("Era Filters:", eraFilters);
    sortMode = document.querySelector('input[name="sort"]:checked').value;
    currentCardIndex = 0;
    wrongAnswers = [];
    solvedThisRound = 0;
        sessionCards = getFilteredFlashcards();
    const noFlashcardsMsg = document.getElementById('no-flashcards-message');
    if (sessionCards.length === 0) {
        if (noFlashcardsMsg) {
            noFlashcardsMsg.style.display = 'block';
        }
        // NIE chowaj menu!
        return;
    } else {
        if (noFlashcardsMsg) {
            noFlashcardsMsg.style.display = 'none';
        }
        // Tylko jeśli są fiszki, chowaj menu:
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
    }
    sessionAttempts = {};
    currentRound = 0;
    console.log("Session Cards Before Sorting:", sessionCards);

    sessionCards = sortFlashcards(sessionCards, sortMode);

    console.log("Session Cards After Sorting:", sessionCards);

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
    chartInstance.update(); // Aktualizacja wykresu
    initializeProgressBar();
    updateProgressBar();
    updateRoundInfo();
    startTimer(); // Rozpocznij stoper
    console.log('Aktualny indeks:', currentCardIndex);
    showNextCard();
}


//PRZYGOTOWANIE FISZEK

function getFilteredFlashcards() {
    console.log("Group Filter:", groupFilter);
    console.log("Era Filters:", eraFilters);

    const countryFilter = document.querySelector('input[name="country"]:checked')?.value || 'all';
    
    // TYPY
    const selectedTypes = Array.from(document.querySelectorAll('input[name="type"]:checked')).map(cb => cb.value);

    // FILTROWANIE
    const filteredCards = flashcards.filter(card => {
        // Sprawdzanie dopasowania grupy
        const groupMatch = groupFilter === 'all' || 
            (groupFilter === 'pl' && card.area.includes('pl')) || 
            (groupFilter === 'world' && !card.area.includes('pl'));

        // Sprawdzanie dopasowania epoki
        const eraMatch = eraFilters.length === 0 || eraFilters.includes(card.era);

        // Sprawdzanie dopasowania kraju
       const countryMatch = (() => {
    // JAK NIE MA KONKRETNYCH KRAJOW TO GRUPAMI
    if (countryFilters.length === 0) {
        return groupFilter === 'all' || 
               (groupFilter === 'pl' && card.area.includes('pl')) || 
               (groupFilter === 'world' && !card.area.includes('pl'));
    }

    // KONKRETNE KRAJE
    return countryFilters.some(country => card.area.includes(country));
})();



        // TYP
        const typeMatch = selectedTypes.length === 0 || selectedTypes.includes(card.type);
        // PT
        const difficultyMatch = difficultyFilters.length === 0 || difficultyFilters.includes(String(card.dif));

        // ZWROT
        return groupMatch && eraMatch && countryMatch && typeMatch && difficultyMatch;
    });

    // DUPLIKATY
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

    let wasCorrect = normalizeAnswer(userInput) === normalizeAnswer(correctAnswer);

    if (wasCorrect) {
        document.getElementById('flashcardContent').innerHTML += `<p class="correct">Poprawnie!</p>`;
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

// --- poprawiony showSummary ---
function showSummary() {
    hideInput();
    hideButtons();
    stopTimer();
    document.querySelector('.flashcards').style.display = 'none';
    document.querySelector('.menu').style.display = 'none'; // <-- Dodaj to!
    document.querySelector('.summary').style.display = 'block';

    summaryContent = document.getElementById('summaryContent');
    summaryContent.innerHTML = '';

    // Czas sesji
    const endTime = new Date();
    const totalTime = Math.floor((endTime - startTime) / 1000);
    const minutes = Math.floor(totalTime / 60);
    const seconds = totalTime % 60;
    summaryContent.innerHTML += `
        <li><strong>Całkowity czas sesji:</strong> ${minutes} min ${seconds} sek</li>
    `;

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
        const card = flashcards.find(c => c.id === cardId);
        if (!card) return;
        const attempts = sessionAttempts[cardId] || 0;

        // Fiszka jest uznana za odgadniętą w danej turze TYLKO jeśli:
        // - answerRounds[cardId] == tura
        // - completedAnswers[cardId] === true
        // - NIE znajduje się w wrongAnswers (czyli nie została pominięta w powtórce)
        // Jeśli jest w wrongAnswers na końcu sesji, to NIE jest odgadnięta, nawet jeśli była poprawna w 1 turze!

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
            summaryContent.innerHTML += `<h3>Tura ${round} – odgadnięte:</h3><ul>`;
            roundMap[round].forEach(card => {
                const mainInfo = mode === 'eventToDate'
                    ? `<strong>${card.event}</strong> (${card.date})`
                    : `<strong>${card.date}</strong>: ${card.event}`;
                summaryContent.innerHTML += `<li style="color: ${round === 1 ? 'green' : 'lightgreen'};">${mainInfo}</li>`;
            });
            summaryContent.innerHTML += `</ul>`;
        }
    }

    // Niepoprawne (nieodpowiedziane w powtórce, a wcześniej niepoprawne)
    if (wrongList.length > 0) {
        summaryContent.innerHTML += `<h3>Niepoprawne:</h3><ul>`;
        wrongList.forEach(card => {
            const mainInfo = mode === 'eventToDate'
                ? `<strong>${card.event}</strong> (${card.date})`
                : `<strong>${card.date}</strong>: ${card.event}`;
            summaryContent.innerHTML += `<li style="color: orange;">${mainInfo}</li>`;
        });
        summaryContent.innerHTML += `</ul>`;
    }

    // Nieodpowiedziane (nigdy nie podjęto próby)
    if (unansweredList.length > 0) {
        summaryContent.innerHTML += `<h3>Nieodpowiedziane:</h3><ul>`;
        unansweredList.forEach(card => {
            const mainInfo = mode === 'eventToDate'
                ? `<strong>${card.event}</strong> (${card.date})`
                : `<strong>${card.date}</strong>: ${card.event}`;
            summaryContent.innerHTML += `<li style="color: gray;">${mainInfo}</li>`;
        });
        summaryContent.innerHTML += `</ul>`;
    }

    // Usuń stary wykres jeśli istnieje
    if (chartInstance2) chartInstance2.destroy();
    if (chartInstance) chartInstance.destroy();

    // Stwórz nowy wykres dla podsumowania
    const ctx2 = document.getElementById('resultsChart2').getContext('2d');
    chartInstance = new Chart(ctx2, {
        type: 'pie',
        data: {
            labels: ['Poprawne', 'Niepoprawne'],
            datasets: [{
                data: [correctAnswers.count, incorrectAnswers.count],
                backgroundColor: ['#4caf50', '#f44336'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true
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
const user = auth.currentUser;
if (user) {
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
fetchLeaderboard();
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
    // Zbierz ID fiszek z tej sesji
    const sessionCardIds = Object.keys(sessionAttempts).map(Number);

    // Zbierz fiszki nieodgadnięte w 1. turze lub nieodpowiedziane w ogóle
    const retryCards = sessionCardIds
        .map(cardId => flashcards.find(c => c.id === cardId))
        .filter(card => {
            // Jeśli nie ma odpowiedzi lub była błędna w 1. turze
            const wasWrong = completedAnswers[card.id] !== true || (typeof answerRounds !== 'undefined' && answerRounds[card.id] !== 1);
            return wasWrong;
        });

    if (retryCards.length === 0) {
        alert("Nie ma fiszek do powtórzenia!");
        return;
    }

    // Ukryj podsumowanie, pokaż fiszki
    document.querySelectorAll('.summary').forEach(el => el.style.display = 'none');
    document.querySelector('.flashcards').style.display = 'block';

    showInput();
    sessionCards = retryCards;
    currentCardIndex = 0;
    
    // Reset prób i odpowiedzi
    sessionAttempts = {};
    completedAnswers = {};
    retryCards.forEach(card => {
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
    document.querySelector(".menu").style.display = "block";
    document.querySelector(".epoki").style.display = "block";
    document.querySelector(".opcjonalne").style.display = "block";
    document.querySelector(".sortowanie").style.display = "block";
    document.querySelector(".ni").style.display = "block";
    document.querySelector(".dif").style.display = "block";
    document.querySelector(".dif2").style.display = "block";
    document.querySelector(".flashcards").style.display = "none";
    // Ukryj podsumowanie po klasie (nie id!)
    document.querySelectorAll(".summary").forEach(el => el.style.display = "none");
    document.getElementById("advancedOptionsMenu").classList.add("hidden");
    resetSession();
}







