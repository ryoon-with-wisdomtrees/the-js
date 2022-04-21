'use strict';

/**🧨💥

1. 4->7 => 괜찮으니 일단 하드코딩. 100%를 지양하라.
    1-1. 필요한 변수 다 적재.
    1-2. 필요한 함수 껍데기 적재.
    1-3. 필요한 함수 껍데기 위에 필수 기능 적기
    1-4. 기능만 돌아가게 구현.
2. validate -> WIP(계속적으로...)
3. refactoring => 직관적인 네이밍, 구조화, 중복제거
    3-1. 직관적이고 단순한 이름으로 변경.    
    3-2. 중복요소 추가함수로 구현.

*/

/**  Main Funcs vars*/
const btnRollScore = document.querySelector('.btn--roll');
const btnHoldeScore = document.querySelector('.btn--hold');
const btnNewGame = document.querySelector('.btn--new');

/** Main elem vars */
const dice = document.querySelector('.dice');
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
const scoreP1 = document.querySelector('#score--0');
const scoreP2 = document.querySelector('#score--1');
const currentP1 = document.querySelector('#current--0');
const currentP2 = document.querySelector('#current--1');
let bPlayer = true; // true = p1, false = p2
let currentPlayer = '';

const playerList = [
  { holdScore: 0, currentScore: 0 },
  { holdScore: 0, currentScore: 0 },
];

/**
 * 1. Set all Scores to 0
 * 2. Set P1 as starting Player
 */
const init = () => {
  playerList.forEach((player, index) => {
    player.holdScore = 0;
    player.currentScore = 0;
  });

  bPlayer = true;
  currentPlayer = bPlayer ? playerList[0] : playerList[1];
  scoreP1.innerHTML = 0;
  scoreP2.innerHTML = 0;
  currentP1.innerHTML = 0;
  currentP2.innerHTML = 0;
};

init();

/**  Sub Funcs */
const chngBg = () => {
  // 배경변경의 하위 기능으로 간주, 내부함수로 변경함.
  function checkActive(elem) {
    return elem.classList.contains('player--active');
  }
  function rmvActive(elem) {
    return elem.classList.remove('player--active');
  }
  function addActive(elem) {
    return elem.classList.add('player--active');
  }

  !checkActive(bPlayer ? player1 : player2) &&
    addActive(bPlayer ? player1 : player2);
  checkActive(bPlayer ? player2 : player1) &&
    rmvActive(bPlayer ? player2 : player1);
};

const setCurrentInnerHtml = () => {
  bPlayer
    ? (currentP1.innerHTML = currentPlayer.currentScore)
    : (currentP2.innerHTML = currentPlayer.currentScore);
};

const setCurrentPlayer = () => {
  bPlayer = !bPlayer;
  currentPlayer = bPlayer ? playerList[0] : playerList[1];
  chngBg();
  console.log(`🕹  P changed. 🎮 Player is ${bPlayer ? 'P1' : 'P2'}.`);
};

/**     Main Funcs   - func Roll,  func Hold, func New   -                          */

/**
 * 1. randomNum 생성
 * 2. dice display
 * 3. 1체크
 *  3-1. randomNum 적립, currentInnerHtml변경
 *  3-2. currentScore 0 초기화, currentInnerHtml변경, currentPlayer 변경.
 */
btnRollScore.addEventListener('click', function () {
  console.log(`🕹  BtnRoll. 🎮 Player is ${bPlayer ? 'P1' : 'P2'}.`);
  let randomNum = Math.ceil(Math.random() * 6);
  dice.src = `dice-${randomNum}.png`;
  dice.style.display = 'block';

  if (randomNum !== 1) {
    currentPlayer.currentScore += randomNum;
    setCurrentInnerHtml();
  } else {
    console.log(`🕹  It it One`);
    currentPlayer.currentScore = 0;
    setCurrentInnerHtml();
    setCurrentPlayer();
  }
});

/**
 * 1. hold 누르면 holdScore 적립
 * 2. scoreInnerHtml에 적립
 * 3. currentScore 초기화
 * 4. CurrentInnerHtml 초기화
 *
 */
btnHoldeScore.addEventListener('click', function () {
  console.log(`🕹  BtnHold. 🎮 Player is ${bPlayer ? 'P1' : 'P2'}.`);
  let tempPList = bPlayer ? playerList[0] : playerList[1];
  let tempScore = bPlayer ? scoreP1 : scoreP2;
  let tempCurrent = bPlayer ? currentP1 : currentP2;

  tempPList.holdScore += tempPList.currentScore;
  tempScore.innerHTML = tempPList.holdScore;
  tempPList.currentScore = 0;
  tempCurrent.innerHTML = 0;
  console.log(tempPList);
  Number(tempPList.holdScore) >= 100 ? alert('you win') : setCurrentPlayer();
});

/**  게임 초기화 */
btnNewGame.addEventListener('click', init);
