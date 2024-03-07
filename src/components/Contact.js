import React, { useState } from 'react';
import { addFormData } from '../js/form.js'; 
import '../styles/contact.css'; 

export default function ContactPage() {
    // State for the contact form
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    // Function to handle form changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(e);
        addFormData(formData.name, formData.email, formData.message)
            .then(() => {
                console.log('Data submitted to S3');
            })
            .catch(error => {
                console.error('Error submitting data:', error);
            });
    };

    return (
        <div>
            <div className="contact">
                <h1>Contact Me</h1>
                <p>
                    Email: <a href="mailto:rupert@webstersystems.co.uk">rupert@webstersystems.co.uk</a>
                </p>
                <p>
                    CV: <a href={"/RupertStJohnWebster.pdf"} target="_blank" rel="noopener noreferrer">Rupert St John Webster</a>
                </p>
                <p>
                    GitHub: <a href="https://github.com/rupweb" target="_blank">rupweb</a>
                </p>
                <p>
                    LinkedIn: <a href="https://www.linkedin.com/in/rupertstjw" target="_blank">rupertstjw</a>
                </p>

                <br/>
                <form id="theForm" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="message">Message:</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </div>
    );
}

