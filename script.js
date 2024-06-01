const prizes = [50, 100, 150, 200, 250, 300, 350];

const wheel = document.querySelector('.wheel');
const spinBtn = document.getElementById('spinBtn');
const resultPopup = document.getElementById('resultPopup');
const prizeAmount = document.getElementById('prizeAmount');
const usernameForm = document.getElementById('usernameForm');
const usernameInput = document.getElementById('usernameInput');

spinBtn.addEventListener('click', () => {
  const randomRotation = Math.floor(Math.random() * 360);
  wheel.style.animation = `spin 4s cubic-bezier(0.25, 0.1, 0.25, 1) 1 forwards`;
  setTimeout(() => {
    const index = Math.floor(Math.random() * prizes.length);
    const prize = prizes[index];
    prizeAmount.textContent = prize;
    resultPopup.style.display = 'block';
  }, 4000);
});

usernameForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = usernameInput.value;
  alert(`ยินดีด้วย, ${username}! คุณได้รับรางวัล ${prizeAmount.textContent} เครดิต! ไปที่ https://lin.ee/WXS8t3t เพื่อรับของขวัญ`);
});
