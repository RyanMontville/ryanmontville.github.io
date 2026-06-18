import { g } from "./goto.js";
import type { ContentPair } from "./models.js";
import { makeElement } from "./modules/utils.js";

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
    const header = document.createElement('header');
    const links: ContentPair[] = [
        {
            contentKey: "Portfolio",
            contentValue: "/"
        },
        {
            contentKey: "About Me",
            contentValue: "/about-me.html"
        },
        {
            contentKey: "My Adventure Blog",
            contentValue: "https://ryanmontville.com/disney/"
        },
        {
            contentKey: "GitHub",
            contentValue: "https://github.com/RyanMontville",
            tuppleValue: "external"
        },
        {
            contentKey: "LinkedIn",
            contentValue: "https://www.linkedin.com/in/ryanmontville/",
            tuppleValue: "external"
        },
        {
            contentKey: "Instagram",
            contentValue: "https://www.instagram.com/ryanmontville/",
            tuppleValue: "external"
        }
    ];
    const nav = links.reduce((acc: HTMLElement, link: ContentPair) => {
        const a = makeElement("a", null, null, link.contentKey) as HTMLAnchorElement;
        a.href = link.contentValue;
        if (link.tuppleValue) {
            a.target = "_blank";
            a.setAttribute('rel', 'noopener noreferrer');
        }
        if (currentPage === link.contentKey) a.style.fontWeight = "bold";
        acc.appendChild(a);
        return acc;

    }, makeElement("nav", null, null, null));
    const headerImg = makeElement("img", null, null, null);
    headerImg.setAttribute("src", "https://raw.githubusercontent.com/RyanMontville/ryanmontville.github.io/main/images/main.png");
    const headerH1 = makeElement("h1", null, null, "Ryan Montville");
    header.append(nav, headerImg, headerH1);
    pageWrapper.replaceChild(header, headerPlaceholder);

    // try {
    //     const headerData = await fetchHTML('../templates/header.html');
    //     if (headerData) {
    //         //Create the header element and set the header HTML
    //         const header = document.createElement('header');
    //         header.innerHTML = headerData;
    //         pageWrapper.replaceChild(header, headerPlaceholder);
    //     }
    // } catch (error: any) {
    //     console.error(`Failed to load the header: ${error}`);
    // }
}