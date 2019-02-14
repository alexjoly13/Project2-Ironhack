require("dotenv").config();

const mongoose = require("mongoose");

const Pools = require("../models/pool-model.js");

const pools = [
  {
    name: "Piscine Suzanne Berlioux",
    address: "forum des Halles",
    metroStop: "Les Halles",
    metroLine: "/images/metro-lines/ligne4.png",
    arrondissement: 75001,
    map:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.7674820541865!2d2.341928251492257!3d48.86264410825915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1890f9668f%3A0x33bc9b2d6364d1c1!2sPiscine+Suzanne+Berlioux!5e0!3m2!1sfr!2sfr!4v1549893535449",
    phone: "01 42 36 98 44",
    activities: ["Aquagym", "Aquabike", "Swimming"],
    entryPrice: 5,
    poolLength: "50 m",
    poolWidth: "20 m",
    poolBoard: "None",
    situation: "Indoor",
    disabledAccess: "Yes"
  },
  {
    name: "Piscine Joséphine-Baker",
    address: "quai François Mauriac",
    metroStop: "Bibliothèque François Mitterrand",
    metroLine: "/images/metro-lines/ligne14.png",
    arrondissement: 75013,
    map:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2626.160015367711!2d2.3738649514916013!3d48.83608641012879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6723d17a9c251%3A0xff0ed3fd6a408a7!2sPiscine+Jos%C3%A9phine+Baker!5e0!3m2!1sfr!2sfr!4v1549893837325",
    phone: "01 42 36 98 44",
    activities: ["Aquagym", "Aquabike", "Swimming"],
    entryPrice: 3.8,
    poolLength: "25 m",
    poolWidth: "10 m",
    poolBoard: "None",
    situation: "Indoor in Winter & Outdoor in Summer",
    disabledAccess: "No"
  },
  {
    name: "Piscine Mathis",
    address: "15, rue Mathis",
    metroStop: "Crimée",
    metroLine: "/images/metro-lines/ligne7.svg",
    arrondissement: 75019,
    map:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2623.297652274039!2d2.3725778514929594!3d48.89066430628569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66ddaa326a88d%3A0x3980c98480cd8fad!2sPiscine+Mathis!5e0!3m2!1sfr!2sfr!4v1549894557424",
    phone: "01 40 34 51 00",
    activities: ["Aquagym", "Swimming", "Individual Lessons", "Group Lessons"],
    entryPrice: 3.5,
    poolLength: "12,50 m",
    poolWidth: "6 m",
    poolBoard: "None",
    situation: "Indoor",
    disabledAccess: "No"
  },
  {
    name: "Piscine Georges-Vallerey",
    address: "148 Avenue Gambetta",
    metroStop: "Porte des Lilas",
    metroLine: "/images/metro-lines/ligne11.svg",
    arrondissement: 75020,
    map:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.0907979279236!2d2.4045548514925867!3d48.875545607350524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66da277f7316f%3A0x1103c967c7aa1fde!2sPiscine+Georges+Vallerey!5e0!3m2!1sfr!2sfr!4v1549894842010",
    phone: "01 40 31 15 20",
    activities: [
      "Aquagym",
      "Aquabike",
      "Swimming",
      "Individual Lessons",
      "Group Lessons"
    ],
    entryPrice: 3.5,
    poolLength: "50 m",
    poolWidth: "21 m",
    poolBoard: "None",
    situation: "Indoor",
    disabledAccess: "Yes"
  },
  {
    name: "Piscine de la Butte aux Cailles",
    address: "5 Place Paul Verlaine",
    metroStop: "Corvisart",
    metroLine: "/images/metro-lines/ligne6.svg",
    arrondissement: 75013,
    map:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2626.633887123052!2d2.350294951491377!3d48.827046510765214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e671903c1d3bf5%3A0x21939cd0a2f6e441!2sPiscine+de+la+Butte+aux+Cailles!5e0!3m2!1sfr!2sfr!4v1549895097689",
    phone: "01 45 89 60 05",
    activities: [
      "Aquagym",
      "Swimming",
      "Individual Lessons",
      "Group Lessons",
      "Solarium"
    ],
    entryPrice: 3.5,
    poolLength: "33 m",
    poolWidth: "12 m",
    poolBoard: "None",
    situation: "Indoor",
    disabledAccess: "No"
  },
  {
    name: "Piscine Keller",
    address: "14 rue de l'Ingénieur Robert-Keller",
    metroStop: "Charles Michels",
    metroLine: "/images/metro-lines/ligne10.svg",
    arrondissement: 75015,
    map:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.564158576835!2d2.2800795514918963!3d48.84745160932886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67005fa3d65a9%3A0xb6d1c32077064909!2sPiscine+Keller!5e0!3m2!1sfr!2sfr!4v1549895356905",
    phone: "01 45 71 81 00",
    activities: [
      "Aquagym",
      "AquaBike",
      "Swimming",
      "Individual Lessons",
      "Group Lessons"
    ],
    entryPrice: 3.5,
    poolLength: "50 m",
    poolWidth: "15 m",
    poolBoard: "None",
    situation: "Indoor",
    disabledAccess: "Yes"
  }
];

mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

Pools.insertMany(pools)
  .then(poolsResults => {
    console.log(`Inserted ${poolsResults.length} POOLS `);
  })
  .catch(err => {
    console.log("Insert FAILURE !", err);
  });
