let [C4, D4b, D4, E4b, E4, F4, G4b, G4, A4b, A4, B4b, B4] = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
let [C5, D5b, D5, E5b, E5, F5, G5b, G5, A5b, A5, B5b, B5] = [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26];
let [C6, D6b, D6, E6b, E6, F6, G6b, G6, A6b, A6, B6b, B6] = [27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38];
let [C7, D7b, D7, E7b, E7, F7, G7b, G7, A7b, A7, B7b, B7] = [39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50];

let melody = [-1, -1, G4, -1, G4, -1, D5, -1, E5, -1, D5, B7, B6, B5, B4,C4,C4,C4];

let playTone = (frequency, timeToplay) => {
    let audioctx = new (window.AudioContext || window.webkitAudioContext)(); // eslint-disable-line no-undef
    let startTime = audioctx.currentTime;
    let osc = audioctx.createOscillator(); // eslint-disable-line no-undef
    let gain = audioctx.createGain(); // eslint-disable-line no-undef
    let noteLength = 0.5;
    osc.frequency.value = frequency;
    
    osc.type = "sine";
    osc.connect(gain);
    gain.connect(audioctx.destination);
    gain.gain.setValueAtTime(0.5, startTime + timeToplay);
    gain.gain.linearRampToValueAtTime(
        0,
        startTime + timeToplay + noteLength
    );
    osc.start(startTime + timeToplay);
    osc.stop(startTime + timeToplay + noteLength);
};

const playNotes = (notes, secondsPerBeat) => {
    notes.forEach((noteNumber, index) => {
        if (noteNumber !== -1) {
            let frequency = 220 * 2 ** (noteNumber / 12);
            let BeatToPlay = index + (index % 2) / 6;
            let timeToPlay = BeatToPlay * secondsPerBeat;
            playTone(frequency, timeToPlay);
        }
    });
};