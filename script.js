const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

// modal open function

function openModal(){
    console.log('modal is active');
    modal.classList.add('active');
    overlay.classList.add('overlayActive');
}

// close modal function

function closeModal(){
    console.log('modal is inactive');
    modal.classList.remove('active');
    overlay.classList.remove('overlayActive');
}