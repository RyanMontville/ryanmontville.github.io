import { initializeApp } from "./main.js";
import { createImageCarousel } from "./modules/utils.js";
import type { Link } from "./models.js";

const pageContent = document.getElementById('page-content') as HTMLElement;
const loadingCard = document.getElementById('loading-card') as HTMLElement;

initializeApp("Python Maze Generator").then(async () => {
    //Create image carousel for version 1
    const versionOnePlaceholder = document.getElementById('version-one-screenshots') as HTMLElement;
    const versionOneScreenshots: Link[] = [
        {
            linkText: "An example of the output of version 1",
            linkURL:"https://raw.githubusercontent.com/RyanMontville/pythonmaze/main/images/V010.png"
        }
    ];
    const versionOneCarousel = createImageCarousel(versionOneScreenshots);
    pageContent.replaceChild(versionOneCarousel, versionOnePlaceholder);
    //Create image carousel for version 2
    const versionTwoPlaceholder = document.getElementById('version-two-screenshots') as HTMLElement;
    const versionTwoScreenshots: Link[] = [
        {
            linkText: "An example of the output of version 2 with solution", 
            linkURL: "https://raw.githubusercontent.com/RyanMontville/pythonmaze/main/images/v021-A.png"
        },
        {
            linkText: "Another example of version 2 with solution", 
            linkURL: "https://raw.githubusercontent.com/RyanMontville/pythonmaze/main/images/vo21-b.png"
        },
        {
            linkText: "A third example of version 2 with solution", 
            linkURL: "https://raw.githubusercontent.com/RyanMontville/pythonmaze/main/images/V021-C.png"
        }
    ]
    const versionTwoCarousel = createImageCarousel(versionTwoScreenshots);
    pageContent.replaceChild(versionTwoCarousel, versionTwoPlaceholder);
    //Create image carousel for version 3
    const versionThreePlaceholder = document.getElementById('version-three-screenshots') as HTMLElement;
    const versionThreeScreenshots: Link[] = [
        {
            linkText: "A - I generated as a maze",
            linkURL: "https://raw.githubusercontent.com/RyanMontville/pythonmaze/main/images/A-I.png"
        },
        {
            linkText: "J - R generated as a maze", 
            linkURL: "https://raw.githubusercontent.com/RyanMontville/pythonmaze/main/images/J-R.png"
        },
        {
            linkText: "S - Z generated as a maze", 
            linkURL: "https://raw.githubusercontent.com/RyanMontville/pythonmaze/main/images/S-Z.png"
        },
        {
            linkText: "Hello world as a maze", 
            linkURL: "https://raw.githubusercontent.com/RyanMontville/pythonmaze/main/images/hello-world.png"
        },
        {
            linkText: "Montville as a maze", 
            linkURL: "https://raw.githubusercontent.com/RyanMontville/pythonmaze/main/images/montville.png"
        },
        {
            linkText: "A cool monkey as a maze", 
            linkURL: "https://raw.githubusercontent.com/RyanMontville/pythonmaze/main/images/a-cool-monkey.png"
        }
    ]
    const versionThreeCarousel = createImageCarousel(versionThreeScreenshots);
    pageContent.replaceChild(versionThreeCarousel, versionThreePlaceholder);
    loadingCard.classList.add('hide');
    pageContent.classList.remove('hide');
});
