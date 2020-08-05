const modal = document.querySelector('.wrap');
const closeWindow = document.querySelector('span');
const showWindow = document.querySelector('button');

closeWindow.addEventListener('click', function () {
    modal.classList.add('hidden');
});
showWindow.addEventListener('click', function () {
    modal.classList.remove('hidden');
});

