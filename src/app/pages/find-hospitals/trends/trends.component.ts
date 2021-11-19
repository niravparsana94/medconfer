import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-trends',
	templateUrl: './trends.component.html',
	styleUrls: ['./trends.component.scss']
})
export class TrendsComponent implements OnInit {
	@Input() hospitals: any;
	@Input() treatment: any;

	constructor() { }

	ngOnInit() {
	}

	getShortName(name: string) {
		return name.split(' ')[0];
	}

}
