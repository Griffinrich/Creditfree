const spinBtn = document.getElementById('spinBtn');
const resultPopup = document.getElementById('resultPopup');

spinBtn.addEventListener('click', () => {
  const randomDegrees = Math.floor(Math.random() * 360);
  const wheel = document.querySelector('.wheel');
  wheel.style.animation = `spin 4s ease-out`;
  setTimeout(() => {
    wheel.style.animation = '';
    showResultPopup();
  }, 4000);
});

function showResultPopup() {
  resultPopup.style.display = 'block';
  const form = resultPopup.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = form.querySelector('#username').value;
    alert(`ยินดีด้วย ${username}! คุณได้รับเครดิตฟรีแล้ว`);
    window.location.href = 'https://lin.ee/WXS8t3t';
  });
}
