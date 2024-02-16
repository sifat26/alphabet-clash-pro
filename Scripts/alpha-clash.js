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
function continuousGame() {
  const alphabet = getRandomAlphabet();
  console.log(alphabet);
  const alphabetDiv = document.getElementById("random-alphabet");
  alphabetDiv.innerText = alphabet;
  addBackgroundColor(alphabet);
}
