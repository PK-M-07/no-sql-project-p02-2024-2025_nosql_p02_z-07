use("przepisy");

db.desery.insertMany([
  {
    _id: 1,
    name: "Szarlotka na kruchym spodzie",
    ingredients: [
      { name: "mąka pszenna", quantity: 2, unit: "szklanka" },
      { name: "masło", quantity: 200, unit: "g" },
      { name: "żółtka", quantity: 3 },
      { name: "cukier", quantity: 1 / 2, unit: "szklanka" },
      { name: "jabłka", quantity: 6 },
      { name: "cynamon", quantity: 1, unit: "łyżeczka" },
    ],
    instructions:
      "Z mąki, masła, żółtek i cukru zagnieć kruche ciasto. Podziel na dwie części i schłódź w lodówce przez 30 minut. Jabłka obierz, zetrzyj na tarce i wymieszaj z cynamonem. Jedną część ciasta rozwałkuj i wyłóż na blaszkę. Rozprowadź jabłka, a na wierzchu zetrzyj drugą część ciasta. Piecz w 180°C przez 45 minut.",
    meal_type: "desery",
    prep_time: 80,
    calories: 420,
    isVege: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: 2,
    name: "Sernik waniliowy",
    ingredients: [
      { name: "twaróg sernikowy", quantity: 1000, unit: "g" },
      { name: "jajka", quantity: 4 },
      { name: "cukier", quantity: 1, unit: "szklanka" },
      { name: "budyń waniliowy (proszek)", quantity: 1 },
      { name: "ekstrakt waniliowy", quantity: 1, unit: "łyżeczka" },
      { name: "masło", quantity: 100, unit: "g" },
    ],
    instructions:
      "Masło utrzyj z cukrem, dodaj jajka, twaróg, budyń i wanilię. Dokładnie zmiksuj. Wylej masę na blaszkę wyłożoną papierem do pieczenia.Piecz w 180°C przez 50–60 minut.",
    meal_type: "desery",
    prep_time: 75,
    calories: 480,
    isVege: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: 3,
    name: "Budyń czekoladowy",
    ingredients: [
      { name: "mleko", quantity: 500, unit: "ml" },
      { name: "kakao", quantity: 2, unit: "łyżki" },
      { name: "mąka ziemniaczana", quantity: 2, unit: "łyżki" },
      { name: "cukier", quantity: 2, unit: "łyżki" },
      { name: "gorzka czekolada", quantity: 100, unit: "g" },
    ],
    instructions:
      "Odlej 1/3 mleka i wymieszaj z mąką, kakao oraz cukrem. Resztę mleka zagotuj. Wlej mieszankę i gotuj, mieszając, aż budyń zgęstnieje. Dodaj połamaną czekoladę, mieszaj do rozpuszczenia.",
    meal_type: "desery",
    prep_time: 15,
    calories: 320,
    isVege: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: 4,
    name: "Racuchy z jabłkami",
    ingredients: [
      { name: "mąka", quantity: 2, unit: "szklanka" },
      { name: "mleko", quantity: 1, unit: "szklanka" },
      { name: "jajka", quantity: 2 },
      { name: "jabłka", quantity: 2 },
      { name: "cukier", quantity: 1, unit: "łyżka" },
      { name: "proszek do pieczenia", quantity: 1, unit: "łyżeczka" },
    ],
    instructions:
      "Jabłka obierz i pokrój w plasterki. Wymieszaj mąkę, mleko, jajka, cukier i proszek na gładkie ciasto. Dodaj jabłka i smaż racuchy na patelni z olejem na złoty kolor.",
    meal_type: "desery",
    prep_time: 30,
    calories: 360,
    isVege: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: 5,
    name: "Kruche ciasteczka z cukrem",
    ingredients: [
      { name: "mąka", quantity: 2, unit: "szklanka" },
      { name: "masło", quantity: 200, unit: "g" },
      { name: "cukier", quantity: 1 / 2, unit: "szklanka" },
      { name: "żółtko", quantity: 1 },
    ],
    instructions:
      "Zagnieć ciasto z mąki, masła, cukru i żółtka. Rozwałkuj na grubość 0,5 cm. Wykrawaj ciasteczka i posyp cukrem. Piecz w 180°C przez 15 minut.",
    meal_type: "desery",
    prep_time: 25,
    calories: 290,
    isVege: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: 6,
    name: "Deser ryżowy z cynamonem",
    ingredients: [
      { name: "ryż", quantity: 1 / 2, unit: "szklanka" },
      { name: "mleko", quantity: 1, unit: "szklanka" },
      { name: "cukier", quantity: 2, unit: "łyżeczki" },
      { name: "cynamon", quantity: 1, unit: "łyżeczka" },
    ],
    instructions:
      "Ugotuj ryż w mleku z cukrem, mieszając, aż zgęstnieje.Podawaj posypany cynamonem",
    meal_type: "desery",
    prep_time: 25,
    calories: 260,
    isVege: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: 7,
    name: "Babeczki czekoladowe",
    ingredients: [
      { name: "mąka", quantity: 1, unit: "szklanka" },
      { name: "kakao", quantity: 1 / 2, unit: "szklanka" },
      { name: "cukier", quantity: 1 / 2, unit: "szklanka" },
      { name: "jajka", quantity: 2 },
      { name: "mleko", quantity: 1 / 2, unit: "szklanka" },
      { name: "olej", quantity: 1 / 3, unit: "szklanka" },
    ],
    instructions:
      "Wymieszaj wszystkie składniki na gładkie ciasto.Przelej do foremek i piecz 20 minut w 180°C.",
    meal_type: "desery",
    prep_time: 30,
    calories: 350,
    isVege: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: 8,
    name: "Kisiel malinowy",
    ingredients: [
      { name: "maliny", quantity: 2, unit: "szklanki" },
      { name: "woda", quantity: 2, unit: "szklanki" },
      { name: "cukier", quantity: 3, unit: "łyżki" },
      { name: "mąka ziemniaczana", quantity: 2, unit: "łyżki" },
    ],
    instructions:
      "Maliny zagotuj z wodą i cukrem. Przetrzyj przez sitko. Wymieszaj mąkę z odrobiną wody i wlej do malin. Gotuj do zgęstnienia.",
    meal_type: "desery",
    prep_time: 15,
    calories: 180,
    isVege: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: 9,
    name: "Jabłka pieczone z cynamonem i miodem",
    ingredients: [
      { name: "jabłka", quantity: 4 },
      { name: "miód", quantity: 4, unit: "łyżeczki" },
      { name: "cynamon", quantity: 1, unit: "łyżeczka" },
    ],
    instructions:
      "Wydrąż jabłka, wypełnij je miodem i posyp cynamonem. Piecz w 180°C przez 20 minut.",
    meal_type: "desery",
    prep_time: 30,
    calories: 220,
    isVege: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: 10,
    name: "Lody waniliowe z polewą czekoladową",
    ingredients: [
      { name: "lody waniliowe", quantity: 2, unit: "gałki" },
      { name: "gorzka czekolada", quantity: 50, unit: "g" },
      { name: "mleko", quantity: 1, unit: "łyżeczka" },
    ],
    instructions:
      "Rozpuść czekoladę z mlekiem w kąpieli wodnej. Polej lody rozpuszczoną czekoladą i podawaj od razu.",
    meal_type: "desery",
    prep_time: 10,
    calories: 300,
    isVege: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: 11,
    name: "Wegański mus czekoladowy",
    ingredients: [
      { name: "gorzka czekolada (min. 70%)", quantity: 200, unit: "g" },
      { name: "awokado", quantity: 1 },
      { name: "syrop klonowy", quantity: 2, unit: "łyżki" },
      { name: "ekstrakt waniliowy", quantity: 1, unit: "łyżeczka" },
    ],
    instructions:
      "Czekoladę rozpuść w kąpieli wodnej lub mikrofalówce. Awokado zmiksuj na gładką masę, dodaj syrop klonowy i wanilię. Wymieszaj z rozpuszczoną czekoladą. Przełóż do miseczek i schłodź w lodówce przez 30 minut.",
    meal_type: "desery",
    prep_time: 45,
    calories: 320,
    isVege: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: 12,
    name: "Wegańska panna cotta z mlekiem kokosowym",
    ingredients: [
      { name: "mleko kokosowe", quantity: 400, unit: "ml" },
      { name: "agar-agar (lub żelatyna wegańska)", quantity: 1, unit: "łyżka" },
      { name: "syrop klonowy", quantity: 2, unit: "łyżki" },
      { name: "ekstrakt waniliowy", quantity: 1, unit: "łyżeczka" },
    ],
    instructions:
      "Mleko kokosowe podgrzej w garnku. Dodaj syrop klonowy i wanilię. Dodaj agar-agar i gotuj przez kilka minut, aż zgęstnieje. Przelej do foremek i schłodź przez 2–3 godziny w lodówce.",
    meal_type: "desery",
    prep_time: 195,
    calories: 250,
    isVege: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: 13,
    name: "Wegańskie ciasto marchewkowe",
    ingredients: [
      { name: "tarta marchewka", quantity: 2, unit: "szklanki" },
      { name: "mąka pszenna", quantity: 1, unit: "szklanka" },
      { name: "cukier kokosowy", quantity: 1 / 2, unit: "szklanka" },
      { name: "olej kokosowy", quantity: 1 / 4, unit: "szklanka" },
      { name: "proszek do pieczenia", quantity: 1 / 2, unit: "łyżeczki" },
      { name: "cynamon", quantity: 1, unit: "łyżeczka" },
    ],
    instructions:
      "Marchewki zetrzyj na tarce, wymieszaj z pozostałymi składnikami. Przelej do formy wyłożonej papierem do pieczenia. Piecz w 180°C przez 40 minut.",
    meal_type: "desery",
    prep_time: 50,
    calories: 300,
    isVege: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: 14,
    name: "Chia pudding z owocami",
    ingredients: [
      { name: "nasiona chia", quantity: 3, unit: "łyżki" },
      { name: "mleko roślinne (np. migdałowe)", quantity: 1, unit: "szklanka" },
      { name: "syrop klonowy", quantity: 1, unit: "łyżka" },
      { name: "ulubione owoce (np. jagody, truskawki)" },
    ],
    instructions:
      "W miseczce wymieszaj nasiona chia z mlekiem i syropem klonowym. Odstaw na noc do lodówki. Rano podawaj z owocami.",
    meal_type: "desery",
    prep_time: 10,
    calories: 250,
    isVege: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: 15,
    name: "Wegańska tarta z owocami",
    ingredients: [
      { name: "mąka pszenna", quantity: 1, unit: "szklanka" },
      { name: "olej kokosowy", quantity: 1 / 4, unit: "szklanka" },
      { name: "cukier kokosowy", quantity: 1 / 4, unit: "szklanka" },
      { name: "dżem owocowy", quantity: 1 / 2, unit: "szklanka" },
      { name: "ulubione owoce (np. truskawki, kiwi)" },
    ],
    instructions:
      "Z mąki, oleju i cukru zagnieć ciasto. Wyłóż nim formę do tarty i piecz w 180°C przez 20 minut. Po wystudzeniu nałóż dżem, a na nim poukładaj owoce.",
    meal_type: "desery",
    prep_time: 40,
    calories: 280,
    isVege: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: 16,
    name: "Wegańskie lody bananowe",
    ingredients: [
      { name: "dojrzałe banany", quantity: 3 },
      { name: "mleko roślinne", quantity: 1 / 2, unit: "szklanka" },
      { name: "ekstrakt waniliowy", quantity: 1, unit: "łyżeczka" },
    ],
    instructions:
      "Banany obierz i pokrój na kawałki. Zmiksuj je z mlekiem roślinnym i wanilią na gładką masę. Przełóż do pojemnika i zamrażaj przez 4 godziny.",
    meal_type: "desery",
    prep_time: 250,
    calories: 180,
    isVege: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: 17,
    name: "Czekoladowe kuleczki daktylowe",
    ingredients: [
      { name: "daktyle", quantity: 1, unit: "szklanka" },
      { name: "migdały", quantity: 1 / 2, unit: "szklanka" },
      { name: "kakao", quantity: 2, unit: "łyżki" },
      { name: "wiórki kokosowe", quantity: 1, unit: "łyżka" },
    ],
    instructions:
      "Daktyle i migdały zmiksuj w blenderze na masę. Dodaj kakao, wymieszaj i formuj małe kuleczki. Posyp wiórkami kokosowymi i schłodź w lodówce przez 30 minut.",
    meal_type: "desery",
    prep_time: 45,
    calories: 120,
    isVege: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: 18,
    name: "Wegański sernik na zimno",
    ingredients: [
      { name: "nerkowce (namoczone przez noc)", quantity: 200, unit: "g" },
      { name: "mleko roślinne", quantity: 1 / 2, unit: "szklanka" },
      { name: "syrop klonowy", quantity: 2, unit: "łyżki" },
      { name: "ekstrakt waniliowy", quantity: 1, unit: "łyżeczka" },
      { name: "agar-agar", quantity: 1, unit: "łyżeczka" },
    ],
    instructions:
      "Nerkowce zmiksuj na gładką masę z mlekiem, syropem i wanilią. Wymieszaj agar-agar z odrobiną wody i zagotuj. Wymieszaj wszystko razem i przełóż do formy, chłodź w lodówce przez 2 godziny.",
    meal_type: "desery",
    prep_time: 140,
    calories: 300,
    isVege: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: 19,
    name: "Wegańska galaretka owocowa",
    ingredients: [
      { name: "sok owocowy (np. pomarańczowy)", quantity: 2, unit: "szklanki" },
      { name: "agar-agar", quantity: 1, unit: "łyżeczka" },
      {
        name: "ulubione owoce (np. malin, kiwi)",
        quantity: 1 / 2,
        unit: "szklanki",
      },
    ],
    instructions:
      "Sok owocowy zagotuj z agar-agar i gotuj przez 2 minuty. Wlej do formy i dodaj owoce. Schłodź w lodówce przez 2 godziny.",
    meal_type: "desery",
    prep_time: 130,
    calories: 120,
    isVege: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: 20,
    name: "Wegańskie ciasteczka z rodzynkami",
    ingredients: [
      { name: "płatki owsiane", quantity: 1, unit: "szklanka" },
      { name: "mąka pszenna", quantity: 1 / 2, unit: "szklanki" },
      { name: "syrop klonowy", quantity: 1 / 4, unit: "szklanki" },
      { name: "olej kokosowy", quantity: 1 / 4, unit: "szklanki" },
      { name: "rodzynki", quantity: 1 / 2, unit: "szklanki" },
    ],
    instructions:
      "Wymieszaj wszystkie składniki na gładką masę. Formuj ciasteczka i układaj na blasze. Piecz w 180°C przez 15 minut.",
    meal_type: "desery",
    prep_time: 25,
    calories: 150,
    isVege: true,
    createdAt: new Date(),
    updatedAt: new Date()
  }
]);
