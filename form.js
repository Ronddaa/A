document.querySelector('#mainConsultationHeaderBtn').addEventListener('click', function(){
    document.querySelector('#wrapperFormWindow').classList.add('openModalWindow')
})
document.querySelector('#mainConsultationBtn2').addEventListener('click', function(){
    document.querySelector('#wrapperFormWindow').classList.add('openModalWindow')
})
document.querySelector('#reservedBtn').addEventListener('click', function(){
    document.querySelector('#wrapperFormWindow').classList.add('openModalWindow')
})
document.querySelector('#formBtn').addEventListener('click', function(){
    document.querySelector('#wrapperFormWindow').classList.add('openModalWindow')
})

document.querySelector('#closeBtnID').addEventListener('click', function(){
    document.querySelector('#wrapperFormWindow').classList.remove('openModalWindow')
})
document.querySelector('.wrapperFormWindow').addEventListener('click', function(event){
    // Проверяем, является ли целевой элемент wrapperFormWindow
    if (event.target.classList.contains('wrapperFormWindow')) {
        // Удаляем класс openModalWindow, чтобы закрыть модальное окно
        this.classList.remove('openModalWindow');
    }
});

document.querySelector('#burgerMenu').addEventListener('click', function(){
    document.querySelector('#wrapperBurgerMenu').classList.add('openBurgerMenu')
})
document.querySelector('#closeBurgerBtn').addEventListener('click', function(){
    document.querySelector('#wrapperBurgerMenu').classList.remove('openBurgerMenu')
})

document.querySelector('#closeAnchor1').addEventListener('click', function(){
    document.querySelector('#wrapperBurgerMenu').classList.remove('openBurgerMenu')
})
document.querySelector('#closeAnchor2').addEventListener('click', function(){
    document.querySelector('#wrapperBurgerMenu').classList.remove('openBurgerMenu')
})
document.querySelector('#closeAnchor3').addEventListener('click', function(){
    document.querySelector('#wrapperBurgerMenu').classList.remove('openBurgerMenu')
})
document.querySelector('#closeAnchor4').addEventListener('click', function(){
    document.querySelector('#wrapperBurgerMenu').classList.remove('openBurgerMenu')
})
document.querySelector('#closeAnchor5').addEventListener('click', function(){
    document.querySelector('#wrapperBurgerMenu').classList.remove('openBurgerMenu')
})
document.querySelector('#closeAnchor6').addEventListener('click', function(){
    document.querySelector('#wrapperBurgerMenu').classList.remove('openBurgerMenu')
})
document.querySelector('#closeAnchor7').addEventListener('click', function(){
    document.querySelector('#wrapperBurgerMenu').classList.remove('openBurgerMenu')
})