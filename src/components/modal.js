const openPopup = (popup) => {
    popup.classList.add('popup_is-opened');
    document.addEventListener('keydown', handleCloseEsc);
    popup.addEventListener('mousedown', handleCloseOverlay);
}

const handleCloseEsc = (evt) => {
    if(evt.key === 'Escape') {
        const popup = searchOpenPopup();
        closePopup(popup);
    }
}

const handleCloseOverlay = (evt) => {
    const popup = searchOpenPopup();
    if(evt.target === popup) {
        closePopup(popup);
    }
}

const closePopup = (popup) => {
    popup.classList.remove('popup_is-opened');
    document.removeEventListener('keydown', handleCloseEsc);
    popup.removeEventListener('mousedown', handleCloseOverlay);
}

const searchOpenPopup = () => {
    return document.querySelector('.popup_is-opened');
}

export {openPopup, closePopup}; 