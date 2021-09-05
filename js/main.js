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

/*  
    ========================================================================================================
        1.                              Genera un array contente 16 numeri casuali
                                                senza duplicati
    ========================================================================================================
    
*/


const arrayBombs = (num_max) => {
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
        2.                              Disegno il campo da gioco
    ========================================================================================================
    
*/

const drawBoard = (num_box) => {
    console.log(num_box)
    let board = document.getElementById('board');
    board.innerHTML = ` `;
    for (let index = 1; index <= num_box; index++) {
        let box = `
       <div data-box="${index}" class="box"></div>
       `;
        let templateBox = document.createElement('div');
        templateBox.classList.add("square");
        templateBox.innerHTML = box;
        board.appendChild(templateBox);
    }
}
/*  
    ========================================================================================================
        3.                              L'utente gioca inserendo 84 volte un input numerico 
                                        che non si deve ripetere. Il gioco termina se trova la bomba 
                                        o se finisco i numeri consentiti
    ========================================================================================================
    
*/

const playGame = (num_max) => {
    let playerNumbers = [];
    let click = 0;
    let points = 0;
    let bombs = arrayBombs(num_max);
    console.log(bombs);
    while (click < 84) {
        document.getElementById('board').addEventListener('click',
            function (e) {
                let element = document.querySelectorAll("[data-box='" + e.target.dataset.box + "']");
                playerNum = (e.target.dataset["box"]);
                if (!(playerNumbers.includes(playerNum))) {
                    element[0].classList.add("bg-green");
                    points++;
                    if ((bombs.includes(parseInt(playerNum)))) {
                        element[0].classList.add("bg-red");
                        points--;
                        Swal.fire({
                            title: `Bomba! Punteggio: ${points}`,
                            text: 'Altro giro?',
                            showClass: {
                                popup: 'animate__animated animate__fadeInDown'
                            },
                            hideClass: {
                                popup: 'animate__animated animate__fadeOutUp'
                            },
                            icon: 'question',
                            showCancelButton: true,
                            confirmButtonColor: '#3085d6',
                            cancelButtonColor: '#d33',
                            confirmButtonText: 'Si, certo'
                        }).then((result) => {
                            if (result.isConfirmed) {
                                num_max = 100;
                                drawBoard(num_max);
                                playGame(num_max);
                            } else {
                                // window.location.replace("https://github.com/bizon-dot/js-campominato");
                                const {
                                    value: nick
                                } = Swal.fire({
                                    title: 'Inserici il nick per registrare il punteggio',
                                    input: 'text',
                                    inputLabel: 'Your nick',
                                    inputPlaceholder: 'Enter your nick'
                                })

                                if (nick) {
                                    const xmlhttp = new XMLHttpRequest();
                                    xmlhttp.onload = function () {
                                        document.getElementById("txtHint").innerHTML = this.responseText;
                                    }
                                    xmlhttp.open("GET", "saveresult.php?nick=" + nick + "?points" + points);
                                    xmlhttp.send();
                                }
                            }
                        })
                        click = 90;
                    }
                    playerNumbers.push(playerNum);
                }
                console.log(playerNumbers);
                console.log("Punteggio:" + points);
            }
        )
        click++;
    }
}

//Popolo la select 
const selectLevel = document.getElementById("levels");
const searchSelect = () => {
    selectLevel.innerHTML = ` `;
    const levels = ["Easy", "Normal", "Hard"];
    levels.forEach((level) => {
        console.log(level);
        selectLevel.innerHTML += `
             <option value="${level}">${level.toUpperCase()}</option>    
        `
    });
}

console.log(selectLevel);

let levelGame = searchSelect();
num_max = 100;
drawBoard(num_max);
playGame(num_max);

document.getElementById("levels").addEventListener('change', function () {

    let level = this.value.toLowerCase();
    console.log(level);
    switch (level) {
        case (level = "easy"):
            num_max = 100;
            drawBoard(num_max);
            playGame(num_max);
            break;

        case (level = "normal"):
            num_max = 80;
            drawBoard(num_max);
            playGame(num_max);
            break;

        case (level = "hard"):
            num_max = 50;
            drawBoard(num_max);
            playGame(num_max);
            break;

        default:
            num_max = 100;
            drawBoard(num_max);
            playGame(num_max);
            break;
    }
});