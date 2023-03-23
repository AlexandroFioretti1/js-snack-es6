/* 
Snack 1
Crea un array composto da 10 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
Infine stampa separatamente i 3 array.
*/

// Creazione dell'array di automobili definendo modello e alimentazione
let automobili = [
  { marca: "Fiat", modello: "500", alimentazione: "ibrido" },
  { marca: "Aereo", modello: "Fiesta", alimentazione: "benzina" },
  { marca: "Volkswagen", modello: "Golf", alimentazione: "benzina" },
  { marca: "Renault", modello: "Clio", alimentazione: "diesel" },
  { marca: "Tesla", modello: "Model S", alimentazione: "gps" },
  { marca: "Nissan", modello: "Leaf", alimentazione: "diesel" },
  { marca: "Fiat", modello: "Panda", alimentazione: "diesel" },
  { marca: "Opel", modello: "Corsa", alimentazione: "benzina" },
  { marca: "Toyota", modello: "Prius", alimentazione: "gps" },
  { marca: "BMW", modello: "i3", alimentazione: "diesel" },
  { marca: "Toyota", modello: "Prius", alimentazione: "benzina" },
  { marca: "BMW", modello: "Vegas", alimentazione: "diesel" },
  { marca: "Opel", modello: "Corsa", alimentazione: "metano" },
  { marca: "Toyota", modello: "Prius", alimentazione: "benzina" },
  { marca: "BMW", modello: "i3", alimentazione: "elettrico" },
];
console.log(automobili);

// definisco l'Array di auto a benzina
const autoBenzina = automobili.filter(
  (auto) => auto.alimentazione === "benzina"
);

// definisco Array di auto a diesel
const autoDiesel = automobili.filter((auto) => auto.alimentazione === "diesel");

// definisco  Array di auto con altre alimentazioni
const altreAuto = automobili.filter(
  (auto) => auto.alimentazione !== "benzina" && auto.alimentazione !== "diesel"
);

// stampo i modelli delle macchine divisi tra benzina\ diesel \ altro
console.log("Auto a benzina:", autoBenzina);
console.log("Auto a diesel:", autoDiesel);
console.log("Altre auto:", altreAuto);
