import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import Form from "../components/form";
import emailjs from 'emailjs-com';


export default function ContactContainer() {
    const history = useHistory();
    const [error, setError] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [subject, setSubject] = useState('');
    const isInvalid = message === '' || name === '' || subject === '';

    const sendEmail = (e) => {
        e.preventDefault();
        console.log("got here");
        const payload = {
            from_name: name,
            subject,
            message
        }

        emailjs.send('service_hs828ab', 'template_3kq2vtv', payload, 'user_uyOpw0E94HAWBQ7QuUEJk')
            .then((result) => {
                history.push('/');
            }, (error) => {
                setError(error.message);
            });
    }

    return (
        <Form>
            <Form.Title>Contact Us</Form.Title>
            {error && <Form.Error>{error}</Form.Error>}
            <Form.Base>
                <Form.Input name="from_name"  placeholder="Name" value={name} onChange={({target}) => setName(target.value)}/>
                <Form.Input name="subject"  placeholder="Subject" value={subject} onChange={({target}) => setSubject(target.value)}/>
                <Form.TextArea name="message"  rows="4" cols="50" placeholder="Message" value={message} onChange={({target}) => setMessage(target.value)}/>
            </Form.Base>
            <Form.Submit onClick={sendEmail} disabled={isInvalid} type="submit">
                Send
            </Form.Submit>
        </Form>
    )
}