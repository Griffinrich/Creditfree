const wheel = document.getElementById('wheel');
const spinBtn = document.getElementById('spinBtn');
const popup = document.getElementById('popup');
const resultDisplay = document.getElementById('result');
const usernameForm = document.getElementById('usernameForm');

spinBtn.addEventListener('click', spinWheel);
usernameForm.addEventListener('submit', claimPrize);

function spinWheel() {
    // Simulate random spin position (0-360 degrees)
    const randomAngle = Math.floor(Math.random() * 360);
    
    // Animate the wheel
    wheel.style.transition = 'transform 5s ease-out';
    wheel.style.transform = `translate(-50%, -50%) rotate(${randomAngle}deg)`;

    // Show popup after spin animation ends
    setTimeout(() => {
        showPopup();
    }, 5000);
}

function showPopup() {
    popup.style.display = 'block';
}

function claimPrize(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    resultDisplay.textContent = `Congratulations, ${username}! You've won a prize!`;
    // Reset form
    usernameForm.reset();
    // Hide popup after claiming prize
    setTimeout(() => {
        popup.style.display = 'none';
    }, 3000);
}
