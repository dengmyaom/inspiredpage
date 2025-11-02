const bars      = document.querySelector('.bars');
const navLinks  = document.querySelector('.links');
const links     = document.querySelectorAll('.links li a');

const close     = document.querySelectorAll('.close');

bars.addEventListener('click', () => navLinks.classList.toggle('show'))

const hideForms = (id) => {
    document.querySelector('.signin').classList.remove('active')
    document.querySelector('.signup').classList.remove('active')
}

const showForms = (id) => {
    hideForms();
    document.querySelector(`.${id}`).classList.add('active')
}

close.forEach((a) => a.addEventListener('click', () => hideForms()))

links.forEach((a) => a.addEventListener('click', (e) => {
    e.preventDefault()
    e.target.id === "" ? hideForms() : showForms(e.target.id)
}))