const scrollContainer = document.querySelector('.category-scroll');

function scrollLeftCategory() {
    scrollContainer.scrollBy({ left: -150, behavior: 'smooth' });
}

function scrollRightCategory() {
    scrollContainer.scrollBy({ left: 150, behavior: 'smooth' });
}
