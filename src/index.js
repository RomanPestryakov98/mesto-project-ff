import './pages/index.css'; 
import initialCards from './cards.js';
import {createCard, removeCard, likeCard} from './components/card.js';
import {openPopup, closePopup} from './components/modal.js';

// @todo: DOM узлы
const containerCards = document.querySelector('.places__list'); //Контейнер с карточками 
const popups = document.querySelectorAll('.popup'); //Все попапы 
const addButton = document.querySelector('.profile__add-button'); //Кнопка открытия попапа 
const popupNewCard = document.querySelector('.popup_type_new-card'); //Попап новой карточки
const editButton = document.querySelector('.profile__edit-button'); //Кнопка открытия попапа 
const popupEdit = document.querySelector('.popup_type_edit'); //Попап ред. профиля
const editForm = document.forms['edit-profile']; //Форма редактирования профиля
const addForm = document.forms['new-place']; //Форма редактирования профиля
const popupWithImage = document.querySelector('.popup_type_image'); //Попап картинки
const imagePopup = popupWithImage.querySelector('.popup__image');
const captionPopup = popupWithImage.querySelector('.popup__caption');

// @todo: функция формы изменения профиля
const handleFormSubmit = (evt) => {
    evt.preventDefault();
    const inputTitle = editForm.name;
    const inputDescription = editForm.description;

    const title = document.querySelector('.profile__title');
    const description = document.querySelector('.profile__description');

    title.textContent = inputTitle.value;
    description.textContent = inputDescription.value;

    editForm.reset();
    closePopup(popupEdit);
}

// @todo: функция формы добавляения карточки
const handleFormSubmitAddCard = (evt) => {
    evt.preventDefault();
    const inputName = addForm['place-name'];
    const inputLink = addForm.link;

    const card = createCard({name:inputName.value, link: inputLink.value}, removeCard);
    containerCards.prepend(card);
    addForm.reset();
    closePopup(popupNewCard);
}

// @todo: обработчик клика по картинке 
containerCards.addEventListener('click', (evt) => {
    if(evt.target.classList.contains('card__image')) {
        const src = evt.target.src;
        const alt = evt.target.alt;

        imagePopup.src = src;
        imagePopup.alt = alt;
        captionPopup.textContent = alt;
        openPopup(popupWithImage);
    } 
})


// @todo: обработчик открытия попап Добавления карточки  
addButton.addEventListener('click', () => {
    openPopup(popupNewCard)
})

// @todo: обработчик открытия попап Редактирования профиля  
editButton.addEventListener('click', () => {
    openPopup(popupEdit)

    const title = document.querySelector('.profile__title');
    const description = document.querySelector('.profile__description');

    editForm.name.value = title.textContent;
    editForm.description.value = description.textContent;
})

// @todo: обработчии формы
addForm.addEventListener('submit', handleFormSubmitAddCard); 
editForm.addEventListener('submit', handleFormSubmit); 

// @todo: обработчик закрытия попапов
popups.forEach(popup => {
    const crossClose = popup.querySelector('.popup__close');

    crossClose.addEventListener('click', () => {
        closePopup(popup);
    })
})

// @todo: Вывести карточки на страницу
initialCards.forEach((dataCard) => {
    const card = createCard(dataCard, removeCard, likeCard);
    containerCards.append(card);
})

