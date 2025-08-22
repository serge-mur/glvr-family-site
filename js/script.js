document.addEventListener('DOMContentLoaded', () => {

    const questions = document.querySelectorAll('.faq__question');
    questions.forEach(question => {
        question.addEventListener('click', function() {
            this.classList.toggle('faq__question_active');
            this.nextElementSibling.classList.toggle('faq__answer_show');
        });
    });
    
});