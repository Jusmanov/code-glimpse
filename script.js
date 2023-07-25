document.querySelectorAll('a[data-target]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('data-target');
        const target = document.getElementById(targetId);
        const offsetTop = target.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    });
});

const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;
let intervalId;
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(-${index * 100}%)`;
    dots[i].classList.remove('active');
  });
  dots[index].classList.add('active');
  currentIndex = index;
}
function changeSlide() {
  const nextIndex = (currentIndex + 1) % slides.length;
  showSlide(nextIndex);
}
function startSlideShow() {
  intervalId = setInterval(changeSlide, 4000);
}
function stopSlideShow() {
  clearInterval(intervalId);
}
function handleDotClick(index) {
  showSlide(index);
  stopSlideShow();
  setTimeout(startSlideShow, 4000);
}
for (let i = 0; i < dots.length; i++) {
  dots[i].addEventListener('click', () => handleDotClick(i));
}
startSlideShow();
