require("dotenv").config();

const mongoose = require("mongoose");

const Gymnase = require("../models/gymnase-models.js");

const gyms = [
  // {
  //   name: "Gymnase Jean Leclaire",
  //   address: "22 rue Jean Leclaire",
  //   arrondissement: 75017,
  //   metroStop: "Porte de St-Ouen",
  //   metroLine: "./images/metro-lines/ligne13.svg",
  //   phone: "01 49 29 22 44",
  //   sports: ["Badminton", "Basket-Ball", "Volley-Ball", "Archery"],
  //   disabledAccess: "Yes"
  // },
  // {
  //   name: "Gymnase Max Rousié",
  //   address: "28 rue André Bréchet",
  //   arrondissement: 75017,
  //   metroStop: "Porte de St-Ouen",
  //   metroLine: "./images/metro-lines/ligne13.svg",
  //   phone: "01 44 85 42 50",
  //   sports: [
  //     "Handball",
  //     "Badminton",
  //     "Basket-Ball",
  //     "Volley-Ball",
  //     "Gym Hall",
  //     "Martial Arts Room"
  //   ],
  //   disabledAccess: "No"
  // },
  // {
  //   name: "Gymnase Fragonard",
  //   address: "10 rue Fragonard",
  //   arrondissement: 75017,
  //   metroStop: "Porte de Clichy",
  //   metroLine: "./images/metro-lines/ligne13.svg",
  //   phone: "01 42 26 77 90",
  //   sports: [
  //     "Handball",
  //     "Tennis",
  //     "Basket-Ball",
  //     "Volley-Ball",
  //     "Fencing Hall"
  //   ],
  //   disabledAccess: "Yes"
  // },
  // {
  //   name: "Centre Sportif Jacqueline Auriol",
  //   address: "7 Allée Louis de Funès",
  //   arrondissement: 75017,
  //   metroStop: "Courcelles",
  //   metroLine: "./images/metro-lines/ligne2.svg",
  //   phone: "",
  //   sports: ["Climbing Hall", "Fitness Room", "Swimming", "Type-B Gym Hall"],
  //   disabledAccess: "Yes"
  // },
  // {
  //   name: "Gymnase Bertrand Dauvin",
  //   address: "14 rue Binet",
  //   arrondissement: 75018,
  //   metroStop: "Porte de Clignancourt",
  //   metroLine: "./images/metro-lines/ligne4.png",
  //   phone: "01 44 92 73 32",
  //   sports: [
  //     "Handball",
  //     "Basket-Ball",
  //     "Volley-Ball",
  //     "Boxing Hall",
  //     "Martial Arts Room"
  //   ],
  //   disabledAccess: "Yes"
  // },
  // {
  //   name: "Gymnase Les Amiraux",
  //   address: "12 rue des Amiraux",
  //   arrondissement: 75018,
  //   metroStop: "Simplon",
  //   metroLine: "./images/metro-lines/ligne4.png",
  //   phone: "01 42 52 34 20",
  //   sports: ["Mini-Basket", "Volley-Ball", "Boxing Hall", "Badminton"],
  //   disabledAccess: "No"
  // },
  // {
  //   name: "Gymnase Doudeauville",
  //   address: "82 rue Doudeauville",
  //   arrondissement: 75018,
  //   metroStop: "Château-Rouge",
  //   metroLine: "./images/metro-lines/ligne4.png",
  //   phone: "01 42 55 88 95",
  //   sports: ["Basket-Ball", "Volley-Ball", "Tennis"],
  //   disabledAccess: "No"
  // },
  // {
  //   name: "Gymnase Ronsard",
  //   address: "2 rue Ronsard",
  //   arrondissement: 75018,
  //   metroStop: "Anvers",
  //   metroLine: "./images/metro-lines/ligne2.svg",
  //   phone: "01 46 06 33 60",
  //   sports: ["Basket-Ball", "Volley-Ball", "Boxing Hall", "Dancing Hall"],
  //   disabledAccess: "Yes"
  // },
  // {
  //   name: "Gymnase de la Goutte d'Or",
  //   address: "12 rue de la Goutte d'Or",
  //   arrondissement: 75018,
  //   metroStop: "Barbès Rochechouart",
  //   metroLine: "./images/metro-lines/ligne2.svg",
  //   phone: "01 42 62 52 16",
  //   sports: [
  //     "Tennis",
  //     "Handball",
  //     "Badminton",
  //     "Basket-Ball",
  //     "Volley-Ball",
  //     "Billiard Room"
  //   ],
  //   disabledAccess: "Yes"
  // },
  // {
  //   name: "Gymnase Roquépine",
  //   address: "18 rue Roquépine",
  //   arrondissement: 75008,
  //   metroStop: "Saint-Augustin",
  //   metroLine: "./images/metro-lines/ligne9.svg",
  //   phone: "01 42 66 01 76",
  //   sports: [
  //     "Racket-Ball",
  //     "Dancing Hall",
  //     "Fencing-Hall",
  //     "Multipurpose Room"
  //   ],
  //   disabledAccess: "Yes"
  // },
  // {
  //   name: "Gymnase Henry de Montherlant",
  //   address: "30 Boulevard Lannes",
  //   arrondissement: 75016,
  //   metroStop: "Porte Dauphine",
  //   metroLine: "./images/metro-lines/ligne2.svg",
  //   phone: "01 40 72 28 33",
  //   sports: ["HandBall", "Basket-Ball", "Volley-Ball"],
  //   disabledAccess: "No"
  // },
  // {
  //   name: "Gymnase Cler",
  //   address: "6 rue Cler",
  //   arrondissement: 75007,
  //   metroStop: "La Tour-Maubourg",
  //   metroLine: "./images/metro-lines/ligne8.svg",
  //   phone: "01 47 05 01 61",
  //   sports: ["Basket-Ball", "Volley-Ball"],
  //   disabledAccess: "No"
  // },
  // {
  //   name: "Gymnase Camou",
  //   address: "35 Avenue de la Bourdonnais",
  //   arrondissement: 75007,
  //   metroStop: "Pont de l'Alma",
  //   metroLine: "./images/metro-lines/ligne7.svg",
  //   phone: "01 47 05 77 56",
  //   sports: ["Basket-Ball", "Volley-Ball"],
  //   disabledAccess: "Yes"
  // },
  // {
  //   name: "Gymnase Dupleix",
  //   address: "28 rue Edgar Faure",
  //   arrondissement: 75015,
  //   metroStop: "Dupleix",
  //   metroLine: "./images/metro-lines/ligne6.svg",
  //   phone: "01 53 86 70 50",
  //   sports: ["Handball", "Basket-Ball", "Volley-Ball", "Badminton"],
  //   disabledAccess: "Yes"
  // },
  // {
  //   name: "Gymnase Emile Anthoine",
  //   address: "9 rue Jean Rey",
  //   arrondissement: 75015,
  //   metroStop: "Bir-Hakeim",
  //   metroLine: "./images/metro-lines/ligne6.svg",
  //   phone: "01 53 69 61 50",
  //   sports: [
  //     "Handball",
  //     "Basket-Ball",
  //     "Volley-Ball",
  //     "Badminton",
  //     "Fencing Hall",
  //     "Dancing Hall",
  //     "Boxing Hall"
  //   ],
  //   disabledAccess: "Yes"
  // },
  // {
  //   name: "Gymnase des Bauches",
  //   address: "10 rue des Bauches",
  //   arrondissement: 75016,
  //   metroStop: "La Muette",
  //   metroLine: "./images/metro-lines/ligne9.svg",
  //   phone: "01 45 20 61 40",
  //   sports: ["Basket-Ball", "Volley-Ball", "Boxing Hall", "Gym Hall"],
  //   disabledAccess: "No"
  // },
  // {
  //   name: "Centre sportif Suchet",
  //   address: "25 Avenue du maréchal Franchet d'Esperey",
  //   arrondissement: 75016,
  //   metroStop: "Jasmin",
  //   metroLine: "./images/metro-lines/ligne9.svg",
  //   phone: "01 56 07 07 13",
  //   sports: [
  //     "Handball",
  //     "Basket-Ball",
  //     "Volley-Ball",
  //     "Tennis",
  //     "Dancing Hall",
  //     "Martial Arts Room",
  //     "Climbing Hall"
  //   ],
  //   disabledAccess: "Yes"
  // },
  // {
  //   name: "Gymnase Althéa Gibson",
  //   address: "15 rue Baron le Roy",
  //   arrondissement: 75012,
  //   metroStop: "Cour Saint-Emilion",
  //   metroLine: "./images/metro-lines/ligne14.svg",
  //   phone: "01 56 58 46 11",
  //   sports: ["Type B Gym Hall", "Martial Arts Room"],
  //   disabledAccess: "No"
  // },
  // {
  //   name: "Gymnase Denise et Robert Gamzon",
  //   address: "27 rue de la Lancette",
  //   arrondissement: 75012,
  //   metroStop: "Dugommier",
  //   metroLine: "./images/metro-lines/ligne6.svg",
  //   phone: "01 46 28 28 82",
  //   sports: ["Badminton", "Basket-Ball", "Volley-Ball"],
  //   disabledAccess: "No"
  // },
  // {
  //   name: "Gymnase Léo Lagrange",
  //   address: "68 Boulevard Poniatowski",
  //   arrondissement: 75012,
  //   metroStop: "Porte de Charenton",
  //   metroLine: "./images/metro-lines/ligne8.svg",
  //   phone: "01 46 28 28 82",
  //   sports: [
  //     "HandBall",
  //     "Basket-Ball",
  //     "Volley-Ball",
  //     "Gym Hall",
  //     "Martial Arts Room"
  //   ],
  //   disabledAccess: "No"
  // },
  // {
  //   name: "Gymnase Alain Mimoun",
  //   address: "68 Boulevardd Poniatowski",
  //   arrondissement: 75012,
  //   metroStop: "Porte Dorée",
  //   metroLine: "./images/metro-lines/ligne8.svg",
  //   phone: "01 44 87 00 50",
  //   sports: [
  //     "HandBall",
  //     "Badminton",
  //     "Basket-Ball",
  //     "Volley-Ball",
  //     "Dancing Hall",
  //     "Martial Arts Room"
  //   ],
  //   disabledAccess: "Yes"
  // },
  // {
  //   name: "Gymnase Carnot",
  //   address: "28 Boulevard Carnot",
  //   arrondissement: 75012,
  //   metroStop: "Porte de Vincennes",
  //   metroLine: "./images/metro-lines/ligne1.svg",
  //   phone: "01 43 45 01 06",
  //   sports: ["Basket-Ball", "Volley-Ball"],
  //   disabledAccess: "No"
  // },
  // {
  //   name: "Gymnase Candie",
  //   address: "11 rue de Candie",
  //   arrondissement: 75011,
  //   metroStop: "Ledru-Rollin",
  //   metroLine: "./images/metro-lines/ligne8.svg",
  //   phone: "01 43 55 84 95",
  //   sports: ["HandBall", "Badminton", "Basket-Ball", "Volley-Ball"],
  //   disabledAccess: "Yes"
  // },
  // {
  //   name: "Gymnase Japy",
  //   address: "2 rue Japy",
  //   arrondissement: 75011,
  //   metroStop: "Charonne",
  //   metroLine: "./images/metro-lines/ligne9.svg",
  //   phone: "01 43 79 04 12",
  //   sports: [
  //     "HandBall",
  //     "Badminton",
  //     "Basket-Ball",
  //     "Volley-Ball",
  //     "Boxing Hall"
  //   ],
  //   disabledAccess: "Yes"
  // },
  // {
  //   name: "Gymnase Tandou",
  //   address: "13 rue Tandou",
  //   arrondissement: 75019,
  //   metroStop: "Laumière",
  //   metroLine: "./images/metro-lines/ligne9.svg",
  //   phone: "01 42 03 50 57",
  //   sports: ["Mini-HandBall", "Basket-Ball", "Volley-Ball"],
  //   disabledAccess: "Yes"
  // },
  // {
  //   name: "Centre Sportif Micheline Ostermeyer",
  //   address: "22 ter rue Pajol",
  //   arrondissement: 75018,
  //   metroStop: "Marx Dormoy",
  //   metroLine: "./images/metro-lines/ligne12.svg",
  //   phone: "01 40 05 50 30",
  //   sports: [
  //     "HandBall",
  //     "Badminton",
  //     "Basket-Ball",
  //     "Volley-Ball",
  //     "Dancing Hall",
  //     "Martial Arts Room"
  //   ],
  //   disabledAccess: "Yes"
  // }
  // {
  //   name: "Gymnase Paul Gauguin",
  //   address: "33 rue Milton",
  //   arrondissement: 75009,
  //   metroStop: "Cadet",
  //   metroLine: "./images/metro-lines/ligne7.svg",
  //   phone: "01 42 82 01 23",
  //   sports: ["HandBall", "Badminton", "Basket-Ball", "Volley-Ball", "Tennis"],
  //   disabledAccess: "Yes"
  // },
  // {
  //   name: "Gymnase Paul Valeyre",
  //   address: "24 rue de Rochechouart",
  //   arrondissement: 75009,
  //   metroStop: "Cadet",
  //   metroLine: "./images/metro-lines/ligne7.svg",
  //   phone: "01 42 85 26 73",
  //   sports: ["HandBall", "Badminton", "Basket-Ball", "Volley-Ball", "Tennis"],
  //   disabledAccess: "Yes"
  // },
  // {
  //   name: "Gymnase Château des Rentiers",
  //   address: "184 rue du Château des Rentiers",
  //   arrondissement: 75013,
  //   metroStop: "Nationale",
  //   metroLine: "./images/metro-lines/ligne6.svg",
  //   phone: "01 45 84 84 46",
  //   sports: ["HandBall", "Basket-Ball", "Volley-Ball", "Tennis"],
  //   disabledAccess: "No"
  // },
  // {
  //   name: "Gymnase Choisy-Masséna",
  //   address: "110 boulevard Masséna",
  //   arrondissement: 75013,
  //   metroStop: "Porte de Choisy",
  //   metroLine: "./images/metro-lines/ligne7.svg",
  //   phone: "01 45 86 77 30",
  //   sports: [
  //     "HandBall",
  //     "Basket-Ball",
  //     "Volley-Ball",
  //     "Tennis",
  //     "Climbing Hall"
  //   ],
  //   disabledAccess: "No"
  // },
  // {
  //   name: "Gymnase Elisabeth",
  //   address: "7 Avenue Paul Appell",
  //   arrondissement: 75014,
  //   metroStop: "Porte d'Orléans",
  //   metroLine: "./images/metro-lines/ligne4.png",
  //   phone: "01 45 40 78 39",
  //   sports: ["HandBall", "Basket-Ball", "Volley-Ball", "Badminton", "Gym Hall"],
  //   disabledAccess: "Yes"
  // },
  // {
  //   name: "Gymnase Commandant Mouchotte",
  //   address: "31 rue du Commandant Mouchotte",
  //   arrondissement: 75014,
  //   metroStop: "Gaîté",
  //   metroLine: "./images/metro-lines/ligne13.svg",
  //   phone: "01 43 27 25 79",
  //   sports: ["HandBall", "Basket-Ball", "Volley-Ball", "Tor Ball"],
  //   disabledAccess: "Yes"
  // },
  // {
  //   name: "Gymnase Bretonneau",
  //   address: "7 rue Bretonneau",
  //   arrondissement: 75020,
  //   metroStop: "Pelleport",
  //   metroLine: "./images/metro-lines/ligne3.png",
  //   phone: "01 43 64 43 87",
  //   sports: ["Badminton", "Basket-Ball", "Volley-Ball"],
  //   disabledAccess: "No"
  // },
  // {
  //   name: "Gymnase Le Vau",
  //   address: "36 rue Le Vau",
  //   arrondissement: 75020,
  //   metroStop: "Porte de Bagnolet",
  //   metroLine: "./images/metro-lines/ligne3.png",
  //   phone: "01 43 61 42 26",
  //   sports: ["Badminton", "Handballé$", "Basket-Ball", "Volley-Ball"],
  //   disabledAccess: "No"
  // }
];

mongoose
  .connect("mongodb://localhost/sports", { useNewUrlParser: true })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

Gymnase.insertMany(gyms)
  .then(gymsResults => {
    console.log(`Inserted ${gymsResults.length} GYMS `);
  })
  .catch(err => {
    console.log("Insert FAILURE !", err);
  });
