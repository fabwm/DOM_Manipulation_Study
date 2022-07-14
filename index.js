const turnOn = document.getElementById ('on');
const turnOff = document.getElementById ('off');
const lamp = document.getElementById('lamp');

function lampOn() {
    if (!lampBrok()){
        lamp.src = './acessa.jpg';
    }
}

function lampOff() {
    if (!lampBrok()){
        lamp.src = './apagada.jpg';
    }
}

function broke(){
    lamp.src = './quebrada.jpg';
}

function lampBrok(){
      return lamp.src.indexOf ('quebrada') > -1;
}


turnOn.addEventListener ('click', lampOn);
turnOff.addEventListener ('click', lampOff);
lamp.addEventListener ('mouseover', lampOn);
lamp.addEventListener ('dblclick', broke);
lamp.addEventListener('mouseleave', lampOff);