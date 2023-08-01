const soundBoard = document.querySelectorAll('.item')
let audio = new Audio('./assets/applause.mp3')

for(const button of soundBoard) {
  button.addEventListener('click', () => {
    audio.pause()
    audio = new Audio(`./assets/${button.innerHTML}.mp3`)
    audio.play()
  })
}