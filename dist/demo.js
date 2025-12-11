import { initializeApp } from "./main.js";
const loadingCard = document.getElementById('loading-card');
const mainElem = document.querySelector('main');
const infoCard = document.getElementById('info-card');
const infoHeader = infoCard.querySelector('h2');
const iframeContainer = document.getElementById('iframe-container');
initializeApp("Maze Demo").then(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const version = urlParams.get('version');
    if (version) {
        const demoIframe = document.createElement('iframe');
        demoIframe.width = "900";
        demoIframe.height = "800";
        demoIframe.allowFullscreen = true;
        if (version === "1") {
            infoHeader.textContent = "Version 1 demo";
            demoIframe.src = "https://trinket.io/embed/python/12662b6d07?outputOnly=true&runOption=run&start=result";
            demoIframe.id = "version-one-demo";
            demoIframe.title = "Version 1 Demo";
        }
        else if (version === "2") {
            infoHeader.textContent = "Version 2 demo";
            demoIframe.src = "https://trinket.io/embed/python/e5d170e1f4?outputOnly=true&runOption=run&start=result";
            demoIframe.id = "version-two-demo";
            demoIframe.title = "Version 2 Demo";
        }
        else if (version === "3") {
            infoHeader.textContent = "Version 3 demo";
            demoIframe.src = "https://trinket.io/embed/python/8e9131e413?outputOnly=true&start=result&showInstructions=true";
            demoIframe.id = "version-three-demo";
            demoIframe.title = "Version 3 Demo";
        }
        iframeContainer.appendChild(demoIframe);
    }
    loadingCard.classList.add('hide');
    infoCard.classList.remove('hide');
    iframeContainer.classList.remove('hide');
});
