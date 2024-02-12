let offsetProgramDesc = 0

const wrapperPDesc = document.querySelector('.swiper-wrapperPDesc');

document.querySelector('#btnSlideProgramNextDesc').addEventListener('click', function () {
    offsetProgramDesc -= 400;   
    if (offsetProgramDesc < -5224) {
        offsetProgramDesc = 0
    }
    wrapperPDesc.style.left = offsetProgramDesc + 'px'
});
document.querySelector('#btnSlideProgramPrevDesc').addEventListener('click', function () {
    offsetProgramDesc += 400;  
    if (offsetProgramDesc > 0) {
        offsetProgramDesc = -5224
    }
    wrapperPDesc.style.left = offsetProgramDesc + 'px'
});