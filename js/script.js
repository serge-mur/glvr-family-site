document.addEventListener('DOMContentLoaded', () => {

    const headerBurger = document.querySelector('.header__burger');
    const mobMenu = document.querySelector('.mob-menu');
    headerBurger.addEventListener('click', () => {
        headerBurger.classList.toggle('header__burger_open');
        mobMenu.classList.toggle('mob-menu_open');
        document.querySelector('body').classList.toggle('remove-scrolling');
    });

    const questions = document.querySelectorAll('.faq__question');
    questions.forEach(question => {
        question.addEventListener('click', function() {
            this.classList.toggle('faq__question_active');
            this.nextElementSibling.classList.toggle('faq__answer_show');
        });
    });
    
});