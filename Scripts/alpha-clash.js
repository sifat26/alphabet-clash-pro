function play() {
  // const homeSection=document.getElementById("home-screen");
  // //console.log(homeSection.classList);
  // homeSection.classList.add('hidden');
  // const gameSection=document.getElementById("playground");
  // gameSection.classList.remove('hidden');
  hideElementById('result')
  hideElementById("home-screen");
  showElementById("playground");
  setTextElementById("current-score",0);
  setTextElementById("current-life",5);

  continuousGame("current-life");
}
function gameOver(){
  hideElementById("playground");
  showElementById("result");


}


function handleKeyboardEvent(event) {
  const currentPress = event.key;
  const targetKey = document.getElementById("random-alphabet");
  const targetKeyPress = targetKey.innerText.toLowerCase();

  if (targetKeyPress === currentPress) {
    const currentScore = getTextElementById("current-score");
    const newScore = currentScore + 1;
    setTextElementById("current-score", newScore);
    // console.log("you get a point");
    // const currentPressText=document.getElementById('current-score');
    // const currentPressValue=currentPressText.innerText;
    // const currentScore=parseInt(currentPressValue);
    // const newScore=currentScore+1;
    // currentPressText.innerText=newScore;
    removeBackgroundColor(currentPress);
    continuousGame();
  } else {
    const currentLife = getTextElementById("current-life");
    const newLife = currentLife - 1;
    setTextElementById("current-life", newLife);
    if(newLife===0)
    {
      gameOver();
    }
    // console.log("you lose a lIFE");
    // const currentLifeText=document.getElementById('current-life');
    // const currentLifeValue=currentLifeText.innerText;
    // const currentLife=parseInt(currentLifeValue);
    // currentLifeText.innerText=newLife;
  }
}
document.addEventListener("keyup", handleKeyboardEvent);
function continuousGame() {
  const alphabet = getRandomAlphabet();
  console.log(alphabet);
  const alphabetDiv = document.getElementById("random-alphabet");
  alphabetDiv.innerText = alphabet;
  addBackgroundColor(alphabet);
}
