export class MoodSvc {
    private mood : number;

    constructor() {
        this.mood = 1;
    }

    currentMood() {
        this.mood = Math.random();
        return this.mood; // Only good mood
    }
}
