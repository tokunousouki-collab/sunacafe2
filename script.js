// 営業中表示

const now = new Date();
const hour = now.getHours();

const status = document.getElementById("status");

if (status) {
    if (hour >= 9 && hour < 18) {
        status.textContent = "🟢 現在営業中です";
    } else {
        status.textContent = "🔴 営業時間外です";
    }
}
const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");

hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
});
const menuLinks = document.querySelectorAll("#nav a");

menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});
const fadeElements = document.querySelectorAll(".fade-in");

window.addEventListener("scroll", () => {

    fadeElements.forEach(element => {

        const position = element.getBoundingClientRect().top;

        if(position < window.innerHeight - 100){
            element.classList.add("show");
        }

    });

});
// クロスフェードスライドショー

const slide1 = document.querySelector(".slide1");
const slide2 = document.querySelector(".slide2");

const images = [
    "images/hero.jpg",
    "images/coffee.jpg",
    "images/cake.jpg",
    "images/toast.jpg"
];

let current = 0;

// 最初の画像
slide1.style.backgroundImage = `url("${images[0]}")`;

setInterval(() => {

    const next = (current + 1) % images.length;

    slide2.style.backgroundImage = `url("${images[next]}")`;
    slide2.style.opacity = "1";

    setTimeout(() => {

        slide1.style.backgroundImage = `url("${images[next]}")`;
        slide2.style.opacity = "0";

        current = next;

    }, 4000);

}, 8000);