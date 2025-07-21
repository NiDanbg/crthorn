const authorData = {
    // =========================================================================
    // ПОРЕДИЦИ
    // =========================================================================
    series: [
        {
            id: "boria",
            i18n: {
                bg: { title: "Бория", series_synopsis: "В свят, огледален на нашия, древни тайни и жестоки конфликти заплашват да унищожат реалността..." },
                en: { title: "Boria", series_synopsis: "In a world that mirrors our own, ancient secrets and brutal conflicts threaten to destroy reality..." }
            },
                seriesImage: "/images/common/boria-series.jpg", // 
            books: [
    {
        id: "lechitelyat-ot-blekstoun",
        i18n: {
            bg: { title: "Лечителят от Блекстоун", genre: "Епично фентъзи", cover: "/images/bg/boria-1.jpg", synopsis: "/synopsis/bg/lechitelyat-ot-blekstoun.txt", excerpt: "/books/bg/lechitelyat-ot-blekstoun.md" },
            en: { title: "The Healer of Blackstone", genre: "Epic Fantasy", cover: "/images/en/boria-1.jpg", synopsis: "/synopsis/en/the-healer-of-blackstone.txt", excerpt: "/books/en/the-healer-of-blackstone.md" },
            de: { title: "Der Heiler von Blackstone", genre: "Epische Fantasy", cover: "/images/de/boria-1.jpg", synopsis: "/synopsis/de/der-heiler-von-blackstone.txt", excerpt: "/books/de/der-heiler-von-blackstone.md" },
            it: { title: "Il Guaritore di Blackstone", genre: "Fantasy Epico", cover: "/images/it/boria-1.jpg", synopsis: "/synopsis/it/il-guaritore-di-blackstone.txt", excerpt: "/books/it/il-guaritore-di-blackstone.md" },
            fr: { title: "Le Guérisseur de Blackstone", genre: "Fantasy Épique", cover: "/images/fr/boria-1.jpg", synopsis: "/synopsis/fr/le-guerisseur-de-blackstone.txt", excerpt: "/books/fr/le-guerisseur-de-blackstone.md" },
            es: { title: "El Sanador de Blackstone", genre: "Fantasía Épica", cover: "/images/es/boria-1.jpg", synopsis: "/synopsis/es/el-sanador-de-blackstone.txt", excerpt: "/books/es/el-sanador-de-blackstone.md" },
            nl: { title: "De Genezer van Blackstone", genre: "Epische Fantasy", cover: "/images/nl/boria-1.jpg", synopsis: "/synopsis/nl/de-genezer-van-blackstone.txt", excerpt: "/books/nl/de-genezer-van-blackstone.md" },
            pt: { title: "O Curandeiro de Blackstone", genre: "Fantasia Épica", cover: "/images/pt/boria-1.jpg", synopsis: "/synopsis/pt/o-curandeiro-de-blackstone.txt", excerpt: "/books/pt/o-curandeiro-de-blackstone.md" },
            sv: { title: "Läkaren från Blackstone", genre: "Episk Fantasy", cover: "/images/sv/boria-1.jpg", synopsis: "/synopsis/sv/lakaren-fran-blackstone.txt", excerpt: "/books/sv/lakaren-fran-blackstone.md" }
        },
        links: [
            { "platform": "Amazon", "lang": "EN", "url": "https://www.amazon.com/dp/B0DSL4ZJ23" },
            { "platform": "Draft2Digital", "lang": "EN", "url": "https://books2read.com/u/47yL2g" },
            { "platform": "Laterpress", "lang": "EN", "url": "https://boria-eng.laterpress.com/book/the-healer-of-blackstone-eng" },
            { "platform": "Laterpress", "lang": "BG", "url": "https://boria-bg.laterpress.com/book/the-healer-of-blackstone-el-bg" },
            { "platform": "Amazon", "lang": "DE", "url": "https://www.amazon.com/dp/B0DSTRYXNB" },
            { "platform": "Amazon", "lang": "IT", "url": "https://www.amazon.com/dp/B0DT6MZ2TH" },
            { "platform": "Amazon", "lang": "FR", "url": "https://www.amazon.com/dp/B0DVZHVV84" },
            { "platform": "Draft2Digital", "lang": "FR", "url": "https://books2read.com/u/mYk6zV" },
            { "platform": "Amazon", "lang": "ES", "url": "https://www.amazon.com/dp/B0DVP9ZFPL" },
            { "platform": "Amazon", "lang": "NL", "url": "https://www.amazon.com/dp/B0DTP8TC7X" },
            { "platform": "Amazon", "lang": "PT", "url": "https://www.amazon.com/dp/B0DV4KPXKW" },
            { "platform": "Amazon", "lang": "SV", "url": "https://www.amazon.com/dp/B0DWFDR9P4" },
            { "platform": "Draft2Digital", "lang": "SV", "url": "https://books2read.com/u/mKkVK5" }

        ]
    },
    {
        id: "pazitelkata-na-briest",
        i18n: {
            bg: { title: "Пазителката на Бриест", genre: "Епично фентъзи", cover: "/images/bg/boria-2.jpg", synopsis: "/synopsis/bg/pazitelkata-na-briest.txt", excerpt: "/books/bg/pazitelkata-na-briest.md" },
            en: { title: "The Guardian of Briest", genre: "Epic Fantasy", cover: "/images/en/boria-2.jpg", synopsis: "/synopsis/en/the-guardian-of-briest.txt", excerpt: "/books/en/the-guardian-of-briest.md" },
            de: { title: "Die Wächterin von Briest", genre: "Epische Fantasy", cover: "/images/de/boria-2.jpg", synopsis: "/synopsis/de/die-waechterin-von-briest.txt", excerpt: "/books/de/die-waechterin-von-briest.md" },
            it: { title: "La Guardiana di Briest", genre: "Fantasy Epico", cover: "/images/it/boria-2.jpg", synopsis: "/synopsis/it/la-guardiana-di-briest.txt", excerpt: "/books/it/la-guardiana-di-briest.md" },
            fr: { title: "La Gardienne de Briest", genre: "Fantasy Épique", cover: "/images/fr/boria-2.jpg", synopsis: "/synopsis/fr/la-gardienne-de-briest.txt", excerpt: "/books/fr/la-gardienne-de-briest.md" },
            nl: { title: "De Bewaakster van Briest", genre: "Epische Fantasy", cover: "/images/nl/boria-2.jpg", synopsis: "/synopsis/nl/de-bewaakster-van-briest.txt", excerpt: "/books/nl/de-bewaakster-van-briest.md" },
            pt: { title: "A Guardiã de Briest", genre: "Fantasia Épica", cover: "/images/pt/boria-2.jpg", synopsis: "/synopsis/pt/a-guardia-de-briest.txt", excerpt: "/books/pt/a-guardia-de-briest.md" },
            sv: { title: "Väktaren av Briest", genre: "Episk Fantasy", cover: "/images/sv/boria-2.jpg", synopsis: "/synopsis/sv/vaktaren-av-briest.txt", excerpt: "/books/sv/vaktaren-av-briest.md" }
        },
        links: [
            { "platform": "Amazon", "lang": "EN", "url": "https://www.amazon.com/dp/B0DSLDJ5PF" },
            { "platform": "Laterpress", "lang": "BG", "url": "https://boria-bg.laterpress.com/book/the-guardian-of-briest-bg" },
            { "platform": "Laterpress", "lang": "EN", "url": "https://boria-eng.laterpress.com/book/the-guardian-of-briest-eng" },
            { "platform": "Draft2Digital", "lang": "EN", "url": "https://books2read.com/u/bWaWjG" },
            { "platform": "Amazon", "lang": "DE", "url": "https://www.amazon.com/dp/B0DSV469C2" },
            { "platform": "Amazon", "lang": "IT", "url": "https://www.amazon.com/dp/B0DT9PMY24" },
            { "platform": "Amazon", "lang": "FR", "url": "https://www.amazon.com/dp/B0DVZPBR7M" },
            { "platform": "Draft2Digital", "lang": "FR", "url": "https://books2read.com/u/3RkLyx" },
            { "platform": "Amazon", "lang": "NL", "url": "https://www.amazon.com/dp/B0DTPFX93T" },
            { "platform": "Amazon", "lang": "PT", "url": "https://www.amazon.com/dp/B0DTZ4NJ7Q" },
            { "platform": "Amazon", "lang": "SV", "url": "https://www.amazon.com/dp/B0DWFNLPVF" },
            { "platform": "Draft2Digital", "lang": "SV", "url": "https://books2read.com/u/mdRqLW" }


        ]
    },
    {
        id: "dva-svyata",
        i18n: {
            bg: { title: "Два свята", genre: "Епично фентъзи", cover: "/images/bg/boria-3.jpg", synopsis: "/synopsis/bg/dva-sviata.txt", excerpt: "/books/bg/dva-sviata.md" },
            en: { title: "Two Worlds", genre: "Epic Fantasy", cover: "/images/en/boria-3.jpg", synopsis: "/synopsis/en/two-worlds.txt", excerpt: "/books/en/two-worlds.md" },
            de: { title: "Zwei Welten", genre: "Epische Fantasy", cover: "/images/de/boria-3.jpg", synopsis: "/synopsis/de/zwei-welten.txt", excerpt: "/books/de/zwei-welten.md" },
            it: { title: "Due Mondi", genre: "Fantasy Epico", cover: "/images/it/boria-3.jpg", synopsis: "/synopsis/it/due-mondi.txt", excerpt: "/books/it/due-mondi.md" },
            fr: { title: "Deux Mondes", genre: "Fantasy Épique", cover: "/images/fr/boria-3.jpg", synopsis: "/synopsis/fr/deux-mondes.txt", excerpt: "/books/fr/deux-mondes.md" },
            nl: { title: "Twee Werelden", genre: "Epische Fantasy", cover: "/images/nl/boria-3.jpg", synopsis: "/synopsis/nl/twee-werelden.txt", excerpt: "/books/nl/twee-werelden.md" },
            pt: { title: "Dois Mundos", genre: "Fantasia Épica", cover: "/images/pt/boria-3.jpg", synopsis: "/synopsis/pt/dois-mundos.txt", excerpt: "/books/pt/dois-mundos.md" },
            sv: { title: "Två Världar", genre: "Episk Fantasy", cover: "/images/sv/boria-3.jpg", synopsis: "/synopsis/sv/tva-varldar.txt", excerpt: "/books/sv/tva-varldar.md" }
        },
        links: [
            { "platform": "Amazon", "lang": "EN", "url": "https://www.amazon.com/dp/B0DSR63R9B" },
            { "platform": "Laterpress", "lang": "BG", "url": "https://boria-bg.laterpress.com/book/two-worlds-bg" },
            { "platform": "Laterpress", "lang": "EN", "url": "https://boria-eng.laterpress.com/book/two-worlds-eng" },
            { "platform": "Draft2Digital", "lang": "EN", "url": "https://books2read.com/u/m2DpL1" },
            { "platform": "Amazon", "lang": "DE", "url": "https://www.amazon.com/dp/B0DT11SLLJ" },
            { "platform": "Amazon", "lang": "IT", "url": "https://www.amazon.com/dp/B0DTDGVKK9" },
            { "platform": "Amazon", "lang": "FR", "url": "https://www.amazon.com/dp/B0DW48943J" },
            { "platform": "Draft2Digital", "lang": "FR", "url": "https://books2read.com/u/4N0okY" },
            { "platform": "Amazon", "lang": "NL", "url": "https://www.amazon.com/dp/B0DTSV83XD" },
            { "platform": "Amazon", "lang": "PT", "url": "https://www.amazon.com/dp/B0DV5HGMYL" },
            { "platform": "Amazon", "lang": "SV", "url": "https://www.amazon.com/dp/B0FB98GQ1C" },
            { "platform": "Draft2Digital", "lang": "SV", "url": "https://books2read.com/u/3nj2XR" }


        ]
    },

                {
                    id: "princa-ot-iztok",
                   
                    i18n: {
                        bg: { title: "Принца от изток", genre: "Епично фентъзи", cover: "/images/common/cover-placeholder.jpg", synopsis: "/synopsis/bg/princa-ot-iztok.txt", excerpt: "/books/bg/princa-ot-iztok.md" },
                        en: { title: "The Prince from the East", genre: "Epic Fantasy", cover: "/images/common/cover-placeholder.jpg", synopsis: "/synopsis/en/the-prince-from-the-east.txt", excerpt: "/books/en/the-prince-from-the-east.md" }
                    },
                    links: []
                }
            ]
        },
        {
            id: "krav-i-zvezden-prah",
            i18n: {
                bg: { title: "Кръв и звезден прах", series_synopsis: "Все още ли са тук? Защо? Ние проект ли сме? Книгите от поредицата, ще отговорят на въпросите ви." },
                en: { title: "Blood and Stardust", series_synopsis: "Are they still here? Why? Are we a project? The books from the series, will answer your questions." }
            },
            seriesImage: "/images/common/krav-i-zvezden-prah-series.jpg",
            books: [
                {
                    id: "drevno-sinio",
                    i18n: {
                        bg: { title: "Древно синьо", genre: "Научна фантастика", cover: "/images/bg/krav-i-zvezden-prah-1.jpg", synopsis: "/synopsis/bg/drevno-sinio.txt", excerpt: "/books/bg/drevno-sinio.md" },
                        en: { title: "Ancient Blue", genre: "Science Fiction", cover: "/images/en/krav-i-zvezden-prah-1.jpg", synopsis: "/synopsis/en/ancient-blue.txt", excerpt: "/books/en/ancient-blue.md" },
                        de: { title: "Uraltes Blau", genre: "Science Fiction", cover: "/images/de/uraltes-blau.jpg", synopsis: "/synopsis/de/uraltes-blau.txt", excerpt: "/books/de/uraltes-blau.md" },
                        it: { title: "L'Antico Blu", genre: "Fantascienza", cover: "/images/it/l'antico-blu.jpg", synopsis: "/synopsis/it/l'antico-blu.txt", excerpt: "/books/it/l'antico-blu.md" },
                        fr: { title: "Bleu Ancien", genre: "Science-Fiction", cover: "/images/fr/bleu-ancien.jpg", synopsis: "/synopsis/fr/bleu-ancien.txt", excerpt: "/books/fr/bleu-ancien.md" },
                        es: { title: "Azul Ancestral", genre: "Ciencia Ficción", cover: "/images/es/azul-аncestral.jpg", synopsis: "/synopsis/es/azul-аncestral.txt", excerpt: "/books/es/azul-аncestral.md" },
                        nl: { title: "Oeroud Blauw", genre: "Science Fiction", cover: "/images/nl/oeroud-blauw.jpg", synopsis: "/synopsis/nl/oeroud-blauw.txt", excerpt: "/books/nl/oeroud-blauw.md" }

                    },
                    links: [
                        { "platform": "Laterpress", "lang": "BG", "url": "https://blood-and-stardust.laterpress.com/book/ancient-blue" }, // Промени този линк, ако е различен
                        { "platform": "Draft2Digital", "lang": "BG", "url": "https://books2read.com/u/38q556" },
                        { "platform": "Laterpress", "lang": "EN", "url": "https://blood-and-stardust-eng.laterpress.com/book/ancient-blue-eng" },
                        { "platform": "Draft2Digital", "lang": "EN", "url": "https://books2read.com/u/3L2Nke" },
                        { "platform": "Amazon", "lang": "EN", "url": "https://www.amazon.com/dp/B0DHVGH23L" },
                        { "platform": "Amazon", "lang": "DE", "url": "https://www.amazon.com/dp/B0DKG3ZYG2" },
                        { "platform": "Amazon", "lang": "IT", "url": "https://www.amazon.com/dp/B0DNNV3SPJ" },
                        { "platform": "Amazon", "lang": "FR", "url": "https://www.amazon.com/dp/B0DKC7YXK7" },
                        { "platform": "Draft2Digital", "lang": "FR", "url": "https://books2read.com/u/3ypoxL" },
                        { "platform": "Amazon", "lang": "ES", "url": "https://www.amazon.com/dp/B0DKDGR8Q1" },
                        { "platform": "Amazon", "lang": "NL", "url": "https://www.amazon.com/dp/B0DY58ZNN2" }


                           ]
                },
                {
                    id: "cherveno-i-drevno-sinio",
                    i18n: {
                        bg: { title: "Червено и Древно синьо", genre: "Научна фантастика", cover: "/images/bg/krav-i-zvezden-prah-2.jpg", synopsis: "/synopsis/bg/cherveno-i-drevno-sinio.txt", excerpt: "/books/bg/cherveno-i-drevno-sinio.md" },
                        en: { title: "Red and Ancient Blue", genre: "Science Fiction", cover: "/images/en/krav-i-zvezden-prah-2.jpg", synopsis: "/synopsis/en/red-and-ancient-blue.txt", excerpt: "/books/en/red-and-ancient-blue.md" },
                        de: { title: "Rot und Uraltes Blau", genre: "Science-Fiction", cover: "/images/de/rot-und-uraltes-blau.jpg", synopsis: "/synopsis/de/rot-und-uraltes-blau.txt", excerpt: "/books/de/rot-und-uraltes-blau.md" },
                        it: { title: "Rosso e L'Antico Blu", genre: "Fantascienza", cover: "/images/it/rosso-e-l'antico-blu.jpg", synopsis: "/synopsis/it/rosso-e-l'antico-blu.txt", excerpt: "/books/it/rosso-e-l'antico-blu.md" },
                        fr: { title: "Rouge et Bleu Ancien", genre: "Science-Fiction", cover: "/images/fr/rouge-et-bleu-ancien.jpg", synopsis: "/synopsis/fr/rouge-et-bleu-ancien.txt", excerpt: "/books/fr/rouge-et-bleu-ancien.md" },
                        es: { title: "Rojo y Azul Ancestral", genre: "Ciencia Ficción", cover: "/images/es/rojo-y-azul-antiguo.jpg", synopsis: "/synopsis/es/rojo-y-azul-antiguo.txt", excerpt: "/books/es/rojo-y-azul-antiguo.md" },
                        nl: { title: "Rood en Oeroud Blauw", genre: "Science Fiction", cover: "/images/nl/rood-en-oeroud-blauw.jpg", synopsis: "/synopsis/nl/rood-en-oeroud-blauw.txt", excerpt: "/books/nl/rood-en-oeroud-blauw.md" }

                    },
                    links: [
                        { "platform": "Laterpress", "lang": "BG", "url": "https://blood-and-stardust.laterpress.com/book/red-and-ancient-blue-bg" }, 
                        { "platform": "Draft2Digital", "lang": "BG", "url": "https://books2read.com/u/bwkEeY" },
                        { "platform": "Laterpress", "lang": "EN", "url": "https://blood-and-stardust-eng.laterpress.com/book/red-and-ancient-blue-eng" },
                        { "platform": "Draft2Digital", "lang": "EN", "url": "https://books2read.com/u/bM8nVG" },
                        { "platform": "Amazon", "lang": "EN", "url": "https://www.amazon.com/dp/B0DJL9X7VH" },
                        { "platform": "Amazon", "lang": "DE", "url": "https://www.amazon.com/dp/B0DLCGHLBW" },
                        { "platform": "Amazon", "lang": "IT", "url": "https://www.amazon.com/dp/B0DNVVWRPN" },
                        { "platform": "Amazon", "lang": "FR", "url": "https://www.amazon.com/dp/B0DLHG88QX" },
                        { "platform": "Draft2Digital", "lang": "FR", "url": "https://books2read.com/u/bpgE76" },
                        { "platform": "Amazon", "lang": "ES", "url": "https://www.amazon.com/dp/B0CYYRK77Q" },
                        { "platform": "Amazon", "lang": "NL", "url": "https://www.amazon.com/dp/B0F26X8SZH" }


                           ]
                },
                {
                    id: "kosmichesko-cherveno",
                    i18n: {
                        bg: { title: "Космическо червено", genre: "Научна фантастика", cover: "/images/bg/krav-i-zvezden-prah-3.jpg", synopsis: "/synopsis/bg/kosmichesko-cherveno.txt", excerpt: "/books/bg/kosmichesko-cherveno.md" },
                        en: { title: "Cosmic Red", genre: "Science Fiction", cover: "/images/en/krav-i-zvezden-prah-3.jpg", synopsis: "/synopsis/en/cosmic-red.txt", excerpt: "/books/en/cosmic-red.md" },
                        de: { title: "Kosmisches Rot", genre: "Science-Fiction", cover: "/images/de/kosmisches-rot.jpg", synopsis: "/synopsis/de/kosmisches-rot.txt", excerpt: "/books/de/kosmisches-rot.md" },
                        it: { title: "Rosso Cosmico", genre: "Fantascienza", cover: "/images/it/rosso-cosmico.jpg", synopsis: "/synopsis/it/rosso-cosmico.txt", excerpt: "/books/it/rosso-cosmico.md" },
                        fr: { title: "Rouge Cosmique", genre: "Science-Fiction", cover: "/images/fr/rouge-cosmique.jpg", synopsis: "/synopsis/fr/rouge-cosmique.txt", excerpt: "/books/fr/rouge-cosmique.md" },
                        es: { title: "Rojo Cósmico", genre: "Ciencia Ficción", cover: "/images/es/rojo-cósmico.jpg", synopsis: "/synopsis/es/rojo-cósmico.txt", excerpt: "/books/es/rojo-cósmico.md" },
                        nl: { title: "Kosmisch Rood", genre: "Science Fiction", cover: "/images/nl/kosmisch-rood.jpg", synopsis: "/synopsis/nl/kosmisch-rood.txt", excerpt: "/books/nl/kosmisch-rood.md" }

                    },
                    links: [
                        { "platform": "Laterpress", "lang": "BG", "url": "https://blood-and-stardust.laterpress.com/book/cosmic-red-bg" }, 
                        { "platform": "Draft2Digital", "lang": "BG", "url": "https://books2read.com/u/bOqVRg" },
                        { "platform": "Laterpress", "lang": "EN", "url": "https://blood-and-stardust-eng.laterpress.com/book/cosmic-red-eng" },
                        { "platform": "Draft2Digital", "lang": "EN", "url": "https://books2read.com/u/mZ6pll" },
                        { "platform": "Amazon", "lang": "EN", "url": "https://www.amazon.com/dp/B0DQVZ8978" },
                        { "platform": "Amazon", "lang": "DE", "url": "https://www.amazon.com/dp/B0DR74K3T6" },
                        { "platform": "Amazon", "lang": "IT", "url": "https://www.amazon.com/dp/B0DRCG6YVZ" },
                        { "platform": "Amazon", "lang": "FR", "url": "https://www.amazon.com/dp/B0F9D9LYVH" },
                        { "platform": "Draft2Digital", "lang": "FR", "url": "https://books2read.com/u/4jQ192" },
                        { "platform": "Amazon", "lang": "ES", "url": "https://www.amazon.com/dp/B0F9FSFC3F" },
                        { "platform": "Amazon", "lang": "NL", "url": "https://www.amazon.com/dp/B0F1Y8X2FW" }

                           ]
                },
                {
                    id: "stomaneno-sivo",
                    i18n: {
                        bg: { title: "Стоманено сиво", genre: "Научна фантастика", cover: "/images/bg/krav-i-zvezden-prah-4.jpg", synopsis: "/synopsis/bg/stomaneno-sivo.txt", excerpt: "/books/bg/stomaneno-sivo.md" },
                        en: { title: "Steel Gray", genre: "Science Fiction", cover: "/images/en/krav-i-zvezden-prah-4.jpg", synopsis: "/synopsis/en/steel-gray.txt", excerpt: "/books/en/steel-gray.md" },
                        de: { title: "Stählernes Grau", genre: "Science-Fiction", cover: "/images/de/stählernes-grau.jpg", synopsis: "/synopsis/de/stählernes-grau.txt", excerpt: "/books/de/stählernes-grau.md" },
                        it: { title: "Grigio d'Acciaio", genre: "Fantascienza", cover: "/images/it/grigio-d'acciaio.jpg", synopsis: "/synopsis/it/grigio-d'acciaio.txt", excerpt: "/books/it/grigio-d'acciaio.md" },
                        fr: { title: "Gris Acier", genre: "Science-Fiction", cover: "/images/fr/gris-acier.jpg", synopsis: "/synopsis/fr/gris-acier.txt", excerpt: "/books/fr/gris-acier.md" },
                        nl: { title: "Staalgrijs", genre: "Science Fiction", cover: "/images/nl/staalgrijs.jpg", synopsis: "/synopsis/nl/staalgrijs.txt", excerpt: "/books/nl/staalgrijs.md" }

                    },
                    links: [
                        { "platform": "Laterpress", "lang": "BG", "url": "https://blood-and-stardust.laterpress.com/book/steel-gray-bg" }, 
                        { "platform": "Laterpress", "lang": "EN", "url": "https://blood-and-stardust-eng.laterpress.com/book/steel-gray-en" },
                        { "platform": "Draft2Digital", "lang": "EN", "url": "https://books2read.com/u/3JMJBK" },
                        { "platform": "Amazon", "lang": "EN", "url": "https://www.amazon.com/dp/B0F2SY25S5" },
                        { "platform": "Amazon", "lang": "EN", "url": "https://www.amazon.com/dp/B0DZVNDZ46" },
                        { "platform": "Amazon", "lang": "IT", "url": "https://www.amazon.com/dp/B0F88LPQW9" },
                        { "platform": "Amazon", "lang": "FR", "url": "https://www.amazon.com/dp/B0F99VQFGF" },
                        { "platform": "Draft2Digital", "lang": "FR", "url": "https://books2read.com/u/4AyxEp" },
                        { "platform": "Amazon", "lang": "NL", "url": "https://www.amazon.com/dp/B0FHWQVH7Q" }

                       

                           ]
                }
            ]
        },
        {
            id: "epohata-na-padnalite",
            i18n: {
                bg: { title: "Епохата на Падналите", series_synopsis: "Те се разбунтуваха и паднаха. Сега това е техния свят и техния път към небето." },
                en: { title: "The Age of the Fallen", series_synopsis: "They rebelled and fell. Now this is their world and their path to heaven." }
            },
            seriesImage: "/images/common/epohata-na-padnalite-series.jpg",
            books: [
               
        {
            id: "klyuchat-na-vazhoda",
            i18n: {
                bg: { title: "Ключът на Възхода", genre: "Фентъзи", cover: "/images/bg/epohata-na-padnalite-1.jpg", synopsis: "/synopsis/bg/kluchat-na-vyzhoda.txt", excerpt: "/books/bg/kluchat-na-vyzhoda.md" },
                en: { title: "The Key of Ascension", genre: "Fantasy", cover: "/images/en/epohata-na-padnalite-1.jpg", synopsis: "/synopsis/en/the-key-of-ascension.txt", excerpt: "/books/en/the-key-of-ascension.md" },
                de: { title: "Der Schlüssel des Aufstiegs", genre: "Fantasy", cover: "/images/de/der-schluessel-des-aufstiegs.jpg", synopsis: "/synopsis/de/der-schluessel-des-aufstiegs.txt", excerpt: "/books/de/der-schluessel-des-aufstiegs.md" },
                it: { title: "La Chiave dell'Ascesa", genre: "Fantasy", cover: "/images/it/la-chiave-dellascesa.jpg", synopsis: "/synopsis/it/la-chiave-dellascesa.txt", excerpt: "/books/it/la-chiave-dellascesa.md" },
                fr: { title: "La Clé de l'Ascension", genre: "Fantasy", cover: "/images/fr/la-cle-de-lascension.jpg", synopsis: "/synopsis/fr/la-cle-de-lascension.txt", excerpt: "/books/fr/la-cle-de-lascension.md" },
                sv: { title: "Nyckeln till Uppståndelsen", genre: "Fantasy", cover: "/images/sv/nyckeln-till-uppståndelsen.jpg", synopsis: "/synopsis/sv/nyckeln-till-uppståndelsen.txt", excerpt: "/books/sv/nyckeln-till-uppståndelsen.md" }
                 },
                 links: [
                        { "platform": "Amazon", "lang": "EN", "url": "https://www.amazon.com/dp/B0FFYNX1Y3" },
                        { "platform": "Amazon", "lang": "DE", "url": "https://www.amazon.com/dp/B0FHBR8DBN" },
                        { "platform": "Amazon", "lang": "IT", "url": "https://www.amazon.com/dp/B0FHD73Q92" },
                        { "platform": "Amazon", "lang": "FR", "url": "https://www.amazon.com/dp/B0FHF1FCK5" },
                        { "platform": "Draft2Digital", "lang": "FR", "url": "https://books2read.com/u/4jj5Yo" },
                        { "platform": "Amazon", "lang": "SV", "url": "https://www.amazon.com/dp/B0FHQF3XS4" },
                        { "platform": "Draft2Digital", "lang": "SV", "url": "https://books2read.com/u/3yy6vZ" },
                        { "platform": "Laterpress", "lang": "BG", "url": "https://the-age-of-the-fallen-bg.laterpress.com/book/the-key-of-ascension-bg" }
                        
                        ]
               },
               { id: "klyuchat-na-izobilieto", status: "in-progress", i18n: { bg: { title: "Ключът на изобилието", genre: "Фентъзи", cover: "/images/common/cover-placeholder.jpg" }, en: { title: "The Key of Abundance", genre: "Fantasy", cover: "/images/common/cover-placeholder.jpg" } }, links: [] }
            ]
        }
    ],

    // =========================================================================
    // САМОСТОЯТЕЛНИ РОМАНИ
    // =========================================================================
    novels: [
              {
                  id: "kravta-na-enisey",
                  i18n: {
                      bg: { title: "Ключът на Възхода", genre: "Градско фентъзи", cover: "/images/bg/kravta-na-enisey.jpg", synopsis: "/synopsis/bg/kravta-na-enisey.txt", excerpt: "/books/bg/kravta-na-enisey.md" },
                      en: { title: "The Blood of Yenisei", genre: "Urban Fantasy", cover: "/images/en/the-blood-of-yenisei.jpg", synopsis: "/synopsis/en/the-blood-of-yenisei.txt", excerpt: "/books/en/the-blood-of-yenisei.md" }
                   },
                   links: [
                       { "platform": "Laterpress", "lang": "BG", "url": "https://blood-of-the-yenisei-bg.laterpress.com/" }, 
                       { "platform": "Draft2Digital", "lang": "EN", "url": "https://books2read.com/u/49qJ9Y" }
                           ]
              },       
              {
                  id: "love-2-0",
                  i18n: {
                      bg: { title: "Love 2.0", genre: "Романтика", cover: "/images/bg/love-2-0.jpg", synopsis: "/synopsis/bg/love-2-0.txt", excerpt: "/books/bg/love-2-0.md" },
                      en: { title: "Love 2.0", genre: "Romance", cover: "/images/en/love-2-0.jpg", synopsis: "/synopsis/en/love-2-0.txt", excerpt: "/books/en/love-2-0.md" }
                   },
                   links: [
                       { "platform": "Laterpress", "lang": "BG", "url": "https://love-20-bg.laterpress.com/" }, 
                       { "platform": "Draft2Digital", "lang": "BG", "url": "https://books2read.com/u/bxDVev" },
                       { "platform": "Amazon", "lang": "EN", "url": "https://www.amazon.com/dp/B0F893JHZV" }

                           ]
              },       

              {
                  id: "kragat-ot-starata-melnica",
                  i18n: {
                      bg: { title: "kragat-ot-starata-melnica", genre: "Мистерия", cover: "/images/bg/kragat-ot-starata-melnica.jpg", synopsis: "/synopsis/bg/kragat-ot-starata-melnica.txt", excerpt: "/books/bg/kragat-ot-starata-melnica.md" },
                      en: { title: "the-circle-from-the-old-mill", genre: "Mystery", cover: "/images/en/the-circle-from-the-old-mill.jpg", synopsis: "/synopsis/en/the-circle-from-the-old-mill.txt", excerpt: "/books/en/the-circle-from-the-old-mill.md" }
                   },
                   links: [
                       { "platform": "Laterpress", "lang": "BG", "url": "https://the-circle-of-the-old-mill-bg.laterpress.com/" }, 
                       { "platform": "Draft2Digital", "lang": "BG", "url": "https://books2read.com/u/bpgBDz" },
                       { "platform": "Amazon", "lang": "EN", "url": "https://www.amazon.com/dp/B0FD8ZLXJN" }

                           ]
              },       

              {
                  id: "reysat-na-izgubenite",
                  i18n: {
                      bg: { title: "reysat-na-izgubenite", genre: "Магически реализъм", cover: "/images/bg/reysat-na-izgubenite.jpg", synopsis: "/synopsis/bg/reysat-na-izgubenite.txt", excerpt: "/books/bg/reysat-na-izgubenite.md" },
                      en: { title: "the-bus-of-the-lost", genre: "Magical realism", cover: "/images/en/the-bus-of-the-lost.jpg", synopsis: "/synopsis/en/the-bus-of-the-lost.txt", excerpt: "/books/en/the-bus-of-the-lost.md" }
                   },
                   links: [
                       { "platform": "Laterpress", "lang": "BG", "url": "https://the-bus-of-the-lost-bg.laterpress.com/" }, 
                       { "platform": "Draft2Digital", "lang": "BG", "url": "https://books2read.com/u/mqPyvd" },
                       { "platform": "Amazon", "lang": "EN", "url": "https://www.amazon.com/dp/B0FDGKLG71" }

                           ]
              },       



    ],

    // =========================================================================
    // РАЗКАЗИ
    // =========================================================================
    short_stories: [

              {
                  id: "shepot-na-nepoznata",
                  i18n: {
                      bg: { title: "Шепот на непозната", genre: "Градско фентъзи, Свръхестествен трилър", cover: "/images/bg/shepot-na-nepoznata.jpg", synopsis: "/synopsis/bg/shepot-na-nepoznata.txt", excerpt: "/books/bg/shepot-na-nepoznata.md" },
                      en: { title: "Whisper of a Stranger", genre: "Urban Fantasy, Supernatural Thriller", cover: "/images/en/whisper-of-a-stranger.jpg", synopsis: "/synopsis/en/whisper-of-a-stranger.txt", excerpt: "/books/en/whisper-of-a-stranger.md" }
                   },
                   links: []
              },       
       
              {
                  id: "rekviem-za-sveta",
                  i18n: {
                      bg: { title: "Реквием за света, който ме избра", genre: "Градско фентъзи, Свръхестествен трилър", cover: "/images/bg/rekviem-za-sveta.jpg", synopsis: "/synopsis/bg/rekviem-za-sveta.txt", excerpt: "/books/bg/rekviem-za-sveta.md" },
                      en: { title: "Requiem for the World That Chose Me", genre: "Urban Fantasy, Supernatural Thriller", cover: "/images/en/requiem-for-the-world.jpg", synopsis: "/synopsis/en/requiem-for-the-world.txt", excerpt: "/books/en/requiem-for-the-world.md" }
                   },
                   links: []
              },       






    ]
};