// Kartlara tıklama etkisi ekleme
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        // Kart üzerine tıkladığınızda bir mesaj göster
        alert(`"${card.querySelector('h3').innerText}" kartına tıkladınız!`);
    });
});

// Sayfa kaydırma animasyonu
const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        event.preventDefault(); // Linkin varsayılan davranışını durdur
        const target = document.querySelector('h1');
        smoothScroll(target);
    });
});

// Kaydırma fonksiyonu
function smoothScroll(target) {
    const targetPosition = target.getBoundingClientRect().top + window.scrollY;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 1000; // 1 saniye
    let start = null;

    const animation = currentTime => {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const run = easeInOutCubic(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    requestAnimationFrame(animation);
}

// Easing fonksiyonu
function easeInOutCubic(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t * t + b;
    t -= 2;
    return c / 2 * (t * t * t + 2) + b;
}
