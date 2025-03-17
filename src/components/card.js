// @todo: Темплейт карточки
const templateCard = document.querySelector('#card-template').content;

// @todo: Функция создания карточки
const createCard = (dataCard, removeCard, likeCard) => {
    const card = templateCard.cloneNode(true);

    const cardImage = card.querySelector('.card__image');
    const cardTitle = card.querySelector('.card__title');
    const cardBtnDelete = card.querySelector('.card__delete-button');
    const cardBtnLike = card.querySelector('.card__like-button');

    cardImage.src = dataCard.link;
    cardImage.alt = dataCard.name;
    cardTitle.textContent = dataCard.name;

    cardBtnDelete.addEventListener('click', removeCard); 
    cardBtnLike.addEventListener('click', likeCard); 

    return card;
}

// @todo: Функция удаления карточки
const removeCard = (e) => {
    e.target.closest('.card').remove();
}

// @todo: Функция лайка карточки
const likeCard = (evt) => {
    evt.target.classList.toggle('card__like-button_is-active');
}

export {createCard, removeCard, likeCard};