
const guesses = document.querySelector('.guesses')
const guessBtn = document.querySelector('#submit')
const letter1 = document.querySelector('.letter1')
const letter2 = document.querySelector('.letter2')
const letter3 = document.querySelector('.letter3')
const letter4 = document.querySelector('.letter4')
const letter5 = document.querySelector('.letter5')

const yellow = 'rgb(181, 159, 59)'
const green = 'rgb(83, 141, 78)'

let currentGuess = ''
let currentAnswer = ['s', 't', 'o', 'n', 'e']


guesses.addEventListener('input', function(e){
    if ( e.target.value !== "" && e.target.nextElementSibling && e.target.nextElementSibling.nodeName === "INPUT" ){

        e.target.nextElementSibling.focus();
    
      } else if (e.target.value === "" && e.target.previousElementSibling && e.target.previousElementSibling.nodeName === "INPUT") {
        
        e.target.previousElementSibling.focus();

      }
}) 

// if (letter1.value !== '' && letter2.value !== '' && letter3.value !== '' && letter4.value !== '' && letter5.value !== '') {
    guessBtn.addEventListener('click', submitGuess)
// }


function submitGuess () {
  if (letter1.disabled !== true, letter2.disabled !== true, letter3.disabled !== true, letter4.disabled !== true, letter5.disabled !== true)
  console.log(letter1.value + letter2.value + letter3.value + letter4.value + letter5.value )
  letter1.disabled = true
  letter2.disabled = true
  letter3.disabled = true
  letter4.disabled = true
  letter5.disabled = true
  checkAnswer()
}

function checkAnswer() {
  if (letter1.value === currentAnswer[0] ) {
    letter1.style.backgroundColor = green
  }
  if (letter2.value === currentAnswer[1] ) {
    letter2.style.backgroundColor = green
  }
  if (letter3.value === currentAnswer[2] ) {
    letter3.style.backgroundColor = green
  }
  if (letter4.value === currentAnswer[3] ) {
    letter4.style.backgroundColor = green
  }
  if (letter5.value === currentAnswer[4] ) {
    letter5.style.backgroundColor = green
  } else {
  currentAnswer.forEach((answerLetter) => {
      if (letter1.value === answerLetter ) {
        letter1.style.backgroundColor = yellow
      }
      if (letter2.value === answerLetter ) {
        letter2.style.backgroundColor = yellow
      }
      if (letter3.value === answerLetter ) {
        letter3.style.backgroundColor = yellow
      }
      if (letter4.value === answerLetter ) {
        letter4.style.backgroundColor = yellow
      }
      if (letter5.value === answerLetter ) {
        letter5.style.backgroundColor = yellow
    }
  })
}
}


