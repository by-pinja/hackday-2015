export class MoodSvc {

    private timer;
    private mood : number;

    constructor() {
        this.mood = 1;
        this.timer = setInterval(() => {this.mood = Math.random(); console.info(this.mood)}, 2000);
    }

    currentMood() {
        return this.mood; // Only good mood
    }
}
