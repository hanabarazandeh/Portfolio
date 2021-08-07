'use.strict';

/*
console object refers to the console in our developers tool 
theres a variety of methods we can run on console object 
and we often have arguments for those methods 
*/


//in modern js they use let 
//document object is the collection of all our html elements
//hiding our menu and adding accessibility information 

var nav = document.querySelector('#nav');

//creating out menu toggle button 
var menu_toggle = document.createElement('button');
//add the css class .button to it
menu_toggle.classList.add('button');
//set attribute for it 
menu_toggle.setAttribute('id', 'menu-toggle');
//give the button content
menu_toggle.innerHTML = 'Menu ▼';
//now we should inject the element we created, we have to specify where

var nav_parent = document.querySelector('.nav_parent');
nav_parent.insertBefore(menu_toggle, nav);

//setting what will be read by the screen readers
menu_toggle.setAttribute('aria-label', 'Main menu');
//what does this button control on this page? what is the id of the element that this button is controlling
menu_toggle.setAttribute('aria-controls', 'nav');
//setting expanded to false means its closed
menu_toggle.setAttribute('aria-expanded', 'false');
//an anonymous function exists only within the context of event listener
menu_toggle.addEventListener('click',
    function() {
        console.log('menu_toggle has been clicked!');

        //if menu is hidden, we want to do something, and if not we want to do something else
        if (nav.classList.contains('hidden')) {
            //meny is hidden, show it
            nav.classList.remove('hidden');
            nav.classList.add('grid');
            nav.setAttribute('aria-hidden', 'false');
            menu_toggle.setAttribute('aria-expanded', 'true');
            //"this" refers to the object that is running this function
            this.innerHTML = 'Menu ▲';

        } else {
            //menu is showing, hide it 
            nav.classList.add('hidden');
            nav.classList.remove('grid');
            nav.setAttribute('aria-hidden', 'true');
            menu_toggle.setAttribute('aria-expanded', 'false');
            this.innerHTML = 'Menu ▼';
        }
    });

function showMenu() {
    menu_toggle.classList.remove('hidden');
    nav.classList.add('hidden');
    nav.setAttribute('aria-hidden', 'true');
    nav.setAttribute('aria-labelledby', 'menu-toggle');
}

function hideMenu() {
    menu_toggle.classList.add('hidden');
    nav.classList.remove('hidden');
    nav.setAttribute('aria-hidden', 'false');
    nav.setAttribute('aria-labelledby', 'menu-toggle');
    nav.classList.add('grid');
}

const mediaQuery = window.matchMedia('(max-width: 700px)');

function handleTabletChange(e) {
    // Check if the media query is true
    if (e.matches) {
        // Then log the following message to the console
        showMenu();
    } else {
        hideMenu();
    }
}

// Register event listener
mediaQuery.addListener(handleTabletChange);

// Initial check
handleTabletChange(mediaQuery);