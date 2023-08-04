const intro = document.querySelector('.container')
const details = document.querySelector('.details')
const key = document.querySelector('#event-key')
const keyCode = document.querySelector('#event-keycode')
const code = document.querySelector('#event-code')

window.addEventListener("keydown", (ev) => {
  intro.classList.add('hidden')
  key.innerHTML = ev.key
  keyCode.innerHTML = ev.keyCode
  code.innerHTML = ev.code
  details.classList.remove('hidden')
})