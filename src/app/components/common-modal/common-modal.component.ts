import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
	selector: 'app-common-modal',
	templateUrl: './common-modal.component.html',
	styleUrls: ['./common-modal.component.scss']
})
export class CommonModalComponent implements OnInit {
	imageSrc: any;
	fromArticles = false;

	constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
		this.fromArticles = data && data.fromArticles ? true : false;
		if (!this.fromArticles)
			this.imageSrc = data.imageSrc;
	}

	ngOnInit() {
	}

}
