// Дата начала отношений (ПОМЕНЯЙ НА СВОЮ!)
const startDate = new Date('2025-01-01');

function updateDays() {
    const today = new Date();
    const diff = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));
    document.getElementById('days').textContent = diff >= 0 ? diff : 0;
}
updateDays();

function showLove() {
    const msg = document.getElementById('message');
    msg.innerHTML = 'Я ТОЖЕ ТЕБЯ ЛЮБЛЮ❤️';
    msg.style.transform = 'scale(1.2)';
    setTimeout(() => msg.style.transform = 'scale(1)', 300);

    // Обвал сердечек (20 штук)
    for (let i = 0; i < 25; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.style.cssText = `
            position: fixed;
            left: ${Math.random() * 100}vw;
            top: -10vh;
            font-size: ${20 + Math.random() * 40}px;
            pointer-events: none;
            z-index: 9999;
            animation: fall ${2 + Math.random() * 3}s linear forwards;
        `;
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 5000);
    }
}

// Динамически добавляем CSS-анимацию (чтобы не засорять style.css)
const style = document.createElement('style');
style.textContent = `
    @keyframes fall {
        0% { transform: translateY(0) rotate(0deg); opacity: 1; }
        100% { transform: translateY(110vh) rotate(720deg); opacity: 0; }
    }
`;
document.head.appendChild(style);