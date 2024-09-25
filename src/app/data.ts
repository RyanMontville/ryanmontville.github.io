import { Link, Project } from "./project.model";

const beeTracker: Project = new Project(
    "Beehive Health Tracker",
    "March 2023",
    ['Java', 'PostgreSQL', 'React.js', 'JSON', 'Spring Boot', 'HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    "<p>I created a web app for Monte's Own that can be used to track the health of bee hives. The app allows the user to quickly and easily record the data using their phone when the go to inspect the bee hives. The purpose of recording the inspections is to try to find patterns and possibly use the data from last year to predict what will happen this year. The app pulls weather data from <a href='https://open-meteo.com/'>Open metro's</a> api to be recorded in the inspection.</p>",
    [
        new Link("The homepage", "https://raw.githubusercontent.com/RyanMontville/bee-inspection/main/screenshots/bees-homepage.png"),
        new Link("Recording a frame", "https://raw.githubusercontent.com/RyanMontville/bee-inspection/main/screenshots/bees-inspection-frames.png"),
        new Link("End of inspection", "https://raw.githubusercontent.com/RyanMontville/bee-inspection/main/screenshots/bees-past-inspections.png"),
        new Link("Viewing a past inspection", "https://raw.githubusercontent.com/RyanMontville/bee-inspection/main/screenshots/bees-past-inspections.png"),
        new Link("Search Page", "https://raw.githubusercontent.com/RyanMontville/bee-inspection/main/screenshots/bees-search.png")
    ],
    [
        new Link("View Live Demo", "https://ryanmontville.github.io/bee-inspection/"),
        new Link("GitHub Repo", "https://github.com/RyanMontville/Bee-Inspection")
    ]
)
const mazeGenerator: Project = new Project(
    "Python Maze Generator",
    "June 2024",
    ['Python', 'Turtle Graphics'],
    "<p>I wanted to try to use <a href='https://docs.python.org/3/library/turtle.html'>Turtle Graphics</a> to randomly generate mazes using python. I still consider this project a work in progress because I have not yet achieved the level of randomness that I imagined when I started this project. Version 1 creates a grid and randomly draws lines on the grid. It almost always is unsolvable. Version 2 draws premade segments than randomly change in size and randomly close off paths. The current version (version 3) takes a word or phrase and generates a maze using the letters as paths.</p>",
    [
        new Link("Version 1", "https://raw.githubusercontent.com/RyanMontville/pythonmaze/main/images/V010.png"),
        new Link("Version 2", "https://raw.githubusercontent.com/RyanMontville/pythonmaze/main/images/V021-D.png"),
        new Link("Version 3", "https://raw.githubusercontent.com/RyanMontville/pythonmaze/main/images/hello-world.png")
    ],
    [
        new Link("Read More and View Demos", "/maze"),
        new Link("GitHub Repo", "https://github.com/RyanMontville/pythonmaze")
    ]
)

const unitConverter: Project = new Project(
    "Unit Converter",
    "October 2023",
    ['C#', 'Blazor', 'HYML', 'CSS'],
    "<p>I want to learn C# to see how it compares to Java. After taking a course, I created this app which uses Blazor for the front-end. The app can convert distances, weights, and temperatures.</p>",
    [
        new Link("Converting distances", "https://raw.githubusercontent.com/RyanMontville/unitconverter/main/screenshots/unit-distance.png"),
        new Link("Convertin weights", "https://raw.githubusercontent.com/RyanMontville/unitconverter/main/screenshots/unit-temperature.png"),
        new Link("Converting temperatures", "https://raw.githubusercontent.com/RyanMontville/unitconverter/main/screenshots/unit-weight.png")
    ],
    [
        new Link("View Live Demo", "https://ryanmontville.github.io/unitconverter/"),
        new Link("GitHub Repo", "https://github.com/RyanMontville/unitconverter")
    ]
)

const canvasStats: Project = new Project(
    "Canvas Stats",
    "July 2024",
    ['Angular', 'Python', 'PostgreSQL', 'HTML', 'CSS', 'TypeScript'],
    "<p>I created a web app to display statistics from <a href='https://canvas.fediverse.events'>canvas</a>. Users can view their individual statistics and overall event metrics, such as the most common colors and top pixel placement coordinates. I imported the SQL data into a PostgreSQL database, wrote functions with Psycopg2 to rank users and analyze their contributions, and used the Pillow library to generate various pixel-based images. The web app, built with Angular, serves data from CSV files, features a search function, and allows users to compare their 2024 stats with 2023.</p>",
    [
        new Link("The stats for the 2024 event", "https://raw.githubusercontent.com/RyanMontville/canvas-stats/main/screenshots/home.png"),
        new Link("An example of a user's stats", "https://raw.githubusercontent.com/RyanMontville/canvas-stats/main/screenshots/user-view.png"),
        new Link("An example of displaying the pixels placed by a user", "https://raw.githubusercontent.com/RyanMontville/canvas-stats/main/screenshots/user-pixels.png"),
        new Link("An image of all the black pixels placed on the canvas", "https://raw.githubusercontent.com/RyanMontville/canvas-stats/main/screenshots/color-view.png")
    ],
    [
        new Link("Read More", "/read-more-canvas"),
        new Link("Go to Canvas Stats", "https://canvasstats.com/"),
        new Link("GitHub Repo", "https://github.com/RyanMontville/canvas-stats")
    ]
)

const triviaGame: Project = new Project(
    "Trivia Game",
    "August 2023",
    ['Python', 'Flask', 'HTML', 'CSS'],
    "<p>I wanted to learn Python, so I took a course on Udemy, then built this app. The app runs on Flask and Python. The questions are taken from <a href='https://opentdb.com/api_config.php'>Open Trivia Database's</a> API.</p><p>The app is now live on Render.</p>",
    [
        new Link("The start screen", "https://raw.githubusercontent.com/RyanMontville/trivia/main/screenshots/trivia-start-screen.png"),
        new Link("An example of the question screen", "https://raw.githubusercontent.com/RyanMontville/trivia/main/screenshots/trivia-question.png"),
        new Link("An example of the answer screen", "https://raw.githubusercontent.com/RyanMontville/trivia/main/screenshots/trivia-answer.png")
    ],
    [
        new Link("Play the game on Render", "https://trivia-zzld.onrender.com/"),
        new Link("GitHub Repo", "https://github.com/RyanMontville/trivia")
    ]
)

const goFish: Project = new Project(
    "Go Fish",
    "July 2023",
    ['Angular', 'TypeScript', 'HTML', 'CSS'],
    "<p>An Angular app of the card game Go Fish. Following the rules of the game by <a href='https://bicyclecards.com/how-to-play/go-fish'>Bicyclecards.com</a>. The computer picks a card from its hand at random and is not influenced by the cards in the user's hand. There is a chat log to keep track of all of the turns.</p>",
    [
        new Link("Go Fish", "https://raw.githubusercontent.com/RyanMontville/go-fish/main/screenshots/game-screen.png")
    ],
    [
        new Link("Play the Game", "https://ryanmontville.github.io/go-fish/"),
        new Link("GitHub Repo", "https://github.com/RyanMontville/go-fish")
    ]
)

const myAdventureBlog: Project = new Project(
    "My Adventure Blog",
    "April 2023",
    ['React.js', 'JSON', 'HTML', 'JavaScript', 'CSS'],
    "<p>In 2015 I started working in Disney World in the Disney College Program. I created a wordpress blog to talk about my time working for Disney. When I decided to switch careers after quitting Disney, one of the side projects I did was rebuilding the blog with React.js. The blog has pagination so the page isn't super long, has a scroll to top button, and has filter/search options.</p>",
    [
        new Link("My Adventure Blog", "https://raw.githubusercontent.com/RyanMontville/disney/main/screenshots/myAdvenutreBlog.png")
    ],
    [
        new Link("Read the Blog", "https://ryanmontville.github.io/disney/"),
        new Link("GitHub Repo", "https://github.com/RyanMontville/disney")
    ]
)

const warCardGame: Project = new Project(
    "War Card Game",
    "April 2023",
    ['Java', 'Spring Boot', 'Angular', 'TypeScript', 'HTML', 'CSS'],
    "<p>One of the first side projects I started working on during the Tech Elevator bootcamp was a CLI of the card game War. The application evolved as we were taught the different parts of full stack development. I knew I wanted to make a web interface for the game, so I created an API. After the bootcamp concluded, I wanted to learn React.js, so I used React to build the front end of the app.</p><p>I have created a second version of the app in Angular that doesn't rely on the API or Java, so that I could deploy it to GitHub pages. The Angular version of the app handles all of the game logic in Typescript.</p>",
    [
        new Link("Home Screen", "https://raw.githubusercontent.com/RyanMontville/War/main/screenshots/homepage.png"),
        new Link("Game Play", "https://raw.githubusercontent.com/RyanMontville/War/main/screenshots/game.png"),
        new Link("Running the Simulation", "https://raw.githubusercontent.com/RyanMontville/War/main/screenshots/simulation.png"),
        new Link("Game Over Screen", "https://raw.githubusercontent.com/RyanMontville/War/main/screenshots/game-over.png")
    ],
    [
        new Link("Play the Game", "https://ryanmontville.github.io/War/"),
        new Link("GitHub Repo", "https://github.com/RyanMontville/War")
    ]
)

const hangman: Project = new Project(
    "Hangman",
    "February 2023",
    ['Java', 'Spring Boot', 'JSON', 'Angular', 'TypeScript', 'HTML', 'CSS'],
    "<p>Another one of my early side projects was the game hangman. The app uses Angular for the front end and Typescript for the game logic. I originally planned on using an api with a Java backend, but it would cost extra money to deploy it, so I rewrote the program within the Angular app using Typescript. You can still view the code for the api in the server folder.</p><p>When a new game is started, a word is picked at random from the word bank or selected from <a href='https://random-word-api.herokuapp.com/home'>Random word API</a>, converts the word into an array list of underscores to represent each letter in the word and prints out an ascii gallows. The ascii output is stored in 7 arrays, one for each line of the ascii gallows. It asks the user to guess a letter. If the guess isn't in the word, it adds the guess to a list of wrong guesses and adds a body part to the proper gallows array and prints the gallows again. If the guess is correct, it replaces every underscore in the list where that letter should be. When a game ends, a reset method is called which resets the gallows, clears the list of underscores, picks a new word and random and starts the game over.</p>",
    [
        new Link("Word selection", "https://raw.githubusercontent.com/RyanMontville/Hangman/main/screenshots/hangman-word-selection_1.png"),
        new Link("Game Play", "https://raw.githubusercontent.com/RyanMontville/Hangman/main/screenshots/hangman-gameplay_1.png"),
        new Link("Win Screen", "https://raw.githubusercontent.com/RyanMontville/Hangman/main/screenshots/hangman-win_1.png"),
        new Link("Game Over", "https://raw.githubusercontent.com/RyanMontville/Hangman/main/screenshots/hangman-game-over_1.png")
    ],
    [
        new Link("Play the Game", "https://ryanmontville.github.io/Hangman/"),
        new Link("GitHub Repo", "https://github.com/RyanMontville/Hangman")
    ]
)

const weatherBot: Project = new Project(
    "Weather Bot",
    "February 2023",
    ['Angular', 'TypeScript', 'JSON', 'HTML', 'CSS'],
    "<p>The app uses <a href='https://open-meteo.com/'>Open Meteo's</a> api to get weather and <a href='https://developer.tomtom.com/geocoding-api/documentation/geocode'>tomtom's</a> geocoding api to get location. The bubbles are populated from an array. When the user enters a query, the query is added to the array the app runs through a lot if conditional checks to see if the query includes certain words and if so, executes the corresponding function, and adds the output to the array. Since the app is just checking for certain words, it shouldn't matter if the query is 'current temp' or 'What is the temperature currently?'. The app can give weather info about Current, Today, Tomorrow, Week, Weekend, Hourly, or any day of the week.</p>",
    [
        new Link("Weather Bot", "https://raw.githubusercontent.com/RyanMontville/weather-bot/main/weather-bot.png")
    ],
    [
        new Link("Chat with Weather Bot", "https://ryanmontville.github.io/weather-bot/"),
        new Link("GitHub Repo", "https://github.com/RyanMontville/weather-bot")
    ]
)

const philyBrewery: Project = new Project(
    "Philadelphia Brewery Guide",
    "December 2022",
    ['Java', 'PostgreSQL', 'Spring Boot', 'JSON', 'Vue.js', 'JavaScript', 'HTML', 'CSS'],
    "<p>For our final capstone at Tech Elevator, my team was tasked with creating a brewery finder web app for the city of Philadelphia. The app allowed users and brewery owners to create an account. The app has a SQL database that stores the user info, breweries, beer, and reviews. The front end runs on Vue.js framework, with a REST API to complete the MCV.</p>",
    [
        new Link("User Home page", "https://raw.githubusercontent.com/RyanMontville/BreweryGuide/main/Screenshots/User_Homepage.png"),
        new Link("Brewery Page", "https://raw.githubusercontent.com/RyanMontville/BreweryGuide/main/Screenshots/Brewery_Detail_Page.png"),
    ],
    [
        new Link("View Live Demo", "https://ryanmontville.github.io/BreweryGuide/"),
        new Link("GitHub Repo", "https://github.com/RyanMontville/BreweryGuide")
    ]
)

const murphyLaw: Project = new Project(
    "Murphy's law - Submission For Ugly Website Competition",
    "November 2022",
    ['HTML', 'CSS', 'Intentionally Bad Design'],
    "<p>While I was enrolled in Tech Elevator, I competed in an ugly website competition against the other students. The purpose of the competition was to develop a better understanding of HTML and CSS and to get us to research and explore web design on our own outside of lecture. I took inspiration from the horrible ugly sites of the 90s. I tried to break every rule I could think of when it comes to designing a good website. I intentionally did not optimize the site for cross-browser or cross-device support so it might not display nicely on your screen. Every element has a CSS transform rotation of a few degrees so nothing is straight or lined up. The font-family, font-size, and color are not consistent across paragraphs. Every element changes the mouse cursor to a different pointer and none relate to the context the cursor is currently over. There are broken image links and pixelated images. Where modern websites use CSS to style most of the page, I tried to use as many .png images as possible to build the UI. I kept on adding more code and useless properties to every element.</p><p>One warning before you click on the link, the background is animated and might be hard to look at for too long, if you click on the STOP sign in the top left corner it will stop the background animation. I have not included any screenshots because this website deserves to be viewed in its full ugliness.</p>",
    [],
    [
        new Link("View the ugly website", "https://ryanmontville.github.io/murphys-law/"),
        new Link("GitHub Repo", "https://github.com/RyanMontville/murphys-law")
    ]
)

const actualOlymipicRankings: Project = new Project(
    "The Actual Olympic Medals Ranking",
    "August 2024",
    ['PostgreSQL', 'Python', 'Angular', 'TypeScript', 'HTML', 'CSS'],
    "<p>I saw Sanjay Amirthraj tweeted that he created a website to ranked all of the countries not by the total number of medals, but by the total value of the medals. (You can check out his website <a href='https://olympics-better-rankings.vercel.app/' target='_blank'>here</a>). In the comments, several people were saying the countries should be ranked by the total medals won including every athlete on a team, so a team of 4 would add 4 medals to the total instead of 1. After finding a dataset that was more than just the medal totals, I created a database and used Python to calculate the ACTUAL Olympic rankings. My Angular app ranks the countries by the actual medal counts and allows you to expand each country to see all of the medals awarded and how many athletes on the team to add the the total count for that medal. I found the dataset on <a href='https://www.kaggle.com/datasets/piterfm/paris-2024-olympic-summer-games' target='_blank'>Kaggle</a> and used <a href='https://flagsapi.com/' target='_blank'>flagsapi.com</a> for the flag images.</p>",
    [
        new Link("The Actual Olympic Medal Ranking", "https://raw.githubusercontent.com/RyanMontville/actual-olympic-medals-ranking/main/screenshot.png")
    ],
    [
        new Link("View the Rankings", "https://ryanmontville.com/actual-olympic-medals-ranking/"),
        new Link("GitHub Repo", "https://github.com/RyanMontville/actual-olympic-medals-ranking")
    ]
)

export const projectsData: Project[] = [
    beeTracker, canvasStats, mazeGenerator, actualOlymipicRankings, unitConverter, triviaGame, goFish, myAdventureBlog, warCardGame, hangman, weatherBot, philyBrewery, murphyLaw
    ];