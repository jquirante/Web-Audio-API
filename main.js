var audioCtx = new (window.AudioContext || window.webkitAudioContext);

var volume = audioCtx.createGain();
volume.connect(audioCtx.destination);

var sinea = audioCtx.createOscillator();
sinea.frequency.value = 440;
sinea.type = "sine";
sinea.start();
sinea.connect(volume);

var sineb = audioCtx.createOscillator();
sineb.frequency.value = 523.25;
sineb.type = "sine";
sineb.start();
sineb.connect(volume);

var sinec = audioCtx.createOscillator();
sinec.frequency.value = 698.46;
sinec.type = "sine";
sinec.start();
sinec.connect(volume);
volume.gain.value=0.2;

$(document).ready(startApp);

function startApp() {
    console.log('hi');

}

function createOscillators(){
    
}