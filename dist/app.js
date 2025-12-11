import { loadPortfolio } from "./index.js";
import { loadAboutMe } from "./aboutMe.js";
const pageWrapper = document.getElementById('page-wrapper');
async function initializeApp() {
    //Wait for the DOM to load
    await new Promise(resolve => {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => resolve(), { once: true });
        }
        else {
            resolve();
        }
    });
    await loadHeader();
    switchPage("Portfolio");
}
function switchPage(currentPage) {
    document.title = `${currentPage} - Ryan Montville`;
    switch (currentPage) {
        case "About Me":
            loadAboutMe();
            break;
        default:
            loadPortfolio();
            break;
    }
}
async function fetchHTML(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            console.error(`${response.status}: ${response.statusText}`);
            throw new Error("Error fetching header");
        }
        return await response.text();
    }
    catch (error) {
        console.error(`Error fethcing ${url}: ${error}`);
    }
}
export async function loadHeader() {
    const headerPlaceholder = document.getElementById('header-placeholder');
    try {
        const headerData = await fetchHTML('../templates/header.html');
        if (headerData) {
            //Create the header element and set the header HTML
            const header = document.createElement('header');
            header.innerHTML = headerData;
            pageWrapper.replaceChild(header, headerPlaceholder);
            const portfolioLink = document.getElementById('portfolio-link');
            portfolioLink.addEventListener('click', () => switchPage("Portfolio"));
            const aboutMeLink = document.getElementById('about-me-link');
            aboutMeLink.addEventListener('click', () => switchPage("About Me"));
        }
    }
    catch (error) {
        console.error(`Failed to load the header: ${error}`);
    }
}
initializeApp();
