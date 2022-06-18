let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/coffee.jpg') {
      myImage.setAttribute('src','images/viber-image.jpg');
    } else {
      myImage.setAttribute('src','images/coffee.jpg');
    }
}

    let myButton = document.querySelector('button');
    let myHeading = document.querySelector('h1');
    function setUserName(){
        let myName = prompt('Please enter your name.');
        if(!myName) {
            etUserName();
        } else {
            localStorage.setItem('name', myName);
            myHeading.textContent = 'Mozilla is cool, ' + myName;
        }
    }

    if(!localStorage.getItem('name')) {
        setUserName();
    } else {
        let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
    }
    
    myButton.onclick = function() {
        setUserName();
    }