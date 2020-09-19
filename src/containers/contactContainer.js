import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import Form from "../components/form";


export default function ContactContainer() {
    const history = useHistory();
    const [error, setError] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [subject, setSubject] = useState('');
    const isInvalid = message === '' || name === '';

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <Form>
            <Form.Title>Contact Us</Form.Title>
            {error && <Form.Error data-testid="error">{error}</Form.Error>}
            <Form.Base onSubmit={handleSubmit} method="POST">
                <Form.Input placeholder="Name" value={name} onChange={({target}) => setName(target.value)}/>
                <Form.Input placeholder="Subject" value={subject} onChange={({target}) => setSubject(target.value)}/>
                <Form.TextArea rows="4" cols="50" placeholder="Message" value={message} onChange={({target}) => setMessage(target.value)}/>
            </Form.Base>
            <Form.Submit disabled={isInvalid} type="submit" data-testid="sign-in">
                Send
            </Form.Submit>
        </Form>
    )
}