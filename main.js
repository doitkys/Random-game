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

playButton.addEventListener('click', play);

// console.log(playButton);

function pickRandomNumber() {
  computerNum = Math.floor(Math.random() * 100) + 1;
  console.log(`정답 ${computerNum}`);
}

function play() {
  let userValue = userInput.value;
  // console.log(userValue);
  if (userValue < computerNum) {
    resultArea.textContent = 'UP';
  } else if (userValue > computerNum) {
    resultArea.textContent = 'DOWN';
  } else {
    resultArea.textContent = '빙고!!!';
  }
}
pickRandomNumber();
