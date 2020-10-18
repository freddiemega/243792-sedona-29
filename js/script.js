//open hotel search form
var openFormButton = document.querySelector('.search-button');
var formBlock = document.querySelector('.search-hotels-form');

openFormButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  formBlock.classList.toggle('search-hotels-hide');
});
