const wheel = document.getElementById('wheel');
const spinButton = document.getElementById('spinButton');
const resultDiv = document.getElementById('result');

let spinning = false;

spinButton.addEventListener('click', () => {
    if (!spinning) {
        spinning = true;
        const randomAngle = Math.floor(Math.random() * 3600) + 360;
        wheel.style.transition = 'transform 3s ease-out';
        wheel.style.transform = `rotate(${randomAngle}deg)`;

        setTimeout(() => {
            const winningSegment = calculateWinningSegment(randomAngle % 360);
            resultDiv.textContent = `คุณได้รางวัล ${winningSegment} บาท`;
            spinning = false;
        }, 3000);
    }
});

function calculateWinningSegment(angle) {
    const segmentAngle = 360 / 7;
    const segmentIndex = Math.floor(angle / segmentAngle);
    const prizes = [50, 100, 150, 200, 250, 300, 350];
    return prizes[segmentIndex];
}
