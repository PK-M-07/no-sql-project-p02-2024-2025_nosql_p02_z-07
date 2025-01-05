use("przepisy");

db.śniadania.insertMany([
  {
    _id: 1,
    name: "Parówki z chrzanem i pieczywem",
    ingredients: [
      { name: "parówki", quantity: 2, unit: "sztuki" },
      { name: "chrzan", quantity: 1, unit: "łyżeczka" },
      { name: "chleb", quantity: 2, unit: "kromki" },
      { name: "ogórek kiszony", quantity: 1, unit: "sztuka" },
    ],
    instructions:
      "Parówki ugotuj w wodzie przez 5–7 minut. Podawaj z pieczywem, chrzanem i ogórkiem kiszonym.",
    meal_type: "śniadania",
    prep_time: 10,
    calories: 400,
    isVege: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: 2,
    name: "Twarożek z miodem i bananem",
    ingredients: [
      { name: "twaróg półtłusty", quantity: 200, unit: "g" },
      { name: "banan", quantity: 1, unit: "sztuka" },
      { name: "miód", quantity: 1, unit: "łyżeczka" },
      { name: "chleb pełnoziarnisty", quantity: 2, unit: "kromki" },
    ],
    instructions:
      "Twaróg przełóż do miseczki i skrop miodem. Banana pokrój w plasterki i ułóż na twarogu. Podawaj z kromkami chleba.",
    meal_type: "śniadania",
    prep_time: 10,
    calories: 380,
    isVege: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: 3,
    name: "Omlet na słodko z owocami",
    ingredients: [
      { name: "jajka", quantity: 2, unit: "sztuki" },
      { name: "cukier", quantity: 1, unit: "łyżeczka" },
      { name: "masło", quantity: 1, unit: "łyżeczka" },
      { name: "borówki lub truskawki", quantity: 1, unit: "garść" },
      { name: "cukier puder", quantity: 1, unit: "łyżeczka" },
    ],
    instructions:
      "Jajka ubij z cukrem. Na patelni rozpuść masło. Wlej masę jajeczną i smaż omlet na małym ogniu przez 3–4 minuty z każdej strony. Podawaj z owocami i oprósz cukrem pudrem.",
    meal_type: "śniadania",
    prep_time: 15,
    calories: 350,
    isVege: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: 4,
    name: "Kanapki z pastą z makreli",
    ingredients: [
      { name: "wędzona makrela (filet)", quantity: 1, unit: "sztuka" },
      { name: "twaróg", quantity: 2, unit: "łyżki" },
      { name: "cebula", quantity: 1 / 2, unit: "sztuki" },
      { name: "sól" },
      { name: "pieprz" },
      { name: "chleb żytni", quantity: 2, unit: "kromki" },
    ],
    instructions:
      "Filet z makreli rozdrobnij widelcem, wymieszaj z twarogiem i drobno posiekaną cebulą. Dopraw solą i pieprzem do smaku. Smaruj pastą kromki chleba i podawaj.",
    meal_type: "śniadania",
    prep_time: 10,
    calories: 430,
    isVege: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: 5,
    name: "Placki z jabłkiem",
    ingredients: [
      { name: "mąka pszenna", quantity: 1, unit: "szklanka" },
      { name: "jajko", quantity: 1, unit: "sztuka" },
      { name: "mleko", quantity: 1 / 2, unit: "szklanki" },
      { name: "jabłko", quantity: 1, unit: "sztuka" },
      { name: "cukier", quantity: 1, unit: "łyżeczka" },
      { name: "olej do smażenia" },
    ],
    instructions:
      "Z mąki, jajka i mleka przygotuj ciasto naleśnikowe. Jabłko zetrzyj na tarce i dodaj do ciasta. Smaż placki na rozgrzanym oleju po 2–3 minuty z każdej strony. Posyp cukrem pudrem lub polej miodem.",
    meal_type: "śniadania",
    prep_time: 20,
    calories: 420,
    isVege: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: 6,
    name: "Kasza manna na mleku z malinami",
    ingredients: [
      { name: "kasza manna", quantity: 3, unit: "łyżki" },
      { name: "mleko", quantity: 1, unit: "szklanka" },
      { name: "cukier", quantity: 1, unit: "łyżeczka" },
      {
        name: "maliny (świeże lub mrożone)",
        quantity: 1,
        unit: "garść",
      },
    ],
    instructions:
      "Mleko zagotuj, wsyp kaszę mannę i mieszaj, aby nie powstały grudki. Gotuj przez 5 minut. Dodaj cukier i wymieszaj. Podawaj z malinami na wierzchu.",
    meal_type: "śniadania",
    prep_time: 10,
    calories: 320,
    isVege: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: 7,
    name: "Jaglanka z owocami egzotycznymi",
    ingredients: [
      { name: "kasza jaglana", quantity: 1 / 4, unit: "szklanki" },
      { name: "mleko roślinne", quantity: 1, unit: "szklanka" },
      { name: "owoce egzotyczne (mango, papaja)" },
      { name: "sok z limonki", quantity: 1, unit: "łyżka" },
      { name: "orzechy pekan" },
      { name: "syrop klonowy" },
    ],
    instructions:
      "Kaszę jaglaną wsypać do garnka, dokładnie wypłukać zmieniając wodę. Wylać wodę, wlać mleko, wymieszać i zagotować. Gotować pod przykryciem przez ok. 15 minut. Przygotować owoce i dodać do kaszy, skropić sokiem z limonki, posypać orzechami i polać syropem klonowym.",
    meal_type: "śniadania",
    prep_time: 35,
    calories: 599,
    isVege: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: 8,
    name: "Owsianka Bounty z malinami",
    ingredients: [
      { name: "płatki owsiane górskie", quantity: 1, unit: "szklanka" },
      { name: "wiórki kokosowe", quantity: 2, unit: "łyżki" },
      { name: "mleko kokosowe", quantity: 200, unit: "ml" },
      { name: "cukier", quantity: 2, unit: "łyżki" },
      { name: "czekolada mleczna/deserowa", quantity: 50, unit: "g" },
      { name: "maliny" },
    ],
    instructions:
      "Płatki owsiane przepłukać, zalać wodą, dodać wiórki kokosowe i zagotować. Gotować pod przykryciem ok. 10 minut, następnie dodać mleko kokosowe oraz cukier. Nałożyć do miseczek, posypać posiekaną czekoladą i malinami.",
    meal_type: "śniadania",
    prep_time: 25,
    calories: 1585,
    isVege: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: 9,
    name: "Czekoladowy budyń jaglany",
    ingredients: [
      { name: "kasza jaglana", quantity: 1 / 2, unit: "szklanki" },
      { name: "mleko", quantity: 2.5, unit: "szklanki" },
      { name: "kakao", quantity: 3, unit: "łyżki" },
      { name: "syrop klonowy/cukier", quantity: 2, unit: "łyżki" },
      { name: "ciemna czekolada", quantity: 20, unit: "g" },
    ],
    instructions:
      "Kaszę jaglaną przepłukać, wlać mleko i gotować pod przykryciem przez 15 minut. Dodać kakao, syrop klonowy oraz czekoladę. Wszystko zmiksować na gładką masę.",
    meal_type: "śniadania",
    prep_time: 30,
    calories: 933,
    isVege: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: 10,
    name: "Budyń jaglany",
    ingredients: [
      { name: "kasza jaglana", quantity: 1 / 3, unit: "szklanki" },
      { name: "mleko roślinne", quantity: 1.5, unit: "szklanki" },
      { name: "banan", quantity: 1, unit: "sztuka" },
      { name: "masło orzechowe", quantity: 1, unit: "łyżka" },
    ],
    instructions:
      "Kaszę jaglaną opłukać, gotować w mleku pod przykryciem do miękkości przez ok. 15 minut. Po ugotowaniu zmiksować z bananem i masłem orzechowym na gładką konsystencję.",
    meal_type: "śniadania",
    prep_time: 25,
    calories: 556,
    isVege: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: 11,
    name: "Owsianka z truskawkami",
    ingredients: [
      { name: "płatki owsiane górskie", quantity: 1 / 2, unit: "szklanki" },
      { name: "mleko", quantity: 2, unit: "szklanki" },
      { name: "szczypta cynamonu" },
      { name: "truskawki" },
      { name: "sok z cytryny" },
      { name: "syrop klonowy/brązowy cukier" },
    ],
    instructions:
      "Płatki owsiane zalać mlekiem, zagotować i gotować na małym ogniu przez 10 minut. Truskawki pokroić i dodać do owsianki. Skropić sokiem z cytryny, posypać cukrem lub polać syropem klonowym.",
    meal_type: "śniadania",
    prep_time: 20,
    calories: 644,
    isVege: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: 12,
    name: "Kakaowo-kawowe bananowe smoothie",
    ingredients: [
      { name: "kawa", quantity: 1 / 2, unit: "szklanki" },
      { name: "kasza jaglana (ugotowana)", quantity: 1 / 3, unit: "szklanki" },
      { name: "mleko", quantity: 1 / 2, unit: "szklanki" },
      { name: "banan", quantity: 1, unit: "sztuka" },
      { name: "kakao", quantity: 1.5, unit: "łyżeczki" },
      { name: "szczypta cynamonu" },
      { name: "masło orzechowe", quantity: 1, unit: "łyżka" },
      { name: "brązowy cukier", quantity: 2, unit: "łyżeczki" },
    ],
    instructions:
      "Kawę i ugotowaną kaszę jaglaną przestudzić. Wszystkie składniki zmiksować na gładką konsystencję. Przelać do szklanki i podawać od razu.",
    meal_type: "śniadania",
    prep_time: 30,
    calories: 309,
    isVege: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: 13,
    name: "Owsianka z chia i granatem",
    ingredients: [
      { name: "płatki owsiane", quantity: 1 / 2, unit: "szklanki" },
      { name: "mleko migdałowe/ryżowe", quantity: 1, unit: "szklanka" },
      { name: "nasiona chia", quantity: 2, unit: "łyżki" },
      { name: "granat (wyłuskany)", quantity: 1 / 3, unit: "owocu" },
      { name: "syrop klonowy", quantity: 1, unit: "łyżka" },
    ],
    instructions:
      "Płatki zalać mlekiem, dodać chia i wymieszać. Odstawić w chłodne miejsce na noc. Rano podgrzać (opcjonalnie) i posypać granatem, skropić syropem klonowym.",
    meal_type: "śniadania",
    prep_time: 20,
    calories: 356,
    isVege: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: 14,
    name: "Jaglanka z bananem i sosem z masła orzechowego",
    ingredients: [
      { name: "kasza jaglana", quantity: 1 / 4, unit: "szklanki" },
      { name: "mleko", quantity: 1, unit: "szklanka" },
      { name: "banan", quantity: 1, unit: "sztuka" },
      { name: "sok z cytryny", quantity: 1, unit: "łyżka" },
      { name: "orzechy brazylijskie", quantity: 4, unit: "sztuki" },
      { name: "masło orzechowe", quantity: 1, unit: "łyżka" },
      { name: "syrop klonowy", quantity: 2, unit: "łyżki" },
    ],
    instructions:
      "Kaszę jaglaną ugotować w mleku przez 15 minut. Banana pokroić i skropić sokiem z cytryny. Masło orzechowe wymieszać z syropem klonowym. Podawać kaszę z bananem, sosem i orzechami.",
    meal_type: "śniadania",
    prep_time: 45,
    calories: 1581,
    isVege: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: 15,
    name: "Jajecznica z bekonem i pomidorami",
    ingredients: [
      { name: "jajka", quantity: 3, unit: "sztuki" },
      { name: "bekon", quantity: 3, unit: "plastry" },
      { name: "pomidory", quantity: 2, unit: "sztuki" },
      { name: "masło", quantity: 1, unit: "łyżka" },
      { name: "sól" },
      { name: "pieprz" },
    ],
    instructions:
      "Na patelni rozgrzać masło, podsmażyć bekon, a następnie dodać pokrojone pomidory. Wbić jajka i smażyć do pożądanej konsystencji. Doprawić solą i pieprzem.",
    meal_type: "śniadania",
    prep_time: 20,
    calories: 650,
    isVege: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: 16,
    name: "Omlet z serem i szpinakiem",
    ingredients: [
      { name: "jajka", quantity: 2, unit: "sztuki" },
      { name: "szpinak", quantity: 100, unit: "g" },
      { name: "ser żółty", quantity: 30, unit: "g" },
      { name: "masło", quantity: 1, unit: "łyżka" },
      { name: "sól" },
      { name: "pieprz" },
    ],
    instructions:
      "Na patelni rozgrzać masło, dodać szpinak i smażyć przez kilka minut, aż zwiędnie. W misce rozbełtać jajka, dodać starty ser, a następnie wlać na patelnię. Smażyć, aż omlet się zetnie, doprawić solą i pieprzem.",
    meal_type: "śniadania",
    prep_time: 15,
    calories: 450,
    isVege: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: 17,
    name: "Tosty z awokado i jajkiem sadzonym",
    ingredients: [
      { name: "chleb pełnoziarnisty", quantity: 2, unit: "plastry" },
      { name: "awokado", quantity: 1, unit: "sztuka" },
      { name: "jajka", quantity: 2, unit: "sztuki" },
      { name: "masło", quantity: 1, unit: "łyżka" },
      { name: "sól" },
      { name: "pieprz" },
    ],
    instructions:
      "Tosty opiec w tosterze lub na patelni. Awokado rozgnieć i posmarować nim tosty. Na patelni usmażyć jajka sadzone. Położyć jajko na każdej kromce z awokado i doprawić solą oraz pieprzem.",
    meal_type: "śniadania",
    prep_time: 20,
    calories: 500,
    isVege: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: 18,
    name: "Jajka sadzone z boczkiem i chlebem",
    ingredients: [
      { name: "jajka", quantity: 2, unit: "szt." },
      { name: "boczek", quantity: 2, unit: "plastry" },
      { name: "chleb żytni", quantity: 2, unit: "kromki" },
      { name: "masło", quantity: 1, unit: "łyżeczka" },
      { name: "sól", quantity: 1, unit: "szczypta" },
      { name: "pieprz", quantity: 1, unit: "szczypta" },
    ],
    instructions:
      "Boczek podsmaż na patelni bez tłuszczu przez 3–4 minuty. Odłóż na talerz. Na patelni rozpuść masło i wbij jajka. Smaż, aż białko się zetnie, a żółtko pozostanie płynne. Podawaj jajka sadzone z chrupiącym boczkiem i chlebem.",
    meal_type: "śniadania",
    prep_time: 15,
    calories: 450,
    isVege: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: 19,
    name: "Bułki z serem i szynką zapiekane w piekarniku",
    ingredients: [
      { name: "bułki pszenne", quantity: 2, unit: "szt." },
      { name: "szynka", quantity: 2, unit: "plastry" },
      { name: "żółty ser", quantity: 2, unit: "plastry" },
      { name: "pomidor", quantity: 1, unit: "szt." },
      { name: "zioła prowansalskie", quantity: 1, unit: "szczypta" },
    ],
    instructions:
      "Bułki przekrój na pół, na każdej połowie ułóż plaster szynki i sera. Dodaj plasterki pomidora. Posyp ziołami prowansalskimi i zapiekaj w piekarniku nagrzanym do 180°C przez 10 minut.",
    meal_type: "śniadania",
    prep_time: 20,
    calories: 480,
    isVege: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: 20,
    name: "Owsianka z jabłkiem i cynamonem",
    ingredients: [
      { name: "płatki owsiane", quantity: 5, unit: "łyżki" },
      { name: "mleko", quantity: 1, unit: "szklanka" },
      { name: "jabłko", quantity: 1, unit: "szt." },
      { name: "cynamon", quantity: 1, unit: "łyżeczka" },
      { name: "miód", quantity: 1, unit: "łyżeczka" },
    ],
    instructions:
      "Płatki owsiane zalej mlekiem i gotuj na małym ogniu przez 5–7 minut. Jabłko zetrzyj na tarce lub pokrój w kostkę. Dodaj do owsianki. Dopraw cynamonem i miodem, wymieszaj.",
    meal_type: "śniadania",
    prep_time: 15,
    calories: 370,
    isVege: true,
    createdAt: new Date(),
    updatedAt: new Date()
  }
]);
