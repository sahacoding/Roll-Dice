const player0 = document.querySelector('.player0');
const play0 = document.getElementById('play0');
const pl0 = document.getElementById('pl0');
const p0 = document.getElementById('p0');
const l0 = document.getElementById('l-0');
const image = document.querySelector('.src');
const result = document.querySelector('.result');
const rslt = document.querySelector('#rslt');

const player1 = document.querySelector('.player1');
const play1 = document.getElementById('play1');
const pl1 = document.getElementById('pl1');
const p1 = document.getElementById('p1');
const l1 = document.getElementById('l-1');

const newGame = document.getElementById('newgame');
const rollDice = document.getElementById('rolldice');
const hold = document.getElementById('hold');

image.classList.add('hidden');
result.classList.add('hidden');

const score = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let totalScore = 0;
let winningScore = true;

rollDice.addEventListener('click', function () {

    if(winningScore){

         const dice = Math.floor(Math.random() * 6) + 1;
        image.classList.remove('hidden');
        image.src = `img/dice-${dice}.png`;

         if (dice !== 1) {
            currentScore = currentScore + dice;
            document.getElementById(`l-${activePlayer}`).innerHTML = currentScore;
            // l0.innerHTML = currentScore;
           
        }
         else {
                document.getElementById(`l-${activePlayer}`).innerHTML = 0;
                document.getElementById(`pl${activePlayer}`).innerHTML = 0;
                currentScore = 0;
                activePlayer = activePlayer === 0 ? 1 : 0;
                // player0.classList.toggle('active');
                // player1.classList.toggle('active');
            }

         
        }   
})


hold.addEventListener('click', function () {
    if(winningScore){
    score[activePlayer] += currentScore;
    document.getElementById(`pl${activePlayer}`).innerHTML =  score[activePlayer];
    document.getElementById(`l-${activePlayer}`).innerHTML = 0;
    currentScore = 0;
    if(score[activePlayer] >= 20){
        rslt.innerHTML += `Player ${activePlayer}`
        result.classList.remove('hidden');
      //console.log( rslt.innerHTML );
        winningScore = false;
    }
    else {
    activePlayer = activePlayer === 0 ? 1 : 0;
    }
}
})



// if (activePlayer === 0) {
//     totalScore = totalScore + currentScore
//     pl0.innerHTML = parseInt(pl0.innerHTML) + totalScore;
//     totalScore = 0;
    
    
//     //    let r = parseInt( pl0.innerHTML);
//     //    console.log(typeof r);
   
//          document.getElementById(`l-${activePlayer}`).innerHTML = 0;
//          currentScore = 0;
//          activePlayer = activePlayer === 0 ? 1 : 0;
       
// }
// else {
//     totalScore = totalScore + currentScore
//     pl1.innerHTML = parseInt(pl1.innerHTML) + totalScore;
//     totalScore = 0;
    
    
//     document.getElementById(`l-${activePlayer}`).innerHTML = 0;
//     currentScore = 0;
//     activePlayer = activePlayer === 0 ? 1 : 0;
    
// }


function reset() {
    currentScore = 0;
    activePlayer = 0;
    totalScore = 0;
    pl0.innerHTML = 0;
    l0.innerHTML = 0;
    pl1.innerHTML = 0;
    l1.innerHTML = 0;
    image.classList.add('hidden');
    result.classList.add('hidden');
    winningScore = true;
}

newGame.addEventListener('click', reset)
