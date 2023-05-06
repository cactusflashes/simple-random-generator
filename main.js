const diceText = document.querySelector('#dice');
const coinText = document.querySelector('#coin');
const ateText = document.querySelector('#ate-ball');
const responses = [
    'It is certain.',
    'It is decidedly so.',
    'Without a doubt.',
    'Yes definitely.',
    'You may rely on it.',
    'As I see it, yes.',
    'Most likely.',
    'Outlook good.',
    'Yes.',
    'Signs point to yes.',
    'Reply hazy, try again.',
    'Ask again later.',
    'Better not tell you now.',
    'Cannot predict now.',
    'Concentrate and ask again.',
    "Don't count on it.",
    'My reply is no.',
    'My sources say no.',
    'Outlook not so good.',
    'Very doubtful.'
  ];

function rollDice(){
    const rollValue = Math.floor(Math.random() *6) + 1;
    diceText.innerHTML =`You rolled a ${rollValue}. Click to roll again.`;
};

function flipCoin(){
    const coinValue = Math.random() < 0.5 ? 'heads' : 'tails'; 
    coinText.innerHTML = `${coinValue}. Click to roll again.`
}

function shakeBall(){
    const responseIndex = Math.floor(Math.random() * responses.length);
    const responseValue = responses[responseIndex];
    
    ateText.innerHTML = `${responseValue}`;

}