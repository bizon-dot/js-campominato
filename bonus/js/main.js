/*

//    1. Il computer deve generare 16 numeri casuali (le nostre bombe) tra 1 e 100.I numeri non possono essere duplicati.
    
//    2. In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.L’utente non può inserire più volte lo stesso numero. Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
    
//    3. La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
    
//    4.Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

BONUS 

    // all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
    // con difficoltà 0 => tra 1 e 100
    // con difficoltà 1 => tra 1 e 80
    // con difficoltà 2 => tra 1 e 50

*/

let levelGame = prompt("Scegli il livello delal difficoltà: 0 / 1 / 2");
levelGame = parseInt(levelGame);
switch (levelGame) {
    case (levelGame = 0):
        num_max = 100;
        game(100);
        break;

    case (levelGame = 1):
        num_max = 80;
        game(num_max);
        break;

    case (levelGame = 2):
        num_max = 50;
        game(num_max);
        break;

    default:
        break;
}


/*  
    ========================================================================================================
        1.                              Genera un array contente 16 numeri casuali
                                                senza duplicati
    ========================================================================================================
    
*/



function arrayBombs(num_max) {
    let bombs = [];
    while (bombs.length < 16) {
         let num = Math.floor(Math.random() * num_max) + 1;
        if (!(bombs.includes(num))) {
            bombs.push(num);
        }
    }
    return bombs;

}

/*  
    ========================================================================================================
        2.                              L'utente gioca inserendo 84 volte un input numerico 
                                        che non si deve ripetere. Il gioco termina se trova la bomba 
                                        o se finisco i numeri consentiti
    ========================================================================================================
    
*/

function game(num_max) {
    let playerNumbers = [];
    let bombs = arrayBombs(num_max);
    console.log(bombs);
    for (let index = 0; index < (100 - bombs.length); index++) {
        let playerNum = prompt("Inserisci un numero da 1 a " + num_max);
        if (!(playerNumbers.includes(playerNum))) {
            if ((bombs.includes(parseInt(playerNum)))) {
                console.log("Bomba! " + "Punteggio: " + (index + 1));
                break;
            }
            playerNumbers.push(playerNum);

        }
        console.log(playerNumbers);
        console.log("Punteggio:" + (index + 1));

    }
}