// main.js
document.addEventListener("DOMContentLoaded", function () {
    const currentMonth = new Date().getMonth(); // 0 = Jan, 11 = Dec
    const bgImage = document.getElementById("bgImage");

    if (!bgImage) return;

    let imageSrc = "";

    if (currentMonth >= 0 && currentMonth <= 2) {
        imageSrc = "assets/img/spring.jpg"; // Jan - Mar
    } else if (currentMonth >= 3 && currentMonth <= 5) {
        imageSrc = "assets/img/summer.jpg"; // Apr - Jun
    } else if (currentMonth >= 6 && currentMonth <= 8) {
        imageSrc = "assets/img/rain.jpg"; // Jul - Sep
    } else {
        imageSrc = "assets/img/winter.jpg"; // Oct - Dec
    }
    imageSrc = "assets/img/winter.jpg";
    bgImage.src = imageSrc;
});
