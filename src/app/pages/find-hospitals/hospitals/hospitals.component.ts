import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-hospitals',
	templateUrl: './hospitals.component.html',
	styleUrls: ['./hospitals.component.scss']
})
export class HospitalsComponent implements OnInit {
	@Input() hospitals: any;
	@Input() treatment: any;

	constructor() { }

	ngOnInit() {
	}

}
