const data = {
  website: "SEKE rukotvorine",
  categories: [

    /* ── DEKICE ── */
    {
      name: "Dekice",
      products: [
        {
          name: "Heklana dekica 50cm x 80cm",
          images: ["dekice/S_dekice/sDekica1.JPG", 
                    "dekice/S_dekice/sDekica2.JPG", 
                    "dekice/S_dekice/sDekica3.JPG", 
                    "dekice/S_dekice/sDekica4.JPG"],
          price: 18,
          desc: "Ručno pletena dekica malih dimenzija, idealna za bebe",
          detail: "Naša ručno pletena dekica savršen je izbor za vaše najmanje. Rađena od najmekšeg materijala, malih dimenzija idealnih za koljevku, kolica ili kao pokrivač tijekom spavanja. Dekica je antialergenska i periva je na 30 °C, stvorena s puno ljubavi za vaše bebe.",
          colors: [

            { name: "Snježni leopard",  img: "colors/dekiceCol/dekiceCol1.jpg" },
            { name: "Zaigrani tigrić",  img: "colors/dekiceCol/dekiceCol2.jpg"},
            { name: "Šumsko zelena",    img: "colors/dekiceCol/dekiceCol3.jpg"},
            { name: "Beige",            img: "colors/dekiceCol/dekiceCol4.jpg" },
            { name: "Čokoladno smeđa",  img: "colors/dekiceCol/dekiceCol5.jpg" },
            { name: "Oblak bijela",     img: "colors/dekiceCol/dekiceCol6.jpg" },
            { name: "Krem",             img: "colors/dekiceCol/dekiceCol7.jpg" },
            { name: "Svijetlo smeđa",   img: "colors/dekiceCol/dekiceCol8.jpg" },
            { name: "Tamno ružičasta",  img: "colors/dekiceCol/dekiceCol9.jpg" },
            { name: "Baby ružičasta",   img: "colors/dekiceCol/dekiceCol10.jpg"},
            { name: "Lila",             img: "colors/dekiceCol/dekiceCol11.jpg" },
            { name: "Svijetlo zelena",  img: "colors/dekiceCol/dekiceCol12.jpg" },
            { name: "Baby plava",       img: "colors/dekiceCol/dekiceCol13.jpg" },
            { name: "Nebesko plava",    img: "colors/dekiceCol/dekiceCol14.jpg" },
            { name: "Tamno plava",      img: "colors/dekiceCol/dekiceCol15.jpg" },
            { name: "Tirkizna",         img: "colors/dekiceCol/dekiceCol16.jpg" },
            { name: "Oker žuta",        img: "colors/dekiceCol/dekiceCol17.jpg" },
            { name: "Sunčano žuta",     img: "colors/dekiceCol/dekiceCol18.jpg" },
            { name: "Crvena",           img: "colors/dekiceCol/dekiceCol19.jpg" },
            { name: "Slon siva",        img: "colors/dekiceCol/dekiceCol20.jpg"},
            { name: "Maslinsto zelena", img: "colors/dekiceCol/dekiceCol21.jpg" },
            { name: "Bordo ljubičasta", img: "colors/dekiceCol/dekiceCol22.jpg" },
            { name: "Koraljna",         img: "colors/dekiceCol/dekiceCol23.jpg" },
            { name: "Zagasito zelena",  img: "colors/dekiceCol/dekiceCol24.jpg" },
            { name: "Cedevita narančasta",img: "colors/dekiceCol/dekiceCol25.jpg" },
            { name: "Tamno siva",       img: "colors/dekiceCol/dekiceCol26.jpg" }
          ]
        },
        {
          name: "Heklana dekica 90cm x 100cm",
          images: ["dekice/M_dekice/mDekica1.JPG", 
                    "dekice/M_dekice/mDekica2.JPG", 
                    "dekice/M_dekice/mDekica3.JPG", 
                    "dekice/M_dekice/mDekica4.JPG"],
          price: 40,
          desc: "Ručno pletena dekica srednje veličine, savršena za malu djecu",
          detail: "Naša ručno pletena dekica savršen je izbor za vaše najmanje. Rađena od najmekšeg materijala, srednjih dimenzija idealnih malu djecu koja zaslužuju najljepši san. Dekica je antialergenska i periva je na 30 °C, stvorena s puno ljubavi za vaše razigrance.",
          colors: [

            { name: "Snježni leopard",  img: "colors/dekiceCol/dekiceCol1.jpg" },
            { name: "Zaigrani tigrić",  img: "colors/dekiceCol/dekiceCol2.jpg"},
            { name: "Šumsko zelena",    img: "colors/dekiceCol/dekiceCol3.jpg"},
            { name: "Beige",            img: "colors/dekiceCol/dekiceCol4.jpg" },
            { name: "Čokoladno smeđa",  img: "colors/dekiceCol/dekiceCol5.jpg" },
            { name: "Oblak bijela",     img: "colors/dekiceCol/dekiceCol6.jpg" },
            { name: "Krem",             img: "colors/dekiceCol/dekiceCol7.jpg" },
            { name: "Svijetlo smeđa",   img: "colors/dekiceCol/dekiceCol8.jpg" },
            { name: "Tamno ružičasta",  img: "colors/dekiceCol/dekiceCol9.jpg" },
            { name: "Baby ružičasta",   img: "colors/dekiceCol/dekiceCol10.jpg"},
            { name: "Lila",             img: "colors/dekiceCol/dekiceCol11.jpg" },
            { name: "Svijetlo zelena",  img: "colors/dekiceCol/dekiceCol12.jpg" },
            { name: "Baby plava",       img: "colors/dekiceCol/dekiceCol13.jpg" },
            { name: "Nebesko plava",    img: "colors/dekiceCol/dekiceCol14.jpg" },
            { name: "Tamno plava",      img: "colors/dekiceCol/dekiceCol15.jpg" },
            { name: "Tirkizna",         img: "colors/dekiceCol/dekiceCol16.jpg" },
            { name: "Oker žuta",        img: "colors/dekiceCol/dekiceCol17.jpg" },
            { name: "Sunčano žuta",     img: "colors/dekiceCol/dekiceCol18.jpg" },
            { name: "Crvena",           img: "colors/dekiceCol/dekiceCol19.jpg" },
            { name: "Slon siva",        img: "colors/dekiceCol/dekiceCol20.jpg"},
            { name: "Maslinsto zelena", img: "colors/dekiceCol/dekiceCol21.jpg" },
            { name: "Bordo ljubičasta", img: "colors/dekiceCol/dekiceCol22.jpg" },
            { name: "Koraljna",         img: "colors/dekiceCol/dekiceCol23.jpg" },
            { name: "Zagasito zelena",  img: "colors/dekiceCol/dekiceCol24.jpg" },
            { name: "Cedevita narančasta",img: "colors/dekiceCol/dekiceCol25.jpg" },
            { name: "Tamno siva",       img: "colors/dekiceCol/dekiceCol26.jpg" }
          ]
        },
        {
          name: "Heklana dekica 140cm x 180cm",
          images: ["dekice/L_dekice/LDekica1.JPG", 
                    "dekice/L_dekice/LDekica2.JPG", 
                    "dekice/L_dekice/LDekica3.JPG", 
                    "dekice/L_dekice/LDekica4.JPG"],
          price: 100,
          desc: "Velika ručno pletena dekica za cijelu obitelj",
          detail: "Naša ručno pletena dekica savršen je izbor za sve, i male i velike. Rađena od najmekšeg materijala, velika da primi u svoj mekani zagrljaj i djecu i odrasle. Dekica je antialergenska i periva je na 30 °C, stvorena s puno ljubavi za vas i vaše najmilije.",
          colors: [

             { name: "Snježni leopard",  img: "colors/dekiceCol/dekiceCol1.jpg" },
            { name: "Zaigrani tigrić",  img: "colors/dekiceCol/dekiceCol2.jpg"},
            { name: "Šumsko zelena",    img: "colors/dekiceCol/dekiceCol3.jpg"},
            { name: "Beige",            img: "colors/dekiceCol/dekiceCol4.jpg" },
            { name: "Čokoladno smeđa",  img: "colors/dekiceCol/dekiceCol5.jpg" },
            { name: "Oblak bijela",     img: "colors/dekiceCol/dekiceCol6.jpg" },
            { name: "Krem",             img: "colors/dekiceCol/dekiceCol7.jpg" },
            { name: "Svijetlo smeđa",   img: "colors/dekiceCol/dekiceCol8.jpg" },
            { name: "Tamno ružičasta",  img: "colors/dekiceCol/dekiceCol9.jpg" },
            { name: "Baby ružičasta",   img: "colors/dekiceCol/dekiceCol10.jpg"},
            { name: "Lila",             img: "colors/dekiceCol/dekiceCol11.jpg" },
            { name: "Svijetlo zelena",  img: "colors/dekiceCol/dekiceCol12.jpg" },
            { name: "Baby plava",       img: "colors/dekiceCol/dekiceCol13.jpg" },
            { name: "Nebesko plava",    img: "colors/dekiceCol/dekiceCol14.jpg" },
            { name: "Tamno plava",      img: "colors/dekiceCol/dekiceCol15.jpg" },
            { name: "Tirkizna",         img: "colors/dekiceCol/dekiceCol16.jpg" },
            { name: "Oker žuta",        img: "colors/dekiceCol/dekiceCol17.jpg" },
            { name: "Sunčano žuta",     img: "colors/dekiceCol/dekiceCol18.jpg" },
            { name: "Crvena",           img: "colors/dekiceCol/dekiceCol19.jpg" },
            { name: "Slon siva",        img: "colors/dekiceCol/dekiceCol20.jpg"},
            { name: "Maslinsto zelena", img: "colors/dekiceCol/dekiceCol21.jpg" },
            { name: "Bordo ljubičasta", img: "colors/dekiceCol/dekiceCol22.jpg" },
            { name: "Koraljna",         img: "colors/dekiceCol/dekiceCol23.jpg" },
            { name: "Zagasito zelena",  img: "colors/dekiceCol/dekiceCol24.jpg" },
            { name: "Cedevita narančasta",img: "colors/dekiceCol/dekiceCol25.jpg" },
            { name: "Tamno siva",       img: "colors/dekiceCol/dekiceCol26.jpg" }
          ]
        }
      ]
    },

    /* ── TETRA PELENE ── */
    {
      name: "Tetra pelene",
      products: [
        {
          name: "Obična tetrica",
          images: ["tetraPelene/obicna/obicna1.jpg", 
                    "tetraPelene/obicna/obicna2.jpg",
                    "tetraPelene/obicna/obicna3.jpg",
                    "tetraPelene/obicna/obicna4.jpg",
                    "tetraPelene/obicna/obicna5.jpg",
                    "tetraPelene/obicna/obicna6.jpg",
                    "tetraPelene/obicna/obicna7.jpg"],
          price: 4,
          desc: "Mekana tetra pelena od 100% pamuka, višenamjenska i prozračna",
          detail: "Mekane tetra pelene od 100% pamuka. Vrlo prozračne, savršene za svakodnevnu njegu bebe – od brisanja, podrigivanja do maženja.",
          colors: [
            { name: "Cica mace",               img: "colors/tetriceCol/obicnaCol/obicnaCol1.jpg" },
            { name: "Duga i zvjezdice",        img: "colors/tetriceCol/obicnaCol/obicnaCol2.jpg" },
            { name: "Šarena vozila",           img: "colors/tetriceCol/obicnaCol/obicnaCol3.jpg" },
            { name: "Šareni kamiončići",       img: "colors/tetriceCol/obicnaCol/obicnaCol4.jpg" },
            { name: "Plišani medvjedići",      img: "colors/tetriceCol/obicnaCol/obicnaCol5.jpg" },
            { name: "Ružičasti medo i duga",   img: "colors/tetriceCol/obicnaCol/obicnaCol6.jpg" },
            { name: "Ružice na bijelom",       img: "colors/tetriceCol/obicnaCol/obicnaCol7.jpg" },
            { name: "Ružice na smeđem",        img: "colors/tetriceCol/obicnaCol/obicnaCol8.jpg" },
            { name: "Plavi medo i duga",       img: "colors/tetriceCol/obicnaCol/obicnaCol9.jpg" },
            { name: "Smeđe/bijelo cvijeće",    img: "colors/tetriceCol/obicnaCol/obicnaCol10.jpg" },
            { name: "Tropski svijet",          img: "colors/tetriceCol/obicnaCol/obicnaCol11.jpg"},
            { name: "Kiša i oblaci",           img: "colors/tetriceCol/obicnaCol/obicnaCol12.jpg" },
            { name: "Paletna srca",            img: "colors/tetriceCol/obicnaCol/obicnaCol13.jpg"},
            { name: "Životinjice i cvijeće",   img: "colors/tetriceCol/obicnaCol/obicnaCol14.jpg" }
          ]
        },
        {
          name: "Muslin tetrica",
          images: ["tetraPelene/muslin/muslin1.jpg",
                    "tetraPelene/muslin/muslin2.jpg",
                    "tetraPelene/muslin/muslin3.jpg"],
          price: 5,
          desc: "Mekana tetra pelena od 100% pamučnog muslina, savršena za njegu bebe",
          detail: "Mekane tetra pelene od 100% pamučnog jednoslojnog muslina. Savršene za svakodnevnu njegu bebe – od brisanja, podrigivanja do maženja.",
          colors: [

            { name: "Koraljno crvena",       img: "colors/tetriceCol/muslinCol/muslinCol1.jpg" },
            { name: "Maslinasto zelena",     img: "colors/tetriceCol/muslinCol/muslinCol2.jpg" },
            { name: "Sivo-plava",            img: "colors/tetriceCol/muslinCol/muslinCol3.jpg" },
            { name: "Mornarsko plava",       img: "colors/tetriceCol/muslinCol/muslinCol4.jpg" },
            { name: "Baby plava",            img: "colors/tetriceCol/muslinCol/muslinCol5.jpg" },
            { name: "Duboko plava",          img: "colors/tetriceCol/muslinCol/muslinCol6.jpg" },
            { name: "Pješčano žuta",         img: "colors/tetriceCol/muslinCol/muslinCol7.jpg" },
            { name: "Mesno crvena",          img: "colors/tetriceCol/muslinCol/muslinCol8.jpg" },
            { name: "Svijetlo beige",        img: "colors/tetriceCol/muslinCol/muslinCol9.jpg" },
            { name: "Nježno ljubičasta",     img: "colors/tetriceCol/muslinCol/muslinCol10.jpg" },
            { name: "Lila",                  img: "colors/tetriceCol/muslinCol/muslinCol11.jpg" },
            { name: "Nježno ružičasta",      img: "colors/tetriceCol/muslinCol/muslinCol12.jpg" },
            { name: "Oblačno bijela",        img: "colors/tetriceCol/muslinCol/muslinCol13.jpg" },
            { name: "Bijela s plavim prugama", img: "colors/tetriceCol/muslinCol/muslinCol14.jpg" },
            { name: "Kamilice dizajn",       img: "colors/tetriceCol/muslinCol/muslinCol15.jpg" },
            { name: "Smeđi cvjetići dizajn", img: "colors/tetriceCol/muslinCol/muslinCol16.jpg" },
            { name: "Šarene točkice dizajn", img: "colors/tetriceCol/muslinCol/muslinCol17.jpg" },
            { name: "Šareni cvijetići dizajn", img: "colors/tetriceCol/muslinCol/muslinCol18.jpg" },
            { name: "Obične točkice dizajn", img: "colors/tetriceCol/muslinCol/muslinCol19.jpg" },
            { name: "Dinosaurići dizajn",    img: "colors/tetriceCol/muslinCol/muslinCol20.jpg" },
            { name: "Smeđa srca dizajn",     img: "colors/tetriceCol/muslinCol/muslinCol21.jpg" },
            { name: "Buketići dizajn",       img: "colors/tetriceCol/muslinCol/muslinCol22.jpg" },
            { name: "Bijele gombice dizajn", img: "colors/tetriceCol/muslinCol/muslinCol23.jpg" },
            { name: "Šarene crtice dizajn",  img: "colors/tetriceCol/muslinCol/muslinCol24.jpg" },
            { name: "Auti i priroda dizajn", img: "colors/tetriceCol/muslinCol/muslinCol25.jpg" },
            { name: "Mini-kamperi dizajn",   img: "colors/tetriceCol/muslinCol/muslinCol26.jpg" },
            { name: "Dino-vozila  dizajn",   img: "colors/tetriceCol/muslinCol/muslinCol27.jpg" },
            { name: "Jagodice dizajn",       img: "colors/tetriceCol/muslinCol/muslinCol28.jpg" },
            { name: "Narančice dizajn",      img: "colors/tetriceCol/muslinCol/muslinCol29.jpg" },
            { name: "Limunčići dizajn",      img: "colors/tetriceCol/muslinCol/muslinCol30.jpg" },
            { name: "Trešnjice dizajn",      img: "colors/tetriceCol/muslinCol/muslinCol31.jpg" },
            { name: "Kamilice-običan dizajn",img: "colors/tetriceCol/muslinCol/muslinCol32.jpg" }
          ]
        }
      ]
    },

    /* ── SLINČEKI ── */
    {
      name: "Slinčeki",
      products: [
        {
          name: "Slinček",
          images: ["slinceki/slincek1.jpg", 
                    "slinceki/slincek2.jpg", 
                    "slinceki/slincek3.jpg", 
                    "slinceki/slincek4.jpg"],
          price: 4,
          desc: "Udoban i sladak slinček s mekanom vodonepropusnom podlogom",
          detail: "Udobni i preslatki slinček za bebe – savršen partner kada bebama krenu zubi. Zubići koji rastu donose puno sline, a naš ručno rađeni slinček je tu da sve drži pod kontrolom. S mekanim i vodonepropusnim materijalom, štiti bebinu odjeću i omogućava slobodno istraživanje svijeta vašim najmlađima.",
          colors: [

            { name: "Koraljno crvena",       img: "colors/tetriceCol/muslinCol/muslinCol1.jpg" },
            { name: "Maslinasto zelena",     img: "colors/tetriceCol/muslinCol/muslinCol2.jpg" },
            { name: "Sivo-plava",            img: "colors/tetriceCol/muslinCol/muslinCol3.jpg" },
            { name: "Mornarsko plava",       img: "colors/tetriceCol/muslinCol/muslinCol4.jpg" },
            { name: "Baby plava",            img: "colors/tetriceCol/muslinCol/muslinCol5.jpg" },
            { name: "Duboko plava",          img: "colors/tetriceCol/muslinCol/muslinCol6.jpg" },
            { name: "Pješčano žuta",         img: "colors/tetriceCol/muslinCol/muslinCol7.jpg" },
            { name: "Mesno crvena",          img: "colors/tetriceCol/muslinCol/muslinCol8.jpg" },
            { name: "Svijetlo beige",        img: "colors/tetriceCol/muslinCol/muslinCol9.jpg" },
            { name: "Nježno ljubičasta",     img: "colors/tetriceCol/muslinCol/muslinCol10.jpg" },
            { name: "Lila",                  img: "colors/tetriceCol/muslinCol/muslinCol11.jpg" },
            { name: "Nježno ružičasta",      img: "colors/tetriceCol/muslinCol/muslinCol12.jpg" },
            { name: "Oblačno bijela",        img: "colors/tetriceCol/muslinCol/muslinCol13.jpg" },
            { name: "Bijela s plavim prugama", img: "colors/tetriceCol/muslinCol/muslinCol14.jpg" },
            { name: "Kamilice-bež dizajn",   img: "colors/tetriceCol/muslinCol/muslinCol15.jpg" },
            { name: "Smeđi cvjetići dizajn", img: "colors/tetriceCol/muslinCol/muslinCol16.jpg" },
            { name: "Šarene točkice dizajn", img: "colors/tetriceCol/muslinCol/muslinCol17.jpg" },
            { name: "Šareni cvijetići dizajn", img: "colors/tetriceCol/muslinCol/muslinCol18.jpg" },
            { name: "Obične točkice dizajn", img: "colors/tetriceCol/muslinCol/muslinCol19.jpg" },
            { name: "Dinosaurići dizajn",    img: "colors/tetriceCol/muslinCol/muslinCol20.jpg" },
            { name: "Smeđa srca dizajn",     img: "colors/tetriceCol/muslinCol/muslinCol21.jpg" },
            { name: "Buketići dizajn",       img: "colors/tetriceCol/muslinCol/muslinCol22.jpg" },
            { name: "Bijele gombice dizajn", img: "colors/tetriceCol/muslinCol/muslinCol23.jpg" },
            { name: "Šarene crtice dizajn",  img: "colors/tetriceCol/muslinCol/muslinCol24.jpg" },
            { name: "Auti i priroda dizajn", img: "colors/tetriceCol/muslinCol/muslinCol25.jpg" },
            { name: "Mini-kamperi dizajn",   img: "colors/tetriceCol/muslinCol/muslinCol26.jpg" },
            { name: "Dino-vozila  dizajn",   img: "colors/tetriceCol/muslinCol/muslinCol27.jpg" },
            { name: "Jagodice dizajn",       img: "colors/tetriceCol/muslinCol/muslinCol28.jpg" },
            { name: "Narančice dizajn",      img: "colors/tetriceCol/muslinCol/muslinCol29.jpg" },
            { name: "Limunčići dizajn",      img: "colors/tetriceCol/muslinCol/muslinCol30.jpg" },
            { name: "Trešnjice dizajn",      img: "colors/tetriceCol/muslinCol/muslinCol31.jpg" },
            { name: "Kamilice-običan dizajn",img: "colors/tetriceCol/muslinCol/muslinCol32.jpg" }
          ]
        }
      ]
    },

    /* ── Heklani crtani likovi ── */

      {
          name: "Heklani crtani likovi",
          products: [
        {
          name: "Stich",
          images: ["mazilice/crtaniLikovi/stich/stich1.jpg"],
          price: 30,
          desc: "Predivni heklani Stich",
          detail: "Predivni heklani Stich, ručno rađen sa puno pažnje i ljubavi. Mekana igračka sigurna za bebe i malu djecu, te savršena za poticanje mašte i stvaranje prekrasnih uspomena.",
          colors: [

            { name: "Klasični dizajn", img: "colors/maziliceCol/crtaniLikoviCol/crtaniLikoviCol1.jpg" }
          ]
        },
        {
          name: "Batman",
          images: ["mazilice/crtaniLikovi/batman/batman1.jpg"],
          price: 30,
          desc: "Predivni heklani Batman",
          detail: "Predivni heklani Batman, ručno rađen sa puno pažnje i ljubavi. Mekana igračka sigurna za bebe i malu djecu, te savršena za poticanje mašte i stvaranje prekrasnih uspomena.",
          colors: [
            { name: "Klasični dizajn", img: "colors/maziliceCol/crtaniLikoviCol/crtaniLikoviCol1.jpg"}
          ]
        },
        {
          name: "Pepa Pig",
          images: ["mazilice/crtaniLikovi/pepaPig/pepaPig1.jpg"],
          price: 30,
          desc: "Predivna heklana Pepa Pig",
          detail: "Predivna heklana Pepa Pig, ručno rađena sa puno pažnje i ljubavi. Mekana igračka sigurna za bebe i malu djecu, te savršena za poticanje mašte i stvaranje prekrasnih uspomena.",
          colors: [
            { name: "Klasični dizajn", img: "colors/maziliceCol/crtaniLikoviCol/crtaniLikoviCol1.jpg"}
          ]
        },
  
        {
          name: "Spiderman",
          images: ["mazilice/crtaniLikovi/spiderman/spider1.jpg"],
          price: 30,
          desc: "Predivni heklani Spiderman",
          detail: "Predivni heklani Spiderman, ručno rađen sa puno pažnje i ljubavi. Mekana igračka sigurna za bebe i malu djecu, te savršena za poticanje mašte i stvaranje prekrasnih uspomena.",
          colors: [
            { name: "Klasični dizajn", img: "colors/maziliceCol/crtaniLikoviCol/crtaniLikoviCol1.jpg"}
            ]
          }
        ]
      },

    /* ── HEKLANI DINOSAURI ── */
        {
          name: "Heklani dinosauri",
          products: [
        {
          name: "Dinosaurić Dino",
          images: ["mazilice/dinosauri/dino1.jpg", "mazilice/dinosauri/dino2.jpg", "mazilice/dinosauri/dino3.jpg"],
          price: 30,
          desc: "Predivni heklani dinosaurić, vi birate glavnu boju",
          detail: "Predivni heklani dinosaurić, ručno rađen sa puno pažnje i ljubavi. Mekana igračka sigurna za bebe i malu djecu, te savršena za poticanje mašte i stvaranje prekrasnih uspomena. Dolazi sa šarenim detaljima, a vi birate glavnu boju dinosaurića.",
          colors: [

            { name: "Papir bijela",      img: "colors/maziliceCol/dinosauriCol/dinosauriCol1.jpg"},
            { name: "Oblačno siva",      img: "colors/maziliceCol/dinosauriCol/dinosauriCol2.jpg" },
            { name: "Baby plava",        img: "colors/maziliceCol/dinosauriCol/dinosauriCol3.jpg"},
            { name: "Beige",             img: "colors/maziliceCol/dinosauriCol/dinosauriCol4.jpg"},
            { name: "Nježno ružičasta",  img: "colors/maziliceCol/dinosauriCol/dinosauriCol5.jpg"},
            { name: "Morsko plava",       img: "colors/maziliceCol/dinosauriCol/dinosauriCol6.jpg"},
            { name: "Šumsko zelena",     img: "colors/maziliceCol/dinosauriCol/dinosauriCol7.jpg" }
          ]
        }
      ]
    },

    /* ── HEKLANE DOMAĆE ŽIVOTINJE ── */
      {
        name: "Heklane domaće životinje",
        products: [
        {
          name: "Kravica Mumu",
          images: ["mazilice/domaceZiv/kravica/krava1.jpg"],
          price: 30,
          desc: "Predivna heklana Kravica Mumu, ručno rađena sa puno ljubavi",
          detail: "Predivna heklana Kravica, ručno rađena sa puno pažnje i ljubavi. Mekana igračka sigurna za bebe i malu djecu, te savršena za poticanje mašte i stvaranje prekrasnih uspomena.",
          colors: [

              { name: "Klasični dizajn", img: "colors/maziliceCol/domZivCol/domZivCol1.jpg"}
          ]
        },
        {
          name: "Ovca Meme",
          images: ["mazilice/domaceZiv/ovcica/ovca1.jpg"],
          price: 30,
          desc: "Predivna heklana Ovčica Meme, ručno rađena sa puno ljubavi",
          detail: "Predivna heklana Ovčica, ručno rađena sa puno pažnje i ljubavi. Mekana igračka sigurna za bebe i malu djecu, te savršena za poticanje mašte i stvaranje prekrasnih uspomena.",
          colors: [

              { name: "Klasični dizajn", img: "colors/maziliceCol/domZivCol/domZivCol1.jpg"}
          ]
        },
        {
          name: "Guska Gusa",
          images: ["mazilice/domaceZiv/guska/guska1.jpg"],
          price: 30,
          desc: "Predivna heklana Guska Gusa, ručno rađena sa puno ljubavi",
          detail: "Predivna heklana Guska, ručno rađena sa puno pažnje i ljubavi. Mekana igračka sigurna za bebe i malu djecu, te savršena za poticanje mašte i stvaranje prekrasnih uspomena.",
          colors: [

              { name: "Klasični dizajn", img: "colors/maziliceCol/domZivCol/domZivCol1.jpg"}
          ]
        },
        {
          name: "Patka Vlatka",
          images: ["mazilice/domaceZiv/patka/patka1.jpg"],
          price: 30,
          desc: "Predivna heklana Patkica Vlatka, ručno rađena sa puno ljubavi",
          detail: "Predivna heklana Patkica, ručno rađena sa puno pažnje i ljubavi. Mekana igračka sigurna za bebe i malu djecu, te savršena za poticanje mašte i stvaranje prekrasnih uspomena.",
          colors: [

              { name: "Klasični dizajn", img: "colors/maziliceCol/domZivCol/domZivCol1.jpg"}
          ]
        },
        {
          name: "Svinja Gica",
          images: ["mazilice/domaceZiv/svinja/svinja1.jpg"],
          price: 30,
          desc: "Predivna heklana Svinjica Gica, ručno rađena sa puno ljubavi",
          detail: "Predivna heklana Svinjica, ručno rađena sa puno pažnje i ljubavi. Mekana igračka sigurna za bebe i malu djecu, te savršena za poticanje mašte i stvaranje prekrasnih uspomena.",
          colors: [

              { name: "Klasični dizajn", img: "colors/maziliceCol/domZivCol/domZivCol1.jpg"}
          ]
        },
        {
          name: "Zec Zeko",
          images: ["mazilice/domaceZiv/zec/zeko1.jpg"],
          price: 30,
          desc: "Predivni heklani Zec Zeko, ručno rađen sa puno ljubavi",
          detail: "Predivni heklani Zeko, ručno rađen sa puno pažnje i ljubavi. Mekana igračka sigurna za bebe i malu djecu, te savršena za poticanje mašte i stvaranje prekrasnih uspomena.",
          colors: [

              { name: "Klasični dizajn", img: "colors/maziliceCol/domZivCol/domZivCol1.jpg"}
          ]
        }
      ]
    },

    /* ── HEKLANE DIVLJE ŽIVOTINJE ── */
        {
          name: "Heklane divlje životinje",
          products: [
        {
          name: "Lavić Rar",
          images: ["mazilice/divljeZiv/lavic/lavic1.jpg", 
                    "mazilice/divljeZiv/lavic/lavic2.jpg"],
          price: 30,
          desc: "Predivni heklani Lavić Rar, ručno rađen sa puno ljubavi",
          detail: "Predivni heklani Lavić, ručno rađen sa puno pažnje i ljubavi. Mekana igračka sigurna za bebe i malu djecu, te savršena za poticanje mašte i stvaranje prekrasnih uspomena.",
          colors: [

            { name: "Klasični dizajn", img: "colors/maziliceCol/divZivCol/divZivCol1.jpg"},
            { name: "Beige dizajn",    img: "colors/maziliceCol/divZivCol/divZivCol2.jpg"}
          ]
        },
        {
          name: "Žirafa Žana",
          images: ["mazilice/divljeZiv/zirafa/zirafa1.jpg",
                    "mazilice/divljeZiv/zirafa/zirafa2.jpg"],
          price: 30,
          desc: "Predivna heklana Žirafa Žana, ručno rađena sa puno ljubavi",
          detail: "Predivna heklana Žirafa, ručno rađena sa puno pažnje i ljubavi. Mekana igračka sigurna za bebe i malu djecu, te savršena za poticanje mašte i stvaranje prekrasnih uspomena.",
          colors: [

            { name: "Klasični dizajn", img: "colors/maziliceCol/divZivCol/divZivCol1.jpg"},
            { name: "Beige dizajn",    img: "colors/maziliceCol/divZivCol/divZivCol2.jpg"}
          ]
        },
        {
          name: "Majmunčić Mani",
          images: ["mazilice/divljeZiv/majmunic/majmun1.jpg"],
          price: 30,
          desc: "Predivni heklani Majmunčić Mani, ručno rađen sa puno ljubavi",
          detail: "Predivni heklani Majmunčić, ručno rađen sa puno pažnje i ljubavi. Mekana igračka sigurna za bebe i malu djecu, te savršena za poticanje mašte i stvaranje prekrasnih uspomena.",
          colors: [

            { name: "Klasični dizajn", img: "colors/maziliceCol/divZivCol/divZivCol1.jpg"},
            { name: "Beige dizajn",    img: "colors/maziliceCol/divZivCol/divZivCol2.jpg"}
          ]
        },
        {
          name: "Slonić Balonić",
          images: ["mazilice/divljeZiv/slonic/slonic1.jpg", 
                    "mazilice/divljeZiv/slonic/slonic2.jpg"],
          price: 30,
          desc: "Predivni heklani Slonić Balonić, ručno rađen sa puno ljubavi",
          detail: "Predivni heklani Slonić, ručno rađen sa puno pažnje i ljubavi. Mekana igračka sigurna za bebe i malu djecu, te savršena za poticanje mašte i stvaranje prekrasnih uspomena.",
          colors: [

            { name: "Klasični dizajn", img: "colors/maziliceCol/divZivCol/divZivCol1.jpg"},
            { name: "Beige dizajn",    img: "colors/maziliceCol/divZivCol/divZivCol2.jpg"}
          ]
        },
        {
          name: "Medo Brundo",
          images: ["mazilice/divljeZiv/medo/medo1.jpg",
                    "mazilice/divljeZiv/medo/medo2.jpg"],
          price: 30,
          desc: "Predivni heklani Medo Brundo, ručno rađen sa puno ljubavi",
          detail: "Predivni heklani Medo, ručno rađen sa puno pažnje i ljubavi. Mekana igračka sigurna za bebe i malu djecu, te savršena za poticanje mašte i stvaranje prekrasnih uspomena.",
          colors: [

            { name: "Klasični dizajn", img: "colors/maziliceCol/divZivCol/divZivCol1.jpg"},
            { name: "Beige dizajn",    img: "colors/maziliceCol/divZivCol/divZivCol2.jpg"}
          ]
        },
        {
          name: "Krokodil Krokać",
          images: ["mazilice/divljeZiv/krokodil/krokodil1.jpg", 
                    "mazilice/divljeZiv/krokodil/krokodil2.jpg"],
          price: 30,
          desc: "Predivni heklani Krokodil Krokać, ručno rađen sa puno ljubavi",
          detail: "Predivni heklani Krokodil, ručno rađen sa puno pažnje i ljubavi. Mekana igračka sigurna za bebe i malu djecu, te savršena za poticanje mašte i stvaranje prekrasnih uspomena.",
          colors: [

            { name: "Klasični dizajn", img: "colors/maziliceCol/divZivCol/divZivCol1.jpg"},
            { name: "Beige dizajn",    img: "colors/maziliceCol/divZivCol/divZivCol2.jpg"}
          ]
        },
        {
          name: "Hobotnica Hoba",
          images: ["mazilice/divljeZiv/hobotnica/hobotnica1.jpg"],
          price: 30,
          desc: "Predivna heklana Hobotnica, ručno rađena sa puno ljubavi",
          detail: "Predivna heklana Hobotnica, ručno rađena sa puno pažnje i ljubavi. Mekana igračka sigurna za bebe i malu djecu, te savršena za poticanje mašte i stvaranje prekrasnih uspomena.",
          colors: [

            { name: "Klasični dizajn", img: "colors/maziliceCol/divZivCol/divZivCol1.jpg"},
            { name: "Beige dizajn",    img: "colors/maziliceCol/divZivCol/divZivCol2.jpg"}
            ]
          }
        ]
      },

    /* ── HEKLANE KORNJAČICE ── */
        {
          name: "Heklane kornjačice",
          products: [
        {
          name: "Heklana kornjačica",
          images: ["mazilice/kornjace/kornjaca1.jpg", 
                    "mazilice/kornjace/kornjaca2.jpg", 
                    "mazilice/kornjace/kornjaca3.jpg", 
                    "mazilice/kornjace/kornjaca4.jpg",
                    "mazilice/kornjace/kornjaca5.jpg", 
                    "mazilice/kornjace/kornjaca6.jpg",
                    "mazilice/kornjace/kornjaca7.jpg"],
          price: 30,
          desc: "Predivna heklana kornjačica s krem bazom, vi birate boju štita",
          detail: "Predivna heklana kornjačica, ručno rađena sa puno pažnje i ljubavi. Mekana igračka sigurna za bebe i malu djecu, te savršena za poticanje mašte i stvaranje prekrasnih uspomena. Dolazi sa nježnom krem bazom, a vi birate glavnu boju štita vaše kornjačice.",
          colors: [

            { name: "Morsko plava",        img: "colors/maziliceCol/hekKornjaceCol/hekKornjaceCol1.jpg"},
            { name: "Oblačno nebo plava",  img: "colors/maziliceCol/hekKornjaceCol/hekKornjaceCol2.jpg"},
            { name: "Koraljno roza",       img: "colors/maziliceCol/hekKornjaceCol/hekKornjaceCol3.jpg"},
            { name: "Blijedo roza",        img: "colors/maziliceCol/hekKornjaceCol/hekKornjaceCol4.jpg" },
            { name: "Šumsko zelena",       img: "colors/maziliceCol/hekKornjaceCol/hekKornjaceCol5.jpg"},
            { name: "Pašnjak zelena",      img: "colors/maziliceCol/hekKornjaceCol/hekKornjaceCol6.jpg"},
            { name: "Sunčano žuta",        img: "colors/maziliceCol/hekKornjaceCol/hekKornjaceCol7.jpg"}
            ]
          }
        ]
      },

    /* ── GUMICE ZA KOSU ── */
    {
      name: "Gumice za kosu",
      products: [
        {
          name: "Muslin gumice",
          images: ["gumiceZaKosu/muslin/muslin1.jpg", 
                    "gumiceZaKosu/muslin/muslin2.jpg"],
          price: 3,
          desc: "Muslin gumice s prekrasnim ljetnim uzorcima, idealan detalj",
          detail: "Muslin gumice za kosu sa prekrasnim ljetnim uzorcima, idealan detalj za ukrašavanje vaših frizura.",
          colors: [

            { name: "Koraljno crvena",       img: "colors/tetriceCol/muslinCol/muslinCol1.jpg" },
            { name: "Maslinasto zelena",     img: "colors/tetriceCol/muslinCol/muslinCol2.jpg" },
            { name: "Sivo-plava",            img: "colors/tetriceCol/muslinCol/muslinCol3.jpg" },
            { name: "Mornarsko plava",       img: "colors/tetriceCol/muslinCol/muslinCol4.jpg" },
            { name: "Baby plava",            img: "colors/tetriceCol/muslinCol/muslinCol5.jpg" },
            { name: "Duboko plava",          img: "colors/tetriceCol/muslinCol/muslinCol6.jpg" },
            { name: "Pješčano žuta",         img: "colors/tetriceCol/muslinCol/muslinCol7.jpg" },
            { name: "Mesno crvena",          img: "colors/tetriceCol/muslinCol/muslinCol8.jpg" },
            { name: "Svijetlo beige",        img: "colors/tetriceCol/muslinCol/muslinCol9.jpg" },
            { name: "Nježno ljubičasta",     img: "colors/tetriceCol/muslinCol/muslinCol10.jpg" },
            { name: "Lila",                  img: "colors/tetriceCol/muslinCol/muslinCol11.jpg" },
            { name: "Nježno ružičasta",      img: "colors/tetriceCol/muslinCol/muslinCol12.jpg" },
            { name: "Oblačno bijela",        img: "colors/tetriceCol/muslinCol/muslinCol13.jpg" },
            { name: "Bijela s plavim prugama", img: "colors/tetriceCol/muslinCol/muslinCol14.jpg" },
            { name: "Kamilice dizajn",       img: "colors/tetriceCol/muslinCol/muslinCol15.jpg" },
            { name: "Smeđi cvjetići dizajn", img: "colors/tetriceCol/muslinCol/muslinCol16.jpg" },
            { name: "Šarene točkice dizajn", img: "colors/tetriceCol/muslinCol/muslinCol17.jpg" },
            { name: "Šareni cvijetići dizajn", img: "colors/tetriceCol/muslinCol/muslinCol18.jpg" },
            { name: "Obične točkice dizajn", img: "colors/tetriceCol/muslinCol/muslinCol19.jpg" },
            { name: "Dinosaurići dizajn",    img: "colors/tetriceCol/muslinCol/muslinCol20.jpg" },
            { name: "Smeđa srca dizajn",     img: "colors/tetriceCol/muslinCol/muslinCol21.jpg" },
            { name: "Buketići dizajn",       img: "colors/tetriceCol/muslinCol/muslinCol22.jpg" },
            { name: "Bijele gombice dizajn", img: "colors/tetriceCol/muslinCol/muslinCol23.jpg" },
            { name: "Šarene crtice dizajn",  img: "colors/tetriceCol/muslinCol/muslinCol24.jpg" },
            { name: "Auti i priroda dizajn", img: "colors/tetriceCol/muslinCol/muslinCol25.jpg" },
            { name: "Mini-kamperi dizajn",   img: "colors/tetriceCol/muslinCol/muslinCol26.jpg" },
            { name: "Dino-vozila  dizajn",   img: "colors/tetriceCol/muslinCol/muslinCol27.jpg" },
            { name: "Jagodice dizajn",       img: "colors/tetriceCol/muslinCol/muslinCol28.jpg" },
            { name: "Narančice dizajn",      img: "colors/tetriceCol/muslinCol/muslinCol29.jpg" },
            { name: "Limunčići dizajn",      img: "colors/tetriceCol/muslinCol/muslinCol30.jpg" },
            { name: "Trešnjice dizajn",      img: "colors/tetriceCol/muslinCol/muslinCol31.jpg" },
            { name: "Kamilice-običan dizajn",img: "colors/tetriceCol/muslinCol/muslinCol32.jpg" }
          ]
        },
        {
          name: "Saten gumice",
          images: ["gumiceZaKosu/saten/saten1.jpg", 
                    "gumiceZaKosu/saten/saten2.jpg", 
                    "gumiceZaKosu/saten/saten3.jpg",
                    "gumiceZaKosu/saten/saten4.jpg"],
          price: 3,
          desc: "Saten gumice prekrasnih boja, savršene za svečane prigode",
          detail: "Saten gumice za kosu prekrasnih boja, idealan detalj za vaše frizure pri svečanim prigodama.",
          colors: [

            { name: "Božično crvena",    img: "colors/gumiceCol/satenCol/satenCol1.jpg" },
            { name: "Žarko ružičasta",   img: "colors/gumiceCol/satenCol/satenCol2.jpg"},
            { name: "Svijetlo ružičasta", img: "colors/gumiceCol/satenCol/satenCol3.jpg"},
            { name: "Šumsko zelena",     img: "colors/gumiceCol/satenCol/satenCol4.jpg"},
            { name: "Mornarsko plava",   img: "colors/gumiceCol/satenCol/satenCol5.jpg" },
            { name: "Saten beige",       img: "colors/gumiceCol/satenCol/satenCol6.jpg"}
          ]
        },
        {
          name: "Gumice na točkice",
          images: ["gumiceZaKosu/naTockice/naTockice1.jpg",
                    "gumiceZaKosu/naTockice/naTockice2.jpg"],
          price: 3,
          desc: "Gumice s točkastim uzorcima, idealan svakodnevni detalj",
          detail: "Gumice na točkice za kosu sa prekrasnim točkastim uzorcima, idealan detalj za vašu svakodnevicu i uljepšavanje vaših frizura.",
          colors: [

            { name: "Bijela sa crnim točkicama",  img: "colors/gumiceCol/gumNaTocCol/gumNaTocCol1.jpg" },
            { name: "Crna sa bijelim točkicama",  img: "colors/gumiceCol/gumNaTocCol/gumNaTocCol2.jpg"},
            { name: "Žuta sa crnim točkicama",    img: "colors/gumiceCol/gumNaTocCol/gumNaTocCol3.jpg"},
            { name: "Crvena sa bijelim točkicama", img: "colors/gumiceCol/gumNaTocCol/gumNaTocCol4.jpg" }
          ]
        },
        {
          name: "Heklane gumice",
          images: ["gumiceZaKosu/heklane/heklane1.jpg", 
                    "gumiceZaKosu/heklane/heklane2.jpg"],
          price: 3,
          desc: "Ručno heklane gumice u bogatom izboru boja",
          detail: "Heklane gumice u raznim bojama, prekrasni detalj za ukrašavanje vaše kose, a možda i uparivanje s vašom heklanom trakicom za glavu ;)",
          colors: [

            { name: "Snježni leopard",  img: "colors/dekiceCol/dekiceCol1.jpg" },
            { name: "Zaigrani tigrić",  img: "colors/dekiceCol/dekiceCol2.jpg"},
            { name: "Šumsko zelena",    img: "colors/dekiceCol/dekiceCol3.jpg"},
            { name: "Beige",            img: "colors/dekiceCol/dekiceCol4.jpg" },
            { name: "Čokoladno smeđa",  img: "colors/dekiceCol/dekiceCol5.jpg" },
            { name: "Oblak bijela",     img: "colors/dekiceCol/dekiceCol6.jpg" },
            { name: "Krem",             img: "colors/dekiceCol/dekiceCol7.jpg" },
            { name: "Svijetlo smeđa",   img: "colors/dekiceCol/dekiceCol8.jpg" },
            { name: "Tamno ružičasta",  img: "colors/dekiceCol/dekiceCol9.jpg" },
            { name: "Baby ružičasta",   img: "colors/dekiceCol/dekiceCol10.jpg"},
            { name: "Lila",             img: "colors/dekiceCol/dekiceCol11.jpg" },
            { name: "Svijetlo zelena",  img: "colors/dekiceCol/dekiceCol12.jpg" },
            { name: "Baby plava",       img: "colors/dekiceCol/dekiceCol13.jpg" },
            { name: "Nebesko plava",    img: "colors/dekiceCol/dekiceCol14.jpg" },
            { name: "Tamno plava",      img: "colors/dekiceCol/dekiceCol15.jpg" },
            { name: "Tirkizna",         img: "colors/dekiceCol/dekiceCol16.jpg" },
            { name: "Oker žuta",        img: "colors/dekiceCol/dekiceCol17.jpg" },
            { name: "Sunčano žuta",     img: "colors/dekiceCol/dekiceCol18.jpg" },
            { name: "Crvena",           img: "colors/dekiceCol/dekiceCol19.jpg" },
            { name: "Slon siva",        img: "colors/dekiceCol/dekiceCol20.jpg"},
            { name: "Maslinsto zelena", img: "colors/dekiceCol/dekiceCol21.jpg" },
            { name: "Bordo ljubičasta", img: "colors/dekiceCol/dekiceCol22.jpg" },
            { name: "Koraljna",         img: "colors/dekiceCol/dekiceCol23.jpg" },
            { name: "Zagasito zelena",  img: "colors/dekiceCol/dekiceCol24.jpg" },
            { name: "Cedevita narančasta",img: "colors/dekiceCol/dekiceCol25.jpg" },
            { name: "Tamno siva",       img: "colors/dekiceCol/dekiceCol26.jpg" }
          ]
        }
      ]
    },

    /* ── TRAKICE ZA GLAVU ── */
    {
      name: "Trakice za glavu",
      products: [
        {
          name: "Pamučne trakice za bebe",
          images: ["Trakice/zaBebe/zaBebe1.jpg", 
                    "Trakice/zaBebe/zaBebe2.jpg", 
                    "Trakice/zaBebe/zaBebe3.jpg",
                    "Trakice/zaBebe/zaBebe4.jpg",
                    "Trakice/zaBebe/zaBebe5.jpg",
                    "Trakice/zaBebe/zaBebe6.jpg"],
          price: 10,
          desc: "Mekane pamučne trakice, rastezljive i prilagodljive glavi bebe",
          detail: "Naše pamučne trakice za vaše najmanje. Idealne trakice za zaštitu malih nježnih glavica. Rastezljive su te prilagodljive glavi vaše bebe. Prekrasan i praktičan detalj za vaše najmlađe.",
          colors: [

            { name: "Snježno bijela",   img: "colors/trakiceCol/zaBebeCol/zaBebeCol1.jpg" },
            { name: "Boja breskve",     img: "colors/trakiceCol/zaBebeCol/zaBebeCol2.jpg" },
            { name: "Nježno smeđa",     img: "colors/trakiceCol/zaBebeCol/zaBebeCol3.jpg" },
            { name: "Šumsko zelena",    img: "colors/trakiceCol/zaBebeCol/zaBebeCol4.jpg"  },
            { name: "Lila ljubičasta",  img: "colors/trakiceCol/zaBebeCol/zaBebeCol5.jpg"  },
            { name: "Zeleno-plava",     img: "colors/trakiceCol/zaBebeCol/zaBebeCol6.jpg" },
            { name: "Medeno žuta",      img: "colors/trakiceCol/zaBebeCol/zaBebeCol7.jpg"  },
            { name: "Prljavo roza",     img: "colors/trakiceCol/zaBebeCol/zaBebeCol8.jpg" }
          ]
        },
        {
          name: "Heklane trakice",
          images: ["Trakice/heklane/heklaneT1.jpg",
                    "Trakice/heklane/heklaneT2.jpg",
                    "Trakice/heklane/heklaneT3.jpg"],
          price: 10,
          desc: "Ručno heklane trakice u bogatom izboru boja, praktične i moderne",
          detail: "Naše heklane trakice idealne su za sve – prekrasnog dizajna i bogatog izbora boja. Praktične za hladno i vjetrovito vrijeme te za sve one koje žele izgledati moderno, a biti zaštićeni od vremenskih nepogoda.",
          colors: [

            { name: "Snježni leopard",  img: "colors/dekiceCol/dekiceCol1.jpg" },
            { name: "Zaigrani tigrić",  img: "colors/dekiceCol/dekiceCol2.jpg"},
            { name: "Šumsko zelena",    img: "colors/dekiceCol/dekiceCol3.jpg"},
            { name: "Beige",            img: "colors/dekiceCol/dekiceCol4.jpg" },
            { name: "Čokoladno smeđa",  img: "colors/dekiceCol/dekiceCol5.jpg" },
            { name: "Oblak bijela",     img: "colors/dekiceCol/dekiceCol6.jpg" },
            { name: "Krem",             img: "colors/dekiceCol/dekiceCol7.jpg" },
            { name: "Svijetlo smeđa",   img: "colors/dekiceCol/dekiceCol8.jpg" },
            { name: "Tamno ružičasta",  img: "colors/dekiceCol/dekiceCol9.jpg" },
            { name: "Baby ružičasta",   img: "colors/dekiceCol/dekiceCol10.jpg"},
            { name: "Lila",             img: "colors/dekiceCol/dekiceCol11.jpg" },
            { name: "Svijetlo zelena",  img: "colors/dekiceCol/dekiceCol12.jpg" },
            { name: "Baby plava",       img: "colors/dekiceCol/dekiceCol13.jpg" },
            { name: "Nebesko plava",    img: "colors/dekiceCol/dekiceCol14.jpg" },
            { name: "Tamno plava",      img: "colors/dekiceCol/dekiceCol15.jpg" },
            { name: "Tirkizna",         img: "colors/dekiceCol/dekiceCol16.jpg" },
            { name: "Oker žuta",        img: "colors/dekiceCol/dekiceCol17.jpg" },
            { name: "Sunčano žuta",     img: "colors/dekiceCol/dekiceCol18.jpg" },
            { name: "Crvena",           img: "colors/dekiceCol/dekiceCol19.jpg" },
            { name: "Slon siva",        img: "colors/dekiceCol/dekiceCol20.jpg"},
            { name: "Maslinsto zelena", img: "colors/dekiceCol/dekiceCol21.jpg" },
            { name: "Bordo ljubičasta", img: "colors/dekiceCol/dekiceCol22.jpg" },
            { name: "Koraljna",         img: "colors/dekiceCol/dekiceCol23.jpg" },
            { name: "Zagasito zelena",  img: "colors/dekiceCol/dekiceCol24.jpg" },
            { name: "Cedevita narančasta",img: "colors/dekiceCol/dekiceCol25.jpg" },
            { name: "Tamno siva",       img: "colors/dekiceCol/dekiceCol26.jpg" }
          ]
        }
      ]
    },

    /* ── SET 5 IN 1 ── */
    {
      name: "Set 5 in 1",
      products: [
        {
          name: "Set 5 in 1",
          images: ["set/set1.jpg", 
                    "set/set2.jpg", 
                    "set/set3.jpg", 
                    "set/set4.jpg", 
                    "set/set5.jpg", 
                    "set/set6.jpg"],
          price: 15,
          desc: "Komplet: tetra pelena, dvije gazice, slinček i gumica – sve u istom dizajnu",
          detail: "Naš set 5 in 1 sadrži: jednu tetra pelenu, dvije gazice (veličine 20cm x 20cm), slinček i gumicu za kosu. Svi proizvodi našeg seta su istog dizajna kojeg odabirete sami. Prekrasni set u kojem možete naći ponešto i za vas i za vaše najmanje.",
          colors: [
            
            { name: "Jagodice dizajn",  img: "colors/setCol/setCol1.jpg" },
            { name: "Narančice dizajn", img: "colors/setCol/setCol2.jpg"  },
            { name: "Limunčići dizajn", img: "colors/setCol/setCol3.jpg"  }
          ]
        }
      ]
    }

  ]
};

window.data = data;
