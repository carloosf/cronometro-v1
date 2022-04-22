"use strict"

var hh = 0;
var mm = 0;
var ss = 0;

var tempo = 1000;
var cron;
var click = 0

function start() {
    
    if(click == 0){
        cron = setInterval(() => { timer(); }, tempo);
        click = 1
    }
}


function pause() {
    clearInterval(cron);
    click = 0
}


function reset() {
    clearInterval(cron);
    hh = 0;
    mm = 0;
    ss = 0;
    click = 0

    document.getElementById('timer').innerText = '00:00:00';
}


function timer() {
    ss++
    if (ss == 59) { 
        ss = 0; 
        mm++; 

        if (mm == 59) {
            mm = 0;
            hh++;
        }
    }

    var format = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss);
    
    document.getElementById('timer').innerText = format;

    return format;
}
