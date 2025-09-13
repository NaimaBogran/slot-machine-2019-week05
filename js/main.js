const minBet = 5;
const maxBet = 50;
let wallet = 1000;
document.getElementById('wallet').innerText = `${wallet} Buttons`

document.querySelector('#min').addEventListener('click', spinMin);
document.querySelector('#max').addEventListener('click', spinMax);
document.querySelector('#spinButton').addEventListener('click', spinSlots)
document.querySelector('#wallet').innerHTML = wallet;


function spinMin() {
    if (wallet >= minBet){
        wallet -= minBet;
        document.getElementById('wallet').innerText = `${wallet} Buttons`
    }
}
function spinMax() {
    if (wallet >= maxBet){
        wallet -= maxBet;
        document.getElementById('wallet').innerText = `${wallet} Buttons`
    }
}

function getRandomImages() {
    let randomNum = Math.floor(Math.random() * 5) + 1;
    let imagePath = '';

    if (randomNum === 1){
        imagePath = "img/ghostEye1.jpg"
    } else if (randomNum === 2){
        imagePath = 'img/ghostEye2.jpg'
    } else if (randomNum === 3){
        imagePath = 'img/ghostEye3.jpg'
    }else {
        imagePath = 'img/ghostEye4.jpg'
    }
    return imagePath;
}

function spinSlots() {
    let slot1 = getRandomImages();
    let slot2 = getRandomImages();
    let slot3 = getRandomImages();

    document.getElementById("spinButton").addEventListener('click', function() {
        document.getElementById("slots").style.background = "url('css/titleWallpaper.png')";
    });
    document.getElementById('slot1').innerHTML = `<img src='${slot1}'>`
    document.getElementById('slot2').innerHTML = `<img src='${slot2}'>`
    document.getElementById('slot3').innerHTML = `<img src='${slot3}'>`

    checkWin(slot1, slot2, slot3);
}

function checkWin (slot1, slot2, slot3) {
   if (slot1 === slot2 && slot2 === slot3) {
    wallet *= 5;
    displayCompleteMessage ("You've escaped the Beldam!!")
   } else {
    wallet -= 5;
    displayCompleteMessage ("YOU'VE GOT BUTTON EYES")
   }
   document.getElementById('wallet').innerText = `${wallet} Buttons`;
}

function displayCompleteMessage (message) {
    document.getElementById('result').innerText = message;
}