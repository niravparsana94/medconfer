import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { CommonService } from './common.service';

@Injectable({
	providedIn: 'root'
})
export class HospitalService {
	mockData$ = this.commonService.getMockData();

	constructor(private commonService: CommonService) { }

	getHospitals(city: string, treatment: any, price: number, sortBy: string) {
		return this.mockData$.pipe(map(res => {
			const hospitals = res['hospitals']
				.filter(h => {
					return h.locationCode == city.toUpperCase()
						&& h.treatements.filter(t => t.treatementId == treatment.treatementId).length > 0
						&& h.pricePerDay >= price
				});
			if (sortBy == 'A-Z')
				return hospitals.sort(function (a, b) {
					if (a.name < b.name) { return -1; }
					if (a.name > b.name) { return 1; }
					return 0;
				});
			else
				return hospitals;
		}));
	}

	getTreatments() {
		return this.mockData$.pipe(map(res => {
			return res['treatements']
		}));
	}

	getInsurances() {
		return this.mockData$.pipe(map(res => {
			return res['insurances']
		}));
	}

	getArticles() {
		return this.mockData$.pipe(map(res => {
			return res['articles']
		}));
	}
}
