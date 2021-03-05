import searchMultipleOccurrences from './searchMultipleOccurrences.js';

const randomWords = [
  'lion','toad','frog','giraffe','hippopotamus','monkey','dog','cat','mouse','crocodile','zebra','ostrich','lizard',
  'tiger','wolf','hyena','snake','cobra','panther','chicken','rooster','chipmunk','leopard','ant','fly','bear',
  'goat','sheep','cow','horse','donkey','deer','peacock','bird','bug','gorilla',
]

//this will receive all the button clicks
const input = (letter)=>{
  console.log(letter)
  document.getElementById(letter).setAttribute('class','clicked')
  document.getElementById(letter).removeAttribute('onclick') //so you cant click again

  var output = searchMultipleOccurrences(word,letter)
  if(output[0] == -1){//if no matches
    console.log('no results')
    return
  }

  output.forEach((index)=>{
    console.log(index)
    document.querySelector(`#letters :nth-child(${index+1})`).innerText = letter
  })
}
window.input = input;//used to have it in global scope since now its in module scope

//set up
const word = randomWords[Math.floor(Math.random()*randomWords.length)]
console.log('the word is : ',word) //delete this for a real game so you cant cheat

//create the display letter divs
var div = '<div></div>'
var htmlString = div.repeat(word.length)
document.getElementById('letters').innerHTML = htmlString;