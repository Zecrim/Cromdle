import { answerList } from "../modules/answerlist.js"
import { wordList } from "../modules/wordlist.js"

function $(cssSelector) {
  return document.querySelector(cssSelector)
}
function $$(cssSelector) {
  return document.querySelectorAll(cssSelector)
}
const modal = $('.modal-container')
const winModalEl = $('#win')
const loseModalEl = $('#lose')
const guesses = $('.guesses')
const startBtn = $('#start')
const againBtn = $('#again')
const tryAgainBtn = $('#try-again')
const inputs = $$('input')

const guessBtn = $('#submit')
const letters1 = $$('.letter1')
const letters2 = $$('.letter2')
const letters3 = $$('.letter3')
const letters4 = $$('.letter4')
const letters5 = $$('.letter5')
const letters6 = $$('.letter6')

let wins = 0
let turn = 0
let letters = ''
let letter1 = ''
let letter2 = ''
let letter3 = ''
let letter4 = ''
let letter5 = ''
const yellow = 'rgb(181, 159, 59)'
const green = 'rgb(83, 141, 78)'
const wallColor = 'rgb(38, 42, 48)'
let currentAnswer = ''

// Lets you type smoothly by putting focus on the next or previous element based on what you press
guesses.addEventListener('input', function(e){
    if ( e.target.value !== "" && e.target.nextElementSibling && e.target.nextElementSibling.nodeName === "INPUT" ){

        e.target.nextElementSibling.focus();
      }
}) 
guesses.addEventListener('keydown', function(e){
  if (e.key == "Backspace" && e.target.value === "" && e.target.previousElementSibling && e.target.previousElementSibling.nodeName === "INPUT") {
      
      e.target.previousElementSibling.focus();
    }
}) 
// lets you press the guess button with enter
guesses.addEventListener('keydown', function(e){
  if ( e.key == "Enter"){
    e.preventDefault
    guessBtn.click();
    }
}) 

//closes the start screen
function closeModal() {
  if (turn == 0) {turn++}
  modal.classList.remove('show')
}

//win screen
function winModal() {
  if (letter1 === currentAnswer[0] && letter2 === currentAnswer[1] && letter3 === currentAnswer[2] && letter4 === currentAnswer[3] && letter5 === currentAnswer[4]) {
    wins++
    winModalEl.classList.add('show')
}
}
function loseModal() {
  if (turn === 7) {loseModalEl.classList.add('show')}
}

//the function that gets played when you make a guess
function submitGuess() {
  assignLetters()
  wordList.forEach((word) => {
    if (letter1 + letter2 + letter3 + letter4 + letter5 === word) {
  checkAnswer()
  disableBoxes()
  if (turn <= 6) (turn++)
  }
  loseModal()
  })
}

//assigns the current guess to variables to be used
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

// disables the boxes so you can't type in them on the wrong turn
function disableBoxes() {
  if(turn === 1) {
    letters1.forEach((letter) => {letter.disabled = true})
    letters2.forEach((letter) => {letter.disabled = false})
  } if (turn === 2 || turn === 0) {
    letters2.forEach((letter) => {letter.disabled = true})
    letters3.forEach((letter) => {letter.disabled = false})
  } if (turn === 3 || turn === 0) {
    letters3.forEach((letter) => {letter.disabled = true})
    letters4.forEach((letter) => {letter.disabled = false})
  } if (turn === 4 || turn === 0) {
    letters4.forEach((letter) => {letter.disabled = true})
    letters5.forEach((letter) => {letter.disabled = false})
  } if (turn === 5 || turn === 0) {
    letters5.forEach((letter) => {letter.disabled = true})
    letters6.forEach((letter) => {letter.disabled = false})
  } if (turn === 6 || turn === 0) {
    letters6.forEach((letter) => {letter.disabled = true})
  }
}

function checkAnswer() {
    //chekcs to see if any yellow letters or green letters
    if (letter1 === currentAnswer[0] ) {
      letters[0].style.backgroundColor = green
    } else if (letter1 === currentAnswer[0] || letter1 === currentAnswer[1] || letter1 === currentAnswer[2] || letter1 === currentAnswer[3] || letter1 === currentAnswer[4]) {
      letters[0].style.backgroundColor = yellow
    }
    if (letter2 === currentAnswer[1] ) {
      letters[1].style.backgroundColor = green
    } else if (letter2 === currentAnswer[0] || letter2 === currentAnswer[1] || letter2 === currentAnswer[2] || letter2 === currentAnswer[3] || letter2 === currentAnswer[4]) {
      letters[1].style.backgroundColor = yellow
    }
    if (letter3 === currentAnswer[2] ) {
      letters[2].style.backgroundColor = green
    } else if (letter3 === currentAnswer[0] || letter3 === currentAnswer[1] || letter3 === currentAnswer[2] || letter3 === currentAnswer[3] || letter3 === currentAnswer[4]) {
      letters[2].style.backgroundColor = yellow
    }
    if (letter4 === currentAnswer[3] ) {
      letters[3].style.backgroundColor = green
    } else if (letter4 === currentAnswer[0] || letter4 === currentAnswer[1] || letter4 === currentAnswer[2] || letter4 === currentAnswer[3] || letter4 === currentAnswer[4]) {
      letters[3].style.backgroundColor = yellow
    }
    if (letter5 === currentAnswer[4] ) {
      letters[4].style.backgroundColor = green
    } else if (letter5 === currentAnswer[0] || letter5 === currentAnswer[1] || letter5 === currentAnswer[2] || letter5 === currentAnswer[3] || letter5 === currentAnswer[4]) {
      letters[4].style.backgroundColor = yellow
    }  
    winModal()//checks to see if you won
    }

  function init() {
    //starting the game
    reset()
    turn = 0
    letters = ''
    letter1 = ''
    letter2 = ''
    letter3 = ''
    letter4 = ''
    letter5 = ''
    disableBoxes()
    currentAnswer = answerList[Math.floor(Math.random() * answerList.length)].split('') // decides the current answer randomly
    winModalEl.classList.remove('show')
    loseModalEl.classList.remove('show')
    modal.classList.add('show')
  }

  function reset() {
    //re-enabling all the squares
    letters1.forEach((letter) => {letter.disabled = false})
    letters2.forEach((letter) => {letter.disabled = false})
    letters3.forEach((letter) => {letter.disabled = false})
    letters4.forEach((letter) => {letter.disabled = false})
    letters5.forEach((letter) => {letter.disabled = false})
    letters6.forEach((letter) => {letter.disabled = false})

    //clearing the letters
    letters1.forEach((letter) => {letter.value = ''})
    letters2.forEach((letter) => {letter.value = ''})
    letters3.forEach((letter) => {letter.value = ''})
    letters4.forEach((letter) => {letter.value = ''})
    letters5.forEach((letter) => {letter.value = ''})
    letters6.forEach((letter) => {letter.value = ''})

    //clearing the colors
    letters1.forEach((letter) => {letter.style.backgroundColor = wallColor})
    letters2.forEach((letter) => {letter.style.backgroundColor = wallColor})
    letters3.forEach((letter) => {letter.style.backgroundColor = wallColor})
    letters4.forEach((letter) => {letter.style.backgroundColor = wallColor})
    letters5.forEach((letter) => {letter.style.backgroundColor = wallColor})
    letters6.forEach((letter) => {letter.style.backgroundColor = wallColor})



    }

  init()
  startBtn.addEventListener('click', closeModal)
  guessBtn.addEventListener('click', submitGuess)
  againBtn.addEventListener('click', init)
  tryAgainBtn.addEventListener('click', init)
