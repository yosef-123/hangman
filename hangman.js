import searchMultipleOccurrences from './searchMultipleOccurrences.js';

const randomWords = [
  'lion','toad','frog','giraffe','hippopotamus','monkey','dog','cat','mouse','crocodile','zebra','ostrich','lizard',
  'tiger','wolf','hyena','snake','cobra','panther','chicken','rooster','chipmunk','leopard','ant','fly','bear',
  'goat','sheep','cow','horse','donkey','deer','peacock','bird','bug','gorilla',
]
var lettersAdded = 0;
var livesLeft = 9;

//this will receive all the button clicks
const input = (letter)=>{
  console.log(letter)
  document.getElementById(letter).setAttribute('class','clicked')
  document.getElementById(letter).removeAttribute('onclick') //so you cant click again

  var output = searchMultipleOccurrences(word,letter); //the imported function. it returns a array of results or this [-1] for no matches
  if(output[0] == -1){//if no matches
    console.log('no results')
    livesLeft--;
    document.getElementById('lives-left').innerText = livesLeft;
    if(livesLeft == 0){
      document.getElementById('youLose').style.display = 'block';
    }
    return
  }

  output.forEach((index)=>{
    console.log(index)
    document.querySelector(`#letters :nth-child(${index+1})`).innerText = letter
    lettersAdded++;
  })

  //check if you guessed all the letters yet
  if(lettersAdded == word.length) {
    document.getElementById('word').innerText = word
    document.getElementById('youWin').style.display = 'block'
  }
}
window.input = input;//used to have it in global scope since now its in module scope

const replay = ()=>{
  //reset the game
  document.getElementById('youWin').style.display  = 'none'
  document.getElementById('youLose').style.display = 'none'
}
window.replay = replay;

//set up
const word = randomWords[Math.floor(Math.random()*randomWords.length)]
console.log('the word is : ',word) //delete this for a real game so you cant cheat

//create the display letter divs
var div = '<div></div>'
var htmlString = div.repeat(word.length)
document.getElementById('letters').innerHTML = htmlString;