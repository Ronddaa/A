let offset3 = 0;

const wrapperW = document.querySelector('.swiperR');

document.querySelector('#btnSlideReviewsNext').addEventListener('click', function () {
    offset3 -= 402;
    if (offset3 < -2002) {
        offset3 = 0
    }
    wrapperW.style.left = offset3 + 'px'
});
document.querySelector('#btnSlideReviewsPrev').addEventListener('click', function () {
    offset3 += 402;
    if (offset3 > 0) {
        offset3 = -2002
    }
    wrapperW.style.left = offset3 + 'px'
});
