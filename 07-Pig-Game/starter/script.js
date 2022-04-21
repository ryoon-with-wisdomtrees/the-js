'use strict';

const btnNewGame = document.querySelector('.btn--new');
const btnRollScore = document.querySelector('.btn--roll');
const btnHoldeScore = document.querySelector('.btn--hold');
const dice = document.querySelector('.dice');
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');
const current0 = document.querySelector('#current--0');
const current1 = document.querySelector('#current--1');
let switchPlayer = true;
let startingPlayer = '';
let countingNum = 0;
/**🧨💥
4->7 => 괜찮으니 일단 하드코딩. 100%를 지양하라.
validate -> WIP
refactoring => 직관적인 네이밍, 구조화, 중복제거*/

const playerList = [
  {
    holdScore: 0,
    currentScore: 0,
  },
  {
    holdScore: 0,
    currentScore: 0,
  },
];

function init() {
  console.log('init');
  //   console.log(player1.classList.contains('player--active'));
  playerList.forEach((player, index) => {
    player.holdScore = 0;
    player.currentScore = 0;
  });

  switchPlayer = true;
  startingPlayer = switchPlayer ? playerList[0] : playerList[1];
  //set player1 as startingPlayers
  score0.innerHTML = 0;
  score1.innerHTML = 0;
  current0.innerHTML = 0;
  current1.innerHTML = 0;
}

init();

function chngBg() {
  console.log(switchPlayer);
  console.log(player1.classList.contains('player--active'));

  if (switchPlayer) {
    // 플레이어1일떄 p1 active 있으면 스루, 없으면 애드.
    //              p2 에 active 있으면 리뭅, 없으면 스루.
    if (!player1.classList.contains('player--active')) {
      player1.classList.add('player--active');
      if (player2.classList.contains('player--active')) {
        player2.classList.remove('player--active');
      }
    }
  } else {
    if (player1.classList.contains('player--active')) {
      player1.classList.remove('player--active');
      if (!player2.classList.contains('player--active')) {
        player2.classList.add('player--active');
      }
    }
  }
}

btnNewGame.addEventListener('click', () => {
  console.log('new game');
  init();
});

//startingPlayer true면 1, false면 2
btnRollScore.addEventListener('click', function () {
  console.log('btnRoll');
  console.log(switchPlayer ? `현플레이어: p1` : `현플레이어: p2`);

  let randomNum = Math.ceil(Math.random() * 6);
  dice.src = `dice-${randomNum}.png`;
  dice.style.display = 'block';

  if (randomNum !== 1) {
    startingPlayer.currentScore += randomNum;
    switchPlayer
      ? (current0.innerHTML = startingPlayer.currentScore)
      : (current1.innerHTML = startingPlayer.currentScore);
  } else {
    console.log('It is 1');
    startingPlayer.currentScore = 0;
    switchPlayer
      ? (current0.innerHTML = startingPlayer.currentScore)
      : (current1.innerHTML = startingPlayer.currentScore);
    switchPlayer = !switchPlayer;
    startingPlayer = switchPlayer ? playerList[0] : playerList[1];
    chngBg();
  }
  //다끝난후 현재플레이어 상태에 따라
});

/**
 * 1. hold 누르면 holdScore 적립하고
 * 3. scoreInnerHtml에 적립하고
 * 2. currentScore 초기화하고
 * 3. CurrentInnerHtml 초기화하고
 *
 */
btnHoldeScore.addEventListener('click', function () {
  console.log('btnHolde');
  console.log(switchPlayer ? `현플레이어: p1` : `현플레이어: p2`);
  if (switchPlayer) {
    playerList[0].holdScore += playerList[0].currentScore;
    score0.innerHTML = playerList[0].holdScore;
    playerList[0].currentScore = 0;
    current0.innerHTML = 0;
    if (Number(playerList[0].holdScore) >= 100) {
      alert('you win');
    } else {
      switchPlayer = !switchPlayer;
      startingPlayer = switchPlayer ? playerList[0] : playerList[1];
      chngBg();
    }
  } else {
    console.log('-------');
    playerList[1].holdScore += playerList[1].currentScore;
    score1.innerHTML = playerList[1].holdScore;
    playerList[1].currentScore = 0;
    current1.innerHTML = 0;
    if (Number(playerList[1].holdScore) >= 100) {
      alert('you win');
    } else {
      switchPlayer = !switchPlayer;
      startingPlayer = switchPlayer ? playerList[0] : playerList[1];
      chngBg();
    }
  }
  console.log(switchPlayer ? `바뀐 현플레이어: p1` : `바뀐 현플레이어: p2`);
});
