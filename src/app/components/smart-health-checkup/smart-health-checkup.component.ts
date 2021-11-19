import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { CommonModalComponent } from '../common-modal/common-modal.component';

@Component({
	selector: 'app-smart-health-checkup',
	templateUrl: './smart-health-checkup.component.html',
	styleUrls: ['./smart-health-checkup.component.scss']
})
export class SmartHealthCheckupComponent implements OnInit {

	constructor(public dialog: MatDialog) { }

	ngOnInit() {
	}

	showImage() {
		this.dialog.open(CommonModalComponent, {
			data: {
				imageSrc: 'assets/images/smart-health-checkup-result.jpeg'
			}
		});
	}

}
