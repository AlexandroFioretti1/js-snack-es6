/*
 A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.
Es: [‘pippo’, ‘PLUTO’, ‘Paperino’] => [‘Pippo’, ‘Pluto’, ‘Paperino’]
 */

/* creo una stringa con all'interno i nomi da modificare in console.log */
const strings = ["pippo", "PLUTO", "Paperino", "PePPettIIIno", "Creato9re"];

// assegno il valore della stringa.map a formattedStrings
const formattedStrings = strings.map((string) => {
    
  // Trasformo la stringa in minuscolo
  const lowerCaseString = string.toLowerCase();

  // prendo la prima lettera e la muto in maiuscolo
  const firstLetter = lowerCaseString.charAt(0).toUpperCase();

  // aggiungo la prima lettera maiuscola al resto del testo
  return firstLetter + lowerCaseString.slice(1);
});

console.log(formattedStrings);
