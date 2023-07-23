let prevSlide = document.querySelector('.slide');

for(const slide of document.querySelectorAll('.slide')) {
  slide.addEventListener('click', () => {
    prevSlide.classList.remove('active');
    slide.classList.add('active');
    prevSlide=slide;
  })
}