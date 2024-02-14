let offsetWillaDesc = 0;

const wrapperW = document.querySelector('.wrapperWDesc');

document.querySelector('#btnSlideWillaNextDesc').addEventListener('click', function () {
    offsetWillaDesc -= 660;
    if (offsetWillaDesc < -6600) {
        offsetWillaDesc = 0
    }
    wrapperW.style.left = offsetWillaDesc + 'px'
});
document.querySelector('#btnSlideWillaPrevDesc').addEventListener('click', function () {
    offsetWillaDesc += 660;
    if (offsetWillaDesc > 0) {
        offsetWillaDesc = -6600
    }
    wrapperW.style.left = offsetWillaDesc + 'px'
});
