import React, { useState } from 'react';
import NotificationBell from '../assets/images/notification.svg';
import Envelope from '../assets/images/bx-envelope.svg';

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');


  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return false;
    }
    setError('');
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {

      fetch('/submit-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      })
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  };

  return (
    <section>
      <div className="container">
        <div className="subscribe-box">
          <div className="noti-bell">
            <img src={NotificationBell} alt="Notification bell" />
            <h4 className="subscribe-text">
              Subscribe to our newsletter to stay <br /> informed about latest updates
            </h4>
          </div>
          <div className="form-container">
            <form onSubmit={handleSubmit}>
              <div className="input-container">
                <div className="inputimg">
                <img src={Envelope} alt="Envelope icon" />
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button className="sub-btn" type="submit">Subscribe</button>
              </div>
              {error && <p className="error-text">{error}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
