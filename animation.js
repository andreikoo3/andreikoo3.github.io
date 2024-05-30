const numDots = 100; // Кількість крапочок
const dotContainer = document.createElement('div');
dotContainer.classList.add('dot-container');
document.body.appendChild(dotContainer);

for (let i = 0; i < numDots; i++) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dot.style.top = `${Math.random() * 100}vh`; // Випадкова висота
    if (i % 2 === 0) {
        dot.style.left = `${Math.random() * 20}%`; // Ліва частина 20% екрану
    } else {
        dot.style.left = `${Math.random() * 20 + 80}%`; // Права частина 20% екрану
    }
    dot.style.animationDelay = `${Math.random() * 5}s`; // Випадкова затримка анімації
    dotContainer.appendChild(dot);
}
