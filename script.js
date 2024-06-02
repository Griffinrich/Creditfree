var canvas = document.getElementById('wheelCanvas');
var ctx = canvas.getContext('2d');

// สร้างอาเรย์เก็บรางวัล
var prizes = ['50', '100', '150', '200', '250', '300', '350'];

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
    // สุ่มรางวัลที่จะหมุนมา
    var randomIndex = Math.floor(Math.random() * prizes.length);
    var prize = prizes[randomIndex];

    // หมุนวงล้อ
    var spinAngle = Math.floor(Math.random() * 360) + 720; // 720 - 1080 องศา (2 - 3 รอบ)
    var spinDuration = 3000; // 3 วินาที
    var spinInterval = 50; // ความเร็วของการหมุน
    var currentAngle = 0;

    var spinIntervalId = setInterval(function() {
        currentAngle += spinInterval;
        drawWheelWithAngle(currentAngle);

        if (currentAngle >= spinAngle) {
            clearInterval(spinIntervalId);
            showResult(prize);
        }
    }, spinInterval);
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
    document.getElementById('result').innerText = 'คุณได้รับรางวัล ' + prize + ' บาท!';
    document.getElementById('resultPopup').style.display = 'flex';
}

// เริ่มต้นด้วยการสร้างวงล้อ
drawWheel();
