import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CommonService } from './common.service';
import { HospitalService } from './hospital.service';

export class Message {
	constructor(public author: string, public content: string, public data?: string) { }
}

@Injectable({
	providedIn: 'root'
})
export class ChatService {
	treatments: any[];
	constructor(private hospitalService: HospitalService) {
		this.hospitalService.getTreatments().subscribe(treatments => this.treatments = treatments);
	}

	conversation = new Subject<Message[]>();

	messageMap = {
		"Hi": "Hello,<br/>What treatment you are searching for?",
		"default": "I can't understand. Can you please repeat"
	}

	getBotAnswer(msg: string) {
		const userMessage = new Message('user', msg);
		this.conversation.next([userMessage]);
		const messageData = this.getBotMessage(msg);
		const botMessage = new Message('bot', messageData.msg, messageData.data);

		setTimeout(() => {
			this.conversation.next([botMessage]);
		}, 500);
	}

	getBotMessage(question: string) {
		let data;
		let answer = this.messageMap[question];
		if (!answer && question.toLowerCase().startsWith('treatment ')) {
			const userTreatment = question.replace('Treatment for ', '');
			const treatment = this.treatments.find(t => { return t.treatementName.toLowerCase().includes(userTreatment.toLowerCase()) })
			if (treatment) {
				data = treatment;
				answer = `We found ${treatment.treatementName}.<br>Click below to find hospitals`;
			}
			else
				answer = `Sorry, could'nt find treatment.`;
		}
		return {
			msg: answer || this.messageMap['default'],
			data
		};
	}
}
