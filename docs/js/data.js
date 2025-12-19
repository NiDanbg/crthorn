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
            se: { title: "Läkaren från Blackstone", genre: "Episk Fantasy", cover: "/images/se/boria-1.jpg", synopsis: "/synopsis/se/lakaren-fran-blackstone.txt", excerpt: "/books/se/lakaren-fran-blackstone.md" }
        },
        links: [
            { "platform": "Laterpress", "lang": "EN", "url": "https://boria-eng.laterpress.com/book/the-healer-of-blackstone-eng" },
            { "platform": "Amazon", "lang": "EN", "url": "https://www.amazon.com/dp/B0DSL4ZJ23" },
            { "platform": "Draft2Digital", "lang": "EN", "url": "https://books2read.com/u/47yL2g" },
            { "platform": "Laterpress", "lang": "BG", "url": "https://boria-bg.laterpress.com/book/the-healer-of-blackstone-el-bg" },
            { "platform": "Amazon", "lang": "DE", "url": "https://www.amazon.com/dp/B0DSTRYXNB" },
            { "platform": "Amazon", "lang": "IT", "url": "https://www.amazon.com/dp/B0DT6MZ2TH" },
            { "platform": "Amazon", "lang": "FR", "url": "https://www.amazon.com/dp/B0DVZHVV84" },
            { "platform": "Draft2Digital", "lang": "FR", "url": "https://books2read.com/u/mYk6zV" },
            { "platform": "Amazon", "lang": "ES", "url": "https://www.amazon.com/dp/B0DVP9ZFPL" },
            { "platform": "Amazon", "lang": "NL", "url": "https://www.amazon.com/dp/B0DTP8TC7X" },
            { "platform": "Amazon", "lang": "PT", "url": "https://www.amazon.com/dp/B0DV4KPXKW" },
            { "platform": "Amazon", "lang": "SE", "url": "https://www.amazon.com/dp/B0DWFDR9P4" },
            { "platform": "Draft2Digital", "lang": "SE", "url": "https://books2read.com/u/mKkVK5" }

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
            se: { title: "Väktaren av Briest", genre: "Episk Fantasy", cover: "/images/se/boria-2.jpg", synopsis: "/synopsis/se/vaktaren-av-briest.txt", excerpt: "/books/se/vaktaren-av-briest.md" }
        },
        links: [
            { "platform": "Laterpress", "lang": "EN", "url": "https://boria-eng.laterpress.com/book/the-guardian-of-briest-eng" },
            { "platform": "Amazon", "lang": "EN", "url": "https://www.amazon.com/dp/B0DSLDJ5PF" },
            { "platform": "Laterpress", "lang": "BG", "url": "https://boria-bg.laterpress.com/book/the-guardian-of-briest-bg" },
            { "platform": "Draft2Digital", "lang": "EN", "url": "https://books2read.com/u/bWaWjG" },
            { "platform": "Amazon", "lang": "DE", "url": "https://www.amazon.com/dp/B0DSV469C2" },
            { "platform": "Amazon", "lang": "IT", "url": "https://www.amazon.com/dp/B0DT9PMY24" },
            { "platform": "Amazon", "lang": "FR", "url": "https://www.amazon.com/dp/B0DVZPBR7M" },
            { "platform": "Draft2Digital", "lang": "FR", "url": "https://books2read.com/u/3RkLyx" },
            { "platform": "Amazon", "lang": "NL", "url": "https://www.amazon.com/dp/B0DTPFX93T" },
            { "platform": "Amazon", "lang": "PT", "url": "https://www.amazon.com/dp/B0DTZ4NJ7Q" },
            { "platform": "Amazon", "lang": "SE", "url": "https://www.amazon.com/dp/B0DWFNLPVF" },
            { "platform": "Draft2Digital", "lang": "SE", "url": "https://books2read.com/u/mdRqLW" }


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
            se: { title: "Två Världar", genre: "Episk Fantasy", cover: "/images/se/boria-3.jpg", synopsis: "/synopsis/se/tva-varldar.txt", excerpt: "/books/se/tva-varldar.md" }
        },
        links: [
            { "platform": "Laterpress", "lang": "EN", "url": "https://boria-eng.laterpress.com/book/two-worlds-eng" },
            { "platform": "Amazon", "lang": "EN", "url": "https://www.amazon.com/dp/B0DSR63R9B" },
            { "platform": "Laterpress", "lang": "BG", "url": "https://boria-bg.laterpress.com/book/two-worlds-bg" },
            { "platform": "Draft2Digital", "lang": "EN", "url": "https://books2read.com/u/m2DpL1" },
            { "platform": "Amazon", "lang": "DE", "url": "https://www.amazon.com/dp/B0DT11SLLJ" },
            { "platform": "Amazon", "lang": "IT", "url": "https://www.amazon.com/dp/B0DTDGVKK9" },
            { "platform": "Amazon", "lang": "FR", "url": "https://www.amazon.com/dp/B0DW48943J" },
            { "platform": "Draft2Digital", "lang": "FR", "url": "https://books2read.com/u/4N0okY" },
            { "platform": "Amazon", "lang": "NL", "url": "https://www.amazon.com/dp/B0DTSV83XD" },
            { "platform": "Amazon", "lang": "PT", "url": "https://www.amazon.com/dp/B0DV5HGMYL" },
            { "platform": "Amazon", "lang": "SE", "url": "https://www.amazon.com/dp/B0FB98GQ1C" },
            { "platform": "Draft2Digital", "lang": "SE", "url": "https://books2read.com/u/3nj2XR" }


        ]
    },

    {
          id: "princa-ot-iztok",
                   
          i18n: {
              bg: { title: "Принца от изток", genre: "Епично фентъзи", cover: "/images/en/the-prince-of-the-east-en.jpg", synopsis: "/synopsis/bg/princa-ot-iztok.txt", excerpt: "/books/bg/princa-ot-iztok.md" },
              en: { title: "The Prince from the East", genre: "Epic Fantasy", cover: "/images/en/the-prince-of-the-east-en.jpg", synopsis: "/synopsis/en/the-prince-from-the-east.txt", excerpt: "/books/en/the-prince-from-the-east.md" },
              de: { title: "Der Prinz aus dem Osten", genre: "Epische Fantasy", cover: "/images/de/der-prinz-aus-dem-osten.jpg", synopsis: "/synopsis/de/der-prinz-aus-dem-osten.txt", excerpt: "/books/de/der-prinz-aus-dem-osten.md" },
              it: { title: "Il Principe dell'Est", genre: "Fantasy Epico", cover: "/images/it/il-principe-dellest.jpg", synopsis: "/synopsis/it/dil-principe-dellest.txt", excerpt: "/books/it/il-principe-dellest.md" },
              fr: { title: "Le Prince de l'Est", genre: "Fantasy Épique", cover: "/images/fr/le-prince-de-lest.jpg", synopsis: "/synopsis/fr/le-prince-de-lest.txt", excerpt: "/books/fr/le-prince-de-lest.md" },
              nl: { title: "De Prins uit het Oosten", genre: "Epische Fantasy", cover: "/images/nl/de-prins-uit-het-oosten.jpg", synopsis: "/synopsis/nl/de-prins-uit-het-oosten.txt", excerpt: "/books/nl/de-prins-uit-het-oosten.md" },
              pt: { title: "O Príncipe do Leste", genre: "Fantasia Épica", cover: "/images/pt/o-prncipe-do-leste.jpg", synopsis: "/synopsis/pt/o-prncipe-do-leste.txt", excerpt: "/books/pt/o-prncipe-do-leste.md" },
	      se: { title: "Prinsen från östern", genre: "Episk Fantasy", cover: "/images/se/prinsen-frn-stern.jpg", synopsis: "/synopsis/se/prinsen-frn-stern.txt", excerpt: "/books/se/prinsen-frn-stern.md" }
		},
           links: [
            { "platform": "Amazon", "lang": "EN", "url": "https://www.amazon.com/dp/B0FYPS13BY" },
            { "platform": "Amazon", "lang": "DE", "url": "https://www.amazon.de/dp/B0FYSN3XB4" },
            { "platform": "Amazon", "lang": "IT", "url": "https://www.amazon.it/dp/B0FYZ98MDP" },
            { "platform": "Amazon", "lang": "FR", "url": "https://www.amazon.fr/dp/B0DCV41KHR" },
            { "platform": "Amazon", "lang": "NL", "url": "https://www.amazon.nl/dp/B0G2LPJVVH" },
            { "platform": "Amazon", "lang": "PT", "url": "https://www.amazon.com.br/dp/B0G2M359K2" },
            { "platform": "Amazon", "lang": "SE", "url": "https://www.amazon.com/dp/B0FZNKFDMS" }

	    ]
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
                se: { title: "Nyckeln till Uppståndelsen", genre: "Fantasy", cover: "/images/se/nyckeln-till-uppståndelsen.jpg", synopsis: "/synopsis/se/nyckeln-till-uppståndelsen.txt", excerpt: "/books/se/nyckeln-till-uppståndelsen.md" }
                 },
                 links: [
                        { "platform": "Amazon", "lang": "EN", "url": "https://www.amazon.com/dp/B0FFYNX1Y3" },
                        { "platform": "Amazon", "lang": "DE", "url": "https://www.amazon.com/dp/B0FHBR8DBN" },
                        { "platform": "Amazon", "lang": "IT", "url": "https://www.amazon.com/dp/B0FHD73Q92" },
                        { "platform": "Amazon", "lang": "FR", "url": "https://www.amazon.com/dp/B0FHF1FCK5" },
                        { "platform": "Draft2Digital", "lang": "FR", "url": "https://books2read.com/u/4jj5Yo" },
                        { "platform": "Amazon", "lang": "SE", "url": "https://www.amazon.com/dp/B0FHQF3XS4" },
                        { "platform": "Draft2Digital", "lang": "SE", "url": "https://books2read.com/u/3yy6vZ" },
 			{ "platform": "Draft2Digital", "lang": "BG", "url": "https://books2read.com/u/b6EYyp" },
                        { "platform": "Laterpress", "lang": "BG", "url": "https://the-age-of-the-fallen-bg.laterpress.com/book/the-key-of-ascension-bg" }
                        
                        ]
               },
               { id: "klyuchat-na-izobilieto", 
	         i18n: { 
		     bg: { title: "Ключът на изобилието", genre: "Фентъзи", cover: "/images/bg/the-key-of-abundance-bg.jpg", synopsis: "/synopsis/bg/the-key-of-abundance-bg.txt", excerpt: "/books/bg/the-key-of-abundance-bg.md" }, 
		     en: { title: "The Key of Abundance", genre: "Fantasy", cover: "/images/en/the-key-of-abundance.jpg", synopsis: "/synopsis/en/the-key-of-abundance.txt", excerpt: "/books/en/the-key-of-abundance.md" }, 
                     de: { title: "Der Schlüssel der Fülle", genre: "Fantasy", cover: "/images/de/der-schlssel-der-flle.jpg", synopsis: "/synopsis/de/der-schlssel-der-flle.txt", excerpt: "/books/de/der-schlssel-der-flle.md" },
                     it: { title: "La Chiave della Cornucopia", genre: "Fantasy", cover: "/images/it/la-chiave-della-cornucopia.jpg", synopsis: "/synopsis/it/la-chiave-della-cornucopia.txt", excerpt: "/books/it/la-chiave-della-cornucopia.md" },
                     fr: { title: "La Clé de l’Abondance", genre: "Fantasy", cover: "/images/fr/la-cl-de-labondance.jpg", synopsis: "/synopsis/fr/la-cl-de-labondance.txt", excerpt: "/books/fr/la-cl-de-labondance.md" },
                     se: { title: "Nyckeln till Överflöd", genre: "Fantasy", cover: "/images/se/nyckeln-till-verfld.jpg", synopsis: "/synopsis/se/nyckeln-till-verfld.txt", excerpt: "/books/se/nyckeln-till-verfld.md" }


 
                      }, 
                      links: [
			     { "platform": "Draft2Digital", "lang": "BG", "url": "https://books2read.com/u/mYO9BV" },
			     { "platform": "Amazon", "lang": "EN", "url": "https://www.amazon.com/dp/B0FQMRJNSP" },
			     { "platform": "Amazon", "lang": "DE", "url": "https://www.amazon.de/dp/B0FR1NWNSL" },
			     { "platform": "Amazon", "lang": "IT", "url": "https://www.amazon.it/dp/B0FQNZL513" },
                             { "platform": "Amazon", "lang": "FR", "url": "https://www.amazon.fr/dp/B0FQVC1LWK" },
                             { "platform": "Amazon", "lang": "SE", "url": "https://www.amazon.com/dp/B0FQMWY15F" }
                       ] 
                       }
            ]
        }
    ],

    // =========================================================================
    // САМОСТОЯТЕЛНИ РОМАНИ
    // =========================================================================
    novels: [
             {
             id: "dyrvoto-na-syznanieto",
                  i18n: {
                      bg: { title: "Дървото на съзнанието", genre: "Трилър, Конспиративен трилър", cover: "/images/bg/dyrvoto-na-syznanieto.jpg", synopsis: "/synopsis/bg/dyrvoto-na-syznanieto.txt", excerpt: "/books/bg/dyrvoto-na-syznanieto.md" },
                      en: { title: "The Tree of Consciousness", genre: "Techno-Thriller, Global Conspiracy", cover: "/images/en/the-tree-of-consciousness.jpg", synopsis: "/synopsis/en/the-tree-of-consciousness.txt", excerpt: "/books/en/the-tree-of-consciousness.md" },
                      de: { title: "Der Baum des Bewusstseins", genre: "Techno-Thriller, Verschwörungsthriller", cover: "/images/de/der-baum-des-bewusstseins.jpg", synopsis: "/synopsis/de/der-baum-des-bewusstseins.txt", excerpt: "/books/de/der-baum-des-bewusstseins.md" },
                      it: { title: "L'Albero della Coscienza", genre: "Techno-thriller, Thriller cospirativo", cover: "/images/it/lalbero-della-coscienza.jpg", synopsis: "/synopsis/it/lalbero-della-coscienza.txt", excerpt: "/books/it/lalbero-della-coscienza.md" },
                      fr: { title: "L'Arbre de la Conscience", genre: "Techno-thriller, Thriller conspirationniste", cover: "/images/fr/larbre-de-la-conscience.jpg", synopsis: "/synopsis/fr/larbre-de-la-conscience.txt", excerpt: "/books/fr/larbre-de-la-conscience.md" },
                      se: { title: "Medvetandets träd", genre: "Fantasy", cover: "/images/se/medvetandets-trd.jpg", synopsis: "/synopsis/se/medvetandets-trd.txt", excerpt: "/books/se/medvetandets-trd.md" }

                   },
                   links: [
                             { "platform": "Amazon", "lang": "EN", "url": "https://www.amazon.com/dp/B0FVZ6GCJV" },
			     { "platform": "Amazon", "lang": "DE", "url": "https://www.amazon.de/dp/B0G2DZK7XP" },
			     { "platform": "Amazon", "lang": "IT", "url": "https://www.amazon.it/dp/B0G2F79CPV" },
                             { "platform": "Amazon", "lang": "FR", "url": "https://www.amazon.fr/dp/B0FWBD9MQ6" },
                             { "platform": "Amazon", "lang": "SE", "url": "https://www.amazon.com/dp/B0G5FC6PVH" }

                           ]
              },    

             {
             id: "gnostichnia-shifar",
                  i18n: {
                      bg: { title: "Гностичният Шифър", genre: "Исторически Техно-трилър, Конспиративен трилър", cover: "/images/bg/gnostichnia-shifar.jpg", synopsis: "/synopsis/bg/gnostichnia-shifar.txt", excerpt: "/books/bg/gnostichnia-shifar.md" },
                      en: { title: "The Gnostic Cipher", genre: "Techno-Thriller, Global Conspiracy", cover: "/images/en/the-gnostic-cipher.jpg", synopsis: "/synopsis/en/the-gnostic-cipher.txt", excerpt: "/books/en/the-gnostic-cipher.md" },
                      de: { title: "Die Gnostische Chiffre", genre: "Techno-Thriller, Verschwörungsthriller", cover: "/images/de/die-gnostische-chiffre.jpg", synopsis: "/synopsis/de/die-gnostische-chiffre.txt", excerpt: "/books/de/die-gnostische-chiffre.md" },
                      it: { title: "Il Codice Gnostico", genre: "Techno-thriller, Thriller cospirativo", cover: "/images/it/il-codice-gnostico.jpg", synopsis: "/synopsis/it/il-codice-gnostico.txt", excerpt: "/books/it/il-codice-gnostico.md" },
                      fr: { title: "Le Chiffre Gnostique", genre: "Techno-thriller, Thriller conspirationniste", cover: "/images/fr/le-chiffre-gnostique.jpg", synopsis: "/synopsis/fr/le-chiffre-gnostique.txt", excerpt: "/books/fr/le-chiffre-gnostique.md" },
                      se: { title: "Den Gnostiska koden", genre: "Fantasy", cover: "/images/se/den-gnostiska-koden", synopsis: "/synopsis/se/den-gnostiska-koden.txt", excerpt: "/books/se/den-gnostiska-koden.md" }

                   },
                   links: [
                             { "platform": "Amazon", "lang": "EN", "url": "https://www.amazon.com/dp/B0FXVWT2LV" },
			     { "platform": "Amazon", "lang": "DE", "url": "https://www.amazon.de/dp/B0G5QTNHJ2" },
			     { "platform": "Amazon", "lang": "IT", "url": "https://www.amazon.it/dp/B0G64C5L92" },
                             { "platform": "Amazon", "lang": "FR", "url": "https://www.amazon.fr/dp/B0G6789BXV" },
                             { "platform": "Amazon", "lang": "SE", "url": "https://www.amazon.com/dp/B0G6D42JBD" }

                           ]
              },    




              {
                  id: "kravta-na-enisey",
                  i18n: {
                      bg: { title: "Ключът на Възхода", genre: "Градско фентъзи", cover: "/images/bg/kravta-na-enisey.jpg", synopsis: "/synopsis/bg/kravta-na-enisey.txt", excerpt: "/books/bg/kravta-na-enisey.md" },
                      en: { title: "The Blood of Yenisei", genre: "Urban Fantasy", cover: "/images/en/the-blood-of-yenisei.jpg", synopsis: "/synopsis/en/the-blood-of-yenisei.txt", excerpt: "/books/en/the-blood-of-yenisei.md" }
                   },
                   links: [
                       { "platform": "Laterpress", "lang": "BG", "url": "https://blood-of-the-yenisei-bg.laterpress.com/" }, 
                       { "platform": "Laterpress", "lang": "EN", "url": "https://blood-of-the-yenisei.laterpress.com/" }, 
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
                      bg: { title: "Кръгът от Старата мелница", genre: "Мистерия", cover: "/images/bg/kragat-ot-starata-melnica.jpg", synopsis: "/synopsis/bg/kragat-ot-starata-melnica.txt", excerpt: "/books/bg/kragat-ot-starata-melnica.md" },
                      en: { title: "The Circle from the Old Mill", genre: "Mystery", cover: "/images/en/the-circle-from-the-old-mill.jpg", synopsis: "/synopsis/en/the-circle-from-the-old-mill.txt", excerpt: "/books/en/the-circle-from-the-old-mill.md" },
                      se: { title: "Cirkeln från den Gamla Kvarnen", genre: "Urban Fantasy", cover: "/images/se/cirkeln-frn-den-gamla-kvarnen.jpg", synopsis: "/synopsis/se/cirkeln-frn-den-gamla-kvarnen.txt", excerpt: "/books/se/cirkeln-frn-den-gamla-kvarnen.md" },
                      fr: { title: "Le Cercle du Vieux Moulin", genre: "Urban Fantasy", cover: "/images/fr/le-cercle-du-vieux-moulin.jpg", synopsis: "/synopsis/fr/le-cercle-du-vieux-moulin.txt", excerpt: "/books/fr/le-cercle-du-vieux-moulin.md" }



                   },
                   links: [
                       { "platform": "Laterpress", "lang": "BG", "url": "https://the-circle-of-the-old-mill-bg.laterpress.com/" }, 
                       { "platform": "Draft2Digital", "lang": "BG", "url": "https://books2read.com/u/bpgBDz" },
                       { "platform": "Amazon", "lang": "EN", "url": "https://www.amazon.com/dp/B0FD8ZLXJN" },
                       { "platform": "Draft2Digital", "lang": "FR", "url": "https://https://books2read.com/u/bpoVv9" },
                       { "platform": "Amazon", "lang": "FR", "url": "https://www.amazon.com/dp/B0FKGHXKC3" },
                       { "platform": "Draft2Digital", "lang": "SE", "url": "https://books2read.com/u/boAVKv" },
                       { "platform": "Amazon", "lang": "SE", "url": "https://www.amazon.com/dp/B0FKGTG535" }


                           ]
              },       

              {
                  id: "reysat-na-izgubenite",
                  i18n: {
                      bg: { title: "Рейсът на изгубените", genre: "Магически реализъм", cover: "/images/bg/reysat-na-izgubenite.jpg", synopsis: "/synopsis/bg/reysat-na-izgubenite.txt", excerpt: "/books/bg/reysat-na-izgubenite.md" },
                      en: { title: "The Bus of the Lost", genre: "Magical realism", cover: "/images/en/the-bus-of-the-lost.jpg", synopsis: "/synopsis/en/the-bus-of-the-lost.txt", excerpt: "/books/en/the-bus-of-the-lost.md" }
                   },
                   links: [
                       { "platform": "Laterpress", "lang": "BG", "url": "https://the-bus-of-the-lost-bg.laterpress.com/" }, 
                       { "platform": "Draft2Digital", "lang": "BG", "url": "https://books2read.com/u/mqPyvd" },
                       { "platform": "Amazon", "lang": "EN", "url": "https://www.amazon.com/dp/B0FDGKLG71" }

                           ]
              },    

              {
                  id: "prizrachen-kod",
                  i18n: {
                      bg: { title: "Призрачен код", genre: "Киберпънк, Ноар", cover: "/images/bg/prizrachen-kod.jpg", synopsis: "/synopsis/bg/prizrachen-kod.txt", excerpt: "/books/bg/prizrachen-kod.md" },
                      en: { title: "Phantom Code", genre: "Cyberpunk, Noir", cover: "/images/en/phantom-code.jpg", synopsis: "/synopsis/en/phantom-code.txt", excerpt: "/books/en/phantom-code.md" }
                   },
                   links: [
                       { "platform": "Laterpress", "lang": "BG", "url": "https://phantom-code-bg.laterpress.com/" }, 
                       { "platform": "Draft2Digital", "lang": "BG", "url": "https://books2read.com/u/mKMrZL" },
                       { "platform": "Laterpress", "lang": "EN", "url": "https://phantom-code-en.laterpress.com/" }, 
                       { "platform": "Draft2Digital", "lang": "EN", "url": "https://books2read.com/u/bzNw5L" },
                       { "platform": "Amazon", "lang": "EN", "url": "https://www.amazon.com/dp/B0FKZZ883N" }

                           ]
              }    



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