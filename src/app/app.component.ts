import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { ChatComponent } from './components/chat/chat.component';
import { CommonService } from './services/common.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'MedConfer';

	constructor(public dialog: MatDialog, private router: Router, private commonService: CommonService) {
	}

	showChatBot() {
		const dialogRef = this.dialog.open(ChatComponent, { panelClass: 'chatbot-panel' });
		dialogRef.afterClosed().subscribe(result => {
			if (!result) return;
			this.router.navigate(['/find-hospitals'], { queryParams: { city: this.commonService.city, treatment: JSON.parse(result).treatementId } });
		});
	}
}
