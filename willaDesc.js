let offsetWillaDesc = 0;

const wrapperW = document.querySelector('.wrapperWDesc');

document.querySelector('#btnSlideWillaNext').addEventListener('click', function () {
    offsetWillaDesc -= 560;
    if (offsetWillaDesc < -5500) {
        offsetWillaDesc = 0
    }
    wrapperW.style.left = offsetWillaDesc + 'px'
});
document.querySelector('#btnSlideWillaPrev').addEventListener('click', function () {
    offsetWillaDesc += 560;
    if (offsetWillaDesc > 0) {
        offsetWillaDesc = -5500
    }
    wrapperW.style.left = offsetWillaDesc + 'px'
});
