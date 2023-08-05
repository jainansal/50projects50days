const container = document.querySelector('.questions')

const faqs = 
[
  {
    question: "Why shouldn't we trust atoms?",
    answer: "They make up everything."
  },
  {
    question: "What do you call someone with no body and no nose?",
    answer: "Nobody knows."
  },
  {
    question: "What is the object-oriented way to become wealthy?",
    answer: "Inheritance."
  },
  {
    question: "How many tickles does it take to tickle an octopus?",
    answer: "Ten-tickles!"
  },
  {
    question: "What is: 1 + 1?",
    answer: "Depends on who are you asking."
  }
]

const pushElement = (question, answer) => {
  // Step 1: Create the main container element with class "item"
  const containerElement = document.createElement("div");
  containerElement.classList.add("item");

  // Step 2: Create the "text" div element with class "text"
  const textDiv = document.createElement("div");
  textDiv.classList.add("text");

  // Step 3: Create the question paragraph with id "question"
  const questionParagraph = document.createElement("p");
  questionParagraph.setAttribute("id", "question");
  questionParagraph.textContent = question;
  textDiv.appendChild(questionParagraph);

  // Step 4: Create the answer paragraph with id "answer" and class "hidden"
  const answerParagraph = document.createElement("p");
  answerParagraph.setAttribute("id", "answer");
  answerParagraph.classList.add("hidden");
  answerParagraph.textContent = answer;
  textDiv.appendChild(answerParagraph);

  containerElement.appendChild(textDiv);

  // Step 5: Create the caret icon with class "fa-solid fa-caret-down"
  const caretIcon = document.createElement("i");
  caretIcon.classList.add("fa-solid", "fa-caret-down");
  containerElement.appendChild(caretIcon);

  // Step 6: Create the close icon with class "fa-solid fa-circle-xmark hidden close"
  const closeIcon = document.createElement("i");
  closeIcon.classList.add("fa-solid", "fa-circle-xmark", "hidden", "close");
  containerElement.appendChild(closeIcon);

  // Step 8: Append the main container element to the existing container on the page
  container.appendChild(containerElement);
}

for(const details of faqs) {
  pushElement(details.question, details.answer)
}

const items = document.querySelectorAll('.item')
const closeBtns = document.querySelectorAll('.close')


for(const btn of closeBtns) {
  btn.addEventListener("click", (ev) => {
    ev.stopPropagation()
    const item = btn.parentElement
    item.classList.remove('expanded')
    item.querySelector('#answer').classList.add('hidden')
    item.querySelectorAll('i')[0].classList.remove('hidden')
    item.querySelectorAll('i')[1].classList.add('hidden')
  })
}

for(const item of items) {
  if(!item.classList.contains("expanded")) {
    item.addEventListener("click", () => {
      item.classList.add('expanded')
      item.querySelector('#answer').classList.remove('hidden')
      item.querySelectorAll('i')[0].classList.add('hidden')
      item.querySelectorAll('i')[1].classList.remove('hidden')
    })
  }
}