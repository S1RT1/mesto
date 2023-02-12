let popup = document.querySelector('.popup');
let popupCloseButton = document.querySelector('.popup__close-btn');
let editButton = document.querySelector('.profile__edit-btn');
let popupForm = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__input_type_name');
let profileName = document.querySelector('.profile__title');
let aboutInput = document.querySelector('.popup__input_type_about');
let profileAbout = document.querySelector('.profile__subtitle');

function openPopup() {
  popup.style.opacity = "1";
  popup.style.height = "auto";

  nameInput.value = profileName.textContent;
  aboutInput.value = profileAbout.textContent;
}

function closePopup() {
  popup.style.opacity = "0";
  setTimeout(function () {
    popup.style.height = '0';
  }, 1000);
}

editButton.addEventListener('click', openPopup);

popupCloseButton.addEventListener('click', closePopup);

function submitForm(event) {
  event.preventDefault();
  profileName.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;
  closePopup();
}

popupForm.addEventListener('submit', submitForm);


// popup create card

let popup2 = document.querySelector('.popup-card');
let popupCloseButton2 = document.querySelector('.popup-card__close-btn');
let editButton2 = document.querySelector('.profile__add-btn');
let popupForm2 = document.querySelector('.popup-card__form');
let nameInput2 = document.querySelector('.popup-card__input_type_name');
let aboutInput2 = document.querySelector('.popup-card__input_type_about');
let cardTitle = document.querySelector('.card__title');
let cardImage = document.querySelector('.card__image');

function openPopu2() {
  popup2.style.opacity = "1";
  popup2.style.height = "auto";
}

function closePopu2() {
  popup2.style.opacity = "0";
  setTimeout(function () {
    popup2.style.height = '0';
  }, 1000);
}

editButton2.addEventListener('click', openPopu2);

popupCloseButton2.addEventListener('click', closePopu2);

function submitForm2(event2) {
  event2.preventDefault();
  closePopu2();
}

popupForm2.addEventListener('submit', submitForm2);


// create massive

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

let placesContainer = document.querySelector(".card__container");
let placeTemplate = document.querySelector("#place-template").content;
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

function renderCard({ name, link }) {
  let placeElement = placeTemplate.querySelector(".card__elements").cloneNode(true);
  placeElement.querySelector(".card__title").textContent = name;
  placeElement.querySelector(".card__image").src = link;
  placesContainer.prepend(placeElement);
  let alt = document.getElementById('myImg');
  alt.setAttribute('alt', name);
}

render();


// like massive

let like = document.querySelectorAll('.like');

like.forEach(like => {
  like.addEventListener('click', function () {
    if (like.classList.contains('card__like-btn')) {
      like.classList.add('card__like-btn_active')
      like.classList.remove('card__like-btn')
    } else {
      like.classList.add('card__like-btn')
      like.classList.remove('card__like-btn_active')
    }
  })
})


// new card


function saveBut(val, val2) {
  val = document.getElementById('el1').value;
  val2 = document.getElementById('el2').value;
  let arr = {};
  let name = "name";
  let vl = val;
  arr[name] = vl;
  let arr2 = {};
  let name2 = "link";
  let vl2 = val2;
  arr2[name2] = vl2;
  let object = { ...arr, ...arr2 };
  initialCards.push(object);


  let elements = document.getElementsByClassName("card__elements");
  while (elements.length > 0) {
    elements[0].parentNode.removeChild(elements[0]);
  }


  let placesContainer = document.querySelector(".card__container");
  let placeTemplate = document.querySelector("#place-template").content;
  let placeInfo = initialCards.map(function (item) {
    return {
      link: item.link,
      name: item.name
    };
  });

  function render() {
    placeInfo.forEach(renderCard);
  }

  function renderCard({ name, link }) {
    let placeElement = placeTemplate.querySelector(".card__elements").cloneNode(true);
    placeElement.querySelector(".card__title").textContent = name;
    placeElement.querySelector(".card__image").src = link;
    placesContainer.prepend(placeElement);
    let alt = document.getElementById('myImg');
    alt.setAttribute('alt', name);
  }

  render();


  let like = document.querySelectorAll('.like');

  like.forEach(like => {
    like.addEventListener('click', function () {
      if (like.classList.contains('card__like-btn')) {
        like.classList.add('card__like-btn_active')
        like.classList.remove('card__like-btn')
      } else {
        like.classList.add('card__like-btn')
        like.classList.remove('card__like-btn_active')
      }
    })
  })


  // delete card

  let cardDeleteBtn = document.querySelectorAll('.card__delete-btn');
  cardDeleteBtn.forEach(btn => {
    btn.addEventListener('click', () => {
      let cartItem = btn.closest('.card__elements');
      cartItem.parentNode.removeChild(cartItem);
    });
  });

  
  let CloseButtonImg = document.querySelector('.mod__close-btn');
  let editImg = document.querySelectorAll('.card__image');
  let popImg = document.querySelector('.mod');

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


  let getA = document.querySelectorAll('.card__image');

  getA.forEach(bt => {
    bt.addEventListener('click', () => {
      let caI = bt.getAttribute('src');
      img1Src = caI;
      let imgElem = document.getElementById('im');
      imgElem.src = img1Src;
    });
  });

  let images = document.querySelectorAll('.card__image');
  let elem = document.getElementById('caption');

  images.forEach(function (image) {
    image.addEventListener('click', function () {
      elem.innerHTML = image.getAttribute('alt');
    });
  });
}

let saveButton = document.querySelector('.popup-card__btn');

saveButton.addEventListener('click', saveBut);


let cardDeleteBtn = document.querySelectorAll('.card__delete-btn');

cardDeleteBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    let cartItem = btn.closest('.card__elements');
    cartItem.parentNode.removeChild(cartItem);
  });
});


let openImge = document.querySelectorAll('.card__open-img');
let CloseButtonImg = document.querySelector('.mod__close-btn');
let editImg = document.querySelectorAll('.card__image');
let popImg = document.querySelector('.mod');

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


let getA = document.querySelectorAll('.card__image');

getA.forEach(bt => {
  bt.addEventListener('click', () => {
    let caI = bt.getAttribute('src');
    img1Src = caI;
    let imgElem = document.getElementById('im');
    imgElem.src = img1Src;
  });
});


let images = document.querySelectorAll('.card__image');
let elem = document.getElementById('caption');

images.forEach(function (image) {
  image.addEventListener('click', function () {
    elem.innerHTML = image.getAttribute('alt');
  });
});