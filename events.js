"use strict";

let HTML = '';

for ( let i=0; i<4; i++ ) {
    HTML += `<div class="btn">Pressed: <span>0</span></div>`;
    
}

document.querySelector('body').innerHTML=HTML;

let buttons = document.querySelectorAll('.btn');

for ( let i=0; i<buttons.length; i++ ) {
    buttons[i].addEventListener('click', increment);
}

function increment (event) {
    let btn = event.target;
    let span = btn.querySelector('span');
    let number = parseInt(span.innerText);

    span.innerText= number+1;
};

for ( let i=0; i<buttons.length; i++ ) {
    buttons[i].addEventListener('mouseover', mouseOver);
}

function mouseOver (event) {
    let btn = event.target;
    btn.style="background-color: rgb(169, 23, 182)";
}

for ( let i=0; i<buttons.length; i++ ) {
    buttons[i].addEventListener('mouseup', mouseUp);
}

function mouseUp (event) {
    let btn = event.target;
    btn.style="background-color: rgb(253, 43, 78)";
}