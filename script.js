var canvas = document.getElementById('wheelCanvas');
var ctx = canvas.getContext('2d');

function drawWheel() {
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
    var texts = ['50', '100', '150', '200', '250', '300', '350'];
    ctx.fillStyle = 'white';
    ctx.font = '20px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    for (var i = 0; i < texts.length; i++) {
        var angle = angles[i] * Math.PI / 180;
        var x = 150 + Math.cos(angle) * 100;
        var y = 150 + Math.sin(angle) * 100;
        ctx.fillText(texts[i], x, y);
    }
}

function spinWheel() {
    drawWheel(); // เรียกใช้ฟังก์ชันสำหรับสร้างวงล้อ
    var imageDataURL = canvas.toDataURL('image/png');
    console.log(imageDataURL); // ดึงรูปภาพจาก Canvas และพิมพ์ URL ในคอนโซล
}
