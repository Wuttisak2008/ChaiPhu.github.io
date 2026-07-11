const buttons = document.querySelectorAll(".detail-btn");

buttons.forEach((button) => {
    button.addEventListener("click", function () {
        alert("รายละเอียดผลงานนี้จะแสดงที่นี่");
    });
});
