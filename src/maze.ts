import { initializeApp } from "./main.js";
import { createImageCarousel } from "./utils.js";
import { BlockContent, Link } from "./models.js";

let mazeOverview: BlockContent[] | null = null;

const mainElem = document.querySelector('main') as HTMLElement;
const pageContent = document.getElementById('page-content') as HTMLElement;
const loadingCard = document.getElementById('loading-card') as HTMLElement;

initializeApp("Python Maze Generator").then(async () => {
    //Create image carousel for version 1
    const versionOnePlaceholder = document.getElementById('version-one-screenshots') as HTMLElement;
    const versionOneScreenshots: Link[] = [
        new Link("An example of the output of version 1", "https://raw.githubusercontent.com/RyanMontville/pythonmaze/main/images/V010.png")
    ];
    const versionOneCarousel = createImageCarousel(versionOneScreenshots);
    pageContent.replaceChild(versionOneCarousel, versionOnePlaceholder);
    //Create image carousel for version 2
    const versionTwoPlaceholder = document.getElementById('version-two-screenshots') as HTMLElement;
    const versionTwoScreenshots: Link[] = [
        new Link("An example of the output of version 2 with solution", "https://raw.githubusercontent.com/RyanMontville/pythonmaze/main/images/v021-A.png"),
        new Link("Another example of version 2 with solution", "https://raw.githubusercontent.com/RyanMontville/pythonmaze/main/images/vo21-b.png"),
        new Link("A third example of version 2 with solution", "https://raw.githubusercontent.com/RyanMontville/pythonmaze/main/images/V021-C.png")
    ]
    const versionTwoCarousel = createImageCarousel(versionTwoScreenshots);
    pageContent.replaceChild(versionTwoCarousel, versionTwoPlaceholder);
    //Create image carousel for version 3
    const versionThreePlaceholder = document.getElementById('version-three-screenshots') as HTMLElement;
    const versionThreeScreenshots: Link[] = [
        new Link("A - I generated as a maze", "https://raw.githubusercontent.com/RyanMontville/pythonmaze/main/images/A-I.png"),
        new Link("J - R generated as a maze", "https://raw.githubusercontent.com/RyanMontville/pythonmaze/main/images/J-R.png"),
        new Link("S - Z generated as a maze", "https://raw.githubusercontent.com/RyanMontville/pythonmaze/main/images/S-Z.png"),
        new Link("Hello world as a maze", "https://raw.githubusercontent.com/RyanMontville/pythonmaze/main/images/hello-world.png"),
        new Link("Montville as a maze", "https://raw.githubusercontent.com/RyanMontville/pythonmaze/main/images/montville.png"),
        new Link("A cool monkey as a maze", "https://raw.githubusercontent.com/RyanMontville/pythonmaze/main/images/a-cool-monkey.png")
    ]
    const versionThreeCarousel = createImageCarousel(versionThreeScreenshots);
    pageContent.replaceChild(versionThreeCarousel, versionThreePlaceholder);
    loadingCard.classList.add('hide');
    pageContent.classList.remove('hide');
});
