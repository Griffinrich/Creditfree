const spinBtn = document.getElementById('spinBtn');
const resultPopup = document.getElementById('resultPopup');
const resultText = document.getElementById('resultText');
const resultForm = document.getElementById('resultForm');
const wheel = document.getElementById('wheel');
const ctx = wheel.getContext('2d');
const fireworksContainer = document.getElementById('fireworks-container');

const prizes = [50, 100, 150, 200, 250, 300, 350];
const colors = ['#FF0000', '#FFD700']; // สีแดงและสีทอง
const segments = prizes.length;
const arc = Math.PI / (segments / 2); // แบ่งวงล้อเป็นช่วงสี 2 สี
let spinAngle = 0;
let spinTimeout = null;
let spinTime = 0;
let spinTimeTotal = 0;
let randomSpin = 0;

function draw() {
  const outsideRadius = 200;
  const textRadius = 160;
  const insideRadius = 125;

  ctx.clearRect(0, 0, 400, 400);

  ctx.strokeStyle = 'black';
  ctx.lineWidth = 2;

  ctx.font = 'bold 12px Arial';

  for (let i = 0; i < segments; i++) {
    const angle = startAngle + i * arc;
    const color = colors[i % colors.length];

    ctx.fillStyle = color;

    ctx.beginPath();
    ctx.arc(200, 200, outsideRadius, angle, angle + arc, false);
    ctx.arc(200, 200, insideRadius, angle + arc, angle, true);
    ctx.stroke();
    ctx.fill();

    ctx.save();
    ctx.fillStyle = 'white';
    ctx.translate(200 + Math.cos(angle + arc / 2) * textRadius,
      200 + Math.sin(angle + arc / 2) * textRadius);
    ctx.rotate(angle + arc / 2 + Math.PI / 2);
    const text = prizes[i];
    ctx.fillText(text, -ctx.measureText(text).width / 2, 0);
    ctx.restore();
  }

  // Arrow
  ctx.fillStyle = 'black';
  ctx.beginPath();
  ctx.moveTo(200 - 4, 200 - (outsideRadius + 5));
  ctx.lineTo(200 + 4, 200 - (outsideRadius + 5));
  ctx.lineTo(200 + 4, 200 - (outsideRadius - 5));
  ctx.lineTo(200 + 9, 200 - (outsideRadius - 5));
  ctx.lineTo(200 + 0, 200 - (outsideRadius - 13));
  ctx.lineTo(200 - 9, 200 - (outsideRadius - 5));
  ctx.lineTo(200 - 4, 200 - (outsideRadius - 5));
  ctx.lineTo(200 - 4, 200 - (outsideRadius + 5));
  ctx.fill();
}

function rotateWheel() {
  spinTime += 30;
  if (spinTime >= spinTimeTotal) {
    stopRotateWheel();
    return;
  }

  const spinAngle = spinAngleStart - easeOut(spinTime, 0, spinAngleStart, spinTimeTotal);
  startAngle += (spinAngle * Math.PI / 180);
  draw();
  spinTimeout = setTimeout(rotateWheel, 30);
}

function stopRotateWheel() {
  clearTimeout(spinTimeout);
  const degrees = startAngle * 180 / Math.PI + 90;
  const index = Math.floor((360 - degrees % 360) / (360 / segments));
  resultText.textContent = `ยินดีด้วย! คุณได้รับเครดิตฟรี ${prizes[index]} บาท`;
  resultPopup.style.display = 'block';
}

function easeOut(t, b, c, d) {
  const ts = (t /= d) * t;
  const tc = ts * t;
  return b + c * (tc + -3 * ts + 3 * t);
}

function startSpin() {
  spinAngleStart = Math.random() * 10 + 10;
  spinTime = 0;
  spinTimeTotal = Math.random() * 3 + 4 * 1000;
  rotateWheel();
}

spinBtn.addEventListener('click', startSpin);

resultForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  alert(`ยินดีด้วย ${username}! คุณได้รับรางวัลเรียบร้อยแล้ว`);
  window.location.href = 'https://lin.ee/WXS8t3t';
});

draw();
