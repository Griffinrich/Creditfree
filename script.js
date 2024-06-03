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
    ctx.fillStyle = '#FFFFFF'; // เปลี่ยนสีตัวเลขในวงล้อเป็นขาว
    ctx.font = 'bold 24px Arial'; // ปรับขนาดตัวเลขในวงล้อ
    ctx.fillText(prizes[i], wheel.width / 4, 0);
    ctx.restore();
  }
}

function animateFirework(firework) {
  const size = Math.random() * 100 + 100; // ปรับขนาดของพลุใหญ่ขึ้น
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;

  firework.style.width = `${size}px`;
  firework.style.height = `${size}px`;
  firework.style.background = `radial-gradient(circle, rgba(255,215,0,1) 0%, rgba(255,215,0,0) 70%)`; // เปลี่ยนสีของพลุให้เหมือนทองแท้
  firework.style.left = `${x}px`;
  firework.style.top = `${y}px`;
  firework.style.opacity = '1';
  firework.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
  firework.style.transform = 'scale(2)';

  setTimeout(() => {
    firework.style.opacity = '0';
    firework.style.transform = 'scale(0)';
  }, 100);

  setTimeout(() => {
    fireworksContainer.removeChild(firework);
  }, 1100);
}
