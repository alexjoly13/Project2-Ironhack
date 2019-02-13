require("dotenv").config();

const mongoose = require("mongoose");

const GymnaseCoord = require("../models/coord-model.js");

const gymcoord = [
  {
    name: "Gymnase Jean Leclaire",
    address: "22 rue Jean Leclaire",
    arrondissement: 75017,
    metroStop: "Porte de St-Ouen",
    metroLine: "/images/metro-lines/ligne13.svg",
    map:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2622.9864603667806!2d2.325129!3d48.8965952!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e5563432201%3A0xd4291eb393927f1d!2sGymnase+Jean+Leclaire!5e0!3m2!1sfr!2sfr!4v1549881426778",
    phone: "01 49 29 22 44",
    sports: ["Badminton", "Basket-Ball", "Volley-Ball", "Archery"],
    disabledAccess: "Yes",
    coordPoints: { type: "Point", coordinates: [48.8966286, 2.3273202] }
  },
  {
    name: "Gymnase Max Rousié",
    address: "28 rue André Bréchet",
    arrondissement: 75017,
    metroStop: "Porte de St-Ouen",
    metroLine: "/images/metro-lines/ligne13.svg",
    map:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2622.9864603667806!2d2.325129!3d48.8965952!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e5563432201%3A0xd4291eb393927f1d!2sGymnase+Jean+Leclaire!5e0!3m2!1sfr!2sfr!4v1549881426778",
    phone: "01 49 29 22 44",
    sports: ["Badminton", "Basket-Ball", "Volley-Ball", "Archery"],
    disabledAccess: "No",
    coordPoints: {
      type: "Point",
      coordinates: [48.8989954, 2.3286522]
    }
  },
  {
    name: "Gymnase Roquépine",
    address: "18 rue Roquépine",
    arrondissement: 75008,
    metroStop: "Saint-Augustin",
    metroLine: "/images/metro-lines/ligne9.svg",
    map:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.205657145009!2d2.3160970514925325!3d48.873355907504774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fcbdcf181cb%3A0x1a8b039e7b8cf790!2sGymnase+Roqu%C3%A9pine!5e0!3m2!1sfr!2sfr!4v1549882150780",
    phone: "01 42 66 01 76",
    sports: [
      "Racket-Ball",
      "Dancing Hall",
      "Fencing-Hall",
      "Multipurpose Room"
    ],
    disabledAccess: "Yes",
    coordPoints: {
      type: "Point",
      coordinates: [48.8733341, 2.3182727]
    }
  }
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

GymnaseCoord.insertMany(gymcoord)
  .then(gymsResults2 => {
    console.log(`Inserted ${gymsResults2.length} GYMS `);
  })
  .catch(err => {
    console.log("Insert FAILURE !", err);
  });
