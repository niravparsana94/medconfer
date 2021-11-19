import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
	selector: 'app-insurances',
	templateUrl: './insurances.component.html',
	styleUrls: ['./insurances.component.scss']
})
export class InsurancesComponent implements OnInit {
	insurances: any[];

	constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
		this.insurances = data || [];
	}

	ngOnInit() {
	}

}
