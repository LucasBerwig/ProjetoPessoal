document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.image-slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    let index = 0;

    function showSlide(n) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');

            if (i === n) {
                slide.classList.add('active');
            }
        });

        // Esconde as imagens que não estão ativas
        slides.forEach((slide, i) => {
            if (i !== n) {
                slide.style.opacity = '0';
            } else {
                slide.style.opacity = '1';
            }
        });
    }

    function nextSlide() {
        index++;

        if (index >= slides.length) {
            index = 0;
        }

        showSlide(index);
    }

    function prevSlide() {
        index--;

        if (index < 0) {
            index = slides.length - 1;
        }

        showSlide(index);
    }

    showSlide(index);

    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);

    // Adiciona um intervalo para mudar automaticamente as imagens
    setInterval(nextSlide, 5000);
});