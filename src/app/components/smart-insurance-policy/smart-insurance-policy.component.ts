import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SmartHealthCheckupComponent } from '../smart-health-checkup/smart-health-checkup.component';

@Component({
	selector: 'app-smart-insurance-policy',
	templateUrl: './smart-insurance-policy.component.html',
	styleUrls: ['./smart-insurance-policy.component.scss']
})
export class SmartInsurancePolicyComponent implements OnInit {

	constructor(public dialog: MatDialog) { }

	ngOnInit() {
	}

	showSmartCheckup() {
		this.dialog.open(SmartHealthCheckupComponent);
	}

}
