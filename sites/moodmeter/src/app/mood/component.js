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
	}
}
