/* สไตล์สำหรับล้อ */
@keyframes spin {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}

body {
    background-color: #f0f8ff;
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}

.container {
    text-align: center;
}

.wheel-container {
    position: relative;
}

.wheel {
    width: 300px;
    height: 300px;
    background-color: #add8e6;
    border-radius: 50%;
    position: relative;
    overflow: hidden;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
    animation: spin 5s linear infinite;
}

.slice {
    position: absolute;
    width: 100%;
    height: 100%;
    color: white;
    font-size: 24px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    transform-origin: 50% 100%;
}

#slice1 { transform: rotate(0deg); background-color: #4CAF50; }
#slice2 { transform: rotate(60deg); background-color: #add8e6; }
#slice3 { transform: rotate(120deg); background-color: #ffc107; }
#slice4 { transform: rotate(180deg); background-color: #add8e6; }
#slice5 { transform: rotate(240deg); background-color: #4CAF50; }
#slice6 { transform: rotate(300deg); background-color: #add8e6; }

.pointer {
    position: absolute;
    top: calc(50% - 10px);
    left: calc(50% - 5px);
    width: 10px;
    height: 20px;
    background-color: red;
    transform-origin: bottom center;
    z-index: 2;
    box-shadow: 0 0 10px rgba(255, 0, 0, 0.7);
}

/* สไตล์สำหรับปุ่ม */
button {
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;
}

button:hover {
    background-color: #45a049;
}

/* สไตล์สำหรับป๊อปอัพ */
.popup {
    display: none;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #ffffff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    z-index: 2;
}

.popup .result {
    margin-bottom: 10px;
}

.popup input[type="text"] {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.popup button[type="submit"] {
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.popup button[type="submit"]:hover {
    background-color: #45a049;
}
