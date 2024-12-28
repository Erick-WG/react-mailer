// eslint-disable-next-line
import React from 'react';
import { useState } from 'react';
import './form.css';

const Form = () => {
    // handle state here
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    // eslint-disable-next-line
    const [form, setForm] = useState(null);

    // handle form submission here
    const handleSubmit = (e) => {
        e.preventDefault();
        const newForm = { name: name, email: email, subject: subject, message: message };
        setForm(newForm);
        // console.log(form);
        // console.log(newForm);
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
            case 'subject':
                setSubject(value);
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
      <form className="form">
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
                name="subject"
                value={subject}
                placeholder="Subject"
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
                onClick={handleSubmit}
                onKeyDown={handleSubmit}
            >Send</button>
      </form>
    </div>
  )
}

export default Form
