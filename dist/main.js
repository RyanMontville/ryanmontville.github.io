import { g } from "./goto.js";
const pageWrapper = document.getElementById('page-wrapper');
export async function initializeApp(currentPage) {
    if (currentPage !== "") {
        //Set the page title
        document.title = `${currentPage} - Ryan Montville`;
    }
    //Wait for the DOM to load
    await new Promise(resolve => {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => resolve(), { once: true });
        }
        else {
            resolve();
        }
    });
    await loadHeader(currentPage);
    const urlParams = new URLSearchParams(window.location.search);
    const end = urlParams.get('goto');
    if (end) {
        console.log("found");
        g(end);
    }
    const mobileNavToggle = document.getElementById('mobile-nav-toggle');
    const nav = document.querySelector('nav');
    const body = document.querySelector('body');
    mobileNavToggle.addEventListener('click', () => {
        body.classList.toggle('no-scroll-fixed');
        mobileNavToggle.classList.toggle('active');
        nav.classList.toggle('active');
    });
}
export async function fetchHTML(url) {
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
export async function loadHeader(currentPage) {
    const headerPlaceholder = document.getElementById('header-placeholder');
    try {
        const headerData = await fetchHTML('../templates/header.html');
        if (headerData) {
            //Create the header element and set the header HTML
            const header = document.createElement('header');
            header.innerHTML = headerData;
            pageWrapper.replaceChild(header, headerPlaceholder);
        }
    }
    catch (error) {
        console.error(`Failed to load the header: ${error}`);
    }
}
