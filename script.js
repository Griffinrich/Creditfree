var canvas = document.getElementById('wheelCanvas');
var ctx = canvas.getContext('2d');

// สร้างอาเรย์เก็บรางวัล
var prizes = ['50', '100', '150', '200', '250', '300', '350'];

function drawWheel() {
    // เริ่มต้นให้ Canvas เป็นวงล้อเปล่า
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // เพิ่มข้อความบอกว่าเป็นวงล้อสุ่มเครดิตฟรี 50-350 บาท
    ctx.fillStyle = 'black';
    ctx.font = '16px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('วงล้อสุ่มเครดิตฟรี 50-350 บาท', canvas.width / 2, 30);

    // สร้างวงล้อ
    ctx.beginPath();
    ctx.arc(150, 150, 140, 0, 2 * Math.PI);
    ctx.fillStyle = 'white';
    ctx.fill();

    // สร้างแต่ละส่วนของวงล้อ
    var colors = ['#ffcc00', '#ff6666', '#99cc00', '#66cccc', '#ff9966', '#6699ff', '#ffcc99'];
    var angles = [0, 51.42, 102.84, 154.26, 205.68, 257.1, 308.52];
    for (var i = 0; i < colors.length; i++) {
        ctx.beginPath();
        ctx.moveTo(150, 150);
        ctx.arc(150, 150, 140, (angles[i] - 90) * Math.PI / 180, (angles[i] + 51.42 - 90) * Math.PI / 180);
        ctx.fillStyle = colors[i];
        ctx.fill();
    }

    // เพิ่มข้อความเครดิตฟรีที่แต่ละส่วนของวงล้อ
    ctx.fillStyle = 'white';
    ctx.font = '16px Arial';
    ctx.textAlign = 'center';
    var prizesText = ['50', '100', '150', '200', '250', '300', '350'];
    for (var i = 0; i < prizesText.length; i++) {
        var angle = angles[i] * Math.PI / 180;
        var x = 150 + Math.cos(angle) * 100;
        var y = 150 + Math.sin(angle) * 100;
        ctx.fillText(prizesText[i], x, y);
    }
// สร้างลูกศร
function drawArrow() {
    ctx.beginPath();
    ctx.moveTo(150, 10);
    ctx.lineTo(145, 20);
    ctx.lineTo(155, 20);
    ctx.closePath();
    ctx.fillStyle = 'black';
    ctx.fill();
}

function drawWheelWithArrow() {
    drawWheel();
    drawArrow();
}
function startSpin(prize) {
    var spinInterval = setInterval(function() {
        spinParams.speed += spinParams.acceleration;
        if (spinParams.speed >= spinParams.maxSpeed) {
            spinParams.speed = spinParams.maxSpeed;
        }
        drawWheelWithAngle(spinParams.speed);
        if (spinParams.speed >= spinParams.stopAngle) {
            clearInterval(spinInterval);
            showResult(prize);
            spinParams.isSpinning = false;
        }
    }, 50);
}

function drawWheelWithAngle(angle) {
    drawWheelWithArrow();
    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate(angle * Math.PI / 180);
    ctx.translate(-canvas.width / 2, -canvas.height / 2);
    drawWheelWithArrow();
    ctx.restore();
}
