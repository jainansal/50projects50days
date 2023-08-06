const inputBox = document.querySelector('#choice-input')
const choiceDiv = document.querySelector('.choices')

const makeDiv = (val) => {
  if(val) {
    const newDiv = document.createElement('div')
    newDiv.innerHTML = val
    newDiv.classList.add('choice')
    choiceDiv.appendChild(newDiv)
  }
}

const updateChoices = () => {
  const val = inputBox.value
  choiceDiv.innerHTML = ''

  let prev=''
  for(const c of val) {
    if(c!==',') {
      prev=prev+c
    } else {
      makeDiv(prev.trim())
      prev=''
    }
  }
  makeDiv(prev.trim())
}

const randomize = (count) => {
  console.log(count)
  const choiceDivs = document.querySelectorAll('.choice')
  const randomDiv = choiceDivs[choiceDivs.length * Math.random() | 0]
  randomDiv.classList.add('chosen')
  if(count) {
    setTimeout(() => {
      randomDiv.classList.remove('chosen')
      randomize(count-1)
    }, 50)
  }
} 

inputBox.addEventListener("keyup", (ev) => {
  if(ev.key === 'Enter') {
    randomize(20)
    inputBox.value = ""
  } else {
    setTimeout(() => {
      updateChoices()
    }, 100)
  }
})