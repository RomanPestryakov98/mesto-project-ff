// @todo: Темплейт карточки
const templateCard = document.querySelector('#card-template').content;

// @todo: DOM узлы
const containerCards = document.querySelector('.places__list');

// @todo: Функция создания карточки
const createCard = (dataCard, removeCard) => {
    const card = templateCard.cloneNode(true);

    const cardImage = card.querySelector('.card__image');
    const cardTitle = card.querySelector('.card__title');
    const cardBtnDelete = card.querySelector('.card__delete-button');

    cardImage.src = dataCard.link;
    cardImage.alt = dataCard.name;
    cardTitle.textContent = dataCard.name;

    cardBtnDelete.addEventListener('click', removeCard); 

    return card;
}

// @todo: Функция удаления карточки
const removeCard = (e) => {
   e.target.closest('.card').remove();
}

// @todo: Вывести карточки на страницу
initialCards.forEach((dataCard) => {
    const card = createCard(dataCard, removeCard);
    containerCards.append(card);
})
