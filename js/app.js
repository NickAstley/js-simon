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
// Inserisco i numeri nell'html
for (let i = 0; i < numbersToGuess.length; i++) {
    ulRandomNumbers.innerHTML += `<li>${numbersToGuess[i]}</li>`;
}
// Faccio partire il timer di 30 secondi
setTimeout(function() {
    // Cancello i numeri
    ulRandomNumbers.innerHTML = "";
    // Imposto un ulteriore timer di pochi ms per far scomparire i numeri in tempo
    setTimeout(function() {
        // Creo un array dove inserirò i numeri immessi dall'utente
        const numbersGuessed = [];
        // Prendo l'ul dove mostrerò i numeri inseriti dall'utente e ne inzializzo il contenuto
        const ulGuessedNumbers = document.getElementById("guessedNumbers");
        ulGuessedNumbers.innerHTML += `<li class="fw-bold">I tuoi numeri:</li>`;
        // Chiedo all'utente di indovinare i numeri
        alert("Inserisci uno alla volta i numeri mostrati, in qualsiasi ordine.");
        for (let i = 0; i < 5; i++) {
            // Prendo l'input dell'utente
            const guess = parseInt(prompt(`Inserisci il ${i + 1}° numero:`));
            // Controllo che sia un numero
            if (!isNaN(guess)) {
                // Se lo è, lo inserisco nell'array e nell'ul
                numbersGuessed[i] = guess;
                ulGuessedNumbers.innerHTML += `<li>${numbersGuessed[i]}</li>`;
            } else {
                // Se non lo è, ripeto la richiesta ed avverto dell'errore
                i--;
                alert("Prova ad inserire un numero!");
            }
        }
        // Prendo l'ul dove inserirò i risultati e ne inizializzo il contenuto
        const ulCorrectNumbers = document.getElementById("correctNumbers");
        ulCorrectNumbers.innerHTML += `<li class="fw-bold">I numeri da indovinare:</li>`;
        // Creo una variabile che conta quanti numeri ha indovinato
        let correctNumbers = 0;
        // Confronto i due array
        for (let i = 0; i < numbersToGuess.length; i++) {
            if (numbersGuessed.includes(numbersToGuess[i])) {
                // Se il numero random è tra quelli immessi dall'utente, lo mostro in verde ed in grassetto
                ulCorrectNumbers.innerHTML += `<li class="text-success fw-bold">${numbersToGuess[i]}</li>`;
                // In più aumento il contatore dei numeri indovinati
                correctNumbers++;
            } else {
                // Se il numero random non è tra quelli immessi dall'utente, lo mostro in rosso e sbarrato
                ulCorrectNumbers.innerHTML += `<li class="text-danger text-decoration-line-through">${numbersToGuess[i]}</li>`;
            }
        }
        // Mostro il numero dei numeri indovinati in uno span
        const spanResult = document.getElementById("result");
        spanResult.innerHTML = `<li>Numeri indovinati: <span class="fw-bold">${correctNumbers}</span></li>`;
    }, 100);
}, 30000);

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