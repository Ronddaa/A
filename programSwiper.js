let offset = 0;

const wrapperP = document.querySelector('.swiper-wrapperP');

document.querySelector('#btnSlideProgramNext').addEventListener('click', function () {
    offset -= 408;   
    if (offset < -1224) {
        offset = 0
    }
    wrapperP.style.left = offset + 'px'
});
document.querySelector('#btnSlideProgramPrev').addEventListener('click', function () {
    offset += 408;  
    if (offset > 0) {
        offset = -1224
    }
    wrapperP.style.left = offset + 'px'
});