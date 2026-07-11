// เมื่อหน้าเว็บโหลดเสร็จ
document.addEventListener("DOMContentLoaded", function () {

    // เลือกการ์ดผลงานทั้งหมด
    const cards = document.querySelectorAll(".card");

    // เมื่อคลิกที่การ์ด
    cards.forEach((card, index) => {
        card.addEventListener("click", function () {
            alert("คุณเลือกดูผลงานที่ " + (index + 1));
        });
    });

});
