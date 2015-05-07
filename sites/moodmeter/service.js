var MoodSvc = (function () {
    function MoodSvc() {
        this.mood = 1;
    }
    MoodSvc.prototype.currentMood = function () {
        this.mood = Math.random();
        return this.mood;
    };
    return MoodSvc;
})();
exports.MoodSvc = MoodSvc;
