import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { RequestCallbackComponent } from './pages/home/request-callback/request-callback.component';
import { MatAutocompleteModule, MatButtonModule, MatCardModule, MatDatepickerModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule, MatNativeDateModule, MatSelectModule, MatSliderModule, MatSnackBarModule, MatTabsModule, MatToolbarModule, MatTooltipModule, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FindHospitalsComponent } from './pages/find-hospitals/find-hospitals.component';
import { HospitalsComponent } from './pages/find-hospitals/hospitals/hospitals.component';
import { ArticlesComponent } from './pages/find-hospitals/articles/articles.component';
import { TrendsComponent } from './pages/find-hospitals/trends/trends.component';
import { HospitalComponent } from './pages/find-hospitals/hospitals/hospital/hospital.component';
import { DoctorComponent } from './pages/find-hospitals/hospitals/hospital/doctor/doctor.component';
import { CommonModalComponent } from './components/common-modal/common-modal.component';
import { ChatComponent } from './components/chat/chat.component';
import { InsurancesComponent } from './pages/find-hospitals/hospitals/hospital/insurances/insurances.component';
import { SmartHealthCheckupComponent } from './components/smart-health-checkup/smart-health-checkup.component';
import { SmartInsurancePolicyComponent } from './components/smart-insurance-policy/smart-insurance-policy.component';

@NgModule({
	entryComponents: [CommonModalComponent, InsurancesComponent, SmartHealthCheckupComponent, SmartInsurancePolicyComponent, ChatComponent],
	declarations: [
		AppComponent,
		HomeComponent,
		RequestCallbackComponent,
		FindHospitalsComponent,
		HospitalsComponent,
		ArticlesComponent,
		TrendsComponent,
		HospitalComponent,
		DoctorComponent,
		CommonModalComponent,
		ChatComponent,
		InsurancesComponent,
		SmartHealthCheckupComponent,
		SmartInsurancePolicyComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		HttpClientModule,
		FormsModule,
		ReactiveFormsModule,
		MatToolbarModule,
		MatIconModule,
		MatButtonModule,
		MatAutocompleteModule,
		MatFormFieldModule,
		MatInputModule,
		MatSelectModule,
		MatCardModule,
		MatSnackBarModule,
		MatTabsModule,
		MatTooltipModule,
		MatDatepickerModule,
		MatNativeDateModule,
		MatSliderModule,
		MatDialogModule
	],
	providers: [
		{ provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 2500 } }
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
