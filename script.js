const wheel = document.getElementById('wheel-img');
const spinBtn = document.getElementById('spinBtn');
const resultPopup = document.getElementById('resultPopup');
const usernameForm = document.getElementById('usernameForm');
const resultDisplay = document.getElementById('result');

const prizes = [50, 100, 200, 250, 300, 350];
let spinning = false;

function spinWheel() {
    if (!spinning) {
        spinning = true;
        const randomDegrees = Math.floor(Math.random() * 360) + 360 * 5;
        wheel.style.transition = 'transform 5s ease-out';
        wheel.style.transform = `rotate(${randomDegrees}deg)`;
        setTimeout(() => {
            spinning = false;
            const prizeIndex = Math.floor(Math.random() * prizes.length);
            const prize = prizes[prizeIndex];
            resultDisplay.textContent = `ยินดีด้วย! คุณได้รับเครดิตฟรี ${prize} บาท`;
            resultPopup.style.display = 'block';
        }, 5000);
    }
}

spinBtn.addEventListener('click', spinWheel);

usernameForm.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('คุณได้รับรางวัลเรียบร้อยแล้ว ลิ้งค์ไปยัง https://lin.ee/WXS8t3t');
});
