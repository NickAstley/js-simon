/* 
- Visualizzare in pagina (html) 5 numeri casuali.
- Avviare un timer di 30 secondi
- Dopo 30 secondi, nascondere i numeri.
- L’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite un prompt().
- Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

// Prendo l'ul dove inserirò i numeri casuali
const ulRandomNumbers = document.getElementById("randomNumbers");
// Genero i 5 numeri casuali
const numbersToGuess = generateUniqueRandomNumbers(5);
// Inserisco i numeri
for (let i = 0; i < numbersToGuess.length; i++) {
    ulRandomNumbers.innerHTML += `<li>${numbersToGuess[i]}</li>`;
}
// Creo un array dove inserirò i numeri immessi dall'utente
const numbersGuessed = [];
// Faccio partire il timer di 30 secondi
setTimeout(function() {
    // Cancello i numeri
    ulRandomNumbers.innerHTML = "";
    // Chiedo all'utente di indovinare i numeri
    alert("Inserisci uno alla volta i numeri mostrati, in qualsiasi ordine.");
    for (let i = 0; i < 5; i++) {
        // Prendo l'input dell'utente
        const guess = parseInt(prompt(`Inserisci il ${i + 1}° numero:`));
        // Controllo che sia un numero e lo inserisco nell'array
        if (!isNaN(guess)) {
            numbersGuessed[i] = guess;
        } else {
            i--;
            alert("Prova ad inserire un numero!");
        }
    }
    console.log(numbersGuessed);
}, 3000);

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
