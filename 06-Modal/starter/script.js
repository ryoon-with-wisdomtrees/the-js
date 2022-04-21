'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnShowModal = document.querySelectorAll('.show-modal'); //NodeList
const btnCloseModal = document.querySelector('.close-modal');

const openModal = () => {
  console.log('btn clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = () => {
  console.log('btn clicked');
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnShowModal.forEach(showModal => {
  showModal.addEventListener('click', openModal);
});

btnCloseModal.addEventListener('click', closeModal);

// btnShowModal.forEach(showModal => {
//   showModal.addEventListener('click', function () {
//     // console.log(this);
//     // // modal.style.display = 'block';
//     modal.classList.remove('hidden');
//     overlay.classList.remove('hidden');
//   });
// });

// btnCloseModal.addEventListener('click', function () {
//   overlay.classList.add('hidden');
//   modal.classList.add('hidden');
// });

//keydown keyup keypress
document.addEventListener('keydown', function (ev) {
  //   console.table(ev);
  //   Object.entries(ev).forEach(element => {
  //     console.log(element);
  //   });
  //console.log(Object.keys(ev));
  console.log(`ev.key: ${ev.key}, typeof ev.key: ${ev.key}`);

  // Object에 활용할 함수가 많다.
  // 이강의는 정석으로 정주행하는게 좋다.
  ev.key === 'Escape' && !modal.classList.remove('hidden') && closeModal();
});

//Dom munipulations
