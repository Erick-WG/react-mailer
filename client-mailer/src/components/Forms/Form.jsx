// eslint-disable-next-line
import React from 'react';
import { useState, useEffect } from 'react';
import './form.css';
// import emailjs from 'emailjs-com';
import emailjs from '@emailjs/browser';

const Form = () => {
    // handle state here
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [message, setMessage] = useState('');
    // const [sent, setSent] = useState(false);
    // eslint-disable-next-line
    const [form, setForm] = useState(null);

    // handle side effects here.
    useEffect(() => {
        emailjs.init({
            publicKey: `${import.meta.env.VITE_EMAILJS_PUBLIC_KEY}`,
            // Do not allow headless browsers
            blockHeadless: true,
            limitRate: {
              // Set the limit rate for the application
              id: 'app',
              // Allow 1 request per 10s
              throttle: 10000,
            },
        });
    }, []);


    // handle form submission here
    const handleSubmit = (e) => {
        e.preventDefault();
        // setSent(true);

        const newForm = {
            from_name: name,
            sender_email: email,
            sender_contact: contact,
            message: message,
            to_name: `${import.meta.env.VITE_TO_NAME}`,
            reply_to: `${import.meta.env.VITE_EMAILJS_REPLY_TO}`
        };

        setForm(newForm);

        emailjs.send(`${import.meta.env.VITE_EMAILJS_SERVICE_ID}`, `${import.meta.env.VITE_EMAILJS_TEMPLATE_ID}`, newForm)
        .then((result) => {
                console.log(result.text);
                alert("Message sent successfully");
                setName('');
                setEmail('');
                setContact('');
                setMessage('');
                // setSent(false);
                // console.log(sent)
            }, (error) => {
                console.log(error.text);
                // setSent(false);
                alert("Message not sent");
        });
    }

    // handle form input changes here
    const handleChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'contact':
                setContact(value);
                break;
            case 'message':
                setMessage(value);
                break;
            default:
                break;
        }
    }

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        {/* contacts */}
            <input 
                type="text"
                name="name"
                value={name}
                placeholder="Name"
                onChange={handleChange}
            />
            <input 
                type="email"
                name="email"
                value={email}
                placeholder="Email"
                onChange={handleChange}
            />
            <input 
                type="text"
                name="contact"
                value={contact}
                placeholder="+123 78898798"
                onChange={handleChange}
            />
        {/* message */}
            <textarea 
                name="message"
                value={message}
                placeholder="Message"
                onChange={handleChange}
            ></textarea>
            <button
                type="submit"
                // disabled={sent ? false : true}
                onClick={handleSubmit}
                onKeyDown={handleSubmit}
            >Send</button>
      </form>
    </div>
  )
}

export default Form
