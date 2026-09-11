import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setStatus('');

    const serviceId = 'service_9gb19ke';
    const templateId = 'template_nbiz8e3';
    const publicKey = 'ciCg_CL54qMMXuu-y';

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'A.Brahma Vamsi',
      message: message,
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      setStatus('Message sent successfully.');
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('Failed to send. Try again.');
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="contact">
      {/* Direct contact options */}
      <div className="contact__direct">
        <h2 className="contact__heading">Let's connect</h2>
        <p className="contact__sub">Prefer a quick conversation? Reach out directly.</p>

        <div className="contact__methods">
          <a href="mailto:brahmavamsi1234@gmail.com" className="contact__method">
            <div className="contact__method-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </div>
            <div>
              <span className="contact__method-label">Email</span>
              <span className="contact__method-value">brahmavamsi1234@gmail.com</span>
            </div>
          </a>

          <a href="https://www.linkedin.com/in/brahmavamsi/" target="_blank" rel="noopener noreferrer" className="contact__method">
            <div className="contact__method-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </div>
            <div>
              <span className="contact__method-label">LinkedIn</span>
              <span className="contact__method-value">Quick response guaranteed</span>
            </div>
          </a>

          <a href="https://github.com/abvinnovator" target="_blank" rel="noopener noreferrer" className="contact__method">
            <div className="contact__method-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
            </div>
            <div>
              <span className="contact__method-label">GitHub</span>
              <span className="contact__method-value">Check out my work</span>
            </div>
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="contact__divider">
        <span>or send a message</span>
      </div>

      {/* Form */}
      <form className="contact__form" onSubmit={handleSubmit}>
        <div className="contact__field">
          <label className="contact__label" htmlFor="contact-name">Name</label>
          <input
            id="contact-name"
            className="contact__input"
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="contact__field">
          <label className="contact__label" htmlFor="contact-email">Email</label>
          <input
            id="contact-email"
            className="contact__input"
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="contact__field">
          <label className="contact__label" htmlFor="contact-message">Message</label>
          <textarea
            id="contact-message"
            className="contact__textarea"
            placeholder="What's on your mind?"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>

        <button className="contact__submit" type="submit" disabled={sending}>
          {sending ? 'Sending...' : 'Send message'}
        </button>

        {status && <p className="contact__status">{status}</p>}
      </form>
    </div>
  );
};

export default ContactSection;
