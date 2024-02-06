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