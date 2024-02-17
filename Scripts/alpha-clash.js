function play() {
  // const homeSection=document.getElementById("home-screen");
  // //console.log(homeSection.classList);
  // homeSection.classList.add('hidden');
  // const gameSection=document.getElementById("playground");
  // gameSection.classList.remove('hidden');
  hideElementById("home-screen");
  showElementById("playground");
  continuousGame();
}
function handleKeyboardEvent(event) {
  const currentPress = event.key;
  const targetKey=document.getElementById('random-alphabet');
  const targetKeyPress=(targetKey.innerText.toLowerCase());
  
  if (targetKeyPress===currentPress)
  {
    console.log("you get a point");
    removeBackgroundColor(currentPress);
    const currentPressText=document.getElementById('current-score');
    const currentPressValue=currentPressText.innerText;
    const currentScore=parseInt(currentPressValue);
    const newScore=currentScore+1;
    currentPressText.innerText=newScore;
    continuousGame();

  }
  else
  {
    console.log("you lose a lIFE");
    const currentLifeText=document.getElementById('current-life');
    const currentLifeValue=currentLifeText.innerText;
    const currentLife=parseInt(currentLifeValue);
    const newLife=currentLife-1;
    currentLifeText.innerText=newLife;
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
