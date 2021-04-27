import _ from 'lodash';
import $ from 'jquery';
import './style.scss';
import Portrait from './images/portfolio-portrait.png';
import ghIcon from './icons/GitHub-Mark-64px.png';
import liIcon from './icons/LI-In-Bug.png';
import quorImage from './images/quoridor.jpg';
import mazeImage from './images/maze-finished.jpg';
import moonImage from './images/moonlessnight.jpg';
import finImage from './images/fingram.jpg';
import tlImage from './images/thoughtlogue.jpg';



function landing() {
    const main = document.getElementById('main');
    const div = document.createElement('div');
    const portrait = document.createElement('img');
    div.setAttribute("id", "portrait-div");
    portrait.setAttribute("id", "portrait");
    portrait.src = Portrait;
    div.appendChild(portrait);
    main.appendChild(sayHello());
    
    return div;
}

function sayHello() {
    const div = document.createElement('div');
    const h1 = document.createElement('h1');
    const greeting = document.createElement('span');
    const name = document.createElement('span');
    div.setAttribute('id', 'greeting-div');
    h1.setAttribute('id', 'heading');
    h1.classList.add("land-heading");
    greeting.setAttribute('id', 'greeting');
    name.setAttribute('id', 'name');
    h1.appendChild(greeting);
    h1.appendChild(name);
    greeting.innerHTML = "";
    div.appendChild(h1);

    typePhrase(greeting, "Hello, my name is ", 100, 0, true);

    function typePhrase(item, phrase, delay, i, bool) {
        $(item).append(phrase.charAt(i))
            .delay(delay)
            .promise()
            .done(() => {
                if (i === phrase.length && bool) {
                    // name animation happens after greeting
                    typePhrase(name, "Dylan Matthews", 100, 0, false);
                }
                if (i === phrase.length && !bool) {
                    // now transition from the landing page to the main site look
                    landingMainTransition();
                }
                if( i < phrase.length ) {
                    i++;
                    typePhrase(item, phrase, delay, i, bool);
                }
            });
    }

    return div;
}

function landingMainTransition() {
    const nav = document.createElement('nav');
    nav.setAttribute('id', 'nav');
    const portrait = document.getElementById('portrait-div');
    const greetDiv = document.getElementById('greeting-div');
    const h1 = document.getElementById('heading');
    const greeting = document.getElementById('greeting');
    const div = document.createElement('div'); /* used for future navigation */
    div.setAttribute('id', 'page-nav');

    $(nav).insertBefore($("#main"));
    $(greeting).fadeTo(1000, 0.0000001, () => {
        $(h1).addClass("land-heading-transition");
        $(portrait).fadeOut();
        setTimeout(() => {
            /** after the name transition is complete do the following */
            $(portrait).remove();
            $(greetDiv).remove();
            $(greeting).remove();
            $(h1).removeClass();
            $(h1).addClass('nav-heading');
            $(nav).append(h1, div);
            socialLinks(nav);
            mainLayout();
        }, 1100)
    });
}

function socialLinks(nav) {
    const div = document.createElement('div');
    const linkedin = document.createElement('a');
    const linkedinIcon = document.createElement('img');
    const github = document.createElement('a');
    const githubIcon = document.createElement('img');

    div.setAttribute('id', 'nav-links-div');
    linkedin.classList.add('nav-link');
    github.classList.add('nav-link');
    linkedin.href = "https://www.linkedin.com/in/dylan-brinkman-matthews/";
    github.href = "https://github.com/sweetpotato27";
    linkedinIcon.classList.add('nav-link-icon');
    githubIcon.classList.add('nav-link-icon');
    linkedinIcon.src = liIcon;
    githubIcon.src = ghIcon;


    $(linkedin).append(linkedinIcon);
    $(github).append(githubIcon);
    $(div).append(github, linkedin);
    $(nav).append(div);

    $(linkedinIcon).toggleClass('show-icon');
    $(githubIcon).toggleClass('show-icon');
    $(linkedinIcon).fadeTo(100, 1);
    $(githubIcon).fadeTo(100, 1);
}

function mainLayout() {
    const main = document.getElementById('main');
    const mainNav = document.createElement('div');
    const projects = document.createElement('span');
    const contact = document.createElement('span');
    const about = document.createElement('span');

    mainNav.setAttribute('id', 'main-nav');
    projects.classList.add('main-nav-link');
    contact.classList.add('main-nav-link');
    about.classList.add('main-nav-link');

    projects.innerHTML = "projects";
    contact.innerHTML = "contact";
    about.innerHTML = "about";

    $(mainNav).append(projects, about, contact);
    $(main).append(mainNav);

    $(projects).fadeTo(350, 1, () => {
        $(about).fadeTo(350, 1, () => {
            $(contact).fadeTo(350, 1); 
        });
    });

    projects.addEventListener('click', (e) => {
        $(mainNav).remove();
        showProjects();
    });
    about.addEventListener('click', (e) => {
        $(mainNav).remove();
        showAbout();
    });
    contact.addEventListener('click', (e) => {
        $(mainNav).remove();
        showContact();
    });
}

function showProjects() {
    const main = document.getElementById('main');
    const projects = document.createElement('div');
    const quoridor = document.createElement('div');
    const quorBanner = document.createElement('div');
    const quorBannerText = document.createElement('div');
    const quorImg = document.createElement('img');
    const maze = document.createElement('div');
    const mazeBanner = document.createElement('div');
    const mazeBannerText = document.createElement('div');
    const mazeImg = document.createElement('img');
    const moonless = document.createElement('div');
    const moonBanner = document.createElement('div');
    const moonBannerText = document.createElement('div');
    const moonImg = document.createElement('img');
    const fingram = document.createElement('div');
    const finBanner = document.createElement('div');
    const finBannerText = document.createElement('div');
    const finImg = document.createElement('img');
    const thoughtlogue = document.createElement('div');
    const tlBanner = document.createElement('div');
    const tlBannerText = document.createElement('div');
    const tlImg = document.createElement('img');

    changeNav(['about', 'contact'], main);

    projects.setAttribute('id', 'projects-div');
    quoridor.classList.add('project-div');
    quorBanner.classList.add('project-banner', 'quoridor');
    quorBannerText.classList.add('project-banner-text');
    maze.classList.add('project-div');
    mazeBanner.classList.add('project-banner', 'maze');
    mazeBannerText.classList.add('project-banner-text');
    moonless.classList.add('project-div');
    moonBanner.classList.add('project-banner', 'moonless');
    moonBannerText.classList.add('project-banner-text');
    fingram.classList.add('project-div');
    finBanner.classList.add('project-banner', 'fingram');
    finBannerText.classList.add('project-banner-text');
    thoughtlogue.classList.add('project-div');
    tlBanner.classList.add('project-banner', 'thoughtlogue');
    tlBannerText.classList.add('project-banner-text');

    quorBannerText.innerText = "Quoridor";
    mazeBannerText.innerText = "Lifepath Generator";
    moonBannerText.innerText = "Moonless Night";
    finBannerText.innerText = "Finstagram";
    tlBannerText.innerText = "Thoughtlogue";
    
    quorImg.src = quorImage;
    mazeImg.src = mazeImage;
    moonImg.src = moonImage;
    finImg.src = finImage;
    tlImg.src = tlImage;
    
    $(quoridor).append(`<a href="https://quoridor-portfolio-project.herokuapp.com/"></a>`).children().append(quorImg);
    $(quorBanner).append(quorBannerText);
    $(quoridor).append(quorBanner);
    $(maze).append(`<a href="https://sweetpotato27.github.io/maze-generator/"></a>`).children().append(mazeImg);
    $(mazeBanner).append(mazeBannerText);
    $(maze).append(mazeBanner);
    $(moonless).append(`<a href="http://moonless-night.herokuapp.com/game"></a>`).children().append(moonImg);
    $(moonBanner).append(moonBannerText);
    $(moonless).append(moonBanner);
    $(fingram).append(`<a href="https://dylanmatthewsfinstagram.herokuapp.com/"></a>`).children().append(finImg);
    $(finBanner).append(finBannerText);
    $(fingram).append(finBanner);
    $(thoughtlogue).append(`<a href="https://thoughtlogue.herokuapp.com/#/"></a>`).children().append(tlImg);
    $(tlBanner).append(tlBannerText);
    $(thoughtlogue).append(tlBanner);
    $(projects).append(quoridor, thoughtlogue, maze, moonless, fingram);
    $(main).append(projects);
}

function showContact() {
    const main = document.getElementById('main');
    const formDiv = document.createElement('div');
    const form = document.createElement('form');
    const name = document.createElement('input');
    const email = document.createElement('input');
    const message = document.createElement('textarea');
    const submit = document.createElement('input');
    const reset = document.createElement('input');

    changeNav(['projects', 'about'], main);

    formDiv.setAttribute('id', 'contact-form-div');

    form.setAttribute('action', 'mailto:dbmsoftware27@gmail.com');
    form.setAttribute('method', 'post');
    form.setAttribute('enctype', 'text/plain');
    name.type = "text";
    name.name = "name";
    email.type = "text";
    email.name = "email";
    message.name = "message";
    submit.type = "submit";
    submit.value = "Send";
    reset.type = "reset";
    reset.value = "Reset";

    $(form).append("Name:", $("<br>"),
                    name, $("<br>"),
                    "Email:", $("<br>"), 
                    email, $("<br>"),
                    "Message:", $("<br>"), 
                    message, $("<br>"), 
                    submit, reset);
    $(formDiv).append(form);
    $(main).append(formDiv);
}

function showAbout() {
    const main = document.getElementById('main');
    const aboutDiv = document.createElement('div');
    const paraOne = document.createElement('p');
    const paraTwo = document.createElement('p');
    const paraThree = document.createElement('p');
    const paraFour = document.createElement('p');
    const thankYou = document.createElement('p');

    paraOne.innerText = `My coding strengths are: a divergent and versatile approach to problem solving, perseverance to push through mental and technological walls, and a solid grounding on teaching myself new information.  I have experience with: Ruby on Rails, React.js, React Redux, Express.js, Node.js, Webpack, Socket.io, jQuery, HTML Canvas, Heroku, MongoDB, PostgreSQL and Git. I am always strengthening my HTML, CSS and JavaScript by building websites and taking college courses.`;
    paraTwo.innerText = `Quoridor is my most recent project.  I use socket.io and express.js to allow client to client communication and implemented rooms to make starting a game simple and errorless.  This project gave me solid experience with the organization of my code through focusing on OOP principles and by separating the code that computes the game logic from the code that renders the game state.`;
    paraThree.innerText = `I am most interested in machine learning and exploring ideas in consciousness from an artistic perspective.  Though I do not know how to build such models yet, I enjoy reading about the subject in articles and books like, "Pharmako-AI" by K Allado-McDowell and "Godel, Esher, Bach: an Eternal Golden Braid" by Douglas R. Hofstadter.  I also have a passion for creating a fluid and captivating user experiences.`;
    paraFour.innerText = `In 2017 I graduated from St. Edward’s University with a B.A. in Interactive Game Studies.  In 2019, I graduated from App Academy, a web development boot camp.  In February of 2021, I decided to commit myself to the industry and my goal is to secure a position as a junior web developer.`;
    thankYou.innerText = `Thank you for checking out my work :)`;


    changeNav(['projects', 'contact'], main);

    aboutDiv.setAttribute('id', 'about-div');
    $(aboutDiv).append(paraOne, paraTwo, paraThree, paraFour, thankYou);

    $(main).append(aboutDiv);
}

function changeNav(elements, main) {
    const div = document.getElementById('page-nav');
    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }
    for(let i = 0; i < elements.length; i++) {
        const span = document.createElement('span');
        span.innerText = elements[i];
        span.classList.add('page-link');

        if (elements[i] === 'projects') {
            span.addEventListener('click', (e) => {
                while (main.firstChild) {
                    main.removeChild(main.firstChild);
                }
                showProjects();
            });
        } else if (elements[i] === 'about') {
            span.addEventListener('click', (e) => {
                while (main.firstChild) {
                    main.removeChild(main.firstChild);
                }
                showAbout();
            });
        } else if (elements[i] === 'contact') {
            span.addEventListener('click', (e) => {
                while (main.firstChild) {
                    main.removeChild(main.firstChild);
                }
                showContact();
            });
        } else {}

        $(div).append(span);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const main = document.createElement('div');
    main.setAttribute('id', 'main');
    document.body.appendChild(main);

    main.appendChild(landing());
});