import searchMultipleOccurrences from './searchMultipleOccurrences.js';

//this will receive all the button clicks
const input = (letter)=>{
  console.log(letter)
  //now check using regEx if letter is in word
  document.getElementById(letter).setAttribute('class','clicked')
  document.getElementById(letter).setAttribute('onclick',null)// so you cant click again

  var output = searchMultipleOccurrences(word,letter)
  if(output[0] == -1){//if no matches
    console.log('no results')
    return;
  }

  output.forEach((index)=>{
    console.log(index);
    document.querySelector(`#letters :nth-child(${index+1})`).innerText = letter;
  })
}

const randomWords = [
  'lion','toad','frog','giraffe','hippopotamus','monkey','dog','cat','mouse','crocodile','zebra','ostrich','lizard',
  'tiger','wolf','hyena','snake','cobra','panther','chicken','rooster','chipmunk','leopard','ant','fly','bear',
  'goat','sheep','cow','horse','donkey','deer','peacock','bird','bug','gorilla',
];

//set up
const word = randomWords[Math.floor(Math.random()*randomWords.length)];
console.log('the word is : ',word) //delete this for a real game so you cant cheat
var div = '<div></div>';
var htmlString = div.repeat(word.length);
document.getElementById('letters').innerHTML = htmlString;
document.querySelectorAll('#keyboard > *').forEach((element)=>{
  element.addEventListener("click",()=>{
    input(element.getAttribute('id'))
  })
})