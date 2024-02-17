function hideElementById(elementID) {
  const element = document.getElementById(elementID);
  element.classList.add("hidden");
}
function showElementById(elementID) {
  const element = document.getElementById(elementID);
  element.classList.remove("hidden");
}
function getElementById(elementID) {
  const element = document.getElementById(elementID);
  return element.innerText;
}
function getRandomAlphabet() {
  const alphabetString = "abcdefghijklmnopqrstuvwxyz";
  const alphabets = alphabetString.split("");
  const randomNumber = Math.random() * 25;
  const randomIndex = Math.floor(randomNumber);
  const alphabet = alphabets[randomIndex];
  return alphabet;
}
function addBackgroundColor(elementID) {
  const element = document.getElementById(elementID);
  element.classList.add("bg-orange-400");
}
function removeBackgroundColor(elementID) {
  const element = document.getElementById(elementID);
  element.classList.remove("bg-orange-400");
}
function getTextElementById(elementID) {
  const element = document.getElementById(elementID);
  const elementText = element.innerText;
  const elementValue = parseInt(elementText);
  return elementValue;
}
function setTextElementById(elementID, value) {
  const element = document.getElementById(elementID);
  element.innerText = value;
}
