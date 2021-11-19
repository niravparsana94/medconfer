import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Message, ChatService } from '../../services/chat.service'
@Component({
	selector: 'app-chat',
	templateUrl: './chat.component.html',
	styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

	messages: Message[] = [];
	value: string;

	constructor(public chatService: ChatService, public dialogRef: MatDialogRef<ChatComponent>) { }

	ngOnInit() {
		this.chatService.conversation.subscribe((val) => {
			this.messages = this.messages.concat(val);
		});
	}

	sendMessage() {
		this.chatService.getBotAnswer(this.value);
		this.value = '';
	}

	dismiss(data?) {
		this.dialogRef.close(JSON.stringify(data));
	}

}
