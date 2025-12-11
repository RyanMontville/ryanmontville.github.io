import { initializeApp } from "./main.js";
const loadingCard = document.getElementById('loading-card');
const aboutCard = document.getElementById('about');
initializeApp("About Me").then(() => {
    loadingCard.classList.add('hide');
    aboutCard.classList.remove('hide');
});
