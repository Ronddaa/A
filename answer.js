document.querySelector('#answer1').addEventListener('click', function() {
    const pElement = document.querySelector('.wrapperFrstAnserList');
    if (!pElement.classList.contains('openAnswer')) {
        pElement.classList.add('openAnswer');
    } else {
        pElement.classList.remove('openAnswer');
    }
});
document.querySelector('#answer2').addEventListener('click', function() {
    const pElement = document.querySelector('.wrapperScndAnswerList');
    if (!pElement.classList.contains('openAnswer')) {
        pElement.classList.add('openAnswer');
    } else {
        pElement.classList.remove('openAnswer');
    }
});
document.querySelector('#answer3').addEventListener('click', function() {
    const pElement = document.querySelector('.wrapperThdAnswerList');
    if (!pElement.classList.contains('openAnswer')) {
        pElement.classList.add('openAnswer');
    } else {
        pElement.classList.remove('openAnswer');
    }
});
document.querySelector('#answer4').addEventListener('click', function() {
    const pElement = document.querySelector('.wrapperFrthAnswerList');
    if (!pElement.classList.contains('openAnswer')) {
        pElement.classList.add('openAnswer');
    } else {
        pElement.classList.remove('openAnswer');
    }
});