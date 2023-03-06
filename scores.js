const btnDescriptions = [
    {file: 'sound1.mp3', hue: 120},
    {file: 'sound2.mp3', hue: 0},
    {file: 'sound3.mp3', hue: 60},
    {file: 'sound4.mp3', hue: 240},
];//defines each button's soundfiles and color change

class Button{
    constructor (description, el) {
    this.el = el;//don't know what el is
    this.hue = description.hue;
    this.sound = loadSound(description.file);
    this.parseInt(25);
    }

    paint(level) {
        const background = `hsl(${this.hue}, 100%, ${level}%)`;
        this.el.style.backgroundColor = background;
    }

    async press(volume) {//FIXME description here
        this.paint(50);
        await this.play(volume);
        this.paint(25);
    }

    async play(volume = 1.0) {
        this.sound.volume = volume; //sets volume to whatever is given in call
        await new Promise((resolve) => {//promise to play sound through before next goes through
            this.sound.onended = resolve;//resolve at end
            this.sound.play();//play next sound?
        });
    }
}

class Game {
    buttons;
    allowPlayer;
    sequence;
    playerPlaybackPos;
    mistakesound;

    constructor() { // creates game entity
        this.buttons = new Map();
        this.allowPlayer = false;
        this.sequence = [];
        this.playerPlaybackPos = 0;
        this.mistakesound = loadSound('error.mpw');

    document.querySelectorAll('.game-button').forEach((el, i) => {
        if (i < btnDescriptions.length) {
            this.buttons.set(el.id, new Button(btnDescriptions[i], el));
            }
        });

    const playerNameEl = document.querySelector('.player-name');
    playerNameEl.textcontent = this.getPlayerName();
    }

    async pressButton(button) {
        //pressButton
    }

    async reset() {
        //reset
    }
    getPlayerName() {
        return localStorage.getItem('userName') ?? 'Some guy named \'Jeff\''; //this passes name input  into other page
    }

    async playSequence() {

    }
}