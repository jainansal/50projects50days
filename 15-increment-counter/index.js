const counters = document.querySelectorAll('.container .item h1')

for (const counter of counters) {
  counter.innerText = '0'
  const updateCounter = () => {
    const target = +counter.getAttribute('data-target')
    const c = +counter.innerText

    const increment = target / 200

    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`
      setTimeout(updateCounter, 1)
    } else {
      counter.innerText = target
    }
  }
  updateCounter()
}