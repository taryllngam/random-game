const display = document.getElementById('display')
const btn = document.getElementById('btn')
const refresh = document.getElementById('refresh')

const number = (Math.floor(Math.random() * 100))
let clicks = 0

btn.addEventListener('click', function () {
  const input = document.getElementById('input').value
  if (input === number) {
    display.innerHTML = `YOU GUESSED RIGHT, YOUR NUMBER WAS ${number}`
    document.getElementById('display').style.color = 'white'
    document.querySelector('.container').style.background = 'green'
  } else if (input < number) {
    display.innerHTML = 'YOU GUESSED TOO LOW'
  } else {
    display.innerHTML = 'YOU GUESSED TOO HIGH'
  }
  clicks += 1
  if (clicks === 5) {
    btn.disabled = true
    display.innerHTML = 'YOU FAIL, PLEASE TRY AGAIN'
    document.getElementById('display').style.color = 'white'
    document.querySelector('.container').style.background = 'red'
  }
})

refresh.addEventListener('click', function () {
  location.reload()
})
