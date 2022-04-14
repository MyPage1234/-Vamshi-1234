let myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'ram-charan.jpg') {
      myImage.setAttribute('src','sam-baby.jpg');
    } else {
      myImage.setAttribute('src','ram-charan.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
}


myButton.onclick = function() {
if(!localStorage.getItem('name')) {
  setUserName();
} else {
let myName = prompt('Please enter your name.');
localStorage.setItem('name', myName);
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}
}