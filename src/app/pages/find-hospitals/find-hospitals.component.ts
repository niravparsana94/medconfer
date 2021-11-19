import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { CommonService } from 'src/app/services/common.service';
import { HospitalService } from 'src/app/services/hospital.service';

@Component({
	selector: 'app-find-hospitals',
	templateUrl: './find-hospitals.component.html',
	styleUrls: ['./find-hospitals.component.scss']
})
export class FindHospitalsComponent implements OnInit {
	cityEditable = false;
	city: any;
	subscription: Subscription;
	selectedTreatment = new FormControl();
	sortBy = new FormControl();
	priceRange = new FormControl();
	sortByOptions = ['Our recommendations', 'A-Z']
	treatments: any[];
	filteredTreatments: Observable<any[]>;
	filteredSubTreatments: Observable<any[]>;
	hospitals: any[];

	constructor(private route: ActivatedRoute, private commonService: CommonService, private hospitalService: HospitalService) { }

	ngOnInit() {
		this.sortBy.setValue('Our recommendations');
		this.priceRange.setValue(30000);
		this.getTreatments();
	}

	getTreatments() {
		this.hospitalService.getTreatments().subscribe(res => {
			this.treatments = res || [];
			this.bindTreatmentEvents();
			this.subscribeParams();
		})
	}

	subscribeParams() {
		this.route.queryParams.subscribe(params => {
			if (params && params.city) this.city = params.city;
			if (params && params.treatment) {
				const treatment = this.treatments.find(t => t.treatementId == +params.treatment);
				if (treatment)
					this.selectedTreatment.setValue(treatment);
			}
			this.getHospitals();
		})
	}

	getHospitals() {
		if (!this.city || this.city.trim() == '')
			this.commonService.showToast('Please enter city');
		else if (!this.selectedTreatment.value)
			this.commonService.showToast('Please select treatment');
		else
			this.hospitalService.getHospitals(this.city.trim(), this.selectedTreatment.value, this.priceRange.value, this.sortBy.value).subscribe(res => {
				this.hospitals = res || [];
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

	ngOnDestroy() {
		if (this.subscription) this.subscription.unsubscribe()
	}

}
