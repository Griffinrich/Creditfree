// ฟังก์ชันสำหรับสุ่มเงินรางวัล
function getRandomPrize() {
    return [50, 100, 150, 200, 250, 300, 350][Math.floor(Math.random() * 7)];
}

// ฟังก์ชันสำหรับหมุนวงล้อ
function spinWheel() {
    // จำลองการหมุน
    let spinResult = getRandomPrize();

    // แสดงป๊อปอัพผลลัพธ์
    document.getElementById("prizeAmount").textContent = spinResult;
    document.getElementById("resultPopup").style.display = "block";
}

// ตัวฟังก์ชันสำหรับฟังก์ชันคลิกปุ่มหมุน
document.getElementById("spinButton").addEventListener("click", spinWheel);

// ตัวฟังก์ชันสำหรับการส่งฟอร์มชื่อผู้ใช้
document.getElementById("usernameForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let username = document.getElementById("username").value;
    alert("ยินดีด้วย, " + username + "! คุณได้รับรางวัลของคุณแล้ว!");
    // ไปยังลิงก์รางวัล
    window.location.href = "https://lin.ee/WXS8t3t";
});
