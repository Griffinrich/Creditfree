var canvas = document.getElementById('wheelCanvas');
var ctx = canvas.getContext('2d');
var prizes = ['50', '100', '150', '200', '250', '300', '350'];

function drawWheel() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.arc(200, 200, 190, 0, 2 * Math.PI);
    ctx.fill();

    var colors = ['#ffcc00', '#ff6666', '#99cc00', '#66cccc', '#ff9966', '#6699ff', '#ffcc99'];
    var angles = [0, 51.42, 102.84, 154.26, 205.68, 257.1, 308.52];
    for (var i = 0; i < colors.length; i++) {
        ctx.fillStyle = colors[i];
        ctx.beginPath();
        ctx.moveTo(200, 200);
        ctx.arc(200, 200, 190, angles[i] * Math.PI / 180, (angles[i] + 51.42) * Math.PI / 180);
        ctx.fill();
    }

    ctx.fillStyle = 'black';
    ctx.font = '20px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    for (var i = 0; i < prizes.length; i++) {
        var angle = (angles[i] + 25.71) * Math.PI / 180;
        var x = 200 + Math.cos(angle) * 120;
        var y = 200 + Math.sin(angle) * 120;
        ctx.fillText(prizes[i], x, y);
    }
}

function spinWheel() {
    var spinAngle = Math.floor(Math.random() * 360) + 720;
    var spinInterval = setInterval(function() {
        drawWheelWithAngle(Math.random() * 360);
    }, 100);
    setTimeout(function() {
        clearInterval(spinInterval);
        var prizeIndex = Math.floor(Math.random() * prizes.length);
        var prize = prizes[prizeIndex];
        document.getElementById('result').innerText = 'ยินดีด้วยคุณได้รับ ' + prize + ' เครดิตฟรี';
        document.getElementById('resultPopup').style.display = 'flex';
    }, 3000);
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
