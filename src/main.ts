import { g } from "./goto.js";

const pageWrapper = document.getElementById('page-wrapper') as HTMLElement;

export async function initializeApp(currentPage: string) {
    if (currentPage !== "") {
        //Set the page title
        document.title = `${currentPage} - Ryan Montville`;
    }
    //Wait for the DOM to load
    await new Promise<void>(resolve => {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => resolve(), { once: true });
        } else {
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
    const mobileNavToggle = document.getElementById('mobile-nav-toggle') as HTMLElement;
    const nav = document.querySelector('nav') as HTMLElement;
    const body = document.querySelector('body') as HTMLElement;
    mobileNavToggle.addEventListener('click', () => {
        body.classList.toggle('no-scroll-fixed');
        mobileNavToggle.classList.toggle('active');
        nav.classList.toggle('active');
    });
}

export async function fetchHTML(url: string) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            console.error(`${response.status}: ${response.statusText}`);
            throw new Error("Error fetching header");
        }
        return await response.text();
    } catch (error: any) {
        console.error(`Error fethcing ${url}: ${error}`);
    }
}

export async function loadHeader(currentPage: string) {
    const headerPlaceholder = document.getElementById('header-placeholder') as HTMLElement;
    try {
        const headerData = await fetchHTML('../templates/header.html');
        if (headerData) {
            //Create the header element and set the header HTML
            const header = document.createElement('header');
            header.innerHTML = headerData;
            pageWrapper.replaceChild(header, headerPlaceholder);
        }
    } catch (error: any) {
        console.error(`Failed to load the header: ${error}`);
    }
}