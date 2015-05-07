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

    constructor(svc: MoodSvc) {
        this.currentMood = Math.min(Math.floor(svc.currentMood()*4+1), 4);
    }

    toggle() {
        this.currentMood = Math.floor((Math.random() * (5-1)+1));
    }
}

bootstrap(MoodComponent);
