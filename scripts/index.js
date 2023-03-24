const profilePopup = document.querySelector('.profile-popup');
const nameInput = document.querySelector('.popup__input_type_name');
const profileAbout = document.querySelector('.profile__subtitle');
const profileName = document.querySelector('.profile__title');
const aboutInput = document.querySelector('.popup__input_type_about');
const popupCards = document.querySelector('.popup-card'); 
const nameCardInput = document.querySelector('.popup-card__input_type_name');
const linkCardInput = document.querySelector('.popup-card__input_type_about');
const popupForm1 = document.querySelector('#create__card');
const editProfileButton = document.querySelector('.profile__edit-btn');
const popupCloseButton = profilePopup.querySelector('.close');
const popupForm = document.querySelector('.popup__form');
const addProfileButton = document.querySelector('.profile__add-btn');
const popupFormCard = document.querySelector('.popup-card__form');
const popupOpenImg = document.querySelector('.mod');
const closeImg = document.querySelector('.mod__close-btn');
const popupCloseButtonTwo = document.querySelector('.popup-card__close-btn');
const cardFrom = document.querySelector(".card__container");
const closeButtons = document.querySelectorAll('.popup__close');
const popupImg = document.querySelector('.mod__img-open');
const popupImgTitle = document.querySelector('.mod__title');

function openPopup(item) {
  item.classList.add('popup_opened');
}

function closePopup(item) {
  item.classList.remove('popup_opened');
}

editProfileButton.addEventListener('click', function() {
  nameInput.value = profileName.textContent;
  aboutInput.value = profileAbout.textContent;
  openPopup(profilePopup);
});

function submitForm(event) {
  event.preventDefault();
  profileName.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;
  popupForm.reset();
  closePopup(profilePopup);
}
popupForm.addEventListener('submit', submitForm);

function submitFormTwo(eventr) {
  eventr.preventDefault();
  handleNewCard();
  popupFormCard.reset();
  closePopup(popupCards);
}
popupFormCard.addEventListener('submit', submitFormTwo);

const initialCards = [
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

const placeTemplate = document.querySelector('#place-template').content;

function handleNewCard() {
    const newCard = createCard({ name: nameCardInput.value, link: linkCardInput.value });
    renderCard(newCard);
}

function passArray() {
  initialCards.forEach((item) => {
    const cardFor = createCard(item);
    renderCard (cardFor);
  });
}
passArray();
// создание карточки
function createCard(item) {
  const cardElement = placeTemplate.querySelector('.card__elements').cloneNode(true);
  cardElement.querySelector(".card__title").textContent = item.name;
  cardElement.querySelector(".card__image").src = item.link;
  cardElement.querySelector('.card__image').alt = item.name;
  cardElement.querySelector('.card__like-btn').addEventListener('click', likeCard);
  cardElement.querySelector('.card__delete-btn').addEventListener('click', deleteCard);
  cardElement.querySelector('.card__image').addEventListener('click', openImg);
  return cardElement
}
// карточки в DOM
function renderCard (c) {
  cardFrom.prepend(c);
}

addProfileButton.addEventListener('click', function() {
  openPopup(popupCards);
});
// Универсальный обработчик кнопок "Закрыть попап"
closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

function likeCard(evt) {
  evt.target.classList.toggle('card__like-btn_active');
}

function deleteCard(evt) {
  evt.currentTarget.closest('.card__elements').remove();
}

function openImg(evt) {
  popupImg.src = evt.currentTarget.closest('.card__image').src;
  popupImg.alt = evt.currentTarget.closest('.card__image').alt;
  popupImgTitle.textContent = evt.currentTarget.closest('.card__image').alt;
  openPopup(popupOpenImg);
}
