import { ContentCard, ContentPair, ParagraphBlock, Image } from "./models.js"
import { createParagraph } from "./utils.js";
import { initializeApp } from "./main.js";

const loadingCard = document.getElementById('loading-card') as HTMLElement;
const aboutCard = document.getElementById('about') as HTMLElement;

initializeApp("About Me").then(() => {
    loadingCard.classList.add('hide');
    aboutCard.classList.remove('hide');
});