let profilePopup = document.querySelector('.profile-popup');
let popupCloseButton = document.querySelector('.popup__close-btn');
let editButton = document.querySelector('.profile__edit-btn');
let popupForm = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__input_type_name');
let profileName = document.querySelector('.profile__title');
let aboutInput = document.querySelector('.popup__input_type_about');
let profileAbout = document.querySelector('.profile__subtitle');
let popupCard = document.querySelector('.popup-card');
let popupCloseButton2 = document.querySelector('.popup-card__close-btn');
let editButton2 = document.querySelector('.profile__add-btn');
let popupForm2 = document.querySelector('.popup-card__form');
let nameInput2 = document.querySelector('.popup-card__input_type_name');
let aboutInput2 = document.querySelector('.popup-card__input_type_about');
let cardTitle = document.querySelector('.card__title');
let cardImage = document.querySelector('.card__image');
let popup = document.querySelectorAll('.popup');

function openPopup(index){
  popup[index].classList.add("popup_opened");
  nameInput.value = profileName.textContent;
  aboutInput.value = profileAbout.textContent;
}

editButton.addEventListener( 'click', ()=> openPopup(0) );
editButton2.addEventListener( 'click', ()=> openPopup(1) );

function closePopup(index){
  popup[index].classList.remove("popup_opened");
}

popupCloseButton.addEventListener( 'click', ()=> closePopup(0) );
popupCloseButton2.addEventListener( 'click', ()=> closePopup(1) );

function submitForm(event) {
  event.preventDefault();
  profileName.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;
  document.querySelector('.popup__form').reset();

  closePopup(0);
}

function submitForm2(event2) {
  event2.preventDefault();
  closePopup(1);
}

popupForm.addEventListener('submit', submitForm);
popupForm2.addEventListener('submit', submitForm2);


let initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  },
];

const LikeButton = (e) => {
  e.target.classList.toggle('card__like-btn_active');
}

function deleteButton() {
  document.querySelectorAll('.card__elements').forEach(b=>b.addEventListener('click', e => {
    if (e.target.matches('.card__delete-btn'))
      e.target.closest('.card__elements').remove()
  }))
}

let placesContainer = document.querySelector(".card__container");
let placeTemplate = document.querySelector("#place-template").content;
let myImg = document.querySelectorAll('myImg');
let getAlt = document.querySelectorAll('.card__image');
let placeInfo = initialCards.map(function (item) {
  return {
    link: item.link,
    name: item.name
  };
});

function render() {
  placeInfo.forEach(renderCard);
}

// Создание карточек из начального массива

function renderCard({ name, link }) {
  let placeElement = placeTemplate.querySelector(".card__elements").cloneNode(true);
  placeElement.querySelector(".card__title").textContent = name;
  placeElement.querySelector(".card__image").src = link;
  placesContainer.prepend(placeElement);
  let alt = document.querySelector('#myImg');
  alt.setAttribute('alt', name);
  placeElement.querySelector('.card__like-btn').addEventListener('click', LikeButton);
  placeElement.querySelector('.card__delete-btn').addEventListener('click', deleteButton);
}

render();


// Создание новой карточки
let cardElement = placeTemplate.querySelector(".card__elements");

function createCard() {
  val = document.querySelector('#el1').value;
  val2 = document.querySelector('#el2').value;
  cardElement.querySelector(".card__title").textContent = val;
  cardElement.querySelector(".card__image").src = val2;
  cardElement.querySelector('.card__like-btn').addEventListener('click', LikeButton);
  cardElement.querySelector('.card__delete-btn').addEventListener('click', deleteButton);
  return cardElement
}

function doomCard() {
  createCard();
  placesContainer.prepend(cardElement);
  let alt = document.querySelector('#myImg'); 
  alt.setAttribute('alt', val);
  console.log(alt);
  document.querySelector('.popup-card__form').reset();

// Открытие картинки

 let openImge = document.querySelectorAll('.card__open-img');
 let CloseButtonImg = document.querySelector('.mod__close-btn');
 let editImg = document.querySelectorAll('.card__image');
 let popImg = document.querySelector('.mod');
 let getA = document.querySelectorAll('.card__image');
 let images = document.querySelectorAll('.card__image');
 let elem = document.getElementById('caption');

 editImg.forEach(b => {
   b.addEventListener('click', openImg);
 })
 
 function openImg() {
   popImg.classList.add('modal')
   popImg.style.display = "flex";
   popImg.style.position = "fixed";
 }
 
 function closeImg() {
   popImg.classList.remove('modal')
   popImg.style.display = "none";
   popImg.style.position = "absolute";
 }
 CloseButtonImg.addEventListener('click', closeImg);
 
 getA.forEach(bt => {
   bt.addEventListener('click', () => {
     let caI = bt.getAttribute('src');
     img1Src = caI;
     let imgElem = document.getElementById('im');
     imgElem.src = img1Src;
   });
 });
 
 images.forEach(function (image) {
   image.addEventListener('click', function () {
     elem.innerHTML = image.getAttribute('alt');
   });
 });
}

popupForm2.addEventListener('submit', doomCard);

// Открытие картинки

let openImge = document.querySelectorAll('.card__open-img');
let CloseButtonImg = document.querySelector('.mod__close-btn');
let editImg = document.querySelectorAll('.card__image');
let popImg = document.querySelector('.mod');
let getA = document.querySelectorAll('.card__image');
let images = document.querySelectorAll('.card__image');
let elem = document.getElementById('caption');

editImg.forEach(b => {
  b.addEventListener('click', openImg);
})

function openImg() {
  popImg.classList.add('modal')
  popImg.style.display = "flex";
  popImg.style.position = "fixed";
}

function closeImg() {
  popImg.classList.remove('modal')
  popImg.style.display = "none";
  popImg.style.position = "absolute";
}
CloseButtonImg.addEventListener('click', closeImg);

getA.forEach(bt => {
  bt.addEventListener('click', () => {
    let caI = bt.getAttribute('src');
    img1Src = caI;
    let imgElem = document.getElementById('im');
    imgElem.src = img1Src;
  });
});

images.forEach(function (image) {
  image.addEventListener('click', function () {
    elem.innerHTML = image.getAttribute('alt');
  });
});

