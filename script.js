const segments = document.querySelectorAll('.segment');
const spinBtn = document.getElementById('spinBtn');
const resultPopup = document.getElementById('resultPopup');
const resultText = document.getElementById('result');

let spinning = false;

function getRandomAngle() {
    return Math.floor(Math.random() * 360);
}

function spinWheel() {
    if (spinning) return;
    spinning = true;
    const angle = getRandomAngle();
    const segmentIndex = Math.floor(angle / (360 / segments.length));
    const targetAngle = 360 * 5 + angle;
    const rotation = `rotate(${targetAngle}deg)`;
    document.documentElement.style.setProperty('--rotation', rotation);

    setTimeout(() => {
        resultText.textContent = segments[segmentIndex].textContent;
        resultPopup.style.display = 'flex';
        spinning = false;
    }, 6000);
}
