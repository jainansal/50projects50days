const jokeButton = document.querySelector('.button')
const jokeElement = document.querySelector('.joke')

const getJoke = async () => {
  let response = await fetch("https://v2.jokeapi.dev/joke/Any?type=single")
  let data = await response.json()
  console.log(data)
  return data.joke
}

jokeButton.addEventListener("click", async () => {
  const joke = await getJoke()
  jokeElement.innerHTML = joke
})