/*

//  1. Il computer deve generare 16 numeri casuali (le nostre bombe) tra 1 e 100.I numeri non possono essere duplicati.
    
    2. In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.L’utente non può inserire più volte lo stesso numero. Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
    
    3. La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
    
    4.Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.


*/


/*  
    ========================================================================================================
        1.                              Genera un array contente 16 numeri casuali
                                                senza duplicati
    ========================================================================================================
    
*/

function arrayBombs(){
    let bombs = [];
    while (bombs.length < 16) {
        let num = Math.floor(Math.random() * 100) + 1; 
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

function game(){
    let playerNumbers = [];
    let bombs = arrayBombs();
    console.log(bombs);
    for (let index = 0; index < 84; index++) {
        let playerNum = prompt("Inserisci un numero da 1 a 100");
        if (!(playerNumbers.includes(playerNum))) {
            if ((bombs.includes(parseInt(playerNum)))){
                console.log("Bomba!");
            }
            playerNumbers.push(playerNum);
            
        }
        console.log(playerNumbers);
    }
}



game();