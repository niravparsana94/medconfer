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

		const greetings = ['hi', 'hello', 'whatsup', 'good evening', 'good morning', 'good afternoon', 'who are you', 'what is your name'];
		const salutations = ['bye', 'good bye'];
		const words = ['human', 'agent', 'consultant'];
        const medicines = ['refil', 'tablets', 'refill', 'tablet', 'pharmacy', 'medicine', 'drungs'];
        const identification = ['are you a robot', 'are you a machine', 'are you human', 'are you real'];
        const feedbackString = ['hate', 'bad', 'stupid', 'feedback'];

		const greeting = greetings.find(g => g.toLowerCase().includes(question));
		const salutation = salutations.find(s => s.toLowerCase().includes(question));
		const word = words.find(w => w.toLowerCase().includes(question));
        const pharmacy = medicines.find(p => p.toLowerCase().includes(question));
        const identity = identification.find(i => i.toLowerCase().includes(question));
        const feedback = feedbackString.find(f => f.toLowerCase().includes(question));
		let treatment = this.treatments.find(t => { return t.treatementName.toLowerCase().includes(question) });

		if (greeting) {
			if (question.includes('good') && question.includes(greeting))
				answer = `Hello, ${greeting}.<br>I am Medulla. How can I help you?`;
			else
				answer = `Hello, I am Medulla. Your virtual assistant.<br>How can I help you?`;
		}
		else if (salutation)
			answer = 'Good Bye';
		else if (word)
			answer = 'Our agents are currently not available.<br>Please call us or send us an email.';
        else if (pharmacy)
            answer = 'Perhaps you are looking to order medicines? <br> Please upload your precsription, We will then process your request and send an SMS with delivery details';
        else if (identity)
			answer = 'I am a robot, but I’m a good one. Let me prove it. How can I help you?';
        else if (feedback)
			answer = 'I am sorry, I am learning every day. <br> Please write to us with your feedback';
        else if (question.includes('how are'))
			answer = 'I am good, Thank you.';
		else if (question.includes('help'))
			answer = 'How can I help you?';
		else if (question == 'ok')
			answer = 'Is there anything I can help you with?';
		else if (question.includes('awesome'))
			answer = 'Thank you!';
        else if (question.includes('how you work'))
			answer = 'I take your request, analyze it and try my best to provide you the relevant information.<br> I am built by ML Models and everyday learning to serve you better ';
        else if (question.includes('weather'))
			answer = 'Weather looks pretty clear, Chances of rain is 25%. I wish you a nice day!';
        else if (question.includes('check up'))
            answer = 'Please explore our Smart health checkup section from our home page.'
        else if (question.includes('insurance'))
            answer = 'Please explore our Smart Insurance section from our home page.<br> We have customized insurance policies at low premium specially for you'
        else if (question.includes('joke'))
			answer = 'Why do seagulls fly over the sea? <br> Because if they fly over the bay, they would be called bagels.';
        else if (question.includes('miss you'))
			answer = 'I know, it feels like it has been a while.';
        else if (question.includes('love you'))
			answer = 'I love you too!';
        else if (question.includes('song'))
			answer = 'Sorry, I have a bad throat. But I would love to hear you sing';
        else if (question.includes('nice day'))
                answer = 'Thank you, I wish you a nice day';
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
			msg: answer || "I can't understand your question, Could you please rephrase.",
			data
		};
	}
}
