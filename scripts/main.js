var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/timthumb.jpg') {
      myImage.setAttribute ('src','images/christ-the-king.jpg');
    } else {
      myImage.setAttribute ('src','images/timthumb.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'St. Joseph and the Child Jesus, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'St. Joseph and the Child Jesus, ' + storedName;
}

myButton.onclick = function(){
	setUserName();
}