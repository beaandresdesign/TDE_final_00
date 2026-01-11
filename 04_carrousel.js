const carouselInner = document.querySelector('.carousel-inner');
const items = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let index = 0;

function showSlide(i) {
    if (i < 0) index = items.length - 1;
    else if (i >= items.length) index = 0;
    else index = i;

    carouselInner.style.transform = `translateX(-${index * 100}%)`;
}

/* BOTONES */
prevBtn.addEventListener('click', () => showSlide(index - 1));
nextBtn.addEventListener('click', () => showSlide(index + 1));

