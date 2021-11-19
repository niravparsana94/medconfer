import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { CommonModalComponent } from 'src/app/components/common-modal/common-modal.component';
import { HospitalService } from 'src/app/services/hospital.service';

@Component({
	selector: 'app-articles',
	templateUrl: './articles.component.html',
	styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
	constructor(public hospitalService: HospitalService, public dialog: MatDialog) { }

	ngOnInit() {
	}

	showMore(article) {
		this.dialog.open(CommonModalComponent, {
			data: {
				fromArticles: true,
				article,
			},
		});
	}
}
