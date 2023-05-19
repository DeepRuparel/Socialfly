import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import './Contct.css';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);

    const submit = () => {
        if (name && email && message) {
            const serviceId = 'service_6aizwt9';
            const templateId = 'template_aonaav7';
            const userId = 'X1cnQZV168gge6e6n';
            const templateParams = {
                name,
                email,
                message
            };

            emailjs.send(serviceId, templateId, templateParams, userId)
                .then(response => console.log(response))
                .then(error => console.log(error));

            setName('');
            setEmail('');
            setMessage('');
            setEmailSent(true);
        } else {
            alert('Please fill in all fields.');
        }
    }

    return (
        <>
            <div style={{ float: 'left' }}>
               
            </div>
            <div id="contact-form" style={{ float: 'right' }}>
                <h2>Contact Us </h2>
                <p> Feel Free to send us a Message! </p>
                <input type="text" placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} />
                <input type="email" placeholder="Your email address" value={email} onChange={e => setEmail(e.target.value)} />
                <textarea placeholder="Your message" value={message} onChange={e => setMessage(e.target.value)}></textarea>
                <button onClick={submit}>Send Message</button>

                <span className={emailSent ? 'visible' : null}>Thank you for your message, we will be in touch in no time!</span>
                </div>
            </>
    );
};

export default Contact;