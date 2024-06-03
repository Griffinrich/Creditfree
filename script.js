function stopRotateWheel() {
  clearTimeout(spinTimeout);
  const degrees = spinAngle % 360;
  const index = Math.floor((360 - degrees) / (360 / segments));
  const prize = prizes[index];
  resultText.textContent = `ยินดีด้วย! คุณได้รับเครดิตฟรี ${prize} บาท`;
  resultPopup.style.display = 'block';
  showFireworks();
}

function startSpin() {
  spinAngleIncrement = Math.random() * 10 + 10;
  spinTime = 0;
  spinTimeTotal = Math.random() * 3 + 4 * 1000;
  rotateWheel();
}

function showFireworks() {
  for (let i = 0; i < 20; i++) {
    const firework = document.createElement('div');
    firework.className = 'firework';
    fireworksContainer.appendChild(firework);
    animateFirework(firework);
  }
}

function animateFirework(firework) {
  const size = Math.random() * 50 + 50;
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;

  firework.style.width = `${size}px`;
  firework.style.height = `${size}px`;
  firework.style.background = `radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 70%)`;
  firework.style.left = `${x}px`;
  firework.style.top = `${y}px`;
  firework.style.opacity = '1';
  firework.style.transition = 'opacity 1.5s ease-out, transform 1.5s ease-out';
  firework.style.transform = 'scale(2)';

  setTimeout(() => {
    firework.style.opacity = '0';
    firework.style.transform = 'scale(0)';
  }, 100);

  setTimeout(() => {
    fireworksContainer.removeChild(firework);
  }, 1600);
}

spinBtn.addEventListener('click', startSpin);

resultForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  alert(`ยินดีด้วย ${username}! คุณได้รับรางวัลเรียบร้อยแล้ว`);
  window.location.href = 'https://lin.ee/WXS8t3t';
});

drawWheel();
