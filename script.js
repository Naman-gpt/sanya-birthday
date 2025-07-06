const countdownEl = document.getElementById('countdown');
const birthday = new Date('2025-08-07T00:00:00');

function updateCountdown() {
    const now = new Date();
    const diff = birthday - now;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    countdownEl.textContent = days > 0 ? days + ' days left!' : "It's today! 🎂";
}
setInterval(updateCountdown, 1000);
updateCountdown();
