document.getElementById('spin-btn').addEventListener('click', spinWheel);

function spinWheel() {
  // สุ่มตำแหน่งของรางวัล
  const winningPosition = Math.floor(Math.random() * 7);
  // หมุนวงล้อไปยังตำแหน่งที่สุ่มได้
  const wheel = document.querySelector('.wheel');
  wheel.style.transition = 'transform 3s ease-out';
  wheel.style.transform = `rotate(${winningPosition * 51.43}deg)`; // 51.43 = 360 / 7
  // แสดงผลป๊อปอัพและฟอร์มกรอกชื่อผู้ใช้
  setTimeout(() => {
    const popup = document.getElementById('result-popup');
    popup.classList.add('active');
    const resultDisplay = document.querySelector('.result');
    resultDisplay.textContent = `ยินดีด้วย! คุณได้รับเครดิตฟรี ${50 + winningPosition * 50}`;
  }, 3000);
}

document.getElementById('username-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  alert(`ยินดีด้วย ${username}! คุณได้รับรางวัลเรียบร้อยแล้ว ลิ้งค์: https://lin.ee/WXS8t3t`);
});
