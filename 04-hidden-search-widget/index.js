const searchBtn = document.querySelector('.search-btn');
const searchInput = document.querySelector('.search-input')
let expanded=false;

searchBtn.addEventListener('click', () => {
  if(expanded) {
    searchInput.classList.remove('show');
    expanded=false;
  } else {
    searchInput.classList.add('show');
    searchInput.focus();
    expanded=true;
  }
});