use("przepisy");

db.przekaski.insertMany([
  {
    _id: 1,
    name: "Guacamole z chipsami tortilla",
    ingredients: [
      { name: "awokado", quantity: 2, unit: "sztuki" },
      { name: "pomidor", quantity: 1, unit: "sztuka" },
      { name: "cebula", quantity: 0.5, unit: "sztuki" },
      { name: "sok z limonki", quantity: 1, unit: "łyżka" },
      { name: "chipsy tortilla" },
    ],
    instructions:
      "Awokado rozgnieć na gładką masę. Dodaj pokrojony pomidor, cebulę i sok z limonki. Podawaj z chipsami tortilla.",
    meal_type: "przekąski",
    prep_time: 10,
    calories: 250,
    isVege: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: 2,
    name: "Wegańskie kulki mocy",
    ingredients: [
      { name: "daktyle", quantity: 1, unit: "szklanka" },
      { name: "migdały", quantity: 0.5, unit: "szklanki" },
      { name: "kakao", quantity: 2, unit: "łyżki" },
      { name: "syrop klonowy", quantity: 1, unit: "łyżka" },
    ],
    instructions:
      "Daktyle i migdały zmiksuj w blenderze. Dodaj kakao i syrop klonowy, formuj kulki. Schłodź w lodówce przez 30 minut.",
    meal_type: "przekąski",
    prep_time: 45,
    calories: 120,
    isVege: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: 3,
    name: "Wegańskie wrapy z hummusem",
    ingredients: [
      { name: "tortilla pełnoziarnista", quantity: 1, unit: "sztuka" },
      { name: "hummus", quantity: 3, unit: "łyżki" },
      { name: "ogórek", quantity: 0.5, unit: "sztuki" },
      { name: "sałata" },
    ],
    instructions:
      "Tortillę posmaruj hummusem, dodaj pokrojony ogórek i sałatę. Zwiń wrapa i pokrój na mniejsze kawałki.",
    meal_type: "przekąski",
    prep_time: 10,
    calories: 200,
    isVege: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: 4,
    name: "Pieczone warzywa z tahini",
    ingredients: [
      { name: "batat", quantity: 1, unit: "sztuka" },
      { name: "marchewka", quantity: 1, unit: "sztuka" },
      { name: "oliwa", quantity: 1, unit: "łyżka" },
      { name: "tahini", quantity: 2, unit: "łyżki" },
    ],
    instructions:
      "Warzywa pokrój w kostkę, skrop oliwą i piecz w 180°C przez 25 minut. Podawaj z sosem tahini.",
    meal_type: "przekąski",
    prep_time: 35,
    calories: 250,
    isVege: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: 5,
    name: "Falafel z sosem jogurtowym",
    ingredients: [
      { name: "ciecierzyca", quantity: 1, unit: "szklanka" },
      { name: "cebula", quantity: 1, unit: "sztuka" },
      { name: "czosnek", quantity: 2, unit: "ząbki" },
      { name: "przyprawy (kumin, kolendra)" },
      { name: "tahini", quantity: 3, unit: "łyżki" },
    ],
    instructions:
      "Ciecierzycę zmiksuj z cebulą, czosnkiem i przyprawami. Formuj kulki i smaż na złoty kolor. Podawaj z sosem jogurtowym.",
    meal_type: "przekąski",
    prep_time: 45,
    calories: 180,
    isVege: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: 6,
    name: "Tzatziki z warzywami",
    ingredients: [
      { name: "ogórek", quantity: 1, unit: "sztuka" },
      { name: "jogurt roślinny", quantity: 0.5, unit: "szklanki" },
      { name: "czosnek", quantity: 1, unit: "ząbek" },
      { name: "sok z cytryny", quantity: 1, unit: "łyżeczka" },
    ],
    instructions:
      "Ogórek zetrzyj na tarce i odciśnij nadmiar wody. Wymieszaj z jogurtem, czosnkiem i sokiem z cytryny. Podawaj z pokrojonymi warzywami.",
    meal_type: "przekąski",
    prep_time: 10,
    calories: 100,
    isVege: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: 7,
    name: "Wegańska pizza z warzywami",
    ingredients: [
      { name: "pita", quantity: 1, unit: "sztuka" },
      { name: "sos pomidorowy", quantity: 0.25, unit: "szklanki" },
      { name: "papryka", quantity: 1, unit: "sztuka" },
      { name: "pieczarki" },
    ],
    instructions:
      "Pita posmaruj sosem pomidorowym. Dodaj pokrojone warzywa i piecz w 180°C przez 10 minut.",
    meal_type: "przekąski",
    prep_time: 15,
    calories: 180,
    isVege: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: 8,
    name: "Wegańska sałatka z awokado i quinoa",
    ingredients: [
      { name: "quinoa", quantity: 0.5, unit: "szklanki" },
      { name: "awokado", quantity: 1, unit: "sztuka" },
      { name: "pomidor", quantity: 1, unit: "sztuka" },
      { name: "sok z limonki", quantity: 1, unit: "łyżka" },
    ],
    instructions:
      "Ugotuj quinoa zgodnie z instrukcją. Pokrój awokado i pomidora, wymieszaj z quinoa i sokiem z limonki.",
    meal_type: "przekąski",
    prep_time: 20,
    calories: 300,
    isVege: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: 9,
    name: "Wegańskie spring rolls",
    ingredients: [
      { name: "papier ryżowy", quantity: 5, unit: "arkuszy" },
      { name: "marchewka", quantity: 1, unit: "sztuka" },
      { name: "ogórek", quantity: 1, unit: "sztuka" },
      { name: "sałata" },
    ],
    instructions:
      "Warzywa pokrój w paski. Zwiń warzywa w arkuszach papieru ryżowego i podawaj z sosem sojowym.",
    meal_type: "przekąski",
    prep_time: 15,
    calories: 120,
    isVege: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: 10,
    name: "Wegańskie chipsy z jarmużu",
    ingredients: [
      { name: "jarmuż", quantity: 1, unit: "pęczek" },
      { name: "oliwa", quantity: 1, unit: "łyżka" },
      { name: "sól" },
    ],
    instructions:
      "Jarmuż pokrój na kawałki, skrop oliwą i posyp solą. Piecz w 180°C przez 10 minut.",
    meal_type: "przekąski",
    prep_time: 15,
    calories: 100,
    isVege: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: 11,
    name: "Mini kanapki z serem i szynką",
    ingredients: [
      { name: "chleb pszenny", quantity: 4, unit: "kromki" },
      { name: "szynka", quantity: 2, unit: "plastry" },
      { name: "ser żółty", quantity: 2, unit: "plastry" },
      { name: "masło" },
    ],
    instructions:
      "Posmaruj chleb masłem, ułóż na każdej kromce plaster szynki i sera. Złóż kanapki i pokrój na mniejsze części.",
    meal_type: "przekąski",
    prep_time: 10,
    calories: 200,
    isVege: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: 12,
    name: "Paszteciki z mięsem",
    ingredients: [
      { name: "ciasto francuskie", quantity: 1, unit: "opakowanie" },
      { name: "mięso mielone", quantity: 200, unit: "g" },
      { name: "cebula", quantity: 1, unit: "sztuka" },
      { name: "jajko", quantity: 1, unit: "sztuka" },
    ],
    instructions:
      "Cebulę podsmaż na oleju, dodaj mięso mielone i smaż do zrumienienia. Rozwałkuj ciasto francuskie, nałóż farsz i zwiń w ruloniki. Posmaruj jajkiem i piecz w 200°C przez 20 minut.",
    meal_type: "przekąski",
    prep_time: 30,
    calories: 150,
    isVege: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: 13,
    name: "Tosty z serem i pomidorem",
    ingredients: [
      { name: "chleb tostowy", quantity: 2, unit: "kromki" },
      { name: "ser żółty", quantity: 2, unit: "plastry" },
      { name: "pomidor", quantity: 1, unit: "sztuka" },
      { name: "masło", quantity: 1, unit: "łyżka" },
    ],
    instructions:
      "Posmaruj chleb masłem, na jednej kromce połóż plaster sera, na drugim plaster pomidora. Złóż tosty i grilluj na patelni przez 3–4 minuty z każdej strony.",
    meal_type: "przekąski",
    prep_time: 10,
    calories: 250,
    isVege: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: 14,
    name: "Chipsy ziemniaczane",
    ingredients: [
      { name: "ziemniaki", quantity: 4, unit: "sztuki" },
      { name: "oliwa z oliwek", quantity: 1, unit: "łyżka" },
      { name: "sól" },
    ],
    instructions:
      "Ziemniaki pokrój na bardzo cienkie plasterki. Skrop oliwą, posyp solą i piecz w piekarniku w 180°C przez 20 minut.",
    meal_type: "przekąski",
    prep_time: 25,
    calories: 150,
    isVege: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: 15,
    name: "Śledź w oleju",
    ingredients: [
      { name: "filety śledziowe w oleju", quantity: 2, unit: "sztuki" },
      { name: "cebula", quantity: 1, unit: "sztuka" },
      { name: "ocet", quantity: 1, unit: "łyżeczka" },
    ],
    instructions:
      "Śledzie pokrój na kawałki, cebulę posiekaj w piórka. Wymieszaj składniki, dodaj ocet i odstaw na 10 minut do lodówki.",
    meal_type: "przekąski",
    prep_time: 10,
    calories: 180,
    isVege: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: 16,
    name: "Jajka na twardo z majonezem",
    ingredients: [
      { name: "jajka", quantity: 4, unit: "sztuki" },
      { name: "majonez", quantity: 2, unit: "łyżki" },
      { name: "sól" },
      { name: "pieprz" },
    ],
    instructions:
      "Jajka ugotuj na twardo (około 10 minut). Obierz jajka, przekrój na pół i posmaruj majonezem. Dopraw solą i pieprzem.",
    meal_type: "przekąski",
    prep_time: 15,
    calories: 120,
    isVege: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: 17,
    name: "Smażony ser",
    ingredients: [
      { name: "ser typu cheddar lub oscypek", quantity: 200, unit: "g" },
      { name: "jajko", quantity: 1, unit: "sztuka" },
      { name: "bułka tarta", quantity: 2, unit: "łyżki" },
    ],
    instructions:
      "Ser pokrój w plastry. Obtocz w jajku, a potem w bułce tartej. Smaż na rozgrzanej patelni przez 2–3 minuty z każdej strony.",
    meal_type: "przekąski",
    prep_time: 15,
    calories: 250,
    isVege: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: 18,
    name: "Faworki",
    ingredients: [
      { name: "mąka", quantity: 2, unit: "szklanki" },
      { name: "jajka", quantity: 2, unit: "sztuki" },
      { name: "śmietana", quantity: 0.25, unit: "szklanki" },
      { name: "cukier", quantity: 2, unit: "łyżki" },
      { name: "cukier puder" },
    ],
    instructions:
      "Zagnieć ciasto z mąki, jajek, śmietany i cukru. Rozwałkuj na cienkie paski. Smaż faworki na gorącym oleju przez 2–3 minuty. Posyp cukrem pudrem.",
    meal_type: "przekąski",
    prep_time: 30,
    calories: 100,
    isVege: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: 19,
    name: "Mini quiche",
    ingredients: [
      { name: "ciasto francuskie", quantity: 1, unit: "opakowanie" },
      { name: "jajka", quantity: 3, unit: "sztuki" },
      { name: "ser żółty", quantity: 100, unit: "g" },
      { name: "wędlina", quantity: 50, unit: "g" },
      { name: "cebula", quantity: 0.5, unit: "sztuki" },
    ],
    instructions:
      "Ciasto wyłóż do foremek na tartaletki. W misce wymieszaj jajka, ser, pokrojoną wędlinę i cebulę. Wlej mieszankę do ciasta i piecz w 180°C przez 20 minut.",
    meal_type: "przekąski",
    prep_time: 30,
    calories: 250,
    isVege: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
]);

db.przekaski.insertOne(
  {
    _id: 20,
    name: "Pita z hummusem i warzywami",
    ingredients: [
      { name: "pita", quantity: 1, unit: "sztuka" },
      { name: "hummus", quantity: 3, unit: "łyżki" },
      { name: "pomidor", quantity: 1, unit: "sztuka" },
      { name: "sałata" },
    ],
    instructions:
      "Pita przekrój na pół. Posmaruj hummusem, włóż pokrojone warzywa i sałatę.",
    meal_type: "przekąski",
    prep_time: 10,
    calories: 180,
    isVege: true,
    createdAt: new Date(),
    updatedAt: new Date()
  }
);
