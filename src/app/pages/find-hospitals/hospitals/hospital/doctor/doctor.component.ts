import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-doctor',
	templateUrl: './doctor.component.html',
	styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent implements OnInit {
	@Input() doctor: any;
	@Input() treatment: any;
	@Input() index: any;

	constructor() { }

	ngOnInit() {
	}

}
