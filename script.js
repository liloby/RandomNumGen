const number = document.querySelector('.number')
const generate = document.querySelector('.buttons')

generate.addEventListener('click', GenerateNumber)


function GenerateNumber() {
  const random = Math.floor(Math.random() * (10 + 1))
  number.innerHTML = random
}

GenerateNumber()