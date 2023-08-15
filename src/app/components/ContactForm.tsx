import React, { useState } from 'react';

const ContactForm: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Perform form submission logic here
        // For demonstration purposes, we'll just log the data
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);

        // Clear the form after submission
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
<div style={{ maxWidth: '400px', margin: '0 auto', padding: '10px', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }} className="shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
    <h1 className="text-lg font-medium pb-4 text-center">Email Me</h1>
    <form onSubmit={handleSubmit} className="space-y-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required className="block w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />

        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="block w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />

        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message:</label>
        <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} rows={4} cols={50} required className="block w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"></textarea>

        <button type="submit" className="w-full py-2 px-4 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Submit
        </button>
    </form>
</div>

    );
};

export default ContactForm;
