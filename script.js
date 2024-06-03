const spinBtn = document.getElementById('spinBtn');
const resultPopup = document.getElementById('resultPopup');
const resultText = document.getElementById('resultText');
const resultForm = document.getElementById('resultForm');
const wheel = document.getElementById('wheel');
const ctx = wheel.getContext('2d');
const fireworksContainer = document.getElementById('fireworks-container');

const prizes = [50, 100, 150, 200, 250, 300, 350];
const colors = ['#FF0000', '#FFD700','#FF0000'];  // สีแดงและสีทอง
const segments = prizes.length;
const arc = 2 * Math.PI / segments;
let startAngle = 0;
let spinTimeout = null;
let spinAngle = 0;
let spinAngleIncrement = 0;
let spinTime = 0;
let spinTimeTotal = 0;

function drawWheel() {
  ctx.clearRect(0, 0, wheel.width, wheel.height);
  for (let i = 0; i < segments; i++) {
    const angle = startAngle + i * arc;
    ctx.fillStyle = colors[i % colors.length];
    ctx.beginPath();
    ctx.arc(wheel.width / 2, wheel.height / 2, wheel.width / 2, angle, angle + arc, false);
    ctx.lineTo(wheel.width / 2, wheel.height / 2);
    ctx.fill();
    ctx.save();
    ctx.translate(wheel.width / 2, wheel.height / 2);
    ctx.rotate(angle + arc / 2);
    ctx.fillStyle = 'white';
    ctx.font = 'bold 18px Arial';
    ctx.fillText(prizes[i], wheel.width / 4, 0);
    ctx.restore();
  }
}

function rotateWheel() {
  spinAngle += spinAngleIncrement;
  spinAngle %= 360;
  startAngle = spinAngle * Math.PI / 180;
  drawWheel();
  spinTime += 30;
  if (spinTime >= spinTimeTotal) {
    stopRotateWheel();
  } else {
    spinTimeout = setTimeout(rotateWheel, 30);
  }
}

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
  for (let i = 0; i < 40; i++) {  // เพิ่มจำนวนพลุ
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
  firework.style.transition = 'opacity 1.5s ease-out, transform 1.5s ease-out'; // เพิ่มระยะเวลา transition
  firework.style.transform = 'scale(2)';

  setTimeout(() => {
    firework.style.opacity = '0';
    firework.style.transform = 'scale(0)';
  }, 1500);  // เพิ่มระยะเวลาแสดงผล

  setTimeout(() => {
    fireworksContainer.removeChild(firework);
  }, 3000);  // เพิ่มระยะเวลาลบหลังแสดงผล
}

spinBtn.addEventListener('click', startSpin);

resultForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  alert(`ยินดีด้วย ${username}! คุณได้รับรางวัลเรียบร้อยแล้ว`);
  window.location.href = 'https://lin.ee/WXS8t3t';
});

drawWheel();
