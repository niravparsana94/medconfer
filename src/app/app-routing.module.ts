import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FindHospitalsComponent } from './pages/find-hospitals/find-hospitals.component';

const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: '/home' },
	{ path: 'home', component: HomeComponent },
	{ path: 'find-hospitals', component: FindHospitalsComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', useHash: true })],
	exports: [RouterModule]
})
export class AppRoutingModule { }
