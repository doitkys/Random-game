//랜덤번호 지정
//유저가  번호를 입력한다
//그리고 GO 라는 버튼을 누름
//만약에 유저가 랜덤번호를 맞추면 , "맞췄습니다!"
//랜덤번호 < 유저번호 "DOWN!"
//랜덤번호 >  유저번호 "UP!"
//RESET버튼을 누르면 게임 리셋
//5번의 기회를 다쓰면 게임이 끝. (더이상 추측 불가, 버튼이 disable)
//유저가 1~100범위 밖에 숫자를 입력하면 알려주고 기회를 깍지 않는다.
//유저가 이미 입력한 숫자를 또 입력하면 , 알려준다 , 기회를 깍지 않는다.

let computerNum = 0;
let playButton = document.getElementById('play-button');
let userInput = document.getElementById('user-input');
let resultArea = document.getElementById('result-area');
let resetButton = document.getElementById('reset-button');
let chances = 3;
let gameOver = false;
let chanceArea = document.getElementById('chance-area');
let history = [];
let answerArea = document.getElementById('answer-area');
let pushNumber = document.getElementById('push-number');

playButton.addEventListener('click', play);
resetButton.addEventListener('click', reset);
userInput.addEventListener('focus', function () {
  userInput.value = '';
});

function pickRandomNumber() {
  computerNum = Math.floor(Math.random() * 100) + 1;
  console.log(`정답 ${computerNum}`);
  //처음부터 정답 등장하게 하기
  answerArea.textContent = `정답 : ${computerNum}`;
}

function play() {
  let userValue = userInput.value;

  if (userValue < 1 || userValue > 100) {
    resultArea.textContent = '1~100 입력해주세요';
    console.log('1~100클릭');
    return;
  }

  if (history.includes(userValue)) {
    resultArea.textContent = '이미 입력한 숫자입니다 다른 숫자를 입력해주세요';
    return;
  }
  chances--;
  console.log('chance', chances);
  chanceArea.textContent = `남은기회 : ${chances}번`;
  history.push(userValue);
  if (userValue < computerNum) {
    resultArea.textContent = 'UP';
  } else if (userValue > computerNum) {
    resultArea.textContent = 'DOWN';
  } else {
    resultArea.textContent = '빙고!!!';
    userInput.disabled = true;
    gameOver = true;
  }

  pushNumber.textContent = `입력한 숫자: [${history.join(', ')}]`;
  console.log(history);

  if (chances < 1) {
    //chances == 0 은 안되는 건가 ?
    gameOver = true;
  }
  if (gameOver == true) {
    playButton.disabled = true;
  }
}

function reset() {
  chances = 3;
  gameOver = false;
  history = [];
  //user input창이 깔끔해져야함
  userInput.value = '';
  //새로운 번호가 생성됨
  pickRandomNumber();
  resultArea.textContent = '결과값이 나옵니다';
  chanceArea.textContent = `남은기회 : ${chances}번`;

  playButton.disabled = false;
  userInput.disabled = false;
}
pickRandomNumber();

//리셋기능만들기
