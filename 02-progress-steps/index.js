let currentStep=0;
let line=0;

const steps = document.querySelectorAll('.step');
const lines = document.querySelectorAll('.line');
steps[currentStep].classList.add('active');

const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');

const changeStyles = (buttonClicked) => {
  if(!currentStep) {
    prevBtn.classList.add('disabled');
  }
  if(currentStep === steps.length - 1) {
    nextBtn.classList.add('disabled');
  }

  if(buttonClicked === 'prev') {
    if(currentStep === steps.length - 2) {
      nextBtn.classList.remove('disabled');
    }
    steps[currentStep+1].classList.remove('active');
    lines[line].classList.remove('active-line');
  }
  if(buttonClicked === 'next') {
    if(currentStep === 1) {
      prevBtn.classList.remove('disabled');
    }
    steps[currentStep].classList.add('active');
    lines[line-1].classList.add('active-line');
  }
}

prevBtn.addEventListener('click', () => {
  if(currentStep) {
    currentStep--;
    line--;
    changeStyles('prev');
  }
});

nextBtn.addEventListener('click', () => {
  if(currentStep < steps.length - 1) {
    currentStep++;
    line++;
    changeStyles('next');
  }
})

changeStyles('prev');