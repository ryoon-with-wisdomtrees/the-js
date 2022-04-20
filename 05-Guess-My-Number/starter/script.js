'use strict';
// Dom은 part of WEB APIs 임.
// DOM은 JS의 요소가 아님
// WEB APIs는 자바스크립트로 쓰여진 라이브러리인데 js로 접근가능하다.
// Timers, Fetch도 DOM같은 WEB APIs중 하나임.

//console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number';

// 하드코딩한후  ok
// 오류 체크 하고(밸리데이션) ok
// 리팩토링 ㄱㄱ 해보자(중복된 부분을 하나의 함수로 중첩을 줄이자)

let secretNumber = Math.ceil(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
let body = document.querySelector('body');

function changeMsg() {
  //화살표함수쓸땐 argruments사용못함
  //화살표함수쓸땐 this역시 전역 window로 잡힘
  //console.log('changeMsg: ', arguments);
  //console.log(arguments);
  //console.log(arguments[0]);
  document.querySelector(`.${arguments[0]}`).textContent = arguments[1];
}

function tryOneMoretime() {
  //console.log('tryOneMoretime: ', arguments);
  score--;
  changeMsg(arguments[0][0], arguments[0][1]);
  changeMsg('score', score);
}

//https://developer.mozilla.org/ko/docs/Web/API/EventTarget/addEventListener
document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  //   let body = document.getElementsByTagName('body')[0];

  // 입력값 無, 정답, 오답
  // score가 건재한다는 전제하에,
  if (score > 1) {
    if (!guess) {
      changeMsg('message', '숫자를 입력하세요.');
    } else if (secretNumber === guess) {
      changeMsg('message', '정답🎉🎉🎉');
      highscore = score > highscore ? score : highscore; //신기록 갱신일때만
      changeMsg('highscore', highscore);
      changeMsg('number', guess);
      body.style.backgroundColor = '#174b17';
      //   body.style.color = '#222';
      document.querySelector('.number').style.width = '30rem';
    } else if (secretNumber !== guess) {
      tryOneMoretime(
        secretNumber > guess
          ? ['message', '숫자를 더 올려봐!']
          : ['message', '숫자를 더 내려봐!']
      );
      /**   secretNumber > guess
           ? tryOneMoretime('message', '숫자 더 올려봐')
           : tryOneMoretime('message', '숫자 더 올려봐');*/
    }
  } else {
    changeMsg('message', 'game over💥');
    changeMsg('score', 0);
  }
});

document.querySelector('.again').addEventListener('click', () => {
  secretNumber = Math.ceil(Math.random() * 20) + 1;
  score = 20;
  console.log('secretNumber: ', secretNumber);
  changeMsg('message', 'Start guessing...');
  changeMsg('guess', '');
  changeMsg('number', '');
  body.style.backgroundColor = ' #222';
  /**    document.querySelector('.message').textContent = 'Start guessing...';
         document.querySelector('.guess').textContent = '';
        document.querySelector('.number').textContent = '?';*/
});
