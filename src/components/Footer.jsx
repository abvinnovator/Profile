import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Button, message, Space } from 'antd';
import {  InstagramOutlined, LinkedinOutlined, LinkOutlined, GithubOutlined } from '@ant-design/icons';

const Footer = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [messageContent, setMessageContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Your EmailJS service ID, template ID, and Public Key
    const serviceId = 'service_9gb19ke';
    const templateId = 'template_nbiz8e3';
    const publicKey = 'ciCg_CL54qMMXuu-y';

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'A.Brahma Vamsi',
      message: messageContent,
    };

    // Send the email using EmailJS
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully!', response);
        messageApi.open({
          type: 'success',
          content: 'Email sent successfully!',
        });
        setName('');
        setEmail('');
        setMessageContent('');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        messageApi.open({
          type: 'error',
          content: 'Error sending email. Please try again later.',
        });
      });
  }

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        {contextHolder}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">Contact Me</h2>
            <p className="text-gray-400">Feel free to reach out to me!</p>
          </div>
          <form onSubmit={handleSubmit} className="w-full max-w-sm">
            <div className="mb-4">
              <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                name="from_name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="from_email"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Message me"
                value={messageContent}
                onChange={(e) => setMessageContent(e.target.value)}
                name="message"
                required
              ></textarea>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Send Email to me
              </button>
            </div>
          </form>
        </div>
        <div className="text-center mt-8 text-gray-400">
          © 2024 A.B.Vamsi. All rights reserved.
        </div>
        <div className="text-center flex items-center justify-center gap-8 mt-8 text-gray-400">
      <a href='https://github.com/abvinnovator'> <h1><GithubOutlined /></h1>  </a>
   <a href='https://www.linkedin.com/in/brahmavamsi-aratipamula-42251626b/'><span> <h1> <LinkedinOutlined /></h1> </span></a>   
    <a href='https://www.instagram.com/vamsiaratipamula/'   >  <InstagramOutlined /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
