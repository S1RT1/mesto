const profilePopup = document.querySelector('.profile-popup');
const popupCloseButton = document.querySelector('.popup__close-btn');
const editButton = document.querySelector('.profile__edit-btn');
const popupForm = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__input_type_name');
const profileName = document.querySelector('.profile__title');
const aboutInput = document.querySelector('.popup__input_type_about');
const profileAbout = document.querySelector('.profile__subtitle');
const popupCard = document.querySelector('.popup-card');
const popupCloseButtonTwo = document.querySelector('.popup-card__close-btn');
const editButtonProfile = document.querySelector('.profile__add-btn');
const popupFormProfile = document.querySelector('.popup-card__form');
const cardTitle = document.querySelector('.card__title');
const cardImage = document.querySelector('.card__image');
const popups = document.querySelectorAll('.popup');


function openPopup(index){
  popups[index].classList.add("popup_opened");
  nameInput.value = profileName.textContent;
  aboutInput.value = profileAbout.textContent;
}

editButton.addEventListener( 'click', ()=> openPopup(0) );
editButtonProfile.addEventListener( 'click', ()=> openPopup(1) );

function closePopup(index){
  popups[index].classList.remove("popup_opened");
}

popupCloseButton.addEventListener( 'click', ()=> closePopup(0) );
popupCloseButtonTwo.addEventListener( 'click', ()=> closePopup(1) );

function submitForm(event) {
  event.preventDefault();
  profileName.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;
  document.querySelector('.popup__form').reset();
  closePopup(0);
}

function submitFormTwo(eventr) {
  eventr.preventDefault();
  closePopup(1);
}

popupForm.addEventListener('submit', submitForm);
popupFormProfile.addEventListener('submit', submitFormTwo);


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

const lButton = (e) => {
  e.target.classList.toggle('card__like-btn_active');
}

// Создание изначальных карточек
let placesContainer = document.querySelector(".card__container");
let placeTemplate = document.querySelector("#place-template");

initialCards.forEach(({name, link}) => {
  let placeItem = placeTemplate.content.cloneNode(true);
  placeItem.querySelector('.card__title').textContent = name;
  placeItem.querySelector('.card__image').src = link;
  placeItem.querySelector('.card__image').alt = name;
  console.log(placeItem);
  placesContainer.append(placeItem);
});

likeButton();
deleteButton();
cardImg();

// Создание новой карточки
function createCard() {
  let valName = document.querySelector('#el1').value;
  let valLink = document.querySelector('#el2').value;
  let cardItem = placeTemplate.content.cloneNode(true);
  cardItem.querySelector('.card__title').textContent = valName;
  cardItem.querySelector('.card__image').src = valLink;
  cardItem.querySelector('.card__image').alt = valName;
  return cardItem
}

function doomCard() {
  createCard();
  let card = createCard();
  placesContainer.prepend(card);
  likeButton();
  deleteButton();
  cardImg();
  document.querySelector('.popup-card__form').reset();
}

popupFormProfile.addEventListener('submit', doomCard);

// Лайк карточки
function likeButton() {
  let placeElement = document.querySelectorAll('.card__like-btn');
   placeElement.forEach(b => {
   b.addEventListener('click', lButton);
 })
 }
 
 // Удаление карточки
 function deleteButton() {
   document.querySelectorAll('.card__delete-btn').forEach(c=>c.addEventListener('click', e => {
     if (e.target.matches('.card__delete-btn'))
       e.target.closest('.card__elements').remove('li')
   }))
 }
 
 // Открытие картинки
 function cardImg() {
   let elem = document.getElementById('caption');
   let CloseButtonImg = document.querySelector('.mod__close-btn');
   let editImg = document.querySelectorAll('.card__image');
 
   editImg.forEach(b => {
     b.addEventListener('click', ()=> openPopup(2));
   });
 
   CloseButtonImg.addEventListener('click', ()=> closePopup(2));
 
   document.querySelectorAll('.card__image').forEach(bt => {
   bt.addEventListener('click', () => {
     let caI = bt.getAttribute('src');
     img1Src = caI;
     let imgElem = document.getElementById('im');
     imgElem.src = img1Src;
   });
 });
 
 document.querySelectorAll('.card__image').forEach(t => {
   t.addEventListener('click', function () {
     elem.innerHTML = t.getAttribute('alt');
   });
 });
 
 };
