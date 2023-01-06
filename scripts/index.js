let popup = document.querySelector('.popup');
let popupCloseButton = document.querySelector('.popup__close-btn');
let editButton = document.querySelector('.profile__edit-btn');
let popupForm = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__input_type_name');
let profileName = document.querySelector('.profile__title');
let aboutInput = document.querySelector('.popup__input_type_about');
let profileAbout = document.querySelector('.profile__subtitle');

function openPopup() {
    popup.classList.add('popup_opened')
    nameInput.value = profileName.textContent;
    aboutInput.value = profileAbout.textContent;
}

function closePopup() {
    popup.classList.remove('popup_opened')
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


let like = document.querySelectorAll('.like');

like.forEach(like => {
    like.addEventListener('click', function() {
        if(like.classList.contains('card__like-btn')) {
            like.classList.add('card__like-btn_active')
            like.classList.remove('card__like-btn')
        } else {
            like.classList.add('card__like-btn')
            like.classList.remove('card__like-btn_active')
        }
    })
})




