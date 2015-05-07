/// <reference path="typings/angular2/angular2.d.ts" />
if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
if (typeof __metadata !== "function") __metadata = function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require("angular2/angular2");
var service_1 = require('service');
var MoodComponent = (function () {
    function MoodComponent(svc) {
        var _this = this;
        this.timer = setInterval(function () { _this.currentMood = Math.min(Math.floor(svc.currentMood() * 4 + 1), 4); }, 2000);
    }
    MoodComponent.prototype.toggle = function () {
        this.currentMood = Math.floor((Math.random() * (5 - 1) + 1));
    };
    MoodComponent = __decorate([
        angular2_1.Component({
            selector: 'my-app',
            injectables: [service_1.MoodSvc]
        }),
        angular2_1.View({
            templateUrl: 'template.html'
        }), 
        __metadata('design:paramtypes', [service_1.MoodSvc])
    ], MoodComponent);
    return MoodComponent;
})();
angular2_1.bootstrap(MoodComponent);
