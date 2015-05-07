var MoodSvc = (function () {
    function MoodSvc() {
        var _this = this;
        this.mood = 1;
        this.timer = setInterval(function () { _this.mood = Math.random(); console.info(_this.mood); }, 2000);
    }
    MoodSvc.prototype.currentMood = function () {
        return this.mood;
    };
    return MoodSvc;
})();
exports.MoodSvc = MoodSvc;
