function hideElementById(elementID) {
  const element = document.getElementById(elementID);
  element.classList.add("hidden");
}
function showElementById(elementID) {
  const element = document.getElementById(elementID);
  element.classList.remove("hidden");
}
function getRandomAlphabet() {
  const alphabetString = "abcdefghijklmnopqrstuvwxyz";
  const alphabets = alphabetString.split("");
  const randomNumber = Math.random() * 25;
  const randomIndex = Math.floor(randomNumber);
  const alphabet = alphabets[randomIndex];
  return alphabet;
}
function addBackgroundColor(elementID)
{
    const element = document.getElementById(elementID);
    element.classList.add('bg-orange-400')
}
function removeBackgroundColor(elementID){
  const element = document.getElementById(elementID);
  element.classList.remove('bg-orange-400');
}
