var modalHandler = document.querySelector('.modal-toggle');
var modalNoButton = document.querySelector('.modal__action--negative');
var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var selectPlanButton = document.querySelectorAll(".plan button");



for(var i = 0; i < selectPlanButton.length; i++ ) {
    selectPlanButton[i].addEventListener('click', ()=> openModal());
}

modalHandler.addEventListener('click', () => openModal());

modalNoButton.addEventListener('click', () => closeModal());

backdrop.addEventListener('click', () => closeModal());

function openModal () {
    backdrop.style.display = 'block';
    modal.style.display = 'block';
}

function closeModal () {
    backdrop.style.display = 'none';
    modal.style.display = 'none';
}