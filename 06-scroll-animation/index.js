const leftDivs = document.querySelectorAll('.left')
const rightDivs = document.querySelectorAll('.right')
const scrollElements = document.querySelectorAll('.scroll')

window.addEventListener('load', () => {
  for(const div of leftDivs) {
    div.classList.remove('left')
  }
  for(const div of rightDivs) {
    div.classList.remove('right')
  }
  let index=0
  for(const element of scrollElements) {
    if(elInView(element)) {
      if(index%2) {
        element.classList.remove('left')
      } else {
        element.classList.remove('right')
      }
    } else {
      if(index%2) {
        element.classList.add('left')
      } else {
        element.classList.add('right')
      }
    }
    index += 1
  }
})

const elInView = (el) => {
  const elTop = el.getBoundingClientRect().bottom

  return elTop < window.innerHeight
}

const handleScroll = () => {
  let index=0
  for(const element of scrollElements) {
    if(elInView(element)) {
      if(index%2) {
        element.classList.remove('left')
      } else {
        element.classList.remove('right')
      }
    } else {
      if(index%2) {
        element.classList.add('left')
      } else {
        element.classList.add('right')
      }
    }
    index += 1
  }
}

window.addEventListener('scroll', () => {
  handleScroll()
})