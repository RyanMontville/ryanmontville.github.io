import { ContentPair, Link, ParagraphBlock } from "./models";

export function fixDate(dateString: string, dateFormat: string) {
  let dateObj: Date = new Date(dateString);
  let dateTimezoneFixed: Date = new Date(dateObj.getTime() - dateObj.getTimezoneOffset() * -60000);
  if (dateFormat === 'shortDate') {
    return dateTimezoneFixed.toLocaleDateString('en-US', {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric',
    });
  } else {
    return dateTimezoneFixed.toLocaleDateString('en-US', {
      month: 'long',
      year: 'numeric',
    });
  }
}

export function getSkillImage(skill: string): string {
  switch (skill) {
    case 'Java': { return "https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white"; }
    case 'Python': { return "https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54"; }
    case 'C#': { return "https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=csharp&logoColor=white"; }
    case 'HTML': { return "https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"; }
    case 'CSS': { return "https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"; }
    case 'JavaScript': { return "https://img.shields.io/badge/JavaScript-141414?style=for-the-badge&logo=javascript&logoColor=F7DF1E"; }
    case 'TypeScript': { return "https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"; }
    case 'Spring Boot': { return "https://img.shields.io/badge/Spring_Boot-F2F4F9?style=for-the-badge&logo=spring-boot"; }
    case 'PostgreSQL': { return "https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white"; }
    case 'JSON': { return "https://img.shields.io/badge/json-5E5C5C?style=for-the-badge&logo=json&logoColor=white"; }
    case 'Vue.js': { return "https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D"; }
    case 'React.js': { return "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"; }
    case 'Angular': { return "https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white"; }
    case 'Bootstrap': { return "https://img.shields.io/badge/Bootstrap-7952B3?logo=bootstrap&logoColor=fff&style=for-the-badge"; }
    case 'Turtle Graphics': { return "https://raw.githubusercontent.com/RyanMontville/ryanmontville.github.io/main/images/Turtle%20Grpahics.png"; }
    case 'Blazor': { return "https://img.shields.io/badge/Blazor-512BD4?logo=blazor&logoColor=fff&style=for-the-badge"; }
    case 'Flask': { return "https://img.shields.io/badge/Flask-58CC02?style=for-the-badge&logo=flask&logoColor=white"; }
    case 'Node.js': { return "https://img.shields.io/badge/Node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"; }
    case 'Intentionally Bad Design': { return "https://raw.githubusercontent.com/RyanMontville/ryanmontville.github.io/main/images/intbaddes.png"; }
    case 'MySQL': { return "https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white"; }
    case 'PHP': { return "https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white"; }
    case 'Python Pillow': { return "https://raw.githubusercontent.com/RyanMontville/ryanmontville.github.io/refs/heads/main/images/pillow.png" }
    case 'HTML Canvas Graphics': { return "https://raw.githubusercontent.com/RyanMontville/ryanmontville.github.io/refs/heads/main/images/htmlcanvas.png" }
    case 'Firebase': { return "https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black" }
    case 'Vite': { return "https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=Vite&logoColor=white" }
    default: { return ""; break; }
  }
}

export function createParagraph(content: ParagraphBlock) {
  let paragraph = content['parts'].reduce((acc: HTMLElement, part: ContentPair) => {
    switch (part['contentKey']) {
      case "text":
        const partSpan = document.createElement('span');
        partSpan.textContent = part['contentValue'];
        acc.appendChild(partSpan);
        break;
      case "bold":
        const partB = document.createElement('b');
        partB.textContent = part['contentValue'];
        acc.appendChild(partB);
        break;
      case "italics":
        const partI = document.createElement('i');
        partI.textContent = part['contentValue'];
        acc.appendChild(partI);
      default:
        const partLink = document.createElement('a');
        partLink.setAttribute('href', part['contentKey']);
        partLink.textContent = part['contentValue']
        acc.appendChild(partLink);
    }
    return acc;
  }, document.createElement('p'));
  return paragraph;
}

export function createButton(buttonType: string, buttonId: string | null, buttonClass: string | null, buttonText: string | null, buttonIcon: string | null) {
  const newButton = document.createElement('button');
  if (buttonId) newButton.setAttribute('id', buttonId);
  if (buttonClass) newButton.setAttribute('class', buttonClass);
  newButton.setAttribute('type', buttonType);
  if (buttonIcon) {
    const icon = document.createElement('span');
    icon.setAttribute('class', 'material-symbols-outlined');
    icon.textContent = buttonIcon;
    newButton.appendChild(icon);
  }
  if (buttonText) {
    const buttonTextNode = document.createTextNode(buttonText);
    newButton.appendChild(buttonTextNode);
  }
  return newButton;
}

export async function loadData(url: string) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error Fetching ${url}`);
    }
    return await response.json();
  } catch (error: any) {
    console.error(error);
  }
}

export function createImageCarousel(images: Link[]): HTMLDivElement {
  let imageIndex: number = 0;
  const numImages: number = images.length;
  //Create Main Elements
  const carouselContainer = document.createElement('div');
  carouselContainer.setAttribute("class", "carousel");
  const content = document.createElement('section');
  content.setAttribute('class', 'carousel-content');
  const screenshot = document.createElement('img');
  const screenshotDescriptionP = document.createElement('p');
  //Core Update Function
  const updateCarousel = () => {
    const currentImage = images[imageIndex];
    const screenshotSource = currentImage.linkURL;
    const screenshotDescription = currentImage.linkText;
    //Update Image Attributes
    screenshot.setAttribute('src', screenshotSource);
    screenshot.setAttribute('alt', screenshotDescription);
    screenshot.setAttribute('title', screenshotDescription);
    //Update Description Text
    screenshotDescriptionP.textContent = screenshotDescription;
    //Update Dots (if they exist)
    const dotsContainer = carouselContainer.querySelector('.dots');
    if (dotsContainer) {
      dotsContainer.querySelectorAll('.dot').forEach((dot, index) => {
        if (index === imageIndex) {
          dot.classList.add('active');
        } else {
          dot.classList.remove('active');
        }
      });
    }
  };
  //Initial Setup
  updateCarousel();
  screenshot.addEventListener('click', () => window.open(images[imageIndex].linkURL, '_blank'));
  //Navigation Logic
  if (numImages > 1) {
    //Helper to calculate the next/previous index
    const nextIndex = (current: number) => (current + 1) % numImages;
    const prevIndex = (current: number) => (current - 1 + numImages) % numImages;
    //Previous Button
    const previousButton = createButton('button', null, 'previousImageButton', null, 'arrow_back_ios');
    previousButton.addEventListener('click', () => {
      imageIndex = prevIndex(imageIndex);
      updateCarousel();
    });
    content.appendChild(previousButton);
    //Next Button
    const nextButton = createButton('button', null, 'nextImageButton', null, 'arrow_forward_ios');
    nextButton.addEventListener('click', () => {
      imageIndex = nextIndex(imageIndex);
      updateCarousel();
    });
    content.appendChild(nextButton);
  }
  content.appendChild(screenshot);
  content.appendChild(screenshotDescriptionP);
  carouselContainer.appendChild(content);
  //Create Dots
  if (numImages > 1) {
    const dots = document.createElement('section');
    dots.setAttribute('class', "dots");
    images.forEach((currentImage, index) => {
      const dot = createButton('button', null, 'dot', `${index + 1}`, null);
      //Set initial active class
      if (index === imageIndex) {
        dot.classList.add('active');
      }
      dot.addEventListener('click', () => {
        imageIndex = index;
        updateCarousel();
      });
      dots.appendChild(dot);
    });
    carouselContainer.appendChild(dots);
  }
  return carouselContainer;
}