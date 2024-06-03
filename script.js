const spinBtn = document.getElementById('spinBtn');
const resultPopup = document.getElementById('resultPopup');
const resultText = document.getElementById('resultText');
const resultForm = document.getElementById('resultForm');
const wheel = document.getElementById('wheel');
const ctx = wheel.getContext('2d');
const fireworksContainer = document.getElementById('fireworks-container');

const prizes = [50, 100, 150, 200, 250, 300, 350];
const colors = ['#FF4500', '#FFD700', '#FFFFFF', '#FF4500', '#FF6347', '#FFD700', '#FF4500'];
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
    ctx.fillStyle = colors[i];
    ctx.beginPath();
    ctx.arc(wheel.width / 2, wheel.height / 2, wheel.width / 2, angle, angle + arc, false);
    ctx.lineTo(wheel.width / 2, wheel.height / 2);
    ctx.fill();
    ctx.save();
    ctx.translate(wheel.width / 2, wheel.height / 2);
    ctx.rotate(angle + arc / 2);
    ctx.fillStyle = 'black';
    ctx.font = 'bold 14px Arial'; // ลดขนาดของตัวอักษร
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
  for (let i = 0; i < 20; i++) {
    const firework = document.createElement('div');
    firework.className = 'firework';
    fireworksContainer.appendChild
