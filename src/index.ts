import type { Link, Project } from "./models.js";
import { initializeApp } from "./main.js";
import { fixDate, getSkillImage, loadData, createImageCarousel, makeElement } from "./modules/utils.js";

let websites: Project[] = [];
let otherProjects: Project[] = [];
let projectArray: Project[] = [];
let projectsToDisplay: Project[] = [];

let tabToShow: string = "";
let tabs: string[] = [];
let skills: string[] = [];

const mainElem = document.querySelector('main') as HTMLElement;
const loadingCard = document.getElementById('loading-card') as HTMLElement;
const projectsElement = document.getElementById("projects") as HTMLElement;

function addTabsBar() {
    const tabsBar = tabs.reduce((acc: HTMLElement, tab: string) => {
        const tabId = tab.replaceAll(" ", "-").toLowerCase().split("-(")[0];
        const tabButton = makeElement("button", tabId, null, tab);
        tabButton.setAttribute("type", "button");
        if (tabId === tabToShow) tabButton.classList.add("active");

        tabButton.addEventListener("click", () => {
            tabToShow = tabId;
            if (tabId === "all-projects") projectArray = [...websites, ...otherProjects];
            if (tabId === "websites-and-apps") projectArray = websites;
            if (tabId === "labs-&-utilities") projectArray = otherProjects;
            projectsToDisplay = projectArray;
            loadSkills();
            displayProjects();
            setSkillSelected("all");
        });

        acc.appendChild(tabButton);
        return acc;
    }, makeElement("div", "tabs", null, null));
    projectsElement.appendChild(tabsBar);
}

function filterProjectsBySkill(skill: string) {
    if (skill === "all") {
        projectsToDisplay = projectArray;
    } else {
        projectsToDisplay = projectArray.filter(project => project.skills.includes(skill));
    }
    displayProjects();
    setSkillSelected(skill);
}

function createFilterSelect() {
    const filterSelect = skills.reduce((acc: HTMLSelectElement, currSkill: string) => {
        const skillOption = document.createElement('option');
        skillOption.textContent = currSkill;
        skillOption.setAttribute('value', currSkill);
        skillOption.setAttribute('id', currSkill + "-option");
        acc.appendChild(skillOption);
        return acc;
    }, document.createElement('select'));

    filterSelect.setAttribute('id', "filter-select");
    const all = document.createElement('option');
    all.textContent = "All skills";
    all.setAttribute('value', "all");
    all.setAttribute('id', "all-option");
    filterSelect.prepend(all);
    return filterSelect;
}

function setSkillSelected(skill: string) {
    const filterSelectElem = document.getElementById('filter-select') as HTMLSelectElement | null;
    if (filterSelectElem) {
        filterSelectElem.value = skill;
    }
}

function populateFilterBar(filterBarElement: HTMLElement) {
    const oldH2 = filterBarElement.querySelector('h2');
    const projectCountH2 = document.createElement('h2');
    projectCountH2.textContent = `Displaying ${projectsToDisplay.length} projects`;

    if (oldH2) {
        filterBarElement.replaceChild(projectCountH2, oldH2);
    } else {
        filterBarElement.appendChild(projectCountH2);
    }

    const selectDiv = filterBarElement.querySelector('div');
    if (selectDiv) {
        selectDiv.remove();
    }

    const filterDiv = document.createElement('div');
    const filterLabel = document.createElement('label');
    filterLabel.setAttribute('for', 'filter-select');
    filterLabel.textContent = 'Filter by skill: ';
    filterDiv.appendChild(filterLabel);

    loadSkills();
    const filterSelect = createFilterSelect();
    filterSelect.addEventListener('change', (e) => {
        const target = e.target as HTMLSelectElement;
        filterProjectsBySkill(target.value);
    });

    filterDiv.appendChild(filterSelect);
    filterBarElement.appendChild(filterDiv);
}

function displayProjects() {
    if (tabToShow === "all-projects") {
        projectsToDisplay.sort((a, b) => a.projectTitle.localeCompare(b.projectTitle));
    }

    projectsElement.innerHTML = "";
    addTabsBar();

    const filterBar = document.getElementById('filter-bar');
    if (!filterBar) {
        const newFilterBar = document.createElement('section');
        newFilterBar.setAttribute('id', 'filter-bar');
        mainElem.appendChild(newFilterBar);
        populateFilterBar(newFilterBar);
    } else {
        populateFilterBar(filterBar);
    }

    const currentProjectsContainer = document.getElementById('projects-container');
    const projectsContainer = projectsToDisplay.reduce((acc: HTMLElement, currProject: Project) => {
        const newProject = document.createElement('article');
        newProject.setAttribute('class', 'project card');

        const projectHeader = document.createElement('section');
        projectHeader.setAttribute('class', 'project-header');

        const projectH2 = document.createElement('h2');
        projectH2.textContent = currProject.projectTitle;
        projectHeader.appendChild(projectH2);

        const dateH2 = document.createElement('h2');
        dateH2.textContent = fixDate(currProject.datePublished.toString(), 'longDate');
        projectHeader.appendChild(dateH2);
        newProject.appendChild(projectHeader);

        const skillsSection = currProject.skills.reduce((accSkill: HTMLElement, skill: string) => {
            const skillImg = document.createElement('img');
            skillImg.setAttribute('src', getSkillImage(skill));
            skillImg.setAttribute('alt', skill);
            skillImg.style.cursor = 'pointer';
            skillImg.addEventListener('click', () => filterProjectsBySkill(skill));
            accSkill.appendChild(skillImg);
            return accSkill;
        }, document.createElement('section'));

        skillsSection.setAttribute('class', 'skills');
        newProject.appendChild(skillsSection);

        const description = document.createElement('div');
        description.innerHTML = currProject.description;
        newProject.appendChild(description);

        if (currProject.screenshots.length !== 0) {
            const screenshotCarousel = createImageCarousel(currProject.screenshots);
            newProject.appendChild(screenshotCarousel);
        }

        const links = currProject.links.reduce((accLink: HTMLElement, link: Link) => {
            const linkA = document.createElement('a');
            linkA.textContent = link.linkText;
            linkA.setAttribute('href', link.linkURL);
            if (link.external) {
                linkA.setAttribute('target', '_blank');
                linkA.setAttribute('rel', 'noopener noreferrer');
            }
            accLink.appendChild(linkA);
            return accLink;
        }, document.createElement('section'));

        links.setAttribute('class', 'links');
        newProject.appendChild(links);

        acc.appendChild(newProject);
        return acc;
    }, document.createElement('section'));

    projectsContainer.setAttribute('id', 'projects-container');
    if (currentProjectsContainer) {
        mainElem.replaceChild(projectsContainer, currentProjectsContainer);
    } else {
        mainElem.appendChild(projectsContainer);
    }
}

function loadSkills() {
    skills = projectArray.reduce((acc: string[], currentProject: Project) => {
        currentProject.skills.forEach(skill => {
            if (!acc.includes(skill)) {
                acc.push(skill);
            }
        });
        return acc;
    }, []);
    skills.sort();
}

initializeApp("Portfolio").then(async () => {
    loadingCard.classList.remove('hide');
    await loadData('https://raw.githubusercontent.com/RyanMontville/ryanmontville.github.io/refs/heads/main/src/data/projects.json')
        .then((data) => {
            websites = data["websites"];
            otherProjects = data["other"];
            tabs.push(`All Projects (${websites.length + otherProjects.length})`);
            tabs.push(`Websites and Apps (${websites.length})`);
            tabs.push(`Labs & Utilities (${otherProjects.length})`);
            const urlParams = new URLSearchParams(window.location.search);
            const setTab: string | null = urlParams.get("tab");
            if (setTab) {
                switch (setTab) {
                    case "websites":
                        tabToShow = "websites-and-apps";
                        projectArray = websites;
                        projectsToDisplay = websites;
                        break;
                    case "labs":
                        tabToShow = "labs-&-utilities";
                        projectArray = otherProjects;
                        projectsToDisplay = otherProjects;
                        break;
                    default:
                        tabToShow = "all-projects";
                        projectArray = [...websites, ...otherProjects];
                        projectsToDisplay = [...websites, ...otherProjects];
                        break
                }
            } else {
                tabToShow = "all-projects";
                projectArray = [...websites, ...otherProjects];
                projectsToDisplay = [...websites, ...otherProjects];
            }
        })
        .catch((error: any) => console.error("Error loading projects", error));
    addTabsBar();
    displayProjects();
    setSkillSelected("all");
    loadingCard.classList.add('hide');
    projectsElement.classList.remove("hide");
});