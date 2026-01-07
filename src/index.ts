import { Link, Project } from "./models.js";
import { fixDate, getSkillImage, loadData, createImageCarousel } from "./utils.js";
import { initializeApp } from "./main.js";

let projects: Project[] = [];
let projectsToDisplay: Project[] = [];
let skills: string[] = [];

const mainElem = document.querySelector('main') as HTMLElement;
const loadingCard = document.getElementById('loading-card') as HTMLElement;

function filterProjectsBySkill(skill: string) {
    if (skill === "all") {
        projectsToDisplay = projects;
    } else {
        projectsToDisplay = projects.filter(project => project['skills'].includes(skill));
    }
    displayProjects();
    setSkillSelected(skill);
}

function createFilterSelect() {
    const filterSelect = skills.reduce((acc: HTMLElement, currSkill: string) => {
        const skillOption = document.createElement('option');
        skillOption.textContent = currSkill;
        skillOption.setAttribute('value', currSkill);
        skillOption.setAttribute('id', currSkill + "-option")
        acc.appendChild(skillOption);
        return acc;
    }, document.createElement('select'));
    filterSelect.setAttribute('id', "filter-select");
    const all = document.createElement('option');
    all.textContent = "All Projects";
    all.setAttribute('value', "all");
    all.setAttribute('id', "all-option");
    filterSelect.prepend(all);
    return filterSelect;
}

function setSkillSelected(skill: string) {
    const filterSelectElem = document.getElementById('filter-select') as HTMLSelectElement | null;
    if (filterSelectElem) {
        const selectedIndex = filterSelectElem.selectedIndex;
        const selectedSkill = filterSelectElem.options[selectedIndex];
        selectedSkill.selected = false;
        const l = filterSelectElem.options.length;
        for (let i = 0; i < l; i++) {
            if (filterSelectElem.options[i].value === skill) {
                filterSelectElem.options[i].selected = true;
            }
        }
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
    if (!selectDiv) {
        const filterDiv = document.createElement('div');
        const filterLabel = document.createElement('label');
        filterLabel.setAttribute('for', 'filters');
        filterLabel.textContent = 'Filter Projects:'
        filterDiv.appendChild(filterLabel);
        const filterSelect = createFilterSelect();
        filterSelect.addEventListener('change', (e) => {
            const target = e.target as HTMLSelectElement;
            const skillSelected = target.value;
            filterProjectsBySkill(skillSelected);
        });
        filterDiv.appendChild(filterSelect);
        filterBarElement.appendChild(filterDiv);
    }
}


function displayProjects() {
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
        newProject.setAttribute('class', 'project');
        const projectHeader = document.createElement('section');
        projectHeader.setAttribute('class', 'project-header');
        const projectH2 = document.createElement('h2');
        projectH2.textContent = currProject['projectTitle'];
        projectHeader.appendChild(projectH2);
        const dateH2 = document.createElement('h2');
        dateH2.textContent = fixDate(currProject['datePublished'].toString(), 'longDate');
        projectHeader.appendChild(dateH2);
        newProject.appendChild(projectHeader);
        const skills = currProject['skills'].reduce((acc: HTMLElement, skill: string) => {
            const skillImg = document.createElement('img');
            skillImg.setAttribute('src', getSkillImage(skill));
            skillImg.addEventListener('click', () => filterProjectsBySkill(skill));
            acc.appendChild(skillImg);
            return acc;
        }, document.createElement('section'));
        skills.setAttribute('class', 'skills');
        newProject.appendChild(skills);
        const description = document.createElement('div');
        description.innerHTML = currProject['description'];
        newProject.appendChild(description);
        if (currProject['screenshots'].length !== 0) {
            const screenshotCarousel = createImageCarousel(currProject['screenshots']);
            newProject.appendChild(screenshotCarousel);
        }
        const links = currProject['links'].reduce((acc: HTMLElement, link: Link) => {
            const linkA = document.createElement('a');
            linkA.textContent = link['linkText'];
            linkA.setAttribute('href', link['linkURL'])
            if (link['external']) {
                linkA.setAttribute('target', '_blank');
            }
            acc.appendChild(linkA);
            return acc;
        }, document.createElement('section'));
        links.setAttribute('class', 'links');
        newProject.appendChild(links);
        acc.appendChild(newProject);
        return acc;
    }, document.createElement('section'));
    projectsContainer.setAttribute('id', 'projects-container')
    if (currentProjectsContainer) {
        mainElem.replaceChild(projectsContainer, currentProjectsContainer);
    } else {
        mainElem.appendChild(projectsContainer);
    }
}

function loadSkills() {
    skills = projects.reduce((acc: string[], currentProject: Project) => {
        currentProject['skills'].forEach(skill => {
            if (!acc.includes(skill)) {
                acc.push(skill);
            }
        })
        return acc;
    }, []);
    skills.sort();
}

initializeApp("Portfolio").then(async () => {
    loadingCard.classList.remove('hide');
    await loadData('src/data/projects.json')
        .then((data) => {
            projects = data;
            projectsToDisplay = data;
        })
        .catch((error: any) => console.error("Error loading projects", error));
    loadSkills();
    displayProjects();
    setSkillSelected("all");
    loadingCard.classList.add('hide');
})