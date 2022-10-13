import sgMail from '@sendgrid/mail';

export default function handler(request, response) {
	sgMail.setApiKey(process.env.SENDGRID_API_KEY);
	const msg = {
		to: 'julian.koehn1989@googlemail.com', // Change to your recipient
		from: 'test@example.com', // Change to your verified sender
		subject: 'Sending with SendGrid is Fun',
		text: 'and easy to do anywhere, even with Node.js',
		html: '<strong>and easy to do anywhere, even with Node.js</strong>',
	};
	sgMail
		.send(msg)
		.then(() => {
			response.send('Email sent');
		})
		.catch(error => {
			console.log('egal');
			response.send(error.message);
		});
}
