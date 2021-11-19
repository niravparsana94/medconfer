import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class CommonService {
	city: string;

	constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

	getMockData() {
		return of(MOCKDATA);
	}

	async getGeoLocation() {
		const defaultCoordinates = {
			lat: 12.9716,
			lng: 77.5946
		};
		try {
			if (!navigator.geolocation) return defaultCoordinates;
			return new Promise<{ lat: number, lng: number }>((resolve) => {
				navigator.geolocation.getCurrentPosition(
					(position) => { return resolve({ lat: position.coords.latitude, lng: position.coords.longitude }) },
					() => { return resolve(defaultCoordinates); }
				);
			});
		} catch (error) {
			console.log(error)
			return defaultCoordinates;
		}
	}

	getCityFromCoordinates(coordinates) {
		return this.http.get(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${coordinates.lat}&longitude=${coordinates.lng}&localityLanguage=en`).pipe(tap(res => {
			this.city = res['city'] || res['locality'];
		}))
	}

	showToast(message: string) {
		this.snackBar.open(message);
	}
}

const MOCKDATA = {
	"hospitals": [
		{
			"id": 1001,
			"name": "Apollo Hospitals",
			"locationCode": "BENGALURU",
			"pricePerDay": 85000,
			"recommendation": "5",
			"treatements": [
				{
					"treatementId": 2001,
					"treatementName": "Dengue Fever"
				},
				{
					"treatementId": 2002,
					"treatementName": "Malaria"
				},
				{
					"treatementId": 2003,
					"treatementName": "Diabetes"
				},
				{
					"treatementId": 2004,
					"treatementName": "Pneumonia"
				},
				{
					"treatementId": 2005,
					"treatementName": "Asthma"
				},
				{
					"treatementId": 2007,
					"treatementName": "Tuberculosis"
				},
				{
					"treatementId": 2008,
					"treatementName": "Hepatitis"
				},
				{
					"treatementId": 2009,
					"treatementName": "Arthritis"
				},
				{
					"treatementId": 2010,
					"treatementName": "Anemia"
				}
			],
			"trend": {
				"averageExpenses": 5400,
				"noOfDengueCases": 232,
				"successRate": 96,
				"successfullClaims": 96,
				"noOfHospitalizations": 3,
				"noOf5StartRatings": 123
			},
			"doctors": [
				{
					"doctorId": 3001,
					"doctorName": "Dr Ganesh",
					"successRate": "8.9",
					"remarks": "155 cases handled in last 6 months with 89% success rate"
				},
				{
					"doctorId": 3002,
					"doctorName": "Dr Mahesh",
					"successRate": "9",
					"remarks": "120 cases handled in last 6 months with 90% success rate"
				},
				{
					"doctorId": 3003,
					"doctorName": "Dr Ravi",
					"successRate": "8.0",
					"remarks": "90 cases handled in last 6 months with 80% success rate"
				},
				{
					"doctorId": 3004,
					"doctorName": "Dr Indira",
					"successRate": "9.5",
					"remarks": "200 cases handled in last 6 months with 95% success rate"
				}
			],
			"sampleCostBreakUp": {
				"threePlateletUnits": 52950,
				"rent": 67200,
				"consultationCharges": 2070,
				"total": 100420
			}
		},
		{
			"id": 1002,
			"name": "KIMS Hospital",
			"locationCode": "BENGALURU",
			"pricePerDay": 40000,
			"recommendation": "4",
			"treatements": [
				{
					"treatementId": 2001,
					"treatementName": "Dengue Fever"
				},
				{
					"treatementId": 2002,
					"treatementName": "Malaria"
				},
				{
					"treatementId": 2003,
					"treatementName": "Diabetes"
				},
				{
					"treatementId": 2004,
					"treatementName": "Pneumonia"
				},
				{
					"treatementId": 2006,
					"treatementName": "Ulcer"
				},
				{
					"treatementId": 2007,
					"treatementName": "Tuberculosis"
				},
				{
					"treatementId": 2008,
					"treatementName": "Hepatitis"
				},
				{
					"treatementId": 2009,
					"treatementName": "Arthritis"
				},
				{
					"treatementId": 2010,
					"treatementName": "Anemia"
				}
			],
			"trend": {
				"averageExpenses": 44000,
				"noOfDengueCases": 202,
				"successRate": 94,
				"successfullClaims": 95,
				"noOfHospitalizations": 4,
				"noOf5StartRatings": 141
			},
			"doctors": [
				{
					"doctorId": 3005,
					"doctorName": "Dr Aftab",
					"successRate": "8.9",
					"remarks": "130 cases handled in last 6 months with 89% success rate"
				},
				{
					"doctorId": 3006,
					"doctorName": "Dr Akhil",
					"successRate": "9.8",
					"remarks": "38 cases handled in last 6 months with 98% success rate"
				},
				{
					"doctorId": 3007,
					"doctorName": "Dr ANil",
					"successRate": "7.0",
					"remarks": "200 cases handled in last 6 months with 70% success rate"
				},
				{
					"doctorId": 3008,
					"doctorName": "Dr Vikram",
					"successRate": "9.0",
					"remarks": "70 cases handled in last 6 months with 90% success rate"
				}
			],
			"sampleCostBreakUp": {
				"threePlateletUnits": 42950,
				"rent": 41400,
				"consultationCharges": 1070,
				"total": 85420
			}
		},
		{
			"id": 1003,
			"name": "Manipal Hospital",
			"locationCode": "MYSURU",
			"pricePerDay": 53000,
			"recommendation": "3",
			"treatements": [
				{
					"treatementId": 2001,
					"treatementName": "Dengue Fever"
				},
				{
					"treatementId": 2002,
					"treatementName": "Malaria"
				},
				{
					"treatementId": 2003,
					"treatementName": "Diabetes"
				},
				{
					"treatementId": 2005,
					"treatementName": "Asthma"
				},
				{
					"treatementId": 2006,
					"treatementName": "Ulcer"
				},
				{
					"treatementId": 2007,
					"treatementName": "Tuberculosis"
				},
				{
					"treatementId": 2008,
					"treatementName": "Hepatitis"
				},
				{
					"treatementId": 2009,
					"treatementName": "Arthritis"
				},
				{
					"treatementId": 2010,
					"treatementName": "Anemia"
				}
			],
			"trend": {
				"averageExpenses": 50000,
				"noOfDengueCases": 102,
				"successRate": 90,
				"successfullClaims": 80,
				"noOfHospitalizations": 5,
				"noOf5StartRatings": 100
			},
			"doctors": [
				{
					"doctorId": 3009,
					"doctorName": "Dr Naveen",
					"successRate": "8.9",
					"remarks": "120 cases handled in last 6 months with 89% success rate"
				},
				{
					"doctorId": 3010,
					"doctorName": "Dr Nandha",
					"successRate": "7.8",
					"remarks": "230 cases handled in last 6 months with 78% success rate"
				},
				{
					"doctorId": 3011,
					"doctorName": "Dr Sunil",
					"successRate": "8.9",
					"remarks": "80 cases handled in last 6 months with 89% success rate"
				},
				{
					"doctorId": 3012,
					"doctorName": "Dr Vikram",
					"successRate": "9.5",
					"remarks": "33 cases handled in last 6 months with 95% success rate"
				}
			],
			"sampleCostBreakUp": {
				"threePlateletUnits": 50000,
				"rent": 40000,
				"consultationCharges": 12000,
				"total": 102000
			}
		},
		{
			"id": 1004,
			"name": "Fortis Hospitals",
			"locationCode": "MYSURU",
			"pricePerDay": 30000,
			"recommendation": "3",
			"treatements": [
				{
					"treatementId": 2001,
					"treatementName": "Dengue Fever"
				},
				{
					"treatementId": 2002,
					"treatementName": "Malaria"
				},
				{
					"treatementId": 2004,
					"treatementName": "Pneumonia"
				},
				{
					"treatementId": 2005,
					"treatementName": "Asthma"
				},
				{
					"treatementId": 2006,
					"treatementName": "Ulcer"
				}
			],
			"trend": {
				"averageExpenses": 6400,
				"noOfDengueCases": 100,
				"successRate": 80,
				"successfullClaims": 80,
				"noOfHospitalizations": 5,
				"noOf5StartRatings": 90
			},
			"doctors": [
				{
					"doctorId": 3013,
					"doctorName": "Dr Girish",
					"successRate": "8.9",
					"remarks": "155 cases handled in last 6 months with 89% success rate"
				},
				{
					"doctorId": 3014,
					"doctorName": "Dr Vijay",
					"successRate": "9.0",
					"remarks": "300 cases handled in last 6 months with 90% success rate"
				},
				{
					"doctorId": 3015,
					"doctorName": "Dr Raghu",
					"successRate": "8.9",
					"remarks": "250 cases handled in last 6 months with 89% success rate"
				},
				{
					"doctorId": 3016,
					"doctorName": "Dr Indira",
					"successRate": "8.8",
					"remarks": "100 cases handled in last 6 months with 88% success rate"
				}
			],
			"sampleCostBreakUp": {
				"threePlateletUnits": 52950,
				"rent": 30400,
				"consultationCharges": 2070,
				"total": 85420
			}
		},
		{
			"id": 1005,
			"name": "Sigma Hospitals",
			"locationCode": "MYSURU",
			"pricePerDay": 20000,
			"recommendation": "2",
			"treatements": [
				{
					"treatementId": 2001,
					"treatementName": "Dengue Fever"
				},
				{
					"treatementId": 2002,
					"treatementName": "Malaria"
				},
				{
					"treatementId": 2003,
					"treatementName": "Diabetes"
				},
				{
					"treatementId": 2004,
					"treatementName": "Pneumonia"
				},
				{
					"treatementId": 2007,
					"treatementName": "Tuberculosis"
				},
				{
					"treatementId": 2008,
					"treatementName": "Hepatitis"
				},
				{
					"treatementId": 2009,
					"treatementName": "Arthritis"
				},
				{
					"treatementId": 2010,
					"treatementName": "Anemia"
				}
			],
			"trend": {
				"averageExpenses": 3500,
				"noOfDengueCases": 100,
				"successRate": 96,
				"successfullClaims": 90,
				"noOfHospitalizations": 13,
				"noOf5StartRatings": 40
			},
			"doctors": [
				{
					"doctorId": 3017,
					"doctorName": "Dr Vasu",
					"successRate": "8.9",
					"remarks": "155 cases handled in last 6 months with 89% success rate"
				},
				{
					"doctorId": 3018,
					"doctorName": "Dr Vignesh",
					"successRate": "9",
					"remarks": "120 cases handled in last 6 months with 90% success rate"
				},
				{
					"doctorId": 3019,
					"doctorName": "Dr Chandra",
					"successRate": "8.0",
					"remarks": "90 cases handled in last 6 months with 80% success rate"
				},
				{
					"doctorId": 3020,
					"doctorName": "Dr Indira",
					"successRate": "9.5",
					"remarks": "200 cases handled in last 6 months with 95% success rate"
				}
			],
			"sampleCostBreakUp": {
				"threePlateletUnits": 20000,
				"rent": 50000,
				"consultationCharges": 2000,
				"total": 72000
			}
		},
		{
			"id": 1006,
			"name": "JSS Hospitals",
			"locationCode": "MYSURU",
			"pricePerDay": 40000,
			"recommendation": "1",
			"treatements": [
				{
					"treatementId": 2001,
					"treatementName": "Dengue Fever"
				},
				{
					"treatementId": 2002,
					"treatementName": "Malaria"
				},
				{
					"treatementId": 2003,
					"treatementName": "Diabetes"
				},
				{
					"treatementId": 2004,
					"treatementName": "Pneumonia"
				},
				{
					"treatementId": 2005,
					"treatementName": "Asthma"
				},
				{
					"treatementId": 2007,
					"treatementName": "Tuberculosis"
				},
				{
					"treatementId": 2008,
					"treatementName": "Hepatitis"
				},
				{
					"treatementId": 2009,
					"treatementName": "Arthritis"
				}
			],
			"trend": {
				"averageExpenses": 5000,
				"noOfDengueCases": 200,
				"successRate": 96,
				"successfullClaims": 80,
				"noOfHospitalizations": 8,
				"noOf5StartRatings": 10
			},
			"doctors": [
				{
					"doctorId": 3021,
					"doctorName": "Dr Paresh",
					"successRate": "8.9",
					"remarks": "155 cases handled in last 6 months with 89% success rate"
				},
				{
					"doctorId": 3022,
					"doctorName": "Dr Vignesh",
					"successRate": "9",
					"remarks": "120 cases handled in last 6 months with 90% success rate"
				},
				{
					"doctorId": 3023,
					"doctorName": "Dr Naresh",
					"successRate": "8.0",
					"remarks": "90 cases handled in last 6 months with 80% success rate"
				},
				{
					"doctorId": 3024,
					"doctorName": "Dr Kumar",
					"successRate": "9.5",
					"remarks": "200 cases handled in last 6 months with 95% success rate"
				}
			],
			"sampleCostBreakUp": {
				"threePlateletUnits": 30000,
				"rent": 10000,
				"consultationCharges": 2000,
				"total": 42000
			}
		},
		{
			"id": 1007,
			"name": "Greenview Hospitals",
			"locationCode": "BENGALURU",
			"pricePerDay": 15000,
			"recommendation": "5",
			"treatements": [
				{
					"treatementId": 2001,
					"treatementName": "Dengue Fever"
				},
				{
					"treatementId": 2002,
					"treatementName": "Malaria"
				},
				{
					"treatementId": 2003,
					"treatementName": "Diabetes"
				},
				{
					"treatementId": 2004,
					"treatementName": "Pneumonia"
				},
				{
					"treatementId": 2005,
					"treatementName": "Asthma"
				},
				{
					"treatementId": 2007,
					"treatementName": "Tuberculosis"
				},
				{
					"treatementId": 2008,
					"treatementName": "Hepatitis"
				},
				{
					"treatementId": 2009,
					"treatementName": "Arthritis"
				},
				{
					"treatementId": 2010,
					"treatementName": "Anemia"
				}
			],
			"trend": {
				"averageExpenses": 15000,
				"noOfDengueCases": 220,
				"successRate": 90,
				"successfullClaims": 99,
				"noOfHospitalizations": 18,
				"noOf5StartRatings": 100
			},
			"doctors": [
				{
					"doctorId": 3025,
					"doctorName": "Dr Joe",
					"successRate": "8.9",
					"remarks": "185 cases handled in last 6 months with 89% success rate"
				},
				{
					"doctorId": 3026,
					"doctorName": "Dr Biden",
					"successRate": "9",
					"remarks": "400 cases handled in last 6 months with 90% success rate"
				},
				{
					"doctorId": 3027,
					"doctorName": "Dr Harold",
					"successRate": "8.0",
					"remarks": "90 cases handled in last 6 months with 80% success rate"
				},
				{
					"doctorId": 3028,
					"doctorName": "Dr Kumar",
					"successRate": "9.5",
					"remarks": "200 cases handled in last 6 months with 95% success rate"
				}
			],
			"sampleCostBreakUp": {
				"threePlateletUnits": 40000,
				"rent": 20000,
				"consultationCharges": 12000,
				"total": 72000
			}
		},
		{
			"id": 1008,
			"name": "Narayana Multispeciality Hospitals",
			"locationCode": "BENGALURU",
			"pricePerDay": 48000,
			"recommendation": "5",
			"treatements": [
				{
					"treatementId": 2001,
					"treatementName": "Dengue Fever"
				},
				{
					"treatementId": 2002,
					"treatementName": "Malaria"
				},
				{
					"treatementId": 2003,
					"treatementName": "Diabetes"
				},
				{
					"treatementId": 2004,
					"treatementName": "Pneumonia"
				},
				{
					"treatementId": 2005,
					"treatementName": "Asthma"
				},
				{
					"treatementId": 2007,
					"treatementName": "Tuberculosis"
				},
				{
					"treatementId": 2008,
					"treatementName": "Hepatitis"
				},
				{
					"treatementId": 2009,
					"treatementName": "Arthritis"
				},
				{
					"treatementId": 2010,
					"treatementName": "Anemia"
				}
			],
			"trend": {
				"averageExpenses": 48000,
				"noOfDengueCases": 320,
				"successRate": 99,
				"successfullClaims": 140,
				"noOfHospitalizations": 50,
				"noOf5StartRatings": 220
			},
			"doctors": [
				{
					"doctorId": 3029,
					"doctorName": "Dr Aishwarya",
					"successRate": "9.9",
					"remarks": "185 cases handled in last 6 months with 89% success rate"
				},
				{
					"doctorId": 3030,
					"doctorName": "Dr Anitha",
					"successRate": "9",
					"remarks": "400 cases handled in last 6 months with 90% success rate"
				},
				{
					"doctorId": 3031,
					"doctorName": "Dr Kamal",
					"successRate": "6.0",
					"remarks": "90 cases handled in last 6 months with 80% success rate"
				},
				{
					"doctorId": 3032,
					"doctorName": "Dr Hari",
					"successRate": "9.5",
					"remarks": "200 cases handled in last 6 months with 95% success rate"
				}
			],
			"sampleCostBreakUp": {
				"threePlateletUnits": 48000,
				"rent": 20000,
				"consultationCharges": 12000,
				"total": 80000
			}
		},
		{
			"id": 1009,
			"name": "Sagar Hospitals",
			"locationCode": "BENGALURU",
			"pricePerDay": 60000,
			"recommendation": "4",
			"treatements": [
				{
					"treatementId": 2001,
					"treatementName": "Dengue Fever"
				},
				{
					"treatementId": 2002,
					"treatementName": "Malaria"
				},
				{
					"treatementId": 2003,
					"treatementName": "Diabetes"
				},
				{
					"treatementId": 2004,
					"treatementName": "Pneumonia"
				},
				{
					"treatementId": 2005,
					"treatementName": "Asthma"
				},
				{
					"treatementId": 2007,
					"treatementName": "Tuberculosis"
				},
				{
					"treatementId": 2008,
					"treatementName": "Hepatitis"
				},
				{
					"treatementId": 2009,
					"treatementName": "Arthritis"
				},
				{
					"treatementId": 2010,
					"treatementName": "Anemia"
				}
			],
			"trend": {
				"averageExpenses": 60000,
				"noOfDengueCases": 130,
				"successRate": 100,
				"successfullClaims": 50,
				"noOfHospitalizations": 10,
				"noOf5StartRatings": 40
			},
			"doctors": [
				{
					"doctorId": 3033,
					"doctorName": "Dr Sunitha",
					"successRate": "6.9",
					"remarks": "185 cases handled in last 6 months with 89% success rate"
				},
				{
					"doctorId": 3034,
					"doctorName": "Dr Kumar",
					"successRate": "8",
					"remarks": "300 cases handled in last 6 months with 90% success rate"
				},
				{
					"doctorId": 3035,
					"doctorName": "Dr Mahesh",
					"successRate": "6.0",
					"remarks": "910 cases handled in last 6 months with 80% success rate"
				},
				{
					"doctorId": 3036,
					"doctorName": "Dr Suresh",
					"successRate": "8.5",
					"remarks": "200 cases handled in last 6 months with 95% success rate"
				}
			],
			"sampleCostBreakUp": {
				"threePlateletUnits": 58000,
				"rent": 20000,
				"consultationCharges": 12000,
				"total": 90000
			}
		},
		{
			"id": 1010,
			"name": "Mallya Hospitals",
			"locationCode": "BENGALURU",
			"pricePerDay": 20000,
			"recommendation": "5",
			"treatements": [
				{
					"treatementId": 2001,
					"treatementName": "Dengue Fever"
				},
				{
					"treatementId": 2002,
					"treatementName": "Malaria"
				},
				{
					"treatementId": 2003,
					"treatementName": "Diabetes"
				},
				{
					"treatementId": 2004,
					"treatementName": "Pneumonia"
				},
				{
					"treatementId": 2005,
					"treatementName": "Asthma"
				}
			],
			"trend": {
				"averageExpenses": 20000,
				"noOfDengueCases": 150,
				"successRate": 99,
				"successfullClaims": 80,
				"noOfHospitalizations": 30,
				"noOf5StartRatings": 90
			},
			"doctors": [
				{
					"doctorId": 3037,
					"doctorName": "Dr Vijay",
					"successRate": "6.9",
					"remarks": "185 cases handled in last 6 months with 89% success rate"
				},
				{
					"doctorId": 3038,
					"doctorName": "Dr Akhil",
					"successRate": "8.8",
					"remarks": "300 cases handled in last 6 months with 90% success rate"
				},
				{
					"doctorId": 3039,
					"doctorName": "Dr Mahesh",
					"successRate": "7.0",
					"remarks": "910 cases handled in last 6 months with 80% success rate"
				},
				{
					"doctorId": 3040,
					"doctorName": "Dr Kamar",
					"successRate": "8.5",
					"remarks": "200 cases handled in last 6 months with 95% success rate"
				}
			],
			"sampleCostBreakUp": {
				"threePlateletUnits": 20000,
				"rent": 10000,
				"consultationCharges": 12000,
				"total": 42000
			}
		},
		{
			"id": 1011,
			"name": "Queens Hospital",
			"locationCode": "BENGALURU",
			"pricePerDay": 50000,
			"recommendation": "5",
			"treatements": [
				{
					"treatementId": 2001,
					"treatementName": "Dengue Fever"
				},
				{
					"treatementId": 2002,
					"treatementName": "Malaria"
				},
				{
					"treatementId": 2003,
					"treatementName": "Diabetes"
				},
				{
					"treatementId": 2004,
					"treatementName": "Pneumonia"
				},
				{
					"treatementId": 2005,
					"treatementName": "Asthma"
				},
				{
					"treatementId": 2007,
					"treatementName": "Tuberculosis"
				},
				{
					"treatementId": 2008,
					"treatementName": "Hepatitis"
				},
				{
					"treatementId": 2009,
					"treatementName": "Arthritis"
				},
				{
					"treatementId": 2010,
					"treatementName": "Anemia"
				}
			],
			"trend": {
				"averageExpenses": 50000,
				"noOfDengueCases": 200,
				"successRate": 98,
				"successfullClaims": 90,
				"noOfHospitalizations": 140,
				"noOf5StartRatings": 200
			},
			"doctors": [
				{
					"doctorId": 3041,
					"doctorName": "Dr Saroja",
					"successRate": "7.9",
					"remarks": "200 cases handled in last 6 months with 89% success rate"
				},
				{
					"doctorId": 3042,
					"doctorName": "Dr Kaveri",
					"successRate": "4.8",
					"remarks": "150 cases handled in last 6 months with 90% success rate"
				},
				{
					"doctorId": 3043,
					"doctorName": "Dr Andrea",
					"successRate": "9.0",
					"remarks": "600 cases handled in last 6 months with 80% success rate"
				},
				{
					"doctorId": 3044,
					"doctorName": "Dr Jacob",
					"successRate": "8.5",
					"remarks": "200 cases handled in last 6 months with 95% success rate"
				}
			],
			"sampleCostBreakUp": {
				"threePlateletUnits": 50000,
				"rent": 10000,
				"consultationCharges": 12000,
				"total": 72000
			}
		},
		{
			"id": 1012,
			"name": "Nano Hospital",
			"locationCode": "BENGALURU",
			"pricePerDay": 20000,
			"recommendation": "3",
			"treatements": [
				{
					"treatementId": 2001,
					"treatementName": "Dengue Fever"
				},
				{
					"treatementId": 2002,
					"treatementName": "Malaria"
				},
				{
					"treatementId": 2003,
					"treatementName": "Diabetes"
				},
				{
					"treatementId": 2004,
					"treatementName": "Pneumonia"
				},
				{
					"treatementId": 2005,
					"treatementName": "Asthma"
				}
			],
			"trend": {
				"averageExpenses": 20000,
				"noOfDengueCases": 100,
				"successRate": 98,
				"successfullClaims": 50,
				"noOfHospitalizations": 60,
				"noOf5StartRatings": 60
			},
			"doctors": [
				{
					"doctorId": 3045,
					"doctorName": "Dr Ganesh",
					"successRate": "7.9",
					"remarks": "100 cases handled in last 6 months with 89% success rate"
				},
				{
					"doctorId": 3046,
					"doctorName": "Dr John",
					"successRate": "4.8",
					"remarks": "250 cases handled in last 6 months with 90% success rate"
				},
				{
					"doctorId": 3047,
					"doctorName": "Dr Sunil",
					"successRate": "8.0",
					"remarks": "600 cases handled in last 6 months with 80% success rate"
				},
				{
					"doctorId": 3048,
					"doctorName": "Dr Vasu",
					"successRate": "6.5",
					"remarks": "300 cases handled in last 6 months with 95% success rate"
				}
			],
			"sampleCostBreakUp": {
				"threePlateletUnits": 20000,
				"rent": 10000,
				"consultationCharges": 12000,
				"total": 42000
			}
		},
		{
			"id": 1013,
			"name": "Jaydeva Hospital",
			"locationCode": "BENGALURU",
			"pricePerDay": 70000,
			"recommendation": "4",
			"treatements": [
				{
					"treatementId": 2001,
					"treatementName": "Dengue Fever"
				},
				{
					"treatementId": 2004,
					"treatementName": "Pneumonia"
				},
				{
					"treatementId": 2005,
					"treatementName": "Asthma"
				},
				{
					"treatementId": 2007,
					"treatementName": "Tuberculosis"
				},
				{
					"treatementId": 2008,
					"treatementName": "Hepatitis"
				},
				{
					"treatementId": 2009,
					"treatementName": "Arthritis"
				},
				{
					"treatementId": 2010,
					"treatementName": "Anemia"
				}
			],
			"trend": {
				"averageExpenses": 70000,
				"noOfDengueCases": 90,
				"successRate": 98,
				"successfullClaims": 50,
				"noOfHospitalizations": 30,
				"noOf5StartRatings": 30
			},
			"doctors": [
				{
					"doctorId": 3049,
					"doctorName": "Dr Philip",
					"successRate": "7.9",
					"remarks": "200 cases handled in last 6 months with 89% success rate"
				},
				{
					"doctorId": 3050,
					"doctorName": "Dr Bill",
					"successRate": "7.8",
					"remarks": "180 cases handled in last 6 months with 90% success rate"
				},
				{
					"doctorId": 3051,
					"doctorName": "Dr Kiran",
					"successRate": "9.0",
					"remarks": "300 cases handled in last 6 months with 80% success rate"
				},
				{
					"doctorId": 3052,
					"doctorName": "Dr Lokesh",
					"successRate": "6.5",
					"remarks": "400 cases handled in last 6 months with 95% success rate"
				}
			],
			"sampleCostBreakUp": {
				"threePlateletUnits": 20000,
				"rent": 10000,
				"consultationCharges": 12000,
				"total": 42000
			}
		},
		{
			"id": 1014,
			"name": "Hostmat Hospital",
			"locationCode": "BENGALURU",
			"pricePerDay": 60000,
			"recommendation": "5",
			"treatements": [
				{
					"treatementId": 2001,
					"treatementName": "Dengue Fever"
				},
				{
					"treatementId": 2002,
					"treatementName": "Malaria"
				},
				{
					"treatementId": 2003,
					"treatementName": "Diabetes"
				},
				{
					"treatementId": 2004,
					"treatementName": "Pneumonia"
				},
				{
					"treatementId": 2005,
					"treatementName": "Asthma"
				},
				{
					"treatementId": 2007,
					"treatementName": "Tuberculosis"
				},
				{
					"treatementId": 2008,
					"treatementName": "Hepatitis"
				},
				{
					"treatementId": 2009,
					"treatementName": "Arthritis"
				},
				{
					"treatementId": 2010,
					"treatementName": "Anemia"
				}
			],
			"trend": {
				"averageExpenses": 60000,
				"noOfDengueCases": 150,
				"successRate": 98,
				"successfullClaims": 150,
				"noOfHospitalizations": 130,
				"noOf5StartRatings": 130
			},
			"doctors": [
				{
					"doctorId": 3049,
					"doctorName": "Dr Kannan",
					"successRate": "9.9",
					"remarks": "900 cases handled in last 6 months with 89% success rate"
				},
				{
					"doctorId": 3050,
					"doctorName": "Dr Arya",
					"successRate": "7.8",
					"remarks": "280 cases handled in last 6 months with 90% success rate"
				},
				{
					"doctorId": 3051,
					"doctorName": "Dr Salim",
					"successRate": "7.0",
					"remarks": "500 cases handled in last 6 months with 80% success rate"
				},
				{
					"doctorId": 3052,
					"doctorName": "Dr Vivek",
					"successRate": "9.5",
					"remarks": "400 cases handled in last 6 months with 95% success rate"
				}
			],
			"sampleCostBreakUp": {
				"threePlateletUnits": 20000,
				"rent": 10000,
				"consultationCharges": 12000,
				"total": 42000
			}
		},
		{
			"id": 1015,
			"name": "Meenakshi Hospital",
			"locationCode": "MYSURU",
			"pricePerDay": 30000,
			"recommendation": "3",
			"treatements": [
				{
					"treatementId": 2001,
					"treatementName": "Dengue Fever"
				},
				{
					"treatementId": 2002,
					"treatementName": "Malaria"
				},
				{
					"treatementId": 2003,
					"treatementName": "Diabetes"
				},
				{
					"treatementId": 2004,
					"treatementName": "Pneumonia"
				},
				{
					"treatementId": 2005,
					"treatementName": "Asthma"
				},
				{
					"treatementId": 2007,
					"treatementName": "Tuberculosis"
				},
				{
					"treatementId": 2008,
					"treatementName": "Hepatitis"
				},
				{
					"treatementId": 2009,
					"treatementName": "Arthritis"
				},
				{
					"treatementId": 2010,
					"treatementName": "Anemia"
				}
			],
			"trend": {
				"averageExpenses": 30000,
				"noOfDengueCases": 200,
				"successRate": 96,
				"successfullClaims": 150,
				"noOfHospitalizations": 100,
				"noOf5StartRatings": 200
			},
			"doctors": [
				{
					"doctorId": 3053,
					"doctorName": "Dr Vijay",
					"successRate": "8.9",
					"remarks": "200 cases handled in last 6 months with 89% success rate"
				},
				{
					"doctorId": 3052,
					"doctorName": "Dr Mani",
					"successRate": "9.8",
					"remarks": "300 cases handled in last 6 months with 90% success rate"
				},
				{
					"doctorId": 3053,
					"doctorName": "Dr Tara",
					"successRate": "7.0",
					"remarks": "300 cases handled in last 6 months with 70% success rate"
				},
				{
					"doctorId": 3054,
					"doctorName": "Dr Adrian",
					"successRate": "9.5",
					"remarks": "400 cases handled in last 6 months with 95% success rate"
				}
			],
			"sampleCostBreakUp": {
				"threePlateletUnits": 20000,
				"rent": 10000,
				"consultationCharges": 12000,
				"total": 42000
			}
		}
	],
	"insurances": [
		"Life Insurance Corporation of India",
		"HDFC Life Insurance Co. Ltd",
		"Max Life Insurance Co. Ltd.",
		"ICICI Prudential Life Insurance Co. Ltd",
		"Kotak Mahindra Life Insurance Co. Ltd.",
		"Aditya Birla SunLife Insurance Co. Ltd.",
		"TATA AIA Life Insurance Co. Ltd.",
		"SBI Life Insurance Co. Ltd.",
		"Exide Life Insurance Co. Ltd.",
		"Bajaj Allianz Life Insurance Co. Ltd.",
		"PNB MetLife India Insurance Co. Ltd",
		"Reliance Nippon Life Insurance Company Limited",
		"Aviva Life Insurance Company India Ltd.",
		"Sahara India Life Insurance Co. Ltd.",
		"Shriram Life Insurance Co. Ltd.",
		"Bharti AXA Life Insurance Company Ltd,",
		"Future Generali India Life Insurance Company Limited",
		"Ageas Federal Life Insurance Company Limited",
		"Canara HSBC Oriental Bank of Commerce Life Insurance Company Limited",
		"Aegon Life Insurance Company Limited",
		"Pramerica Life Insurance Co. Ltd.",
		"Star Union Dai-Ichi Life Insurance Co. Ltd.",
		"IndiaFirst Life Insurance Company Ltd.",
		"Edelweiss Tokio Life Insurance Company Limited"
	],
	"treatements": [
		{
			"treatementId": 2001,
			"treatementName": "Dengue Fever"
		},
		{
			"treatementId": 2002,
			"treatementName": "Malaria"
		},
		{
			"treatementId": 2003,
			"treatementName": "Diabetes"
		},
		{
			"treatementId": 2004,
			"treatementName": "Pneumonia"
		},
		{
			"treatementId": 2005,
			"treatementName": "Asthma"
		},
		{
			"treatementId": 2006,
			"treatementName": "Ulcer"
		}
	],
	"articles": [
		{
			name: 'first-artical',
			title: '#MedconferTalk: Dr. Kevin Cox On Common Kidney Disorder',
			date: '18-Nov-2021',
			content: 'One in five young adults suffers from a high BP problem, making it the most common chronic diseases we Indians face. Though it doesn’t affect your health severely in the early stage, it can become critical if not treated timely. Moreover, it can even lead to other complicated health issues related to the heart.',
		},
		{
			name: 'second-artical',
			title: '#MedconferTalk: All About Coronary Artery Disease By Dr. Smith',
			date: '18-Nov-2021',
			content: 'Have you ever had a poor medical experience at a hospital or with a doctor? Was the diagnosis incorrect? Was the treatment plan decided for you not adequate? Did you know all the side effects associated with the medicines you would take? Did you think of going to a different doctor for a second look?',
		},
		{
			name: 'third-artical',
			title: '#MedconferTalk: All About Coronary Artery Disease By Dr. Ravi',
			date: '18-Nov-2021',
			content: 'Coronary Artery Disease is a condition which includes the narrowing and blockage of the coronary arteries. This is one of the most common types of heart disease because of which almost 365,914 people were killed in 2017. We had a conversation with Dr. Surinder Bazaz concerning Coronary Artery Disease and other heart health concerns.',
		}
	]
}
