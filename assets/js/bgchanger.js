
document.addEventListener("DOMContentLoaded", function () {
    const currentMonth = new Date().getMonth(); // 0 = Jan, 11 = Dec
    const bgImage = document.getElementById("bgImage");

    if (!bgImage) return;

    let imageSrc = "";

    if (currentMonth >= 0 && currentMonth <= 2) {

        const container = document.querySelector('.snowflake-container');
        container.remove();

        imageSrc = "assets/img/spring.jpg"; // Jan - Mar
    } else if (currentMonth >= 3 && currentMonth <= 4) {
        const container = document.querySelector('.snowflake-container');
        container.remove();

        imageSrc = "assets/img/summer.jpg"; // Apr - Jun
        bgImage.style.filter = "brightness(40%)";
    } else if (currentMonth >= 5 && currentMonth <= 8) {
        const container2 = document.querySelector('.flare-container');
        container2.remove();

        const container = document.querySelector('.snowflake-container');
        container.remove();

        addRainDrops();

        imageSrc = "assets/img/rain.jpg"; // Jul - Sep
    } else {
        const container2 = document.querySelector('.flare-container');
        container2.remove();
        imageSrc = "assets/img/winter.jpg"; // Oct - Dec
    }

    bgImage.src = imageSrc;
});

var addRainDrops = function () {
    const frontRow = document.querySelector('.rain.front-row');
    const numberOfDrops = 50;

    var left = Math.random() * 100 + '%';
    var animationDelay = Math.random() * 2 + 's';
    var animationDuration = Math.random() * 2 + 's';

    for (let i = 0; i < numberOfDrops; i++) {
        left = Math.random() * 100 + '%';
        animationDelay = Math.random() * 2 + 's';
        animationDuration = Math.random() * 2 + 's';

        const drop = document.createElement('div');
        drop.className = 'drop';
        drop.style.left = left;
        drop.style.animationDelay = animationDelay;
        drop.style.animationDuration = animationDuration;

        const stem = document.createElement('div');
        stem.className = 'stem';
        stem.style.animationDuration = animationDuration;
        stem.style.animationDelay = animationDelay;
        drop.appendChild(stem);

        const splat = document.createElement('div');
        splat.className = 'splat';
        splat.style.animationDelay = animationDelay;
        drop.appendChild(splat);

        frontRow.appendChild(drop);
    }

    const backRow = document.querySelector('.rain.back-row');

    for (let i = 0; i < numberOfDrops; i++) {
        left = Math.random() * 100 + '%';
        animationDelay = Math.random() * 2 + 's';
        animationDuration = Math.random() * 2 + 's';

        const drop = document.createElement('div');
        drop.className = 'drop';
        drop.style.left = left;
        drop.style.animationDelay = animationDelay;
        drop.style.animationDuration = animationDuration;

        const stem = document.createElement('div');
        stem.className = 'stem';
        stem.style.animationDuration = animationDuration;
        stem.style.animationDelay = animationDelay;
        drop.appendChild(stem);

        const splat = document.createElement('div');
        splat.className = 'splat';
        splat.style.animationDelay = animationDelay;
        drop.appendChild(splat);

        backRow.appendChild(drop);
    }
}
