const button = document.querySelector('.button');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal');
const video = document.getElementById('video');
const videoLink = video.src;

function toggleModal () {
    modal.classList.toggle('open');
};

button.addEventListener('click', () => {
    toggleModal();
    video.setAttribute('src', videoLink);
});

closeModal.addEventListener('click', () => {
    toggleModal();
    video.setAttribute('src', '');
});