import _ from 'lodash';
import $ from 'jquery';
import './style.scss';
import Portrait from './portfolio-portrait.png';
import ghIcon from './icons/GitHub-Mark-64px.png';
import liIcon from './icons/LI-In-Bug.png';



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
            $(greetDiv).remove();
            $(greeting).remove();
            $(h1).removeClass();
            $(h1).addClass('nav-heading');
            $(nav).append(h1);
            socialLinks(nav);
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
    $(div).append(linkedin, github);
    $(nav).append(div);

    $(linkedinIcon).toggleClass('show-icon');
    $(githubIcon).toggleClass('show-icon');
}



document.addEventListener('DOMContentLoaded', () => {
    const main = document.createElement('div');
    main.setAttribute('id', 'main');
    document.body.appendChild(main);

    main.appendChild(landing());
});