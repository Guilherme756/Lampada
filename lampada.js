const turnOnOff = document.getElementById ('turnOnOff');

const lamp= document.getElementById ('lamp');
const turnTrack= document.getElementById ('turnTrack');

function islamptrack (){
    return lamp.src.indexOf ( 'quebrada') > -1
}

function lampOn () {
    if (!islamptrack () ){
        lamp.src = './img/iluminada.jpg';   
    }
}

function lampOff () {
    if (!islamptrack () ){
        lamp.src = './img/desligado.jpg';
    }
}

function lampTrack () {
    lamp.src = './img/quebrada.jpg';
}

function lampOnOff () {
    if (turnOnOff.textContent == 'Ligar') {
        lampOn();
        turnOnOff.textContent = 'Desligar';
    }else{
        lampOff();
        turnOnOff.textContent = 'Ligar';
    }
}



turnOnOff.addEventListener ('click', lampOnOff);

turnTrack.addEventListener('click', lampTrack);


lamp.addEventListener('mouseover', lampOn);        // passar o mouse em cima "ligar"
lamp.addEventListener('mouseleave', lampOff);     //passar o mouse em cima pra "desligar"
lamp.addEventListener('dblclick', lampTrack);    // clicar duas vezes pra "quebrar"