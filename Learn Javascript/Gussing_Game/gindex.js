var gnum1 = parseInt(prompt('Enter number from 1-5'));

// Generate a random number between 1 and 5 (inclusive)
var randomNumber = Math.floor(Math.random() * 5) + 1;

var text = document.getElementById('dd');

if(gnum1 === randomNumber){
    text.innerText = 'Correct';
} else {
    text.innerText = 'Incorrect';
}

document.write('Random Number was :', randomNumber);