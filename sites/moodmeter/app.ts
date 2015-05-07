/// <reference path="typings/angular2/angular2.d.ts" />

import {Component, bootstrap, View} from "angular2/angular2";
import {MoodSvc} from 'service'

@Component({
    selector: 'my-app',
    injectables: [MoodSvc]
})
@View({
    templateUrl: 'template.html'
})

class MoodComponent {
    currentMood: number;
    private timer;
    private moodSvc;

    constructor(svc: MoodSvc) {
        this.moodSvc = svc;
        this.timer = setInterval(() => {this.updateMood();}, 2000);
    }

    updateMood() {
        this.currentMood = Math.min(Math.floor(this.moodSvc.currentMood()*4+1), 4);
    }
    toggle() {
        this.currentMood = Math.floor((Math.random() * (5-1)+1));
    }
}

bootstrap(MoodComponent);
