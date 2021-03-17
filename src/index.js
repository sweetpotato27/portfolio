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
    console.log("transitioning....");
    const nav = document.createElement('nav');
    nav.setAttribute('id', 'nav');
    const portrait = document.getElementById('portrait-div');
    const greetDiv = document.getElementById('greeting-div');
    const h1 = document.getElementById('heading');
    const greeting = document.getElementById('greeting');
    const name = document.getElementById('name');
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
            $(nav).append(h1);
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
        console.log(e.target.innerHTML);
        $(mainNav).remove();
        showProjects();
    });
    about.addEventListener('click', (e) => {
        console.log(e.target.innerHTML);
    });
    contact.addEventListener('click', (e) => {
        console.log(e.target.innerHTML);
        $(mainNav).remove();
        showContact();
    });
}

function showProjects() {
    const main = document.getElementById('main');
    const projects = document.createElement('div');
    const quoridor = document.createElement('div');
    const quorImg = document.createElement('img');
    const maze = document.createElement('div');
    const mazeImg = document.createElement('img');
    const moonless = document.createElement('div');
    const moonImg = document.createElement('img');
    const fingram = document.createElement('div');
    const finImg = document.createElement('img');

    projects.setAttribute('id', 'projects-div');
    quoridor.classList.add('project-div');
    maze.classList.add('project-div');
    moonless.classList.add('project-div');
    fingram.classList.add('project-div');


    quorImg.src = quorImage;
    mazeImg.src = mazeImage;
    moonImg.src = moonImage;
    finImg.src = finImage;

    $(quoridor).append(`<a href="https://quoridor-portfolio-project.herokuapp.com/ "></a>`).children().append(quorImg);
    $(maze).append(`<a href="https://sweetpotato27.github.io/maze-generator/"></a>`).children().append(mazeImg);
    $(moonless).append(`<a href="http://moonless-night.herokuapp.com/game"></a>`).children().append(moonImg);
    $(fingram).append(`<a href="https://dylanmatthewsfinstagram.herokuapp.com/"></a>`).children().append(finImg);
    $(projects).append(quoridor, maze, moonless, fingram);
    $(main).append(projects);
}

function showContact() {
    const main = document.getElementById('main');
    const formDiv = document.createElement('div');
    const form = document.createElement('form');
    const name = document.createElement('input');
    const email = document.createElement('input');
    const message = document.createElement('input');
    const submit = document.createElement('input');
    const reset = document.createElement('input');
    form.setAttribute('action', 'mailto:matthewsdb34@gmail.com');
    form.setAttribute('method', 'post');
    form.setAttribute('enctype', 'text/plain');
    name.type = "text";
    name.name = "name";
    email.type = "text";
    email.name = "name";
    message.type = "text";
    message.name = "name";
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
    
}



document.addEventListener('DOMContentLoaded', () => {
    const main = document.createElement('div');
    main.setAttribute('id', 'main');
    document.body.appendChild(main);

    main.appendChild(landing());
});