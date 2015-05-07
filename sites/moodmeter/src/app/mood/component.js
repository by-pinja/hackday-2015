import {Component,Template} from 'angular2/angular2';
import {TitleSvc} from 'mood/service';
import {HoverHeader} from 'mood/decorator';

@Component({
	selector: 'mood',
	services: [TitleSvc]
})

@Template({
	url: 'app/mood/template.html',
	directives: [HoverHeader]
})

export class Mood {
	title: string;

	constructor(svc: TitleSvc) {
		this.title = svc.title;

    var mood = svc.currentMood();
    if(mood <= 0.25)
    {
      mood = 1;
    }
    else if(mood <= 0.5)
    {
      mood = 2;
    }
    else if(mood<= 0.75)
    {
      mood = 3;
    }
    else
    {
      mood = 4;
    }
    this.currentMood = mood;
	}
}
