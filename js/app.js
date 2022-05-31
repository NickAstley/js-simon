/* 
- Visualizzare in pagina (html) 5 numeri casuali.
- Avviare un timer di 30 secondi
- Dopo 30 secondi, nascondere i numeri.
- L’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite un prompt().
- Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

// Prendo l'ul dove inserirò i numeri casuali
const ulRandomNumbers = document.getElementById("randomNumbers");
// Genero i numeri casuali
const numbersToGuess = generateUniqueRandomNumbers(5);
// Inserisco i numeri
for (let i = 0; i < numbersToGuess.length; i++) {
    ulRandomNumbers.innerHTML += `<li>${numbersToGuess[i]}</li>`;
}


function generateUniqueRandomNumbers(wantedNumbers) {
    // Creo un array dove inserire i numeri
    const randomNumbers = [];
    do {
        // Genero casualmente un numero da 1 a 100
        const num = Math.floor(Math.random() * 100 + 1);
        // Se l'array non lo contiene, lo aggiungo
        if (!randomNumbers.includes(num)) {
            randomNumbers.push(num);
        }
    } while (randomNumbers.length < wantedNumbers);
    // Ritorno l'array
    return randomNumbers;
}
