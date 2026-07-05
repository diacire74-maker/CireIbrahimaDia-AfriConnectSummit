// Année dynamique

document.getElementById("year").textContent =
new Date().getFullYear();
/* ===========================
Compte à rebours
=========================== */

const targetDate = new Date("November 15, 2026 09:00:00").getTime();

function updateCountdown() {

    const now = new Date().getTime();

    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if(document.getElementById("days")){

        document.getElementById("days").textContent = days;

        document.getElementById("hours").textContent = hours;

        document.getElementById("minutes").textContent = minutes;

        document.getElementById("seconds").textContent = seconds;

    }

}

setInterval(updateCountdown,1000);

updateCountdown();