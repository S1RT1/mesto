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
const popup = document.querySelectorAll('.popup');


function openPopup(index){
  popup[index].classList.add("popup_opened");
  nameInput.value = profileName.textContent;
  aboutInput.value = profileAbout.textContent;
}

editButton.addEventListener( 'click', ()=> openPopup(0) );
editButtonProfile.addEventListener( 'click', ()=> openPopup(1) );

function closePopup(index){
  popup[index].classList.remove("popup_opened");
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

const LikeButton = (e) => {
  e.target.classList.toggle('card__like-btn_active');
}

let massOld = document.getElementById('products');

  function createCard() {
    let massCards = '';
    initialCards.forEach(({name, link}) => {
      massCards += `
      <li class='card__elements'>
        <img class='card__image' src="${link}" alt='${name}' />
        <div class='card__info'>
          <h2 class='card__title'>${name}</h2>
          <button class='card__like-btn rst-btn like'></button>
        </div>
        <button class='card__delete-btn rst-btn" type="button'></button>
      </li>
    `;
});

  let html = `
    <ul id='ul' class='card__container'>
      ${massCards}
    </ul>
  `;
  return html
}
  
function doomCard() {
  createCard();
  let card = createCard();
  massOld.insertAdjacentHTML("beforeend", card);
  likeButton();
  deleteButton();
  cardImg();
}
doomCard();





// Новая карточка
let massNew = document.getElementById('ul');

function newCard(name, link) {
  let massCardsNew = '';
  name = document.querySelector('#el1').value;
  link = document.querySelector('#el2').value;

  massCardsNew += `
    <li class='card__elements'>
      <img class='card__image' src="${link}" alt='${name}' />
      <div class='card__info'>
        <h2 class='card__title'>${name}</h2>
        <button class='card__like-btn rst-btn like'></button>
      </div>
      <button class='card__delete-btn rst-btn" type="button'></button>
    </li>
  `;
  return massCardsNew
}

function doomNew() {
  newCard();
  let cardNew = newCard();
  massNew.insertAdjacentHTML("afterbegin", cardNew);
  likeButton()
  deleteButton()
  cardImg()
}

popupFormProfile.addEventListener('submit', doomNew);

function likeButton() {
 let placeElement = document.querySelectorAll('.card__like-btn');
  placeElement.forEach(b => {
  b.addEventListener('click', LikeButton);
})
}

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