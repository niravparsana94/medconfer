import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { CommonModalComponent } from 'src/app/components/common-modal/common-modal.component';
import { HospitalService } from 'src/app/services/hospital.service';
import { InsurancesComponent } from './insurances/insurances.component';

@Component({
	selector: 'app-hospital',
	templateUrl: './hospital.component.html',
	styleUrls: ['./hospital.component.scss']
})
export class HospitalComponent implements OnInit {
	@Input() hospital: any;
	@Input() treatment: any;

	constructor(public dialog: MatDialog, private hospitalService: HospitalService) { }

	ngOnInit() {
	}

	showModal(imageSrc) {
		this.dialog.open(CommonModalComponent, {
			data: {
				imageSrc
			}
		});
	}

	showInsurances() {
		this.hospitalService.getInsurances().subscribe(insurances => {
			this.dialog.open(InsurancesComponent, {
				data: this.shuffle(insurances)
			})
		})
	}

	shuffle(array) {
		let currentIndex = array.length, randomIndex;

		// While there remain elements to shuffle...
		while (currentIndex != 0) {

			// Pick a remaining element...
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex--;

			// And swap it with the current element.
			[array[currentIndex], array[randomIndex]] = [
				array[randomIndex], array[currentIndex]];
		}

		return array;
	}

}
