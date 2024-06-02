const prizes = [50, 100, 150, 200, 250, 300, 350, 50];
const segments = document.querySelectorAll('.segment span');
const wheel = document.getElementById('wheel');
const spinBtn = document.getElementById('spinBtn');
const resultPopup = document.getElementById('resultPopup');
const prizeAmount = document.getElementById('prizeAmount');
const usernameForm = document.getElementById('usernameForm');
const usernameInput = document.getElementById('usernameInput');

spinBtn.addEventListener('click', () => {
  const randomRotation = Math.floor(Math.random() * 360) + 1440; // Ensure multiple rotations
  wheel.style.transform = `rotate(${randomRotation}deg)`;

  setTimeout(() => {
    const normalizedRotation = randomRotation % 360;
    const segmentAngle = 360 / prizes.length;
    const index = Math.floor(normalizedRotation / segmentAngle);
    const prize = prizes[index];
    prizeAmount.textContent = prize;
    resultPopup.style.display = 'block';
  }, 4000);
});

usernameForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = usernameInput.value;
  alert(`ยินดีด้วย, ${username}! คุณได้รับรางวัล ${prizeAmount.textContent} เครดิต! ไปที่ https://lin.ee/WXS8t3t เพื่อรับของขวัญ`);
  resultPopup.style.display = 'none';
});
