var canvas = document.getElementById('wheelCanvas');
var ctx = canvas.getContext('2d');

// สร้างอาเรย์เก็บรางวัล
var prizes = ['50', '100', '150', '200', '250', '300', '350'];

// กำหนดค่าการหมุน
var spinParams = {
    speed: 0, // ความเร็วเริ่มต้น (จะเปลี่ยนไปตามการกำหนดค่าในฟังก์ชัน spinWheel())
    acceleration: 1, // ค่าความเร่งของการหมุน
    maxSpeed: 10, // ความเร็วสูงสุด
    stopAngle: 0, // มุมที่วงล้อจะหยุดที่
    isSpinning: false // สถานะการหมุน (true = กำลังหมุน, false = หยุด)
};

function drawWheel() {
    // เริ่มต้นให้ Canvas เป็นวงล้อเปล่า
    ctx.clearRect(0, 0, canvas.width, canvas.height);

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

    // เพิ่มข้อความ
    ctx.fillStyle = 'white';
    ctx.font = '20px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    for (var i = 0; i < prizes.length; i++) {
        var angle = angles[i] * Math.PI / 180;
        var x = 150 + Math.cos(angle) * 100;
        var y = 150 + Math.sin(angle) * 100;
        ctx.fillText(prizes[i], x, y);
    }
}

function spinWheel() {
    if (!spinParams.isSpinning) {
        // สุ่มรางวัลที่จะหมุนมา
        var randomIndex = Math.floor(Math.random() * prizes.length);
        var prize = prizes[randomIndex];

        // สร้างค่าที่จะใช้ในการหมุน
        spinParams.speed = 1; // ความเร็วเริ่มต้น
        spinParams.acceleration = 0.1; // ค่าความเร่งของการหมุน
        spinParams.maxSpeed = 10; // ความเร็วสูงสุด
        spinParams.stopAngle = Math.floor(Math.random() * 360) + 720; // มุมที่วงล้อจะหยุดที่
        spinParams.isSpinning = true; // กำลังหมุน
        startSpin(prize);
    }
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
    drawWheel();
    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate(angle * Math.PI / 180);
    ctx.translate(-canvas.width / 2, -canvas.height / 2);
    drawWheel();
    ctx.restore();
}

function showResult(prize) {
    document.getElementById('result').innerText = 'คุณได้รับรางวัล ' + prize +
