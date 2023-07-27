let rotated=false;
const navButton = document.querySelector('.nav-btn');
const articlePage = document.querySelector('.article-page');

navButton.addEventListener('click', () => {
  if(!rotated) {
    articlePage.classList.add('rotate-article');
    navButton.classList.add('rotate-nav');
    rotated=true;
  } else {
    articlePage.classList.remove('rotate-article');
    navButton.classList.remove('rotate-nav');
    rotated=false;
  }
})