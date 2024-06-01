document.getElementById("spinButton").addEventListener("click", spinWheel);

function spinWheel() {
    var wheel = document.querySelector('.wheel');
    var arrow = document.querySelector('.arrow');

    var deg = Math.floor(5000 + Math.random() * 5000); // หมุนวงล้อระหว่าง 5000-10000 องศา

    wheel.style.transition = 'transform 10s ease-out';
    wheel.style.transform = 'rotate(' + deg + 'deg)';
    arrow.style.transition = 'transform 10s ease-out';
    arrow.style.transform = 'translate(-50%, -50%) rotate(1080deg)'; // หมุนลูกศร 3 รอบ

    setTimeout(function() {
        var result = getResult(deg);
        document.getElementById("resultText").innerText = "คุณได้รับเครดิตฟรี " + result + " บาท!";
        document.getElementById("resultPopup").style.display = "block";
    }, 10000); // หลังจากหมุนเสร็จ 10 วินาที
}

function getResult(deg) {
    var prizes = [50, 100, 150, 200, 250, 300, 350];
    var segments = 7;
    var angle = 360 / segments;
    var index = Math.floor((360 - (deg % 360)) / angle);
    return prizes[index];
}

document.querySelector('.close').addEventListener('click', function() {
    document.getElementById("resultPopup").style.display = "none";
});

document.getElementById("usernameForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    alert("ยินดีด้วย! คุณได้รับรางวัลเรียบร้อยแล้ว ลิ้งค์: https://lin.ee/WXS8t3t");
});
