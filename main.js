var audioCtx = new (window.AudioContext || window.webkitAudioContext);


$(document).ready(startApp);

function startApp() {
    console.log('hi');
    createOscillators();

}

function createOscillators(){
    var sine = audioCtx.createOscillator();
    sine.start();
    sine.connect(audioCtx.destination);
}