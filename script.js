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
    { id: 93, event: "Powstanie Młodych Włochów", date: "1831", era: "[xix]", area: ["it"], type: "po" },
    { id: 94, event: "Powstanie Młodej Europy", date: "1834", era: "[xix]", area: ["eu"], type: "po" },
    { id: 95, event: "Powstanie rządu sardyńskiego", date: "1848", era: "[xix]", area: ["it"], type: "po" },
    { id: 96, event: "Zjednoczenie Włoch", date: "1861", era: "[xix]", area: ["it"], type: "po" },
    { id: 97, event: "Powstanie Imperium Niemieckiego", date: "1871", era: "[xix]", area: ["de"], type: "po" },
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
    { id: 218, event: "Opanowanie Pomorza Gdańskiego przez Krzyżaków", date: "1309", era: "[sm]", area: ["pl", "de"], type: "in" },
    { id: 223, event: "Powstanie Akademii Krakowskiej", date: "1364", era: "[sm]", area: ["pl"], type: "in" },
    { id: 224, event: "Rządy Andegawenów na Węgrzech", date: "1382-1385", era: "[sm]", area: ["hu"], type: "pa" },
    { id: 225, event: "Unia w Krewie", date: "1385", era: "[sm]", area: ["pl", "lt"], type: "po" },
    { id: 226, event: "Początek samodzielnych rządów Bolesława Krzywoustego", date: "1108", era: "[sm]", area: ["pl"], type: "pa" },
    { id: 227, event: "Wojna z królem niemieckim Henrykiem V", date: "1109", era: "[sm]", area: ["pl", "de"], type: "bi" },
    { id: 228, event: "Powstanie kroniki Gala Anonima", date: "1112-1116", era: "[sm]", area: ["pl"], type: "in" },
    { id: 229, event: "Podporządkowanie Polski Pomorza Gdańskiego", date: "1116", era: "[sm]", area: ["pl"], type: "in" },
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
    { id: 245, event: "Bitwa nad rzeką Kałką", date: "1223", era: "[sm]", area: ["ru", "pl"], type: "bi" },
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
    { id: 276, event: "Założenie Akademii Krakowskiej", date: "1364", era: "[sm]", area: ["pl"], type: "in" },
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
    { id: 333, event: "Koronacja cesarska Ottona I", date: "962", era: "[sm]", area: ["de"], type: "pa" }
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

function startFlashcards(selectedMode) {
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
    sessionAttempts = {};

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
    document.querySelector(".menu").style.display = "block";
    document.querySelector(".epoki").style.display = "block";
    document.querySelector(".sortowanie").style.display = "block";
    document.querySelector(".ni").style.display = "block";
    document.querySelector(".flashcards").style.display = "none";
    document.querySelector(".summary").style.display = "none"; // Ukryj podsumowanie
    document.getElementById("advancedOptionsMenu").classList.add("hidden");
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
