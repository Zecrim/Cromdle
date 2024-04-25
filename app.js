import { answerList } from "./modules/answerlist.js"
import { wordList } from "./modules/wordlist.js"

function $(cssSelector) {
  return document.querySelector(cssSelector)
}
function $$(cssSelector) {
  return document.querySelectorAll(cssSelector)
}
const guesses = $('.guesses')
const guessBtn = $('#submit')
const letters1 = $$('.letter1')
const letters2 = $$('.letter2')
const letters3 = $$('.letter3')
const letters4 = $$('.letter4')
const letters5 = $$('.letter5')
const letters6 = $$('.letter6')

const wins = 0
let letters = ''
let letter1 = ''
let letter2 = ''
let letter3 = ''
let letter4 = ''
let letter5 = ''
const yellow = 'rgb(181, 159, 59)'
const green = 'rgb(83, 141, 78)'
let currentGuess = ['', '', '', '', '']
let currentAnswer = answerList[Math.floor(Math.random() * answerList.length)].split('')
console.log(currentAnswer)
let turn = 1

guesses.addEventListener('input', function(e){
    if ( e.target.value !== "" && e.target.nextElementSibling && e.target.nextElementSibling.nodeName === "INPUT" ){

        e.target.nextElementSibling.focus();
    
      } else if (e.target.value === "" && e.target.previousElementSibling && e.target.previousElementSibling.nodeName === "INPUT") {
        
        e.target.previousElementSibling.focus();

      }
}) 

    guessBtn.addEventListener('click', submitGuess)



function submitGuess () {
  assignLetters()
  wordList.forEach((word) => {
    if (letter1 + letter2 + letter3 + letter4 + letter5 === word) {
  console.log(letter1 + letter2 + letter3 + letter4 + letter5)
  checkAnswer()
  disableBoxes()
  if (turn < 6) (turn++)
  }
  })
}

function assignLetters() {
  if (turn === 1) {
    letter1 = letters1[0].value
    letter2 = letters1[1].value
    letter3 = letters1[2].value
    letter4 = letters1[3].value
    letter5 = letters1[4].value
    letters = letters1

  } else if (turn === 2) {
    letter1 = letters2[0].value
    letter2 = letters2[1].value
    letter3 = letters2[2].value
    letter4 = letters2[3].value
    letter5 = letters2[4].value
    letters = letters2

  } else if (turn === 3) {
    letter1 = letters3[0].value
    letter2 = letters3[1].value
    letter3 = letters3[2].value
    letter4 = letters3[3].value
    letter5 = letters3[4].value
    letters = letters3

  } else if (turn === 4) {
    letter1 = letters4[0].value
    letter2 = letters4[1].value
    letter3 = letters4[2].value
    letter4 = letters4[3].value
    letter5 = letters4[4].value
    letters = letters4

  } else if (turn === 5) {
    letter1 = letters5[0].value
    letter2 = letters5[1].value
    letter3 = letters5[2].value
    letter4 = letters5[3].value
    letter5 = letters5[4].value
    letters = letters5

  } else if (turn === 6) {
    letter1 = letters6[0].value
    letter2 = letters6[1].value
    letter3 = letters6[2].value
    letter4 = letters6[3].value
    letter5 = letters6[4].value
    letters = letters6
  }
}

function disableBoxes() {
  if(turn === 1) {
    letters1[0].disabled = true
    letters1[1].disabled = true
    letters1[2].disabled = true
    letters1[3].disabled = true
    letters1[4].disabled = true
  } else if (turn === 2) {
    letters2[0].disabled = true
    letters2[1].disabled = true
    letters2[2].disabled = true
    letters2[3].disabled = true
    letters2[4].disabled = true
  } else if (turn === 3) {
    letters3[0].disabled = true
    letters3[1].disabled = true
    letters3[2].disabled = true
    letters3[3].disabled = true
    letters3[4].disabled = true
  } else if (turn === 4) {
    letters4[0].disabled = true
    letters4[1].disabled = true
    letters4[2].disabled = true
    letters4[3].disabled = true
    letters4[4].disabled = true
  } else if (turn === 5) {
    letters5[0].disabled = true
    letters5[1].disabled = true
    letters5[2].disabled = true
    letters5[3].disabled = true
    letters5[4].disabled = true
  } else if (turn === 6) {
    letters6[0].disabled = true
    letters6[1].disabled = true
    letters6[2].disabled = true
    letters6[3].disabled = true
    letters6[4].disabled = true
  }
}

function checkAnswer() {
  // if (!letter1.disabled && !letter2.disabled && !letter3.disabled && !letter4.disabled && !letter5.disabled) {
    //chekcs to see if any yellow letters
    currentAnswer.forEach((answerLetter) => {
      if (letter1 === answerLetter ) {
        letters[0].style.backgroundColor = yellow
      }
      if (letter2 === answerLetter ) {
        letters[1].style.backgroundColor = yellow
      }
      if (letter3 === answerLetter ) {
        letters[2].style.backgroundColor = yellow
      }
      if (letter4 === answerLetter ) {
        letters[3].style.backgroundColor = yellow
      }
      if (letter5 === answerLetter ) {
        letters[4].style.backgroundColor = yellow
      }  
  })
  //checks to see if any green letters
    if (letter1 === currentAnswer[0] ) {
      letters[0].style.backgroundColor = green
    }
    if (letter2 === currentAnswer[1] ) {
      letters[1].style.backgroundColor = green
    }
    if (letter3 === currentAnswer[2] ) {
      letters[2].style.backgroundColor = green
    }
    if (letter4 === currentAnswer[3] ) {
      letters[3].style.backgroundColor = green
    }
    if (letter5 === currentAnswer[4] ) {
      letters[4].style.backgroundColor = green
      
    if (letter1 === currentAnswer[0] && letter2 === currentAnswer[1] && letter3 === currentAnswer[2] && letter4 === currentAnswer[3] && letter5 === currentAnswer[4]) {
      console.log('you win!')
      wins++
    }
  }
  }