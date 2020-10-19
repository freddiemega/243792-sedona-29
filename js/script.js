//open hotel search form
var openFormButton = document.querySelector('.search-button');
var formBlock = document.querySelector('.search-hotels-form');

openFormButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  formBlock.classList.remove('search-hotels-error');
  formBlock.classList.toggle('search-hotels-hide');
  openFormButton.blur();
});


//plus minus buttons
var buttonMinusAdult = document.querySelector('.button-adults-minus');
var buttonPlusAdult = document.querySelector('.button-adults-plus');
var buttonMinusChild = document.querySelector('.button-childs-minus');
var buttonPlusChild = document.querySelector('.button-childs-plus');

buttonMinusAdult.addEventListener('click', function (evt) {
  evt.preventDefault();
  dec('adults-quantity');
});
buttonPlusAdult.addEventListener('click', function (evt) {
  evt.preventDefault();
  inc('adults-quantity');
});

buttonMinusChild.addEventListener('click', function (evt) {
  evt.preventDefault();
  dec('childs-quantity');
});
buttonPlusChild.addEventListener('click', function (evt) {
  evt.preventDefault();
  inc('childs-quantity');
});

function inc(nameInput) {
  var fieldForChange = document.querySelector('[name=\"' + nameInput + '\"]');
  if (parseInt(fieldForChange.value) >= 0 && parseInt(fieldForChange.value) < 99) {
  fieldForChange.value = parseInt(fieldForChange.value) + 1;
  }
}

function dec(nameInput) {
  var fieldForChange = document.querySelector('[name=\"' + nameInput + '\"]');
  if (parseInt(fieldForChange.value) > 0) {
    fieldForChange.value = parseInt(fieldForChange.value) - 1;
  }
}


//local storage
var tripStartField = document.querySelector('[name="trip-start"]');
var tripEndField = document.querySelector('[name="trip-end"]');
var numberAdult = document.querySelector('[name="adults-quantity"]');
var numberChild = document.querySelector('[name="childs-quantity"]');

var isStorageSupport = true;
var storageNumberAdult = "";
var storageNumberChild = "";

try {
  storageNumberAdult = localStorage.getItem("adults");
  storageNumberChild = localStorage.getItem("children");
} catch (err) {
  isStorageSupport = false;
}

if (storageNumberAdult && storageNumberChild) {
  numberAdult.value = storageNumberAdult;
  numberChild.value = storageNumberChild;
}


//form validation
formBlock.addEventListener("submit", function (evt) {
  if (!tripStartField.value || !tripEndField.value || !numberAdult.value || !numberChild.value || (numberAdult.value == 0 && numberChild.value == 0)) {
    evt.preventDefault();
    formBlock.classList.remove('search-hotels-error');
    formBlock.offsetWidth = formBlock.offsetWidth;
    formBlock.classList.add('search-hotels-error');
  } else {
    if (isStorageSupport) {
      localStorage.setItem("adults", numberAdult.value);
      localStorage.setItem("children", numberChild.value);
    }
  }
});
