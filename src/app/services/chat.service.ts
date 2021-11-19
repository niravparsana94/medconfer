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
		question = question.toLowerCase();
		let answer;
		let data;

		const greetings = ['hi', 'hello', 'whatsup', 'good evening', 'good morning', 'good afternoon'];
		const salutations = ['bye', 'good bye'];
		const words = ['human', 'agent', 'consultant'];

		const greeting = greetings.find(g => g.toLowerCase().includes(question));
		const salutation = salutations.find(s => s.toLowerCase().includes(question));
		const word = words.find(w => w.toLowerCase().includes(question));
		let treatment = this.treatments.find(t => { return t.treatementName.toLowerCase().includes(question) });

		if (greeting) {
			if (question.includes('good') && question.includes(greeting))
				answer = `Hello, ${greeting}.<br>I am Medulla. How can I help you?`;
			else
				answer = `Hello, I am Medulla.<br>How can I help you?`;
		}
		else if (salutation)
			answer = 'Good Bye';
		else if (word)
			answer = 'Our agents are currently not available.<br>Please call us or send us an email.';
		else if (question.includes('how are'))
			answer = 'I am good, Thank you.';
		else if (question.includes('help'))
			answer = 'How can I help you?';
		else if (question == 'ok')
			answer = 'Is there anything I can help you with?';
		else if (question.includes('awesome'))
			answer = 'Thank you!';
		else if (treatment || question.startsWith('treatment ')) {
			const userTreatment = question.replace('treatment for ', '');
			if (!treatment)
				treatment = this.treatments.find(t => { return t.treatementName.toLowerCase().includes(userTreatment) })
			if (treatment) {
				data = treatment;
				answer = `We found ${treatment.treatementName}.<br>Click below to find hospitals`;
			}
			else
				answer = `Sorry, could'nt find treatment.`;
		}
		return {
			msg: answer || "I can't understand. Can you please repeat",
			data
		};
	}
}
