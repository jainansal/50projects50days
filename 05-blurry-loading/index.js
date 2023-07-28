let loader=1
const loaderText = document.querySelector('.blurry h1')

window.addEventListener('load', () => {
  const countdown = setInterval(() => {
    loader += 1
    loaderText.innerHTML = loader + '%'
    if(loader == 99) {
      loaderText.innerHTML = ''
      clearInterval(countdown)
    }
  }, 25)
})