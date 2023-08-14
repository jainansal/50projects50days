const toggle = document.querySelector('.control-btn')
const nav = document.querySelector('.nav')

toggle.addEventListener('click', () => {
  if(nav.classList.contains('active')) {
    nav.classList.remove('active')
  } else {
    nav.classList.add('active')
  }
})