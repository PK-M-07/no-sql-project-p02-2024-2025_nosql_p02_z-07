use("przepisy");

db.kolacje.insertMany([
  {
    _id: 1,
    name: "Jajecznica z pomidorami i szczypiorkiem",
    ingredients: [
      { name: "jajka", quantity: 3, unit: "sztuki" },
      { name: "pomidor", quantity: 1, unit: "sztuka" },
      { name: "masło", quantity: 1, unit: "łyżka" },
      { name: "szczypiorek" },
      { name: "sól" },
      { name: "pieprz" },
      { name: "chleb pełnoziarnisty", quantity: 2, unit: "kromki" },
    ],
    instructions:
      "Na patelni rozgrzej masło. Pomidora pokrój w kostkę i podsmaż przez 2–3 minuty. Wbij jajka, mieszając delikatnie. Smaż do uzyskania odpowiedniej konsystencji. Dopraw solą i pieprzem. Posyp jajecznicę posiekanym szczypiorkiem i podawaj z pieczywem.",
    meal_type: "kolacje",
    prep_time: 15,
    calories: 420,
    isVege: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: 2,
    name: "Kanapki z pastą jajeczną",
    ingredients: [
      { name: "jajka", quantity: 2, unit: "sztuki" },
      { name: "majonez", quantity: 2, unit: "łyżki" },
      { name: "musztarda", quantity: 1, unit: "łyżeczka" },
      { name: "szczypiorek" },
      { name: "chleb pełnoziarnisty", quantity: 4, unit: "kromki" },
      { name: "sól" },
      { name: "pieprz" },
    ],
    instructions:
      "Jajka obierz i rozgnieć widelcem. Dodaj majonez, musztardę oraz posiekany szczypiorek. Dopraw solą i pieprzem, wymieszaj na jednolitą pastę. Posmaruj kromki chleba pastą jajeczną i udekoruj dodatkowym szczypiorkiem.",
    meal_type: "kolacje",
    prep_time: 15,
    calories: 370,
    isVege: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: 3,
    name: "Kiełbasa na ciepło z chlebem i musztardą",
    ingredients: [
      {
        name: "kiełbaski śląskie lub podwawelskie",
        quantity: 2,
        unit: "sztuki",
      },
      { name: "chleb", quantity: 2, unit: "kromki" },
      { name: "musztarda", quantity: 1, unit: "łyżeczka" },
      { name: "ogórek kiszony" },
    ],
    instructions:
      "Kiełbaski podgrzej w wodzie lub podsmaż na patelni przez 5–7 minut. Podawaj z kromkami chleba, musztardą i ogórkiem kiszonym.",
    meal_type: "kolacje",
    prep_time: 15,
    calories: 450,
    isVege: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: 4,
    name: "Twarożek ze szczypiorkiem i rzodkiewką",
    ingredients: [
      { name: "twaróg półtłusty", quantity: 200, unit: "g" },
      { name: "śmietana 12%", quantity: 3, unit: "łyżki" },
      { name: "rzodkiewki", quantity: 3, unit: "sztuki" },
      { name: "szczypiorek", quantity: 1, unit: "garść" },
      { name: "sól" },
      { name: "pieprz" },
      { name: "chleb", quantity: 2, unit: "kromki" },
    ],
    instructions:
      "Twaróg rozgnieć widelcem, dodaj śmietanę, pokrojone w plasterki rzodkiewki i posiekany szczypiorek. Dopraw solą i pieprzem, wymieszaj. Podawaj z pieczywem.",
    meal_type: "kolacje",
    prep_time: 10,
    calories: 390,
    isVege: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: 5,
    name: "Naleśniki z dżemem lub twarogiem",
    ingredients: [
      { name: "mąka", quantity: 1, unit: "szklanka" },
      { name: "jajko", quantity: 1, unit: "sztuka" },
      { name: "mleko", quantity: 1, unit: "szklanka" },
      { name: "sól" },
      { name: "dżem lub twaróg z cukrem", quantity: 2, unit: "łyżki" },
      { name: "olej do smażenia" },
    ],
    instructions:
      "Z mąki, jajka, mleka i soli przygotuj ciasto naleśnikowe. Smaż naleśniki na rozgrzanym oleju z obu stron. Posmaruj dżemem lub nadziej twarogiem z odrobiną cukru. Zwiń i podawaj na ciepło.",
    meal_type: "kolacje",
    prep_time: 30,
    calories: 450,
    isVege: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: 6,
    name: "Sałatka z szybką i serem",
    ingredients: [
      { name: "szynka drobiowa", quantity: 100, unit: "g" },
      { name: "żółty ser", quantity: 50, unit: "g" },
      { name: "pomidor", quantity: 1, unit: "sztuka" },
      { name: "ogórek", quantity: 1, unit: "sztuka" },
      { name: "sałata", quantity: 3, unit: "liście" },
      { name: "majonez", quantity: 1, unit: "łyżka" },
      { name: "sól" },
      { name: "pieprz" },
    ],
    instructions:
      "Szynkę, ser, pomidora i ogórka pokrój w kostkę. Sałatę porwij na mniejsze kawałki. Wszystkie składniki wymieszaj z majonezem. Dopraw solą i pieprzem.",
    meal_type: "kolacje",
    prep_time: 15,
    calories: 430,
    isVege: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: 7,
    name: "Zapiekanka z pieczarkami i serem",
    ingredients: [
      { name: "bułka pszenna", quantity: 1, unit: "długa" },
      { name: "pieczarki", quantity: 200, unit: "g" },
      { name: "ser żółty tarty", quantity: 50, unit: "g" },
      { name: "masło", quantity: 1, unit: "łyżka" },
      { name: "sól" },
      { name: "pieprz" },
    ],
    instructions:
      "Pieczarki pokrój w plasterki i podsmaż na maśle z solą i pieprzem. Bułkę przekrój na pół, nałóż pieczarki i posyp serem. Piecz w piekarniku nagrzanym do 200°C przez 10 minut.",
    meal_type: "kolacje",
    prep_time: 20,
    calories: 480,
    isVege: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: 8,
    name: "Omlet z warzywami",
    ingredients: [
      { name: "jajka", quantity: 3, unit: "sztuki" },
      { name: "pomidor", quantity: 1, unit: "sztuka" },
      { name: "papryka", quantity: 1 / 2, unit: "sztuki" },
      { name: "szpinak", quantity: 1, unit: "garść" },
      { name: "masło", quantity: 1, unit: "łyżeczka" },
      { name: "sól" },
      { name: "pieprz" },
    ],
    instructions:
      "Warzywa pokrój w kostkę. Na patelni rozgrzej masło, wrzuć warzywa i podsmaż przez 3–4 minuty. Jajka roztrzep z solą i pieprzem, wlej na patelnię. Smaż omlet na średnim ogniu przez 5 minut, aż się zetnie.",
    meal_type: "kolacje",
    prep_time: 15,
    calories: 420,
    isVege: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: 9,
    name: "Kiełbasa smażona z cebulą",
    ingredients: [
      { name: "kiełbasy", quantity: 2, unit: "sztuki" },
      { name: "cebula", quantity: 1, unit: "sztuka" },
      { name: "olej", quantity: 1, unit: "łyżka" },
      { name: "pieczywo" },
    ],
    instructions:
      "Kiełbasy natnij na krzyż. Podsmaż na oleju z pokrojoną w krążki cebulą. Podawaj z pieczywem.",
    meal_type: "kolacje",
    prep_time: 15,
    calories: 450,
    isVege: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: 10,
    name: "Zapiekane jajka z warzywami",
    ingredients: [
      { name: "jajka", quantity: 2, unit: "sztuki" },
      { name: "papryka", quantity: 1 / 2, unit: "sztuki" },
      { name: "pomidor", quantity: 1, unit: "sztuka" },
      { name: "cebula", quantity: 1 / 2, unit: "sztuki" },
      { name: "masło", quantity: 1, unit: "łyżka" },
      { name: "sól" },
      { name: "pieprz" },
    ],
    instructions:
      "Warzywa pokrój w kostkę i podsmaż na maśle przez 5 minut. Przełóż do małego naczynia żaroodpornego. Wbij jajka na warzywa, dopraw solą i pieprzem. Zapiekaj w piekarniku nagrzanym do 180°C przez 10–15 minut, aż jajka się zetną.",
    meal_type: "kolacje",
    prep_time: 25,
    calories: 400,
    isVege: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: 11,
    name: "Kanapki z hummusem i warzywami",
    ingredients: [
      { name: "chleb pełnoziarnisty", quantity: 4, unit: "kromki" },
      { name: "hummus", quantity: 4, unit: "łyżki" },
      { name: "pomidory", quantity: 1, unit: "sztuka" },
      { name: "ogórek zielony", quantity: 1 },
      { name: "sałata", quantity: 4, unit: "liści" },
      { name: "sól" },
      { name: "pieprz" },
    ],
    instructions:
      "Chleb posmaruj hummusem. Pomidora i ogórka pokrój w plasterki. Na każdej kromce ułóż sałatę, warzywa i dopraw solą oraz pieprzem.",
    meal_type: "kolacje",
    prep_time: 10,
    calories: 320,
    isVege: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: 12,
    name: "Tosty z awokado i pomidorem",
    ingredients: [
      { name: "chleb pełnoziarnisty", quantity: 2, unit: "kromki" },
      { name: "awokado", quantity: 1, unit: "sztuka" },
      { name: "pomidor", quantity: 1, unit: "sztuka" },
      { name: "sok z cytryny", quantity: 1, unit: "łyżeczka" },
      { name: "sól" },
      { name: "pieprz" },
    ],
    instructions:
      "Awokado rozgnieć widelcem, skrop sokiem z cytryny i dopraw solą oraz pieprzem. Chleb opiecz w tosterze lub na patelni. Na tosty nałóż pastę z awokado i plastry pomidora.",
    meal_type: "kolacje",
    prep_time: 15,
    calories: 350,
    isVege: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: 13,
    name: "Sałatka z kaszą kuskus i warzywami",
    ingredients: [
      { name: "kasza kuskus", quantity: 1 / 2, unit: "szklanka" },
      { name: "ogórek zielony", quantity: 1 },
      { name: "papryka czerwona", quantity: 1 },
      { name: "pomidor", quantity: 1 },
      { name: "rukola", unit: "garść" },
      { name: "oliwa z oliwek", quantity: 1, unit: "łyżka" },
      { name: "sok z cytryny", quantity: 1 / 2, unit: "cytryny" },
    ],
    instructions:
      "Kaszę kuskus zalej wrzątkiem (1:1), przykryj i odstaw na 10 minut. Warzywa pokrój w kostkę, dodaj do kaszy razem z rukolą. Skrop oliwą i sokiem z cytryny, wymieszaj.",
    meal_type: "kolacje",
    prep_time: 20,
    calories: 380,
    isVege: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: 14,
    name: "Placki z cukinii",
    ingredients: [
      { name: "cukinia", quantity: 1, unit: "sztuka" },
      { name: "mąka pszenna", quantity: 3, unit: "łyżki" },
      { name: "sól" },
      { name: "pieprz" },
      { name: "olej", unit: "do smażenia" },
    ],
    instructions:
      "Cukinię zetrzyj na tarce i odciśnij z nadmiaru wody. Dodaj mąkę, sól i pieprz. Wymieszaj na jednolitą masę. Smaż placki na rozgrzanym oleju po 2–3 minuty z każdej strony.",
    meal_type: "kolacje",
    prep_time: 20,
    calories: 330,
    isVege: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: 15,
    name: "Pieczona papryka z kaszą jaglaną",
    ingredients: [
      { name: "papryki", quantity: 2, unit: "czerwone" },
      { name: "kasza jaglana", quantity: 1 / 2, unit: "szklanka" },
      { name: "cebula", quantity: 1 },
      { name: "oliwa z oliwek", quantity: 1, unit: "łyżka" },
      { name: "sól" },
      { name: "pieprz" },
    ],
    instructions:
      "Kaszę ugotuj według instrukcji. Cebulę podsmaż na oliwie. Papryki przekrój na pół, usuń nasiona i wypełnij farszem z kaszy i cebuli. Piecz w piekarniku nagrzanym do 180°C przez 20 minut.",
    meal_type: "kolacje",
    prep_time: 35,
    calories: 410,
    isVege: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: 16,
    name: "Wrap z warzywami i tofu",
    ingredients: [
      { name: "tortilla pełnoziarnista", quantity: 1, unit: "sztuka" },
      { name: "tofu naturalne", quantity: 100, unit: "g" },
      { name: "ogórek", quantity: 1 / 2 },
      { name: "pomidor", quantity: 1 },
      { name: "sałata", quantity: 4, unit: "liście" },
      { name: "oliwa", quantity: 1, unit: "łyżeczka" },
    ],
    instructions:
      "Tofu podsmaż na oliwie przez 5 minut. Na tortilli ułóż sałatę, plastry ogórka, pomidora i tofu. Zawiń wrapa.",
    meal_type: "kolacje",
    prep_time: 20,
    calories: 440,
    isVege: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: 17,
    name: "Zupa krem z pomidorów",
    ingredients: [
      { name: "pomidory", quantity: 500, unit: "g" },
      { name: "cebula", quantity: 1 },
      { name: "czosnek", quantity: 2, unit: "ząbki" },
      { name: "oliwa z oliwek", quantity: 1, unit: "łyżka" },
      { name: "sól" },
      { name: "bazylia" },
    ],
    instructions:
      "Cebulę i czosnek zeszklij na oliwie. Dodaj pomidory i gotuj przez 15 minut. Zmiksuj zupę blenderem, dopraw solą i bazylią.",
    meal_type: "kolacje",
    prep_time: 25,
    calories: 290,
    isVege: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: 18,
    name: "Kasza gryczana z pieczarkami i cebulą",
    ingredients: [
      { name: "kasza gryczana", quantity: 1 / 2, unit: "szklanka" },
      { name: "pieczarki", quantity: 200, unit: "g" },
      { name: "cebula", quantity: 1 },
      { name: "olej", quantity: 1, unit: "łyżka" },
      { name: "sól" },
      { name: "pieprz" },
    ],
    instructions:
      "Kaszę ugotuj zgodnie z instrukcją. Cebulę posiekaj, pieczarki pokrój w plastry i podsmaż na oleju. Wymieszaj kaszę z grzybami, dopraw do smaku.",
    meal_type: "kolacje",
    prep_time: 30,
    calories: 350,
    isVege: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: 19,
    name: "Pasta z białej fasoli na kanapkach",
    ingredients: [
      { name: "biała fasola", quantity: 1, unit: "puszka" },
      { name: "czosnek", quantity: 1, unit: "ząbek" },
      { name: "oliwa", quantity: 1, unit: "łyżka" },
      { name: "sól" },
      { name: "pieprz" },
    ],
    instructions:
      "Fasolę odsącz, zmiksuj z czosnkiem i oliwą na gładką pastę. Dopraw solą i pieprzem. Podawaj na kanapkach z pomidorem lub ogórkiem.",
    meal_type: "kolacje",
    prep_time: 15,
    calories: 340,
    isVege: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
]);

db.kolacje.insertOne(
  {
    _id: 20,
    name: "Ryż z warzywami na patelni",
    ingredients: [
      { name: "ryż", quantity: 1 / 2, unit: "szklanka" },
      { name: "marchewka", quantity: 1 },
      { name: "papryka", quantity: 1 },
      { name: "cebula", quantity: 1 },
      { name: "oliwa", quantity: 1, unit: "łyżka" },
    ],
    instructions:
      "Ryż ugotuj na sypko. Warzywa pokrój w kostkę. Podsmaż cebulę, dodaj marchewkę i paprykę. Dodaj ugotowany ryż i smaż 5 minut.",
    meal_type: "kolacje",
    prep_time: 25,
    calories: 400,
    isVege: true,
    createdAt: new Date(),
    updatedAt: new Date()
  }
);
