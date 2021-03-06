import searchMultipleOccurrences from './searchMultipleOccurrences.js'

const randomWords = [
  'lion','toad','frog','giraffe','hippopotamus','monkey','dog','cat','mouse','crocodile','zebra','ostrich','lizard',
  'tiger','wolf','hyena','snake','cobra','panther','chicken','rooster','chipmunk','leopard','ant','fly','bear',
  'goat','sheep','cow','horse','donkey','deer','peacock','bird','bug','gorilla',
]
var lettersAdded = 0
const livesYouStartWith = 9
var livesLeft = livesYouStartWith

//this will receive all the button clicks
const input = (letter)=>{
  if(document.getElementById(letter).getAttribute('class') != null ) return // is null when you didn't yet add a class = 'clicked'

  document.getElementById(letter).setAttribute('class','clicked') //because now you did click it
  var output = searchMultipleOccurrences(word,letter) //the imported function. it returns a array of results or this [-1] for no matches
  if(output[0] == -1){//if no matches
    livesLeft--
    document.getElementById('lives-left').innerText = livesLeft
    if(livesLeft == 0){
      document.getElementById('youLose').style.display = 'block'
    }
    return
  }

  output.forEach((index)=>{
    console.log(index)
    document.querySelector(`#letters :nth-child(${index+1})`).innerText = letter
    lettersAdded++
  })

  //check if you guessed all the letters yet
  if(lettersAdded == word.length) {
    document.getElementById('word').innerText = word
    document.getElementById('youWin').style.display = 'block'
  }
}
window.input = input //used to have it in global scope since now its in module scope

const replay = ()=>{
  //reset the game
  document.getElementById('youWin').style.display  = 'none'
  document.getElementById('youLose').style.display = 'none'
  //add the onclick attribute
  document.querySelectorAll('#keyboard > button').forEach((element)=>{
    element.removeAttribute('class')
  })
  //refresh the lives
  livesLeft = livesYouStartWith
  lettersAdded = 0
  word = randomWords[Math.floor(Math.random()*randomWords.length)]
  console.log('the word is : ',word)
  createDisplayLetter()
  document.getElementById('lives-left').innerText = livesLeft
}
window.replay = replay

//set up
var word = randomWords[Math.floor(Math.random()*randomWords.length)] //is only changed when you replay
console.log('the word is : ',word) //delete this for a real game so you cant cheat

//create the display letter divs
function createDisplayLetter() {
  var div = '<div></div>'
  var htmlString = div.repeat(word.length)
  document.getElementById('letters').innerHTML = htmlString
}
createDisplayLetter()