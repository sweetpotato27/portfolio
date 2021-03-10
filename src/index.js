import _ from 'lodash';
import $ from 'jquery';
import './style.scss';
import Portrait from './portfolio-portrait.png'



function landing() {
    const div = document.createElement('div');
    const portrait = document.createElement('img');
    div.setAttribute("id", "portrait-div");
    portrait.setAttribute("id", "portrait");
    portrait.src = Portrait;
    div.appendChild(portrait);
    div.appendChild(sayHello());
    
    return div;
}

function sayHello() {
    const div = document.createElement('div');
    const h1 = document.createElement('h1');
    const greeting = document.createElement('span');
    const name = document.createElement('span');
    h1.classList.add('greeting');
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
                    // next animation here
                    typePhrase(name, "Dylan Matthews", 100, 0, false);
                }
                if (i === phrase.length && !bool) {
                    console.log("end");
                    //trigger some event here
                }
                if( i < phrase.length ) {
                    i++;
                    typePhrase(item, phrase, delay, i, bool);
                }
            });
    }

    return div;
}



document.addEventListener('DOMContentLoaded', () => {
    document.body.appendChild(landing());
});