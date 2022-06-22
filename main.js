let userName = 'Kevin'
if (userName){
    console.log(`Hello ${userName}!`)
} else {console.log ('Hello!')}

var userQuestion = 'Is Sean ze bess fron?';
console.log(userQuestion);

var randomNumber = Math.floor(Math.random() * 8 );
// console.log(randomNumber);

var eightBall = ''
if (randomNumber === 1){
    eightBall = 'It is certain';
} else if (randomNumber === 2){
    eightBall = 'It is decidedly so';
} else if (randomNumber === 3){
    eightBall = 'Reply hazy try again';
} else if (randomNumber === 4){
    eightBall = 'Cannot predict now';
} else if (randomNumber === 5){
    eightBall = 'Do not count on it';
} else if (randomNumber === 6){
    eightBall = 'My sources say no';
} else if (randomNumber === 7){
    eightBall = 'Outlook not so good';
} else {
    eightBall = 'Signs point to yes';
}

console.log(eightBall);
