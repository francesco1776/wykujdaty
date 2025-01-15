const flashcards = [
    { id: 1, event: "Unia Lubelska", date: "1569", era: "[xvi]", area: ["pl"], type: "po" },
    { id: 2, event: "Upadek Cesarstwa Zachodniorzymskiego", date: "476", era: "[st]", area: ["it"], type: "in" },
    { id: 3, event: "Bitwa pod Warną", date: "1444", era: "[sm]", area: ["pl", "tu"], type: "bi" },
    { id: 4, event: "III rozbiór Polski", date: "1795", era: "[xviii]", area: ["pl", "ru", "at"], type: "po" },
    { id: 5, event: "Konfederacja Targowicka", date: "1792", era: "[xviii]", area: ["pl"], type: "po" },
    { id: 6, event: "Powstanie USA", date: "1776", era: "[xviii]", area: ["us"], type: "in" },
    { id: 7, event: "Uchwalenie Wielkiej Karty Swobód", date: "1215", era: "[sm]", area: ["an"], type: "in" },
    { id: 8, event: "Bitwa pod Maratonem", date: "490 p.n.e", era: "[st]", area: ["gr"], type: "bi" },
    { id: 9, event: "Traktat w Verdun", date: "843", era: "[sm]", area: ["fr","de"], type: "po" },
    { id: 10, event: "Bitwa pod Termopilami i Salaminą", date: "480 p.n.e", era: "[st]", area: ["gr"], type: "bi" },
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
    { id: 41, event: "Unia polsko-saska", date: "1697-1763", era: "[xviii]", area: ["pl", "de"], type: "po" },
    { id: 42, event: "Konfederacje: warszawska i sandomierska", date: "1704", era: "[xviii]", area: ["pl"], type: "po" },
    { id: 43, event: "Abdykacja Augusta II po wkroczeniu wojsk szwedzkich do Saksonii", date: "1706", era: "[xviii]", area: ["pl", "de", "se"], type: "po" },
    { id: 44, event: "Konfederacja tarnogrodzka", date: "1715", era: "[xviii]", area: ["pl"], type: "po" },
    { id: 45, event: "Sejm Niemy", date: "1717", era: "[xviii]", area: ["pl"], type: "po" },
    { id: 46, event: "Odebranie praw dysydentom", date: "1733", era: "[xviii]", area: ["pl"], type: "po" },
    { id: 47, event: "Panowanie Augusta II Mocnego", date: "1697-1733", era: "[xviii]", area: ["pl"], type: "pa" },
    { id: 48, event: "Panowanie Augusta III", date: "1733-1764", era: "[xviii]", area: ["pl"], type: "pa" },
    { id: 49, event: "Sejm pacyfikacyjny uznający Augusta III jedynym legalnym władcą polski", date: "1736", era: "[xviii]", area: ["pl"], type: "po" },
    { id: 50, event: "Stanisław Leszczyński wydaje 'Głos Wolny Wolność Ubezpieczający'", date: "1743", era: "[xviii]", area: ["pl"], type: "in" },
    { id: 51, event: "Założenie Collegium Nobilium przez Stanisława Konarskiego", date: "1740", era: "[xviii]", area: ["pl"], type: "na" },
    { id: 52, event: "Otwarcie Biblioteki Załuskich", date: "1747", era: "[xviii]", area: ["pl"], type: "na" },
    { id: 53, event: "Panowanie Stanisława Augusta Poniatowskiego", date: "1764-1795", era: "[xviii]", area: ["pl"], type: "pa" },
    { id: 54, event: "Powstanie Szkoły Rycerskiej", date: "1765", era: "[xviii]", area: ["pl"], type: "na" },
    { id: 55, event: "Powstanie Komisji Edukacji Narodowej", date: "1773", era: "[xviii]", area: ["pl"], type: "na" },
    { id: 56, event: "Sejm Repninowski", date: "1767", era: "[xviii]", area: ["pl"], type: "po" },
    { id: 57, event: "Uchwalenie praw kardynalnych, przywrócenie praw dysydentom", date: "1768", era: "[xviii]", area: ["pl"], type: "po" },
    { id: 58, event: "Konfederacja Barska", date: "1768-1772", era: "[xviii]", area: ["pl"], type: "po" },
    { id: 59, event: "I rozbiór Rzeczypospolitej", date: "1772", era: "[xviii]", area: ["pl", "ru", "at"], type: "po" },
    { id: 60, event: "I Sejm rozbiorowy", date: "1773-1775", era: "[xviii]", area: ["pl"], type: "po" },
    { id: 61, event: "Rządy królewsko-ambasadorskie", date: "1772-1788", era: "[xviii]", area: ["pl"], type: "pa" },
    { id: 62, event: "Sejm Wielki", date: "1788-1792", era: "[xviii]", area: ["pl"], type: "po" },
    { id: 63, event: "Uchwalenie ustaw: o sejmikach i o miastach królewskich", date: "1789", era: "[xviii]", area: ["pl"], type: "po" },
    { id: 64, event: "Czarna Procesja", date: "1789", era: "[xviii]", area: ["pl"], type: "po" },
    { id: 65, event: "II rozbiór Rzeczypospolitej", date: "1793", era: "[xviii]", area: ["pl", "ru", "at"], type: "po" },
    { id: 66, event: "Powstanie Kościuszkowskie", date: "1794", era: "[xviii]", area: ["pl"], type: "bi" },
    { id: 67, event: "Ogłoszenie doktryny Monroego", date: "1823", era: "[xix]", area: ["us"], type: "po" },
    { id: 68, event: "Powstanie dekabrystów w Rosji", date: "1825", era: "[xix]", area: ["ru"], type: "bi" },
    { id: 69, event: "Uzyskanie niepodległości przez Grecję", date: "1830", era: "[xix]", area: ["gr"], type: "po" },
    { id: 70, event: "Rewolucja lipcowa we Francji", date: "1830", era: "[xix]", area: ["fr"], type: "bi" },
    { id: 71, event: "Rewolucja i ogłoszenie niepodległości Belgii", date: "1830", era: "[xix]", area: ["be"], type: "po" },
    { id: 72, event: "Utworzenie niemieckiego Związku Celnego", date: "1834", era: "[xix]", area: ["de"], type: "po" },
    { id: 73, event: "Wybuch Wiosny Ludów w Europie", date: "1848", era: "[xix]", area: ["fr", "de", "it", "at"], type: "bi" },
    { id: 74, event: "Rewolucja lutowa we Francji", date: "1848", era: "[xix]", area: ["fr"], type: "bi" },
    { id: 75, event: "Opublikowanie Manifestu Komunistycznego", date: "1848", era: "[xix]", area: ["de"], type: "in" },
    { id: 76, event: "Początek obrad frankfurckiego zgromadzenia narodowego", date: "1848", era: "[xix]", area: ["de"], type: "po" },
    { id: 77, event: "Stłumienie rewolucji w Wiedniu i odwołanie reform w monarchii habsburskiej", date: "1848", era: "[xix]", area: ["at"], type: "po" },
    { id: 78, event: "Odwołanie liberalnych reform w Prusach i początek kontrrewolucji w państwach niemieckich", date: "1848", era: "[xix]", area: ["de"], type: "po" },
    { id: 79, event: "Rozpędzenie parlamentu frankfurckiego", date: "1849", era: "[xix]", area: ["de"], type: "po" },
    { id: 80, event: "Bitwa pod Novarą", date: "1849", era: "[xix]", area: ["it"], type: "bi" },
    { id: 81, event: "Początek kontrrewolucji w państwach włoskich", date: "1849", era: "[xix]", area: ["it"], type: "po" },
    { id: 82, event: "Zdławienie powstania antyhabsburskiego na Węgrzech", date: "1849", era: "[xix]", area: ["hu"], type: "bi" },
    { id: 83, event: "Przyjęcie ogólnoniemieckiej konstytucji", date: "1849", era: "[xix]", area: ["de"], type: "po" },
    { id: 84, event: "Zjazd niemieckich liberałów w Hambach", date: "1832", era: "[xix]", area: ["de"], type: "po" },
    { id: 85, event: "Reforma ordynacji wyborczej w Wielkiej Brytanii", date: "1832", era: "[xix]", area: ["uk"], type: "po" },
    { id: 86, event: "Zezwolenie na zrzeszanie się w związki zawodowe robotnikom w Wielkiej Brytanii", date: "1824", era: "[xix]", area: ["uk"], type: "po" },
    { id: 87, event: "Uchwalenie praw socjalnych w Wielkiej Brytanii", date: "1834", era: "[xix]", area: ["uk"], type: "po" },
    { id: 88, event: "Zniesienie poddaństwa chłopów w Prusach", date: "1807", era: "[xix]", area: ["de"], type: "po" },
    { id: 89, event: "Początek procesu uwłaszczenia chłopów w Prusach", date: "1811", era: "[xix]", area: ["de"], type: "po" },
    { id: 90, event: "Wojna krymska", date: "1853-1856", era: "[xix]", area: ["ru", "uk"], type: "bi" },
    { id: 91, event: "Panowanie Cesarza Austrii Franciszka I", date: "1804-1835", era: "[xix]", area: ["at"], type: "pa" },
    { id: 92, event: "Panowanie Cara Mikołaja I", date: "1825-1855", era: "[xix]", area: ["ru"], type: "pa" },
    { id: 93, event: "Powstanie Młodych Włoch", date: "1831", era: "[xix]", area: ["it"], type: "po" },
    { id: 94, event: "Powstanie Młodej Europy", date: "1834", era: "[xix]", area: ["eu"], type: "po" },
    { id: 95, event: "Powstanie rządu sardyńskiego", date: "1848", era: "[xix]", area: ["it"], type: "po" },
    { id: 96, event: "Zjednoczenie Włoch", date: "1860-1871", era: "[xix]", area: ["it"], type: "po" },
    { id: 97, event: "Powstanie Cesarstwa Niemieckiego", date: "1871", era: "[xix]", area: ["de"], type: "po" },
    { id: 98, event: "Otto von Bismarck zostaje kanclerzem", date: "1862", era: "[xix]", area: ["de"], type: "pa" },
    { id: 99, event: "Wojna prusko-austriacka", date: "1866", era: "[xix]", area: ["de", "at"], type: "bi" },
    { id: 100, event: "Przewrót 18 brumaire'a", date: "1799", era: "[nap]", area: ["fr"], type: "po" },
    { id: 101, event: "Uchwalenie Kodeksu Cywilnego Francuzów", date: "1804", era: "[nap]", area: ["fr"], type: "in" },
    { id: 102, event: "Koronacja Cesarska Napoleona", date: "1804", era: "[nap]", area: ["fr"], type: "pa" },
    { id: 103, event: "I koalicja Anty-Francuska", date: "1792-1797", era: "[nap]", area: ["fr", "at", "ru", "uk"], type: "bi" },
    { id: 104, event: "Bitwa pod Lodi", date: "1796", era: "[nap]", area: ["fr", "it"], type: "bi" },
    { id: 105, event: "Pokój w Campo Formio", date: "1797", era: "[nap]", area: ["fr", "at"], type: "po" },
    { id: 106, event: "II koalicja Anty-Francuska", date: "1798-1802", era: "[nap]", area: ["fr", "ru", "uk", "at"], type: "bi" },
    { id: 107, event: "Pokój w Luneville", date: "1801", era: "[nap]", area: ["fr", "at"], type: "po" },
    { id: 108, event: "Pokój w Amiens", date: "1802", era: "[nap]", area: ["fr", "uk"], type: "po" },
    { id: 109, event: "III koalicja Anty-Francuska", date: "1805", era: "[nap]", area: ["fr", "ru", "at", "uk"], type: "bi" },
    { id: 110, event: "Pokój w Preszburgu", date: "1805", era: "[nap]", area: ["fr", "at"], type: "po" },
    { id: 111, event: "IV koalicja Anty-Francuska", date: "1806-1807", era: "[nap]", area: ["fr", "ru", "pr"], type: "bi" },
    { id: 112, event: "Pokój w Tylży", date: "1807", era: "[nap]", area: ["fr", "ru", "pr"], type: "po" },
    { id: 113, event: "V koalicja Anty-Francuska", date: "1809", era: "[nap]", area: ["fr", "at"], type: "bi" },
    { id: 114, event: "Pokój w Schonbrunn", date: "1809", era: "[nap]", area: ["fr", "at"], type: "po" },
    { id: 115, event: "VI koalicja Anty-Francuska", date: "1813-1814", era: "[nap]", area: ["fr", "ru", "pr", "at"], type: "bi" },
    { id: 116, event: "Traktat w Fontainebleau", date: "1814", era: "[nap]", area: ["fr", "ru", "pr", "at"], type: "po" },
    { id: 117, event: "VII koalicja Anty-Francuska", date: "1815", era: "[nap]", area: ["fr", "uk", "pr", "at"], type: "bi" },
    { id: 118, event: "Pokój Paryski", date: "1815", era: "[nap]", area: ["fr", "uk", "pr", "at"], type: "po" },
    { id: 119, event: "Bitwa pod Marengo", date: "1800", era: "[nap]", area: ["fr", "at"], type: "bi" },
    { id: 120, event: "Bitwa pod Hohenlinden", date: "1800", era: "[nap]", area: ["fr", "at"], type: "bi" },
    { id: 121, event: "Bitwa pod Trafalgarem", date: "1805", era: "[nap]", area: ["fr", "uk"], type: "bi" },
    { id: 122, event: "Bitwa pod Ulm", date: "1805", era: "[nap]", area: ["fr", "at"], type: "bi" },
    { id: 123, event: "Bitwa pod Austerlitz", date: "1805", era: "[nap]", area: ["fr", "ru", "at"], type: "bi" },
    { id: 124, event: "Bitwy pod Jeną i Auerstedt", date: "1806", era: "[nap]", area: ["fr", "pr"], type: "bi" },
    { id: 125, event: "Bitwy pod Iławą i Friedlandem", date: "1807", era: "[nap]", area: ["fr", "ru"], type: "bi" },
    { id: 126, event: "Bitwa pod Raszynem", date: "1809", era: "[nap]", area: ["pl", "at"], type: "bi" },
    { id: 127, event: "Bitwa pod Wagram", date: "1809", era: "[nap]", area: ["fr", "at"], type: "bi" },
    { id: 128, event: "Bitwy o Smoleńsk i Borodino", date: "1812", era: "[nap]", area: ["fr", "ru"], type: "bi" },
    { id: 129, event: "Zajęcie Ks. Warszawskiego przez Rosjan", date: "1813", era: "[nap]", area: ["pl", "ru"], type: "po" },
    { id: 130, event: "Bitwa pod Lutzen", date: "1813", era: "[nap]", area: ["fr", "pr"], type: "bi" },
    { id: 131, event: "Bitwa pod Lipskiem", date: "1813", era: "[nap]", area: ["fr", "pr", "ru", "at"], type: "bi" },
    { id: 132, event: "Bitwa pod Waterloo", date: "1815", era: "[nap]", area: ["fr", "uk", "pr"], type: "bi" },
    { id: 133, event: "Oktrojowanie konstytucji Królestwa Polskiego", date: "1815", era: "[xix]", area: ["pl"], type: "po" },
    { id: 134, event: "Założenie Wolnomularstwa Narodowego przez Łukasińskiego", date: "1819", era: "[xix]", area: ["pl"], type: "in" },
    { id: 135, event: "Powstanie Towarzystwa Patriotycznego", date: "1821", era: "[xix]", area: ["pl"], type: "in" },
    { id: 136, event: "Założenie Towarzystw Filomatów i Filaretów", date: "1820", era: "[xix]", area: ["pl"], type: "in" },
    { id: 137, event: "Powstanie Sprzysiężenia Podchorążych", date: "1828", era: "[xix]", area: ["pl"], type: "in" },
    { id: 138, event: "Utworzenie Banku Polskiego", date: "1828", era: "[xix]", area: ["pl"], type: "in" },
    { id: 139, event: "Utworzenie Towarzystwa Kredytowego Ziemskiego", date: "1825", era: "[xix]", area: ["pl"], type: "in" },
    { id: 140, event: "Uwłaszczenie chłopów w Wielkim Księstwie Poznańskim", date: "1823", era: "[xix]", area: ["pl"], type: "po" },
    { id: 141, event: "Utworzenie Galicyjskiego Sejmu Stanowego", date: "1817", era: "[xix]", area: ["pl"], type: "in" },
    { id: 142, event: "Powstanie Listopadowe", date: "1830-1831", era: "[xix]", area: ["pl"], type: "bi" },
    { id: 143, event: "Noc Paskiewiczowska", date: "1831-1856", era: "[xix]", area: ["pl"], type: "in" },
    { id: 144, event: "Wprowadzenie stanu wojennego w Polsce", date: "1833", era: "[xix]", area: ["pl"], type: "po" },
    { id: 145, event: "Powstanie Komitetu Tymczasowego Emigracji", date: "1831", era: "[xix]", area: ["pl"], type: "in" },
    { id: 146, event: "Powstanie Komitetu Narodowego Polskiego", date: "1831", era: "[xix]", area: ["pl"], type: "in" },
    { id: 147, event: "Powstanie Towarzystwa Demokratycznego Polskiego", date: "1832", era: "[xix]", area: ["pl"], type: "in" },
    { id: 148, event: "Mały Manifest TDP", date: "1832", era: "[xix]", area: ["pl"], type: "in" },
    { id: 149, event: "Wielki Manifest TDP", date: "1836", era: "[xix]", area: ["pl"], type: "in" },
    { id: 150, event: "Powstanie Gromad Ludu Polskiego", date: "1835", era: "[xix]", area: ["pl"], type: "in" },
    { id: 151, event: "Oddanie do użytku kolei warszawsko-wiedeńskiej", date: "1845", era: "[xix]", area: ["pl"], type: "in" },
    { id: 152, event: "Noc Flotwellowska", date: "1830-1840", era: "[xix]", area: ["pl"], type: "in" },
    { id: 153, event: "Powstanie 'Kasyna' w Gostyniu", date: "1835", era: "[xix]", area: ["pl"], type: "in" },
    { id: 154, event: "Nieudana wyprawa płk Zaliwskiego do Królestwa Polskiego", date: "1833", era: "[xix]", area: ["pl"], type: "bi" },
    { id: 155, event: "Stworzenie Stowarzyszenia Ludu Polskiego", date: "1835", era: "[xix]", area: ["pl"], type: "in" },
    { id: 156, event: "Powstanie Związku Narodu Polskiego", date: "1839", era: "[xix]", area: ["pl"], type: "in" },
    { id: 157, event: "Powstanie Krakowskie", date: "1846", era: "[xix]", area: ["pl"], type: "bi" },
    { id: 158, event: "Rabacja Galicyjska", date: "1846", era: "[xix]", area: ["pl"], type: "bi" },
    { id: 159, event: "Powstanie biskupstwa misyjnego w Poznaniu", date: "968", era: "[sm]", area: ["pl"], type: "in" },
    { id: 160, event: "Bitwa pod Cedynią", date: "972", era: "[sm]", area: ["pl"], type: "bi" },
    { id: 161, event: "Śmierć św. Wojciecha w Prusach", date: "997", era: "[sm]", area: ["pl"], type: "in" },
    { id: 162, event: "Zjazd gnieźnieński", date: "1000", era: "[sm]", area: ["pl"], type: "in" },
    { id: 163, event: "Koronacja Stefana I Wielkiego na króla Węgier", date: "1001", era: "[sm]", area: ["hu"], type: "pa" },
    { id: 164, event: "Wojna z cesarzem Henrykiem II", date: "1004-1018", era: "[sm]", area: ["pl", "de"], type: "bi" },
    { id: 165, event: "Koronacja królewska Bolesława Chrobrego i Mieszka II", date: "1025", era: "[sm]", area: ["pl"], type: "pa" },
    { id: 166, event: "Najazd Jarosława Mądrego i Konrada II na Polskę, utrata Grodów Czerwieńskich, Łużyc i Milska", date: "1031", era: "[sm]", area: ["pl", "ru", "de"], type: "bi" },
    { id: 167, event: "Najazd Brzetysława I na Polskę", date: "1039", era: "[sm]", area: ["pl", "cz"], type: "bi" },
    { id: 168, event: "Początek odbudowy państwa polskiego przez Kazimierza Odnowiciela", date: "1040", era: "[sm]", area: ["pl"], type: "in" },
    { id: 169, event: "Wielka schizma wschodnia", date: "1054", era: "[sm]", area: ["it", "gr"], type: "in" },
    { id: 170, event: "Bitwa pod Hastings", date: "1066", era: "[sm]", area: ["uk"], type: "bi" },
    { id: 171, event: "Początek reformy gregoriańskiej i sporu o inwestyturę", date: "1075", era: "[sm]", area: ["it", "de"], type: "in" },
    { id: 172, event: "Ekskomunika Henryka IV", date: "1076", era: "[sm]", area: ["de"], type: "in" },
    { id: 173, event: "Koronacja królewska Bolesława II", date: "1076", era: "[sm]", area: ["pl"], type: "pa" },
    { id: 174, event: "Przybycie Henryka IV do Canossy", date: "1077", era: "[sm]", area: ["it", "de"], type: "in" },
    { id: 175, event: "Śmierć biskupa Stanisława, wygnanie Bolesława II", date: "1079", era: "[sm]", area: ["pl"], type: "in" },
    { id: 176, event: "Podział kraju przez Władysława Hermana pomiędzy synów", date: "1079", era: "[sm]", area: ["pl"], type: "in" },
    { id: 177, event: "Synod w Clermont", date: "1095", era: "[sm]", area: ["fr"], type: "in" },
    { id: 178, event: "I wyprawa krzyżowa", date: "1096-1099", era: "[sm]", area: ["fr", "it", "tr"], type: "bi" },
    { id: 179, event: "Zdobycie Jerozolimy przez krzyżowców i powstanie Królestwa Jerozolimskiego", date: "1099", era: "[sm]", area: ["il"], type: "in" },
    { id: 183, event: "Podporządkowanie Polsce Pomorza Gdańskiego", date: "1116", era: "[sm]", area: ["pl"], type: "in" },
    { id: 185, event: "Podporządkowanie Polsce Pomorza Zachodniego", date: "1122", era: "[sm]", area: ["pl"], type: "in" },
    { id: 186, event: "Śmierć Bolesława Krzywoustego i początek rozbicia dzielnicowego", date: "1138", era: "[sm]", area: ["pl"], type: "in" },
    { id: 188, event: "II wyprawa krzyżowa", date: "1147-1149", era: "[sm]", area: ["fr", "it", "de"], type: "bi" },
    { id: 192, event: "III wyprawa krzyżowa", date: "1189-1192", era: "[sm]", area: ["fr", "it", "de"], type: "bi" },
    { id: 194, event: "IV wyprawa krzyżowa", date: "1202-1204", era: "[sm]", area: ["fr", "it"], type: "bi" },
    { id: 223, event: "Powstanie Akademii Krakowskiej", date: "1364", era: "[sm]", area: ["pl"], type: "in" },
    { id: 224, event: "Rządy Andegawenów na Węgrzech", date: "1382-1385", era: "[sm]", area: ["hu"], type: "pa" },
    { id: 226, event: "Początek samodzielnych rządów Bolesława Krzywoustego", date: "1108", era: "[sm]", area: ["pl"], type: "pa" },
    { id: 227, event: "Wojna z królem niemieckim Henrykiem V", date: "1109", era: "[sm]", area: ["pl", "de"], type: "bi" },
    { id: 228, event: "Powstanie kroniki Gala Anonima", date: "1112-1116", era: "[sm]", area: ["pl"], type: "in" },
    { id: 230, event: "Podpisanie konkordatu wormackiego", date: "1122", era: "[sm]", area: ["it", "de"], type: "in" },
    { id: 233, event: "Wypędzenie Władysława II Wygnańca z Polski", date: "1146", era: "[sm]", area: ["pl"], type: "bi" },
    { id: 235, event: "Najazd cesarza Fryderyka I Barbarossy na Polskę", date: "1157", era: "[sm]", area: ["pl", "de"], type: "bi" },
    { id: 236, event: "Objęcie tronu krakowskiego przez Kazimierza II Sprawiedliwego", date: "1177", era: "[sm]", area: ["pl"], type: "pa" },
    { id: 237, event: "Zjazd w Łęczycy", date: "1180", era: "[sm]", area: ["pl"], type: "in" },
    { id: 239, event: "Powstanie zakonu krzyżackiego", date: "1191", era: "[sm]", area: ["pl"], type: "in" },
    { id: 241, event: "Zdobycie Konstantynopola przez krzyżowców i powstanie cesarstwa łacińskiego", date: "1204", era: "[sm]", area: ["tr"], type: "in" },
    { id: 242, event: "Krucjata przeciwko katarom", date: "1209-1229", era: "[sm]", area: ["fr"], type: "bi" },
    { id: 243, event: "Lokacja Złotoryi", date: "1211", era: "[sm]", area: ["pl"], type: "in" },
    { id: 244, event: "Magna Charta Libertatum", date: "1215", era: "[sm]", area: ["uk"], type: "in" },
    { id: 245, event: "Bitwa nad rzeką Kałką", date: "1223", era: "[sm]", area: ["ru"], type: "bi" },
    { id: 246, event: "Zaproszenie krzyżaków do osiedlenia się na ziemi chełmińskiej", date: "1226", era: "[sm]", area: ["pl"], type: "in" },
    { id: 247, event: "Zjazd w Gąsawie, śmierć Leszka Białego", date: "1227", era: "[sm]", area: ["pl"], type: "in" },
    { id: 248, event: "Przybycie krzyżaków do ziemi chełmińskiej", date: "1228", era: "[sm]", area: ["pl"], type: "in" },
    { id: 249, event: "Podbój Rusi przez Mongołów", date: "1236-1240", era: "[sm]", area: ["ru"], type: "bi" },
    { id: 250, event: "Przyłączenie zakonu kawalerów mieczowych do zakonu krzyżackiego", date: "1237", era: "[sm]", area: ["pl", "de"], type: "in" },
    { id: 251, event: "Inwazja mongolska na Polskę i Węgry", date: "1241", era: "[sm]", area: ["pl", "hu"], type: "bi" },
    { id: 252, event: "Bitwa pod Legnicą i śmierć Henryka II Pobożnego", date: "1241", era: "[sm]", area: ["pl"], type: "bi" },
    { id: 253, event: "Chrzest władcy Litwy Mendoga", date: "1251", era: "[sm]", area: ["lt"], type: "in" },
    { id: 254, event: "Koronacja królewska Mendoga", date: "1253", era: "[sm]", area: ["lt"], type: "pa" },
    { id: 255, event: "Pierwsze posiedzenie parlamentu angielskiego", date: "1264", era: "[sm]", area: ["uk"], type: "in" },
    { id: 256, event: "Koniec wielkiego bezkrólewia w Niemczech i elekcja Rudolfa I Habsburga na króla niemieckiego", date: "1273", era: "[sm]", area: ["de"], type: "in" },
    { id: 257, event: "Zakończenie podboju Prus przez Krzyżaków", date: "1283", era: "[sm]", area: ["pl"], type: "bi" },
    { id: 258, event: "Upadek Akki", date: "1291", era: "[sm]", area: ["il"], type: "in" },
    { id: 259, event: "Koronacja Przemysła II", date: "1295", era: "[sm]", area: ["pl"], type: "pa" },
    { id: 260, event: "Koronacja Wacława II", date: "1300", era: "[sm]", area: ["cz"], type: "pa" },
    { id: 261, event: "Zwołanie pierwszego posiedzenia Stanów Generalnych", date: "1302", era: "[fr]", area: ["fr"], type: "in" },
    { id: 262, event: "Rzeź Gdańska", date: "1308", era: "[sm]", area: ["pl"], type: "bi" },
    { id: 263, event: "Początek niewoli awiniońskiej", date: "1309", era: "[sm]", area: ["fr"], type: "in" },
    { id: 264, event: "Opanowanie Pomorza Gdańskiego przez Krzyżaków", date: "1309", era: "[sm]", area: ["pl"], type: "bi" },
    { id: 265, event: "Koronacja królewska Władysława Łokietka", date: "1320", era: "[sm]", area: ["pl"], type: "pa" },
    { id: 266, event: "Bitwa pod Płowcami", date: "1331", era: "[sm]", area: ["pl"], type: "bi" },
    { id: 267, event: "Panowanie Kazimierza Wielkiego", date: "1333-1370", era: "[sm]", area: ["pl"], type: "pa" },
    { id: 268, event: "Pierwszy zjazd w Wyszehradzie", date: "1335", era: "[sm]", area: ["pl", "hu", "cz"], type: "in" },
    { id: 269, event: "Wojna stuletnia", date: "1337-1453", era: "[sm]", area: ["fr", "gb"], type: "bi" },
    { id: 270, event: "II zjazd w Wyszehradzie", date: "1338-1339", era: "[sm]", area: ["pl", "hu", "cz"], type: "in" },
    { id: 271, event: "Podbój Rusi Halickiej", date: "1340-1366", era: "[sm]", area: ["pl", "ru"], type: "bi" },
    { id: 272, event: "Pokój w Kaliszu z Krzyżakami", date: "1343", era: "[sm]", area: ["pl"], type: "po" },
    { id: 273, event: "Epidemia dżumy w Europie", date: "1348-1352", era: "[sm]", area: ["eu"], type: "in" },
    { id: 274, event: "Wydanie Złotej Bulli przez Karola IV Luksemburga", date: "1356", era: "[sm]", area: ["de", "cz"], type: "in" },
    { id: 275, event: "Opracowanie statutów piotrkowskiego i wiślickiego", date: "1356-1362", era: "[sm]", area: ["pl"], type: "in" },
    { id: 277, event: "Nadanie przywileju koszyckiego", date: "1374", era: "[sm]", area: ["pl"], type: "pa" },
    { id: 278, event: "Bitwa na Kulikowym Polu", date: "1380", era: "[sm]", area: ["ru"], type: "bi" },
    { id: 279, event: "Unia w Krewie", date: "1385", era: "[sm]", area: ["pl", "lt"], type: "po" },
    { id: 280, event: "Koronacja królewska Władysława Jagiełły", date: "1386", era: "[sm]", area: ["pl"], type: "pa" },
    { id: 281, event: "Wielka Wojna z Zakonem Krzyżackim", date: "1409-1411", era: "[sm]", area: ["pl", "de"], type: "bi" },
    { id: 282, event: "I Pokój Toruński", date: "1411", era: "[sm]", area: ["pl", "de"], type: "po" },
    { id: 283, event: "Zawarcie Unii w Horodle", date: "1413", era: "[sm]", area: ["pl", "lt"], type: "po" },
    { id: 284, event: "Sobór w Konstancji", date: "1414-1418", era: "[sm]", area: ["de"], type: "in" },
    { id: 285, event: "Bitwa pod Azincourt, śmierć Jana Hussa", date: "1415", era: "[sm]", area: ["fr", "cz"], type: "bi" },
    { id: 286, event: "Wybuch wojen husyckich w Czechach", date: "1419", era: "[sm]", area: ["cz"], type: "bi" },
    { id: 287, event: "Spalenie na stosie Joanny d'Arc", date: "1431", era: "[sm]", area: ["fr"], type: "bi" },
    { id: 288, event: "Utworzenie Związku Pruskiego", date: "1440", era: "[sm]", area: ["pl"], type: "po" },
    { id: 289, event: "Upadek Konstantynopola", date: "1453", era: "[sm]", area: ["il"], type: "in" },
    { id: 290, event: "Wojna Trzynastoletnia", date: "1454-1466", era: "[sm]", area: ["pl", "de"], type: "bi" },
    { id: 291, event: "Przywilej cerekwicko-nieszawski", date: "1454", era: "[sm]", area: ["pl"], type: "pa" },
    { id: 292, event: "II Pokój Toruński", date: "1466", era: "[sm]", area: ["pl", "de"], type: "po" },
    { id: 293, event: "Wynalezienie druku", date: "1450", era: "[sm]", area: ["de"], type: "in" },
    { id: 294, event: "Wojna Dwóch Róż", date: "1455-1485", era: "[sm]", area: ["gb"], type: "bi" },
    { id: 295, event: "Wynalezienie pisma", date: "4000 p.n.e.", era: "[st]", area: [], type: "na" },
    { id: 296, event: "Spisanie Kodeksu Hammurabiego", date: "1700 p.n.e.", era: "[st]", area: ["me"], type: "na" },
    { id: 297, event: "Panowanie Saula, Dawida i Salomona w Królestwie Izraela", date: "1000 p.n.e.", era: "[st]", area: ["il"], type: "pa" },
    { id: 298, event: "Wielka kolonizacja", date: "800 p.n.e.", era: "[st]", area: ["gr"], type: "in" },
    { id: 299, event: "Pierwsze igrzyska olimpijskie", date: "776 p.n.e.", era: "[st]", area: ["gr"], type: "in" },
    { id: 300, event: "Założenie Rzymu", date: "753 p.n.e.", era: "[st]", area: ["it"], type: "in" },
    { id: 301, event: "Spisanie praw Drakona", date: "621 p.n.e.", era: "[st]", area: ["gr"], type: "na" },
    { id: 302, event: "Strząśnienie długów Solona", date: "594 p.n.e.", era: "[st]", area: ["gr"], type: "in" },
    { id: 303, event: "Początek Republiki Rzymskiej", date: "509 p.n.e.", era: "[st]", area: ["it"], type: "in" },
    { id: 304, event: "Utworzenie Związku Morskiego", date: "478 p.n.e.", era: "[st]", area: ["gr"], type: "in" },
    { id: 305, event: "Wojna peloponeska", date: "431-404 p.n.e.", era: "[st]", area: ["gr"], type: "bi" },
    { id: 306, event: "Bitwa pod Cheroneą", date: "338 p.n.e.", era: "[st]", area: ["gr"], type: "bi" },
    { id: 307, event: "Panowanie Aleksandra Wielkiego", date: "336-323 p.n.e.", era: "[st]", area: ["gr", "me", "eg"], type: "pa" },
    { id: 308, event: "Bitwa pod Granikos", date: "334 p.n.e.", era: "[st]", area: ["tr"], type: "bi" },
    { id: 309, event: "Bitwa pod Issos", date: "333 p.n.e.", era: "[st]", area: ["sy"], type: "bi" },
    { id: 310, event: "Bitwa pod Gaugamelą", date: "331 p.n.e.", era: "[st]", area: ["ir"], type: "bi" },
    { id: 311, event: "I wojna punicka", date: "264-241 p.n.e.", era: "[st]", area: ["it", "tn"], type: "bi" },
    { id: 312, event: "II wojna punicka", date: "218-201 p.n.e.", era: "[st]", area: ["it", "es"], type: "bi" },
    { id: 313, event: "Bitwa pod Kannami", date: "216 p.n.e.", era: "[st]", area: ["it"], type: "bi" },
    { id: 314, event: "Bitwa pod Zamą", date: "202 p.n.e.", era: "[st]", area: ["tn"], type: "bi" },
    { id: 315, event: "III wojna punicka", date: "149-146 p.n.e.", era: "[st]", area: ["tn"], type: "bi" },
    { id: 316, event: "I triumwirat", date: "60-53 p.n.e.", era: "[st]", area: ["it"], type: "in" },
    { id: 317, event: "Zabójstwo Juliusza Cezara", date: "44 p.n.e.", era: "[st]", area: ["it"], type: "in" },
    { id: 318, event: "II triumwirat", date: "43-36 p.n.e.", era: "[st]", area: ["it"], type: "in" },
    { id: 319, event: "Bitwa pod Akcjum", date: "31 p.n.e.", era: "[st]", area: ["gr"], type: "bi" },
    { id: 320, event: "Wprowadzenie pryncypatu", date: "27 p.n.e.", era: "[st]", area: ["it"], type: "in" },
    { id: 321, event: "Edykt mediolański", date: "313", era: "[st]", area: ["it"], type: "po" },
    { id: 322, event: "Edykt Teodozjusza", date: "380", era: "[st]", area: ["it"], type: "po" },
    { id: 323, event: "Podział cesarstwa rzymskiego", date: "395", era: "[st]", area: ["it"], type: "in" },
    { id: 324, event: "Chrzest Chlodwiga I", date: "496", era: "[sm]", area: ["fr"], type: "in" },
    { id: 325, event: "Panowanie Justyniana I Wielkiego", date: "527-565", era: "[sm]", area: ["tr"], type: "pa" },
    { id: 326, event: "Hidżra", date: "622", era: "[sm]", area: ["sa"], type: "in" },
    { id: 327, event: "Bitwa pod Poitiers", date: "732", era: "[sm]", area: ["fr"], type: "bi" },
    { id: 328, event: "Początek dynastii Karolingów", date: "751", era: "[sm]", area: ["fr"], type: "in" },
    { id: 329, event: "Powstanie Państwa Kościelnego", date: "756", era: "[sm]", area: ["it"], type: "in" },
    { id: 330, event: "Koronacja cesarska Karola Wielkiego", date: "800", era: "[sm]", area: ["fr"], type: "in" },
    { id: 331, event: "Powstanie Państwa Wielkomorawskiego", date: "801", era: "[sm]", area: ["cz"], type: "in" },
    { id: 332, event: "Bitwa na Lechowym Polu", date: "955", era: "[sm]", area: ["de"], type: "bi" },
    { id: 333, event: "Koronacja cesarska Ottona I", date: "962", era: "[sm]", area: ["de"], type: "pa" },
    { id: 334, event: "Zdobycie Grenady, koniec rekonkwisty", date: "1492", era: "[xvi]", area: ["es"], type: "bi" },  
    { id: 335, event: "Pierwsza wyprawa Kolumba, odkrycie Ameryki", date: "1492", era: "[xvi]", area: ["es", "us"], type: "na" },  
    { id: 336, event: "Pierwszy sejm walny", date: "1493", era: "[xvi]", area: ["pl"], type: "in" },  
    { id: 337, event: "Traktat w Tordesillas", date: "1494", era: "[xvi]", area: ["pt", "es"], type: "po" },  
    { id: 338, event: "Wyprawa Vasco Da Gamy", date: "1498", era: "[xvi]", area: ["pt", "in"], type: "na" },  
    { id: 339, event: "Konstytucja Nihil Novi (Radomska)", date: "1505", era: "[xvi]", area: ["pl"], type: "in" },  
    { id: 340, event: "Bitwa pod Orszą", date: "1514", era: "[xvi]", area: ["pl", "lt", "ru"], type: "bi" },  
    { id: 341, event: "Zjazd w Wiedniu", date: "1515", era: "[xvi]", area: ["at"], type: "po" },  
    { id: 342, event: "Ogłoszenie tez Marcina Lutra, początek reformacji", date: "1517", era: "[xvi]", area: ["de"], type: "in" },  
    { id: 343, event: "Ostatnia wojna z zakonem krzyżackim", date: "1519-1521", era: "[xvi]", area: ["pl", "de"], type: "bi" },  
    { id: 344, event: "Wyprawa Magellana", date: "1519-1522", era: "[xvi]", area: ["es"], type: "na" },  
    { id: 345, event: "Podbój Meksyku przez Cortesa", date: "1519-1524", era: "[xvi]", area: ["es", "mx"], type: "bi" },  
    { id: 346, event: "Powstanie Prus Książęcych", date: "1525", era: "[xvi]", area: ["pl", "de"], type: "in" },  
    { id: 347, event: "Hołd pruski", date: "1525", era: "[xvi]", area: ["pl", "de"], type: "po" },  
    { id: 348, event: "Bitwa pod Mohaczem", date: "1526", era: "[xvi]", area: ["hu"], type: "bi" },  
    { id: 349, event: "Przyłączenie Mazowsza do Polski", date: "1526", era: "[xvi]", area: ["pl"], type: "in" },  
    { id: 350, event: "Sacco di Roma", date: "1527", era: "[xvi]", area: ["it"], type: "bi" },  
    { id: 351, event: "Elekcja Vivente Rege Zygmunta Augusta", date: "1529", era: "[xvi]", area: ["pl"], type: "in" },  
    { id: 352, event: "Pokój wieczysty z Turcją", date: "1533", era: "[xvi]", area: ["pl", "tr"], type: "po" },  
    { id: 353, event: "Akt supremacji, powstanie anglikanizmu", date: "1534", era: "[xvi]", area: ["gb"], type: "in" },  
    { id: 354, event: "Założenie jezuitów", date: "1534", era: "[xvi]", area: ["it"], type: "in" },  
    { id: 355, event: "Początek działalności Kalwina", date: "1536", era: "[xvi]", area: ["fr"], type: "in" },  
    { id: 356, event: "Wojna kokosza (rokosz lwowski)", date: "1537", era: "[xvi]", area: ["pl"], type: "bi" },  
    { id: 357, event: "Sobór trydencki", date: "1545-1563", era: "[xvi]", area: ["it"], type: "in" },  
    { id: 358, event: "Pierwsza wojna szmalkaldzka", date: "1546-1547", era: "[xvi]", area: ["de"], type: "bi" },  
    { id: 359, event: "Koronacja Iwana IV Groźnego na Cara Wszechrusi", date: "1547", era: "[xvi]", area: ["ru"], type: "pa" },  
    { id: 360, event: "Druga wojna szmalkaldzka", date: "1552", era: "[xvi]", area: ["de"], type: "bi" },  
    { id: 361, event: "Pokój w Augsburgu", date: "1555", era: "[xvi]", area: ["de"], type: "po" },  
    { id: 362, event: "Podział imperium Habsburgów na część hiszpańską i austriacką", date: "1556", era: "[xvi]", area: ["es", "at"], type: "in" },  
    { id: 363, event: "Sekularyzacja Inflant", date: "1561", era: "[xvi]", area: ["pl", "lv"], type: "in" },  
    { id: 364, event: "Wybuch wojen religijnych we Francji", date: "1562", era: "[xvi]", area: ["fr"], type: "bi" },  
    { id: 365, event: "Złożenie hołdu Zygmuntowi II Augustowi przez Gottharda Kettlera", date: "1562", era: "[xvi]", area: ["pl", "lv"], type: "po" },  
    { id: 366, event: "Bitwa pod Lepanto", date: "1571", era: "[xvi]", area: ["gr"], type: "bi" },  
    { id: 367, event: "Noc św. Bartłomieja", date: "1572", era: "[xvi]", area: ["fr"], type: "bi" },  
    { id: 368, event: "Koniec panowania dynastii Jagiellonów, pierwsze bezkrólewie", date: "1572", era: "[xvi]", area: ["pl"], type: "pa" },  
    { id: 369, event: "Konfederacja Warszawska, pierwsza wolna elekcja", date: "1573", era: "[xvi]", area: ["pl"], type: "in" },  
    { id: 370, event: "Panowanie Stefana Batorego", date: "1576-1586", era: "[xvi]", area: ["pl"], type: "pa" },  
    { id: 371, event: "Utworzenie Trybunału Koronnego i piechoty wybranieckiej", date: "1578", era: "[xvi]", area: ["pl"], type: "in" },  
    { id: 372, event: "Wojna z Moskwą (Batory)", date: "1578-1581", era: "[xvi]", area: ["pl", "ru"], type: "bi" },  
    { id: 373, event: "Rozejm w Jamie Zapolskim", date: "1582", era: "[xvi]", area: ["pl", "ru"], type: "po" },  
    { id: 374, event: "Panowanie Wazów w Polsce", date: "1587-1613", era: "[xvi]", area: ["pl"], type: "pa" },  
    { id: 375, event: "Powstanie Niderlandów", date: "1588", era: "[xvi]", area: ["nl"], type: "in" },  
    { id: 376, event: "Klęska Wielkiej Armady", date: "1588", era: "[xvi]", area: ["es", "gb"], type: "bi" },  
    { id: 377, event: "Unia brzeska", date: "1596", era: "[xvi]", area: ["pl"], type: "po" },  
    { id: 378, event: "Edykt nantejski", date: "1598", era: "[xvi]", area: ["fr"], type: "po" },  
    { id: 379, event: "Wielka smuta", date: "1598-1613", era: "[xvi]", area: ["ru"], type: "in" },
    { id: 380, event: "I wojna polsko-szwedzka o Inflanty", date: "1600-1611", era: "[xvii]", area: ["pl", "se"], type: "bi" },  
    { id: 381, event: "I dymitriada", date: "1604-1606", era: "[xvii]", area: ["pl", "ru"], type: "bi" },  
    { id: 382, event: "Bitwa pod Kircholmem", date: "1605", era: "[xvii]", area: ["pl", "se"], type: "bi" },  
    { id: 383, event: "Rokosz Zebrzydowskiego", date: "1606-1607", era: "[xvii]", area: ["pl"], type: "bi" },  
    { id: 384, event: "Wojna z Moskwą (podymitriadowa)", date: "1609-1618", era: "[xvii]", area: ["pl", "ru"], type: "bi" },  
    { id: 385, event: "Bitwa pod Kłuszynem i zajęcie Moskwy", date: "1610", era: "[xvii]", area: ["pl", "ru"], type: "bi" },  
    { id: 386, event: "Przejęcie władzy w Prusach Książęcych przez brandenburską linię Hohenzollernów", date: "1618", era: "[xvii]", area: ["de"], type: "in" },  
    { id: 387, event: "Wojna trzydziestoletnia", date: "1618-1648", era: "[xvii]", area: ["de", "eu"], type: "bi" },  
    { id: 388, event: "Rozejm w Dywilinie", date: "1619", era: "[xvii]", area: ["pl", "ru"], type: "po" },  
    { id: 389, event: "Pokój westfalski", date: "1648", era: "[xvii]", area: ["de", "eu"], type: "po" },  
    { id: 390, event: "Bitwa pod Białą Górą", date: "1620", era: "[xvii]", area: ["cz"], type: "bi" },  
    { id: 391, event: "Bitwa pod Cecorą", date: "1620", era: "[xvii]", area: ["pl", "tr"], type: "bi" },  
    { id: 392, event: "Bitwa pod Chocimiem", date: "1621", era: "[xvii]", area: ["pl", "tr"], type: "bi" },  
    { id: 393, event: "Wojna ze Szwecją (Gustaw Adolf)", date: "1626-1629", era: "[xvii]", area: ["pl", "se"], type: "bi" },  
    { id: 394, event: "Bitwa pod Oliwą", date: "1627", era: "[xvii]", area: ["pl", "se"], type: "bi" },  
    { id: 395, event: "Rozejm w Altmarku", date: "1629", era: "[xvii]", area: ["pl", "se"], type: "po" },  
    { id: 396, event: "Wojna smoleńska", date: "1632-1634", era: "[xvii]", area: ["pl", "ru"], type: "bi" },  
    { id: 397, event: "Pokój w Polanowie", date: "1634", era: "[xvii]", area: ["pl", "ru"], type: "po" },  
    { id: 398, event: "Rozejm w Sztumskiej Wsi", date: "1635", era: "[xvii]", area: ["pl", "se"], type: "po" },  
    { id: 399, event: "Wojna domowa w Anglii", date: "1642-1648", era: "[xvii]", area: ["gb"], type: "bi" },  
    { id: 400, event: "Panowanie Ludwika XIV", date: "1643-1715", era: "[xvii]", area: ["fr"], type: "pa" },  
    { id: 401, event: "Wybuch powstania Chmielnickiego", date: "1648", era: "[xvii]", area: ["pl", "ua"], type: "bi" },  
    { id: 402, event: "Śmierć Władysława IV Wazy", date: "1648", era: "[xvii]", area: ["pl"], type: "pa" },  
    { id: 403, event: "Ścięcie Karola I, ogłoszenie Anglii Republiką", date: "1649", era: "[xvii]", area: ["gb"], type: "in" },  
    { id: 404, event: "Uchwalenie aktu nawigacyjnego", date: "1651", era: "[xvii]", area: ["gb"], type: "in" },  
    { id: 405, event: "Bitwa pod Beresteczkiem, ugoda w Białej Cerkwi", date: "1651", era: "[xvii]", area: ["pl", "ua"], type: "bi" },  
    { id: 406, event: "Oliver Cromwell lordem protektorem", date: "1653-1658", era: "[xvii]", area: ["gb"], type: "pa" },  
    { id: 407, event: "Ugoda perejasławska, atak Rosji na Polskę", date: "1654", era: "[xvii]", area: ["pl", "ru"], type: "po" },  
    { id: 408, event: "Potop szwedzki", date: "1655-1660", era: "[xvii]", area: ["pl", "se"], type: "bi" },  
    { id: 409, event: "Traktat w Radnot", date: "1656", era: "[xvii]", area: ["pl", "se"], type: "po" },  
    { id: 410, event: "Traktaty welawsko-bydgoskie", date: "1657", era: "[xvii]", area: ["pl", "de"], type: "po" },  
    { id: 411, event: "Unia w Hadziaczu", date: "1658", era: "[xvii]", area: ["pl", "ua"], type: "po" },  
    { id: 412, event: "Restauracja Monarchii w Anglii", date: "1660", era: "[xvii]", area: ["gb"], type: "in" },  
    { id: 413, event: "Pokój w Oliwie", date: "1660", era: "[xvii]", area: ["pl", "se"], type: "po" },  
    { id: 414, event: "Rokosz Lubomirskiego", date: "1665-1666", era: "[xvii]", area: ["pl"], type: "bi" },  
    { id: 415, event: "Traktat w Buczaczu", date: "1672", era: "[xvii]", area: ["pl", "tr"], type: "po" },  
    { id: 416, event: "Druga bitwa pod Chocimiem", date: "1673", era: "[xvii]", area: ["pl", "tr"], type: "bi" },  
    { id: 417, event: "Odsiecz wiedeńska", date: "1683", era: "[xvii]", area: ["pl", "at", "tr"], type: "bi" },  
    { id: 418, event: "Powstanie Ligi Świętej", date: "1684", era: "[xvii]", area: ["eu"], type: "in" },  
    { id: 419, event: "Pokój Grzymułtowskiego", date: "1686", era: "[xvii]", area: ["pl", "ru"], type: "po" },  
    { id: 420, event: "Sławetna rewolucja w Anglii", date: "1688", era: "[xvii]", area: ["gb"], type: "in" },  
    { id: 421, event: "Pokój w Karłowicach", date: "1699", era: "[xvii]", area: ["pl", "tr", "at"], type: "po" },  
    { id: 422, event: "Powstanie Królestwa Prus", date: "1701", era: "[xviii]", area: ["de"], type: "in" },  
    { id: 423, event: "Bitwa pod Połtawą", date: "1709", era: "[xviii]", area: ["ru", "se"], type: "bi" },
    { id: 424, event: "Wynalezienie maszyny parowej", date: "1769", era: "[xviii]", area: ["gb"], type: "na" },  
    { id: 425, event: "Uchwalenie konstytucji Francji (rewolucja burżuazyjna)", date: "1791", era: "[xviii]", area: ["fr"], type: "po" },  
    { id: 426, event: "Uchwalenie konstytucji 3 maja", date: "1791", era: "[xviii]", area: ["pl"], type: "po" },  
    { id: 427, event: "Ogłoszenie Francji republiką", date: "1792", era: "[xviii]", area: ["fr"], type: "in" },  
    { id: 428, event: "Ścięcie Ludwika XVI", date: "1793", era: "[xviii]", area: ["fr"], type: "in" },  
    { id: 429, event: "Przewrót termidoriański", date: "1794", era: "[xviii]", area: ["fr"], type: "in" },  
    { id: 430, event: "Wyprawa Napoleona do Egiptu", date: "1798", era: "[xviii]", area: ["fr", "eg"], type: "bi" },  
    { id: 431, event: "Wyprawa legionów polskich na Santo Domingo", date: "1802", era: "[nap]", area: ["pl", "ht"], type: "bi" },  
    { id: 432, event: "Utworzenie Księstwa Warszawskiego", date: "1807", era: "[nap]", area: ["pl"], type: "in" },  
    { id: 433, event: "Początek powstania anty-francuskiego w Hiszpanii", date: "1808", era: "[nap]", area: ["es", "fr"], type: "bi" },  
    { id: 434, event: "Kongres wiedeński", date: "1815", era: "[nap]", era: "[xix]", area: ["eu"], type: "po" },  
    { id: 435, event: "Powstanie Uniwersytetu Warszawskiego", date: "1816", era: "[xix]", area: ["pl"], type: "in" },  
    { id: 436, event: "Początek romantyzmu w Polsce", date: "1822", era: "[xix]", area: ["pl"], type: "na" },  
    { id: 437, event: "Wprowadzenie stanu wyjątkowego na Ziemiach Królestwa Polskiego", date: "1861", era: "[xix]", area: ["pl"], type: "in" },  
    { id: 438, event: "Wojna secesyjna", date: "1861-1865", era: "[xix]", area: ["us"], type: "bi" },  
    { id: 439, event: "Utworzenie Czerwonego Krzyża", date: "1863", era: "[xix]", area: ["ch"], type: "in" },  
    { id: 440, event: "Wybuch powstania styczniowego", date: "1863", era: "[xix]", area: ["pl"], type: "bi" },  
    { id: 441, event: "Wojna niemiecko-duńska", date: "1864", era: "[xix]", area: ["de", "dk"], type: "bi" },  
    { id: 442, event: "Powstanie I Międzynarodówki", date: "1864", era: "[xix]", area: ["eu"], type: "in" },  
    { id: 443, event: "Klęska powstania styczniowego", date: "1864", era: "[xix]", area: ["pl"], type: "bi" },  
    { id: 444, event: "Uwłaszczenie chłopów w Królestwie Polskim", date: "1864", era: "[xix]", area: ["pl"], type: "in" },  
    { id: 445, event: "Zniesienie niewolnictwa w USA", date: "1865", era: "[xix]", area: ["us"], type: "in" },  
    { id: 446, event: "Powstanie Związku Północnoniemieckiego i Austro-Węgier", date: "1867", era: "[xix]", area: ["de", "at"], type: "in" },  
    { id: 447, event: "Otwarcie Kanału Sueskiego", date: "1869", era: "[xix]", area: ["eg"], type: "in" },  
    { id: 448, event: "Wojna francusko-pruska", date: "1870-1871", era: "[xix]", area: ["fr", "de"], type: "bi" },  
    { id: 449, event: "Komuna Paryska", date: "1871", era: "[xix]", area: ["fr"], type: "in" },  
    { id: 450, event: "Kongres berliński", date: "1878", era: "[xix]", area: ["de", "eu"], type: "po" },  
    { id: 451, event: "Noc apuchtinowska", date: "1879-1897", era: "[xix]", area: ["pl", "ru"], type: "in" },  
    { id: 452, event: "Powstanie Trójprzymierza", date: "1882", era: "[xix]", area: ["de", "it", "at"], type: "po" },  
    { id: 453, event: "Rugi pruskie", date: "1885-1890", era: "[xix]", area: ["pl", "de"], type: "in" },  
    { id: 454, event: "Encyklika Rerum Novarum", date: "1891", era: "[xix]", area: ["va"], type: "in" },  
    { id: 455, event: "Powstanie PPS i SDKP", date: "1893", era: "[xix]", area: ["pl"], type: "in" },  
    { id: 456, event: "Wynalezienie kinematografu", date: "1895", era: "[xix]", area: ["fr"], type: "na" },  
    { id: 457, event: "Powstanie SL", date: "1895", era: "[xix]", area: ["pl"], type: "in" },  
    { id: 458, event: "Pierwsze nowożytne Igrzyska Olimpijskie", date: "1896", era: "[xix]", area: ["gr"], type: "in" },  
    { id: 459, event: "Powstanie Endecji", date: "1897", era: "[xix]", area: ["pl"], type: "in" },  
    { id: 460, event: "Strajk we Wrześni", date: "1901", era: "[xix]", area: ["pl"], type: "in" },  
    { id: 461, event: "Pierwszy lot samolotem", date: "1903", era: "[xix]", area: ["us"], type: "na" },  
    { id: 462, event: "Nagroda Nobla dla Marii Skłodowskiej-Curie", date: "1903", era: "[xix]", area: ["pl", "fr"], type: "na" },  
    { id: 463, event: "Entente Cordiale", date: "1904", era: "[xix]", area: ["fr", "gb"], type: "po" },  
    { id: 464, event: "Wojna rosyjsko-japońska", date: "1904-1905", era: "[xix]", area: ["ru", "jp"], type: "bi" },  
    { id: 465, event: "Rewolucja w Rosji", date: "1905", era: "[xix]", area: ["ru"], type: "bi" },  
    { id: 466, event: "Powstanie Trójporozumienia", date: "1907", era: "[xix]", area: ["fr", "gb", "ru"], type: "po" },  
    { id: 467, event: "I wojna bałkańska", date: "1912-1913", era: "[xix]", era: "[ww1]", area: ["balk"], type: "bi" },  
    { id: 468, event: "II wojna bałkańska", date: "1913", era: "[xix]", era: "[ww1]", area: ["balk"], type: "bi" },
    { id: 467, event: "zamach na arcyksięcia Franciszka Ferdynanda w Sarajewie", date: "1914", era: "[ww1]", area: ["ba"], type: "in" },
    { id: 468, event: "bitwa nad Tannenbergiem", date: "1914", era: "[ww1]", area: ["de", "ru"], type: "bi" },
    { id: 469, event: "bitwa nad Marną", date: "1914", era: "[ww1]", area: ["fr"], type: "bi" },
    { id: 470, event: "wkroczenie I Kompanii Kadrowej do Królestwa Polskiego", date: "1914", era: "[ww1]", area: ["pl"], type: "in" },
    { id: 471, event: "utworzenie Legionów Polskich w Austro-Węgrzech", date: "1914", era: "[ww1]", area: ["pl", "at"], type: "in" },
    { id: 472, event: "bitwa pod Ypres, pierwsze wykorzystanie gazów bojowych", date: "1915", era: "[ww1]", area: ["be","fr","de"], type: "bi" },
    { id: 473, event: "bitwa pod Verdun", date: "1916", era: "[ww1]", area: ["fr"], type: "bi" },
    { id: 474, event: "bitwa jutlandzka", date: "1916", era: "[ww1]", area: ["sea"], type: "bi" },
    { id: 475, event: "bitwa nad Sommą", date: "1916", era: "[ww1]", area: ["fr"], type: "bi" },
    { id: 476, event: "akt 5 listopada", date: "1916", era: "[ww1]", area: ["pl"], type: "po" },
    { id: 477, event: "rewolucja lutowa w Rosji i abdykacja Mikołaja II", date: "1917", era: "[ww1]", area: ["ru"], type: "in" },
    { id: 478, event: "przystąpienie USA do IWŚ", date: "1917", era: "[ww1]", area: ["us"], type: "in" },
    { id: 479, event: "rewolucja październikowa", date: "1917", era: "[ww1]", area: ["ru"], type: "in" },
    { id: 480, event: "kryzys przysięgowy, powstanie KNP", date: "1917", era: "[ww1]", area: ["pl"], type: "in" },
    { id: 481, event: "ogłoszenie 14-punktów Wilsona", date: "1918", era: "[ww1]", area: ["us"], type: "po" },
    { id: 482, event: "pokój brzeski", date: "1918", era: "[ww1]", area: ["ru", "de"], type: "po" },
    { id: 483, event: "abdykacja Wilhelma II", date: "1918", era: "[ww1]", area: ["de"], type: "in" },
    { id: 484, event: "podpisanie rozejmu w Compiegne", date: "1918", era: "[ww1]", area: ["fr", "de"], type: "po" },
    { id: 485, event: "przejęcie władzy wojskowej przez Piłsudskiego", date: "1918", era: "[mw]", area: ["pl"], type: "in" },
    { id: 486, event: "wojna polsko-ukraińska o Lwów i Galicję Wschodnią", date: "1918-1919", era: "[mw]", area: ["pl", "ua"], type: "bi" },
    { id: 487, event: "powstanie wielkopolskie", date: "1918-1919", era: "[mw]", area: ["pl"], type: "bi" },
    { id: 488, event: "podpisanie traktatu wersalskiego", date: "1919", era: "[mw]", area: ["fr"], type: "po" },
    { id: 489, event: "traktat w Saint Germain", date: "1919", era: "[mw]", area: ["at"], type: "po" },
    { id: 490, event: "traktat w Neuilly", date: "1919", era: "[mw]", area: ["bg"], type: "po" },
    { id: 491, event: "traktat w Trianon", date: "1920", era: "[mw]", area: ["hu"], type: "po" },
    { id: 492, event: "traktat w Sevres", date: "1920", era: "[mw]", area: ["tr"], type: "po" },
    { id: 493, event: "wybuch wojny polsko-bolszewickiej", date: "1919", era: "[mw]", area: ["pl", "ru"], type: "bi" },
    { id: 494, event: "uchwalenie małej konstytucji", date: "1919", era: "[mw]", area: ["pl"], type: "in" },
    { id: 495, event: "I powstanie śląskie", date: "1919", era: "[mw]", area: ["pl", "de"], type: "bi" },
    { id: 496, event: "plebiscyty na Warmii, Mazurach i Powiślu", date: "1920", era: "[mw]", area: ["pl", "de"], type: "po" },
    { id: 497, event: "bitwa Warszawska", date: "1920", era: "[mw]", area: ["pl"], type: "bi" },
    { id: 498, event: "II powstanie śląskie", date: "1920", era: "[mw]", area: ["pl", "de"], type: "bi" },
    { id: 499, event: "zajęcie wileńszczyzny przez Żeligowskiego", date: "1920", era: "[mw]", area: ["pl", "lt"], type: "in" },
    { id: 500, event: "wprowadzenie NEP w Rosji Sowieckiej", date: "1921", era: "[mw]", area: ["ru"], type: "in" },
    { id: 501, event: "konstytucja marcowa", date: "1921", era: "[mw]", area: ["pl"], type: "in" },
{ id: 502, event: "traktat w Rydze", date: "1921", era: "[mw]", area: ["pl", "ru"], type: "po" },
{ id: 503, event: "wojna polsko-bolszewicka", date: "1919-1921", era: "[mw]", area: ["pl", "ru"], type: "bi" },
{ id: 504, event: "plebiscyt na Górnym Śląsku", date: "1921", era: "[mw]", area: ["pl", "de"], type: "po" },
{ id: 505, event: "III powstanie śląskie", date: "1921", era: "[mw]", area: ["pl", "de"], type: "bi" },
{ id: 506, event: "traktat w Rapallo", date: "1922", era: "[mw]", area: ["de", "ru"], type: "po" },
{ id: 507, event: "marsz na Rzym, przejęcie władzy przez Mussoliniego", date: "1922", era: "[mw]", area: ["it"], type: "in" },
{ id: 508, event: "powstanie ZSRS", date: "1922", era: "[mw]", area: ["ru"], type: "in" },
{ id: 509, event: "przyłączenie Litwy Środkowej do Polski", date: "1922", era: "[mw]", area: ["pl", "lt"], type: "in" },
{ id: 510, event: "zabójstwo prezydenta Gabriela Narutowicza", date: "1922", era: "[mw]", area: ["pl"], type: "in" },
{ id: 511, event: "pucz monachijski", date: "1923", era: "[mw]", area: ["de"], type: "in" },
{ id: 512, event: "reforma walutowa Grabskiego", date: "1924", era: "[mw]", area: ["pl"], type: "in" },
{ id: 513, event: "układ w Locarno", date: "1925", era: "[mw]", area: ["de", "fr"], type: "po" },
{ id: 514, event: "przewrót majowy", date: "1926", era: "[mw]", area: ["pl"], type: "in" },
{ id: 515, event: "ustawy wyjątkowe we Włoszech", date: "1926", era: "[mw]", area: ["it"], type: "in" },
{ id: 516, event: "nowela sierpniowa", date: "1926", era: "[mw]", area: ["pl"], type: "in" },
{ id: 517, event: "utworzenie BBWR", date: "1926", era: "[mw]", area: ["pl"], type: "in" },
{ id: 518, event: "czarny czwartek, początek Wielkiego Kryzysu", date: "1929", era: "[mw]", area: ["us"], type: "in" },
{ id: 519, event: "powstanie Centrolewu", date: "1929", era: "[mw]", area: ["pl"], type: "in" },
{ id: 520, event: "Kongres Obrony Prawa i Wolności Ludu, wybory brzeskie", date: "1930", era: "[mw]", area: ["pl"], type: "in" },
{ id: 521, event: "zajęcie Mandżurii przez wojska japońskie", date: "1931", era: "[mw]", area: ["cn", "jp"], type: "bi" },
{ id: 522, event: "proces brzeski", date: "1931-1932", era: "[mw]", area: ["pl"], type: "in" },
{ id: 523, event: "podpisanie polsko-sowieckiego paktu o nieagresji", date: "1932", era: "[mw]", area: ["pl", "ru"], type: "po" },
{ id: 524, event: "wielki głód na Ukrainie", date: "1932-1933", era: "[mw]", area: ["ua", "ru"], type: "in" },
{ id: 525, event: "powołanie Adolfa Hitlera na urząd kanclerza Niemiec", date: "1933", era: "[mw]", area: ["de"], type: "in" },
{ id: 526, event: "noc długich noży", date: "1934", era: "[mw]", area: ["de"], type: "in" },
{ id: 527, event: "polsko-niemiecki pakt o nieagresji", date: "1934", era: "[mw]", area: ["pl", "de"], type: "po" },
{ id: 528, event: "wielka czystka w ZSRS", date: "1934-1939", era: "[mw]", area: ["ru"], type: "in" },
{ id: 529, event: "przywrócenie powszechnej służby wojskowej w Niemczech, powstanie Wehrmachtu", date: "1935", era: "[mw]", area: ["de"], type: "in" },
{ id: 530, event: "uchwalenie ustaw norymberskich", date: "1935", era: "[mw]", area: ["de"], type: "in" },
{ id: 531, event: "atak Włoch na Abisynię", date: "1935", era: "[mw]", area: ["it", "et"], type: "bi" },
{ id: 532, event: "wojna domowa w Hiszpanii", date: "1936-1939", era: "[mw]", area: ["es"], type: "bi" },
{ id: 533, event: "remilitaryzacja Nadrenii", date: "1936", era: "[mw]", area: ["de"], type: "in" },
{ id: 534, event: "pakt antykominternowski", date: "1936", era: "[mw]", area: ["de", "jp"], type: "po" },
{ id: 535, event: "początek budowy COP", date: "1936", era: "[mw]", area: ["pl"], type: "in" },
{ id: 536, event: "Anschluss Austrii", date: "1938", era: "[mw]", area: ["de", "at"], type: "in" },
{ id: 537, event: "konferencja monachijska", date: "1938", era: "[mw]", area: ["de", "fr", "it", "uk"], type: "po" },
{ id: 538, event: "noc kryształowa", date: "1938", era: "[mw]", area: ["de"], type: "in" },
{ id: 539, event: "zajęcie Zaolzia", date: "1938", era: "[mw]", area: ["pl", "cz"], type: "in" },
{ id: 540, event: "rozbiór Czechosłowacji", date: "1939", era: "[mw]", area: ["de", "cz", "pl"], type: "in" },
{ id: 541, event: "zajęcie Albanii", date: "1939", era: "[mw]", area: ["it", "al"], type: "in" },
{ id: 542, event: "pakt Ribbentrop-Mołotow", date: "1939", era: "[mw]", area: ["de", "ru"], type: "po" },
{ id: 543, event: "wybuch II wojny światowej", date: "1939", era: "[ww2]", area: ["pl", "de"], type: "bi" },
{ id: 544, event: "atak na Polskę", date: "1939", era: "[ww2]", area: ["pl", "de"], type: "bi" },
{ id: 545, event: "wojna zimowa", date: "1939-1940", era: "[ww2]", area: ["fi", "ru"], type: "bi" },
{ id: 546, event: "utworzenie Służby Zwycięstwu Polski, Związku Walki Zbrojnej", date: "1939", era: "[ww2]", area: ["pl"], type: "in" },
{ id: 547, event: "powołanie rządu emigracyjnego gen. Władysława Sikorskiego", date: "1939", era: "[ww2]", area: ["pl"], type: "in" },
{ id: 548, event: "układ o granicach i przyjaźni między III Rzeszą i ZSRS", date: "1939", era: "[ww2]", area: ["de", "ru"], type: "po" },
{ id: 549, event: "atak Niemiec na Danię i Norwegię", date: "1940", era: "[ww2]", area: ["de", "dk", "no"], type: "bi" },
{ id: 550, event: "atak Niemiec na Belgię, Holandię, Luksemburg i Francję", date: "1940", era: "[ww2]", area: ["de", "fr", "be", "nl", "lu"], type: "bi" },
{ id: 551, event: "włączenie państw bałtyckich i Besarabii do ZSRS", date: "1940", era: "[ww2]", area: ["lt", "lv", "ee", "ru"], type: "in" },
{ id: 552, event: "bitwa o Anglię", date: "1940", era: "[ww2]", area: ["uk", "de"], type: "bi" },
{ id: 553, event: "agresja Włoch na Grecję", date: "1940", era: "[ww2]", area: ["it", "gr"], type: "bi" },
{ id: 554, event: "wymordowanie polskich jeńców wojennych w Katyniu", date: "1940", era: "[ww2]", area: ["pl", "ru"], type: "in" },
{ id: 555, event: "utworzenie Auschwitz", date: "1940", era: "[ww2]", area: ["pl"], type: "in" },
{ id: 556, event: "agresja państw Osi na Grecję i Jugosławię", date: "1941", era: "[ww2]", area: ["gr", "yu", "it", "de"], type: "bi" },
{ id: 557, event: "operacja Barbarossa", date: "1941", era: "[ww2]", area: ["de", "ru"], type: "bi" },
{ id: 558, event: "podpisanie karty atlantyckiej", date: "1941", era: "[ww2]", area: ["uk", "us"], type: "po" },
{ id: 559, event: "nalot na Pearl Harbor", date: "1941", era: "[ww2]", area: ["us", "jp"], type: "bi" },
{ id: 560, event: "układ Sikorski-Majski", date: "1941", era: "[ww2]", area: ["pl", "ru"], type: "po" },
{ id: 561, event: "konferencja w Wannsee", date: "1942", era: "[ww2]", area: ["de"], type: "in" },
{ id: 562, event: "bitwa o Midway", date: "1942", era: "[ww2]", area: ["us", "jp"], type: "bi" },
{ id: 563, event: "bitwa o Stalingrad", date: "1942", era: "[ww2]", area: ["ru", "de"], type: "bi" },
{ id: 564, event: "operacja Torch", date: "1942", era: "[ww2]", area: ["af", "us", "uk"], type: "bi" },
{ id: 565, event: "utworzenie PPR", date: "1942", era: "[ww2]", area: ["pl"], type: "in" },
{ id: 566, event: "przemianowanie ZWZ na AK", date: "1942", era: "[ww2]", area: ["pl"], type: "in" },
{ id: 567, event: "utworzenie Żegoty", date: "1942", era: "[ww2]", area: ["pl"], type: "in" },
{ id: 568, event: "bitwa na Łuku Kurskim", date: "1943", era: "[ww2]", area: ["ru", "de"], type: "bi" },
{ id: 569, event: "desant aliantów na Sycylię", date: "1943", era: "[ww2]", area: ["it"], type: "bi" },
{ id: 570, event: "kapitulacja Włoch", date: "1943", era: "[ww2]", area: ["it"], type: "in" },
{ id: 571, event: "konferencja w Teheranie", date: "1943", era: "[ww2]", area: ["ir", "us", "uk", "ru"], type: "po" },
{ id: 572, event: "powstanie w getcie warszawskim", date: "1943", era: "[ww2]", area: ["pl"], type: "bi" },
{ id: 573, event: "katastrofa w Gibraltarze, śmierć Sikorskiego", date: "1943", era: "[ww2]", area: ["gi"], type: "in" },
{ id: 574, event: "rzeź wołyńska", date: "1943", era: "[ww2]", area: ["ua", "pl"], type: "in" },
{ id: 575, event: "D-Day, operacja Market Garden", date: "1944", era: "[ww2]", area: ["fr", "nl", "uk", "us"], type: "bi" },
{ id: 576, event: "początek akcji 'Burza'", date: "1944", era: "[ww2]", area: ["pl"], type: "in" },
{ id: 577, event: "bitwa o Monte Cassino", date: "1944", era: "[ww2]", area: ["it"], type: "bi" },
{ id: 578, event: "manifest PKWN", date: "1944", era: "[ww2]", area: ["pl"], type: "in" },
{ id: 579, event: "powstanie warszawskie", date: "1944", era: "[ww2]", area: ["pl"], type: "bi" },
{ id: 580, event: "konferencja w Jałcie", date: "1945", era: "[ww2]", area: ["ru", "uk", "us"], type: "po" },
{ id: 581, event: "bitwa o Berlin", date: "1945", era: "[ww2]", area: ["de"], type: "bi" },
{ id: 582, event: "konferencja w Poczdamie", date: "1945", era: "[ww2]", area: ["de", "uk", "us", "ru"], type: "po" },
{ id: 583, event: "zrzucenie bomb atomowych na Hiroshimę i Nagasaki", date: "1945", era: "[ww2]", area: ["jp"], type: "bi" },
{ id: 584, event: "kapitulacja Niemiec", date: "1945", era: "[ww2]", area: ["de"], type: "po" },
{ id: 585, event: "kapitulacja Japonii", date: "1945", era: "[ww2]", area: ["jp"], type: "po" },
{ id: 586, event: "powstanie ONZ", date: "1945", era: "[pw]", area: ["us"], type: "in" },
{ id: 587, event: "rozwiązanie AK", date: "1945", era: "[pw]", area: ["pl"], type: "in" },
{ id: 588, event: "powstanie TRJN", date: "1945", era: "[pw]", area: ["pl"], type: "in" },
{ id: 589, event: "początek zimnej wojny", date: "1946", era: "[pw]", area: ["us", "ru"], type: "in" },
{ id: 590, event: "referendum ludowe", date: "1946", era: "[pw]", area: ["pl"], type: "in" },
    { id: 591, event: "ogłoszenie doktryny Trumana", date: "1947", era: "[pw]", area: ["us"], type: "in" },
{ id: 592, event: "plan Marshalla", date: "1947", era: "[pw]", area: ["us", "eu"], type: "po" },
{ id: 593, event: "powstanie Indii i Pakistanu", date: "1947", era: "[pw]", area: ["in", "pk"], type: "in" },
{ id: 594, event: "sfałszowane wybory do sejmu ustawodawczego", date: "1947", era: "[pw]", area: ["pl"], type: "in" },
{ id: 595, event: "akcja Wisła", date: "1947", era: "[pw]", area: ["pl"], type: "in" },
{ id: 596, event: "proklamacja niepodległości Izraela", date: "1948", era: "[pw]", area: ["il"], type: "in" },
{ id: 597, event: "kryzys berliński", date: "1948", era: "[pw]", area: ["de", "us", "ru"], type: "bi" },
{ id: 598, event: "utworzenie PZPR", date: "1948", era: "[pw]", area: ["pl"], type: "in" },
{ id: 599, event: "powstanie RWPG", date: "1949", era: "[pw]", area: ["ru", "eu"], type: "in" },
{ id: 600, event: "powstanie NATO", date: "1949", era: "[pw]", area: ["us", "eu"], type: "po" },
{ id: 601, event: "powstanie RFN", date: "1949", era: "[pw]", area: ["de"], type: "in" },
{ id: 602, event: "powstanie ChRL", date: "1949", era: "[pw]", area: ["cn"], type: "in" },
{ id: 603, event: "powstanie NRD", date: "1949", era: "[pw]", area: ["de"], type: "in" },
{ id: 604, event: "wojna w Korei", date: "1950-1953", era: "[pw]", area: ["kr", "cn", "us"], type: "bi" },
{ id: 605, event: "powołanie Europejskiej Wspólnoty Węgla i Stali", date: "1951", era: "[pw]", area: ["eu"], type: "po" },
{ id: 606, event: "uchwalenie konstytucji PRL", date: "1952", era: "[pw]", area: ["pl"], type: "in" },
{ id: 607, event: "śmierć Stalina", date: "1953", era: "[pw]", area: ["ru"], type: "in" },
{ id: 608, event: "utworzenie Układu Warszawskiego", date: "1955", era: "[pw]", area: ["ru", "eu"], type: "po" },
{ id: 609, event: "XX zjazd KPZS", date: "1956", era: "[pw]", area: ["ru"], type: "in" },
{ id: 610, event: "rewolucja węgierska", date: "1956", era: "[pw]", area: ["hu"], type: "bi" },
{ id: 611, event: "kryzys sueski", date: "1956", era: "[pw]", area: ["eg", "uk", "fr", "il"], type: "bi" },
{ id: 612, event: "poznański czerwiec", date: "1956", era: "[pw]", area: ["pl"], type: "bi" },
{ id: 613, event: "Gomułka I sekretarzem KC PZPR", date: "1956", era: "[pw]", area: ["pl"], type: "in" },
{ id: 614, event: "podpisanie traktatów rzymskich – powstanie EWG i Euroatomu", date: "1957", era: "[pw]", area: ["eu"], type: "po" },
{ id: 615, event: "początek polityki wielkiego skoku w Chinach", date: "1958", era: "[pw]", area: ["cn"], type: "in" },
{ id: 616, event: "rok Afryki", date: "1960", era: "[pw]", area: ["af"], type: "in" },
{ id: 617, event: "pierwszy lot załogowy w Kosmos", date: "1961", era: "[pw]", area: ["ru"], type: "na" },
{ id: 618, event: "budowa muru berlińskiego", date: "1961", era: "[pw]", area: ["de"], type: "in" },
{ id: 619, event: "kryzys kubański", date: "1962", era: "[pw]", area: ["cu", "us", "ru"], type: "bi" },
{ id: 620, event: "Sobór Watykański II", date: "1962-1965", era: "[pw]", area: ["va"], type: "in" },
{ id: 621, event: "Wojna w Wietnamie", date: "1964-1973", era: "[pw]", area: ["vn", "us"], type: "bi" },
{ id: 622, event: "rewolucja kulturalna w Chinach", date: "1966", era: "[pw]", area: ["cn"], type: "in" },
{ id: 623, event: "wojna sześciodniowa na Bliskim Wschodzie", date: "1967", era: "[pw]", area: ["il", "eg", "sy", "jo"], type: "bi" },
{ id: 624, event: "rewolta studencka w Europie Zachodniej i USA", date: "1968", era: "[pw]", area: ["us", "eu"], type: "in" },
{ id: 625, event: "stłumienie Praskiej Wiosny", date: "1968", era: "[pw]", area: ["cz", "ru"], type: "bi" },
{ id: 626, event: "wydarzenia marcowe w Polsce", date: "1968", era: "[pw]", area: ["pl"], type: "in" },
{ id: 627, event: "lądowanie Apollo 11 na Księżycu", date: "1969", era: "[pw]", area: ["us"], type: "na" },
{ id: 628, event: "uznanie przez RFN zachodniej granicy Polski", date: "1970", era: "[pw]", area: ["pl", "de"], type: "po" },
{ id: 629, event: "strajki na wybrzeżu", date: "1970", era: "[pw]", area: ["pl"], type: "bi" },
{ id: 630, event: "Gierek I sekretarzem KC PZPR", date: "1970", era: "[pw]", area: ["pl"], type: "in" },
{ id: 631, event: "wojna Jom Kippur", date: "1973", era: "[pw]", area: ["il", "eg", "sy"], type: "bi" },
{ id: 632, event: "początek kryzysu paliwowego", date: "1973", era: "[pw]", area: ["us", "world"], type: "in" },
{ id: 633, event: "rewolucja goździków w Portugalii", date: "1974", era: "[pw]", area: ["pt"], type: "bi" },
{ id: 634, event: "podpisanie aktu końcowego KBWE", date: "1975", era: "[pw]", area: ["eu", "us"], type: "po" },
{ id: 635, event: "koniec dyktatury Franco w Hiszpanii", date: "1975", era: "[pw]", area: ["es"], type: "in" },
{ id: 636, event: "nowelizacja Konstytucji PRL", date: "1976", era: "[pw]", area: ["pl"], type: "in" },
{ id: 637, event: "robotnicze wystąpienia w Radomiu, Ursusie i Płocku", date: "1976", era: "[pw]", area: ["pl"], type: "bi" },
{ id: 638, event: "powstanie Komitetu Obrony Robotników", date: "1976", era: "[pw]", area: ["pl"], type: "in" },
{ id: 639, event: "powołanie Ruchu Obrony Praw Człowieka i Obywatela", date: "1977", era: "[pw]", area: ["pl"], type: "in" },
{ id: 640, event: "powstanie Wolnych Związków Zawodowych Wybrzeża", date: "1978", era: "[pw]", area: ["pl"], type: "in" },
{ id: 641, event: "Wojtyła Papieżem", date: "1978", era: "[pw]", area: ["pl", "va"], type: "in" },
{ id: 642, event: "rewolucja islamska w Iranie", date: "1979", era: "[pw]", area: ["ir"], type: "bi" },
{ id: 643, event: "interwencja ZSRR w Afganistanie", date: "1979-1989", era: "[pw]", area: ["af", "ru"], type: "bi" },
{ id: 644, event: "pierwsza pielgrzymka JP2 do Polski", date: "1979", era: "[pw]", area: ["pl"], type: "in" },
{ id: 645, event: "strajk w Stoczni Gdańskiej", date: "1980", era: "[pw]", area: ["pl"], type: "bi" },
{ id: 646, event: "porozumienia sierpniowe, powstanie NSZZ Solidarności", date: "1980", era: "[pw]", area: ["pl"], type: "po" },
{ id: 647, event: "zamach na JP2", date: "1981", era: "[pw]", area: ["va", "it"], type: "in" },
{ id: 648, event: "stan wojenny w Polsce", date: "1981-1983", era: "[pw]", area: ["pl"], type: "bi" },
{ id: 649, event: "pacyfikacja kopalni Wujek", date: "1981", era: "[pw]", area: ["pl"], type: "bi" },
{ id: 650, event: "Michaił Gorbaczow sekretarzem generalnym KC KPZR", date: "1985", era: "[pw]", area: ["ru"], type: "in" },
{ id: 651, event: "podpisanie układu w Schengen", date: "1985", era: "[pw]", area: ["eu"], type: "po" },
{ id: 652, event: "katastrofa w Czarnobylu", date: "1986", era: "[pw]", area: ["ua"], type: "na" },
{ id: 653, event: "masakra na placu Tiananmen", date: "1989", era: "[pw]", area: ["cn"], type: "bi" },
{ id: 654, event: "Jesień Narodów", date: "1989", era: "[pw]", area: ["eu"], type: "in" },
{ id: 655, event: "obrady Okrągłego Stołu", date: "1989", era: "[pw]", area: ["pl"], type: "po" },
{ id: 656, event: "I tura częściowo wolnych wyborów", date: "1989", era: "[pw]", area: ["pl"], type: "in" },
{ id: 657, event: "powołanie rządu Tadeusza Mazowieckiego", date: "1989", era: "[pw]", area: ["pl"], type: "in" },
{ id: 658, event: "ogłoszenie niepodległości przez Litwę", date: "1990", era: "[ff]", area: ["lt"], type: "in" },
{ id: 659, event: "zjednoczenie Niemiec", date: "1990", era: "[ff]", area: ["de"], type: "in" },
{ id: 660, event: "rozwiązanie PZPR, realizacja planu Balcerowicza", date: "1990", era: "[ff]", area: ["pl"], type: "in" },
{ id: 661, event: "zaprzysiężenie Lecha Wałęsy na prezydenta RP", date: "1990", era: "[ff]", area: ["pl"], type: "in" },
{ id: 662, event: "I wojna w Zatoce Perskiej", date: "1991", era: "[ff]", area: ["iq", "us"], type: "bi" },
{ id: 663, event: "rozpad ZSRR", date: "1991", era: "[ff]", area: ["ru"], type: "in" },
{ id: 664, event: "powstanie WNP", date: "1991", era: "[ff]", area: ["ru", "eu"], type: "po" },
{ id: 665, event: "wojna w Jugosławii", date: "1991-1995", era: "[ff]", area: ["yu"], type: "bi" },
{ id: 666, event: "podpisanie traktatu z Maastricht o powołaniu Unii Europejskiej", date: "1992", era: "[ff]", area: ["eu"], type: "po" },
{ id: 667, event: "rozpad Czechosłowacji", date: "1993", era: "[ff]", area: ["cz", "sk"], type: "in" },
{ id: 668, event: "opuszczenie Polski przez ostatnie oddziały rosyjskie", date: "1993", era: "[ff]", area: ["pl"], type: "in" },
{ id: 669, event: "I wojna czeczeńska", date: "1994-1996", era: "[ff]", area: ["ru", "cz"], type: "bi" },
{ id: 670, event: "uchwalenie konstytucji RP", date: "1997", era: "[ff]", area: ["pl"], type: "in" },
{ id: 671, event: "przyjęcie Polski do NATO", date: "1999", era: "[ff]", area: ["pl", "us", "eu"], type: "po" },
{ id: 672, event: "II wojna czeczeńska", date: "1999-2009", era: "[ff]", area: ["ru", "cz"], type: "bi" },
{ id: 673, event: "zamach na World Trade Center", date: "2001", era: "[ff]", area: ["us"], type: "bi" },
{ id: 674, event: "pomarańczowa rewolucja na Ukrainie", date: "2004", era: "[ff]", area: ["ua"], type: "in" },
{ id: 675, event: "przyjęcie Polski do UE", date: "2004", era: "[ff]", area: ["pl", "eu"], type: "po" },
{ id: 676, event: "przystąpienie Polski do strefy Schengen", date: "2007", era: "[ff]", area: ["pl", "eu"], type: "po" },
{ id: 677, event: "wojna Gruzji z Rosją, Abchazją i Osetią Południową", date: "2008", era: "[ff]", area: ["ge", "ru"], type: "bi" },
{ id: 678, event: "światowy kryzys finansowy", date: "2008", era: "[ff]", area: ["world"], type: "in" },
{ id: 679, event: "początek Arabskiej Wiosny Ludów", date: "2010", era: "[ff]", area: ["af", "me"], type: "bi" },
{ id: 680, event: "katastrofa smoleńska", date: "2010", era: "[ff]", area: ["pl", "ru"], type: "in" },
{ id: 681, event: "wybuch wojny domowej w Syrii", date: "2011", era: "[ff]", area: ["sy"], type: "bi" },
{ id: 682, event: "Euromajdan", date: "2013", era: "[ff]", area: ["ua"], type: "bi" },
{ id: 683, event: "aneksja Krymu", date: "2014", era: "[ff]", area: ["ua", "ru"], type: "bi" },
               ];




    

let currentRound = 1; // Globalna zmienna do śledzenia bieżącej tury
let currentCardIndex = 0;
let mode = '';  // 'eventToDate' lub 'dateToEvent'
let wrongAnswers = [];
let sessionCards = [];
let sessionAttempts = {}; // Obiekt do śledzenia prób dla każdej fiszki
let groupFilter = 'all'; // 'all', 'pl', 'world'
let eraFilters = []; // Tablica epok
let sortOrder = 'chronological';  // 'chronological' lub 'random'
let startTime; // Czas rozpoczęcia sesji
let timerInterval; // Referencja do setInterval


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

// Wyświetl menu na początku
document.querySelector('.menu').style.display = 'block';

let chartInstance; // Referencja do wykresu
const correctAnswers = { count: 0 }; // Licznik poprawnych odpowiedzi
const incorrectAnswers = { count: 0 }; // Licznik błędnych odpowiedzi

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







function updateRoundInfo() {
    currentRound++;
    const roundInfo = document.getElementById("round-info");
    roundInfo.textContent = `Tura ${currentRound}`; // Aktualizacja napisu
}


function initializeProgressBar() {
    const progressBar = document.getElementById("progress-bar");
    const progressText = document.getElementById("progress-text");

    // Ustaw pasek na początkowe wartości
    progressBar.style.width = "0%";
    progressText.textContent = `0/${sessionCards.length}`; // Liczba całkowita fiszek w sesji
}

function updateProgressBar() {
    const progressBar = document.getElementById("progress-bar");
    const progressText = document.getElementById("progress-text");

    const totalCards = sessionAttempts ? Object.keys(sessionAttempts).length : sessionCards.length; // Początkowa liczba fiszek
    const solvedCards = totalCards - sessionCards.length; // Rozwiązane fiszki

    // Oblicz procent wypełnienia
    const progressPercent = (solvedCards / totalCards) * 100;

    // Zaktualizuj pasek i tekst
    progressBar.style.width = `${progressPercent}%`;
    progressText.textContent = `${solvedCards}/${totalCards}`;
    console.log("dziala aktualizacja pska");
}

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
    sessionCards = getFilteredFlashcards();
    if (sessionCards.length === 0) {
    console.error('Brak fiszek do wyświetlenia.');
    return; // Zakończ, jeśli nie ma fiszek
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
// pokazywanie i chowanie elementow
    document.querySelector(".menu").style.display = "none";
    document.querySelector(".epoki").style.display = "none";
    document.querySelector(".sortowanie").style.display = "none";
    document.querySelector(".ni").style.display = "none";
    document.querySelector(".flashcards").style.display = "block";
    document.querySelector(".summary").style.display = "none"; // Ukryj podsumowanie
    document.getElementById("advancedOptionsMenu").classList.add("hidden");
    document.getElementById("advancedOptionsButton").classList.add("hidden");
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
function getFilteredFlashcards() {
    console.log("Group Filter:", groupFilter);
    console.log("Era Filters:", eraFilters);

    const countryFilter = document.querySelector('input[name="country"]:checked')?.value || 'all';
    
    // Pobieranie wybranych typów fiszek
    const selectedTypes = Array.from(document.querySelectorAll('input[name="type"]:checked')).map(cb => cb.value);

    // Filtrowanie kart na podstawie wybranych kryteriów
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

    // Usunięcie duplikatów
    const uniqueFilteredCards = removeDuplicates(filteredCards);

    console.log("Filtered Cards (before duplicates removal):", filteredCards);
    console.log("Filtered Cards (after duplicates removal):", uniqueFilteredCards);

    return uniqueFilteredCards;
}






function toggleAdvancedOptions() {
    const advancedOptionsMenu = document.getElementById('advancedOptionsMenu');
    advancedOptionsMenu.classList.toggle('hidden');
}


function showNextCard() {
    hideButtons();
    document.getElementById('flashcardContent').style.opacity = 0; // Ukryj zawartość pytania
const flashcardContent = document.getElementById('flashcardContent');
    if (!flashcardContent) {
        console.error('Element #flashcardContent nie istnieje.');
        return;
    }

    // Usuń starą zawartość przed wyświetleniem nowej fiszki
    flashcardContent.innerHTML = '';
    if (currentCardIndex < sessionCards.length) {
        const flashcard = sessionCards[currentCardIndex];
    console.log('Treść wyświetlana w flashcardContent:', flashcardContent.innerHTML); // Sprawdź zawartość fiszki
    console.log('Aktualny indeks:', currentCardIndex);
        sessionAttempts[flashcard.id] += 1;  // Zwiększ liczbę prób

        if (mode === 'eventToDate') {
            document.getElementById('flashcardContent').innerHTML = `<p><strong>Wydarzenie:</strong> ${flashcard.event}</p>`;
        } else {
            document.getElementById('flashcardContent').innerHTML = `<p><strong>Data:</strong> ${flashcard.date}</p>`;
        }

        // Ustawienie opóźnienia dla ukrycia i pokazania elementów
        setTimeout(() => {
            console.log('Aktualna fiszka:', sessionCards[currentCardIndex]);
            document.getElementById('flashcardContent').style.opacity = 1; // Upewnij się, że zawartość pytania jest widoczna
            showButtons();
        }, 100); // Opóźnienie 100 ms dla płynności
    } else if (wrongAnswers.length > 0) {
        sessionCards = [...wrongAnswers];  // Przepisz tylko błędne odpowiedzi
        wrongAnswers = [];
        currentCardIndex = 0;
        updateProgressBar();
        updateRoundInfo();
        showNextCard();
    } else {
        showSummary();
        currentRound = 0;
    }
}

function niga () {
    incorrectAnswers.count++;
    chartInstance.data.datasets[0].data = [correctAnswers.count, incorrectAnswers.count];
    chartInstance.update();
    
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

    hideButtons();

    document.getElementById('flashcardContent').style.opacity = 1; // Upewnij się, że zawartość pytania jest widoczna

    if (userInput.toLowerCase() === correctAnswer.toLowerCase()) {
        document.getElementById('flashcardContent').innerHTML += `<p class="correct">Poprawnie!</p>`;
        sessionCards.splice(currentCardIndex, 1);  // Usuń poprawnie rozwiązane fiszki z listy
        correctAnswers.count++; // Zwiększ liczbę poprawnych odpowiedzi
        console.log("poprawne:", correctAnswers);
    } else {
        document.getElementById('flashcardContent').innerHTML += `<p class="incorrect">Błąd! Poprawna odpowiedź to: ${correctAnswer}</p>`;
        wrongAnswers.push(flashcard);  // Dodaj do listy do powtórzenia
        sessionCards.splice(currentCardIndex, 1);  // Usuń z głównej listy
        incorrectAnswers.count++; // Zwiększ liczbę błędnych odpowiedzi
        console.log("niepoprawne:", incorrectAnswers);
    }
    chartInstance.data.datasets[0].data = [correctAnswers.count, incorrectAnswers.count];
    chartInstance.update(); // Aktualizacja wykresu
    // Opóźnienie, aby komunikat o poprawności się pojawił
    setTimeout(showNextCard, 1000);  // Poczekaj 1 sekunde i wyświetl kolejne pytanie

    // Wyczyść pole odpowiedzi
    document.getElementById('userInput').value = '';
    
    
    updateProgressBar();

}

    
function hideFlashcards() {
    // Ukrywa fiszki podczas powrotu do menu
    document.querySelector('.flashcards').style.display = 'none';
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

let canTrigger = true; // Flag to track if the event can be triggered

document.getElementById('userInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter' && canTrigger) {
        e.preventDefault(); // Prevent default behavior of the Enter key
        checkAnswer();
        
        canTrigger = false; // Disable the event
        setTimeout(() => {
            canTrigger = true; // Re-enable the event after 2 seconds
        }, 2000);
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
    hideButtons();

    document.getElementById('flashcardContent').style.opacity = 1; // Upewnij się, że zawartość pytania jest widoczna
    document.getElementById('flashcardContent').innerHTML += `<p class="incorrect">Poprawna odpowiedź to: ${correctAnswer}</p>`;
    wrongAnswers.push(flashcard);  // Dodaj do listy do powtórzenia
    sessionCards.splice(currentCardIndex, 1);  // Usuń z głównej listy
    setTimeout(showNextCard, 1000);  // Od razu wyświetl kolejne pytanie
}

let attemptColor;
if (sessionAttempts[card.id] === 1) {
    attemptColor = "green";
} else if (sessionAttempts[card.id] === 2) {
    attemptColor = "lightgreen";
} else if (sessionAttempts[card.id] === 3) {
    attemptColor = "yellow";
} else {
    attemptColor = "red";
}
function retryWrongAnswers() {
    // Filtrowanie fiszek, na które odpowiedziano za więcej niż pierwszym razem
    const retryCards = Object.keys(sessionAttempts)
        .filter(id => sessionAttempts[id] > 1) // Wybrane ID fiszek
        .map(id => flashcards.find(card => card.id === parseInt(id))); // Znalezienie pełnych obiektów fiszek

    if (retryCards.length === 0) {
        alert("Nie ma fiszek do powtórzenia!"); // Informacja, jeśli nie ma błędnych odpowiedzi
        return;
    }
console.log("dziala retry");
    
    // Przygotowanie nowej sesji dla powtórki
    document.querySelector('.summary').style.display = 'none';
    document.querySelector('.flashcards').style.display = 'block';
    showInput();
    sessionCards = retryCards;
    console.log("Session Cards After Sorting:", sessionCards);
    currentCardIndex = 0;
    wrongAnswers = [];
    initializeProgressBar();
    startTimer();
    updateRoundInfo();
    showNextCard();
}
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

function returnToMenu() {
    document.querySelector(".menu").style.display = "block";
    document.querySelector(".epoki").style.display = "block";
    document.querySelector(".sortowanie").style.display = "block";
    document.querySelector(".ni").style.display = "block";
    document.querySelector(".flashcards").style.display = "none";
    document.querySelector(".summary").style.display = "none"; // Ukryj podsumowanie
    document.getElementById("advancedOptionsMenu").classList.add("hidden");
    resetSession();
}


function showSummary() { // Początek funkcji
    hideInput(); // Ukrywa pole wejściowe
    hideButtons(); // Ukrywa przyciski
    stopTimer(); // Zatrzymaj stoper
    document.querySelector('.flashcards').style.display = 'none'; // Ukrywa sekcję fiszek
    document.querySelector('.summary').style.display = 'block'; // Wyświetla sekcję podsumowania
    
    const summaryContent = document.getElementById('summaryContent'); // Pobiera element dla podsumowania
    summaryContent.innerHTML = '<ul>'; // Rozpoczyna listę w HTML
// Obliczenie całkowitego czasu sesji
    const endTime = new Date(); // Czas zakończenia
    const totalTime = Math.floor((endTime - startTime) / 1000); // Całkowity czas w sekundach

    // Konwersja czasu na format MM:SS
    const minutes = Math.floor(totalTime / 60);
    const seconds = totalTime % 60;

    // Wyświetlenie czasu w podsumowaniu
    summaryContent.innerHTML += `
        <li><strong>Całkowity czas sesji:</strong> ${minutes} min ${seconds} sek</li>
    `;
    // Iteracja przez fiszki w sesji
    flashcards.forEach(card => { // Rozpoczyna iterację
        if (sessionAttempts[card.id] > 0) {  // Sprawdza, czy fiszka była częścią sesji
            let correctAnswer = '';
            let attemptColor;
if (sessionAttempts[card.id] === 1) {
    attemptColor = "green";
} else if (sessionAttempts[card.id] === 2) {
    attemptColor = "lightgreen";
} else if (sessionAttempts[card.id] === 3) {
    attemptColor = "yellow";
} else {
    attemptColor = "red";
}
            if (mode === 'eventToDate') { // Jeśli tryb to 'eventToDate'
                correctAnswer = card.date;
                summaryContent.innerHTML += `
    <li>${card.event} : <strong>${correctAnswer}</strong>. Udało się za 
    <br><strong><span style="color: ${attemptColor};">
        ${sessionAttempts[card.id] === 1 ? 'pierwszym razem' : `${sessionAttempts[card.id]} razem`}
    </span></strong>.
    </li>`;
            } else { // W przeciwnym razie
                correctAnswer = card.event;
                summaryContent.innerHTML += `
    <li>${card.date}: <strong>${correctAnswer}</strong>. Udało się za 
    <strong><span style="color: ${attemptColor};">
        ${sessionAttempts[card.id] === 1 ? 'pierwszym' : `${sessionAttempts[card.id]} razem`}
    </span></strong>.
    </li><ul>
            <li>Poprawne odpowiedzi: ${correctAnswers.count}</li>
            <li>Niepoprawne odpowiedzi: ${incorrectAnswers.count}</li>
        </ul>
    `;
            }
        }
    }); // Kończy iterację
    summaryContent.innerHTML += '</ul>'; // Kończy listę
} // Koniec funkcji
