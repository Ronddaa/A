let offset2 = 0;

const wrapperW = document.querySelector('.wrapperW');

document.querySelector('#btnSlideWillaNext').addEventListener('click', function () {
    offset2 -= 350;
    if (offset2 < -3500) {
        offset2 = 0
    }
    wrapperW.style.left = offset2 + 'px'
});
document.querySelector('#btnSlideWillaPrev').addEventListener('click', function () {
    offset2 += 350;
    if (offset2 > 0) {
        offset2 = -3500
    }
    wrapperW.style.left = offset2 + 'px'
});
