import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { CommonModalComponent } from 'src/app/components/common-modal/common-modal.component';
import { SmartHealthCheckupComponent } from 'src/app/components/smart-health-checkup/smart-health-checkup.component';
import { SmartInsurancePolicyComponent } from 'src/app/components/smart-insurance-policy/smart-insurance-policy.component';
import { CommonService } from 'src/app/services/common.service';
import { HospitalService } from 'src/app/services/hospital.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	cityEditable = false;
	city: any;
	selectedTreatment = new FormControl();
	treatments: any[];
	filteredTreatments: Observable<any[]>;

	constructor(private router: Router, private commonService: CommonService, private hospitalService: HospitalService, public dialog: MatDialog) { }

	ngOnInit() {
		this.getCurrentCity();
		this.getTreatments();
	}

	setCity() {
		if (this.cityEditable) return;
		this.commonService.city = this.city;
	}

	getTreatments() {
		this.hospitalService.getTreatments().subscribe(res => {
			this.treatments = res || [];
			this.bindTreatmentEvents();
		})
	}

	private async getCurrentCity() {
		const coordinates = await this.commonService.getGeoLocation();
		this.commonService.getCityFromCoordinates(coordinates).subscribe(res => {
			this.city = res['city'] || res['locality'];
		});
	}

	private bindTreatmentEvents() {
		this.filteredTreatments = this.selectedTreatment.valueChanges.pipe(
			startWith(''),
			map(value => (typeof value === 'string' ? value : value.treatementName)),
			map(name => (name ? this._filter(name) : this.treatments.slice())),
		);
	}

	displayFn(treatment: any): string {
		return treatment && treatment.treatementName ? treatment.treatementName : '';
	}

	private _filter(name: string) {
		return this.treatments.filter(option => option.treatementName.toLowerCase().includes(name.toLowerCase()));
	}

	gotoHospitals() {
		if (!this.city || this.city.trim() == '')
			this.commonService.showToast('Please enter city');
		else if (!this.selectedTreatment.value)
			this.commonService.showToast('Please select treatment');
		else
			this.router.navigate(['/find-hospitals'], { queryParams: { city: this.city.trim(), treatment: this.selectedTreatment.value.treatementId } });
	}

	showImage(imageSrc) {
		this.dialog.open(CommonModalComponent, {
			data: {
				imageSrc
			}
		});
	}

	showSmartInsurancePopup() {
		this.dialog.open(SmartInsurancePolicyComponent)
	}

	showSmartHealthPopup() {
		this.dialog.open(SmartHealthCheckupComponent)
	}
}
