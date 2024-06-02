const wheel = document.querySelector('.wheel');
const spinButton = document.querySelector('.spin-button');

// Function to rotate the wheel
function spinWheel() {
    const rotation = Math.random() * 360; // Generate a random rotation angle
    wheel.style.transition = 'transform 3s ease-out'; // Apply transition effect
    wheel.style.transform = `rotate(${rotation}deg)`; // Rotate the wheel
}

spinButton.addEventListener('click', spinWheel);
