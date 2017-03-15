const number = document.getElementById('count')
const incrementButton = document.getElementById('inc')
const decrementButton = document.getElementById('dec')

const ariaState = {
  count: 0,
}

const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
}

const increment = (event) => {
  ariaState.count += randomNumber(1,20)
  number.innerHTML = ariaState.count;
}

const decrement = (event) => {
  ariaState.count -= randomNumber(1,20)
  number.innerHTML = ariaState.count;
}

incrementButton.addEventListener('click', increment)
decrementButton.addEventListener('click', decrement)
