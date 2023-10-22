import React, { useState } from 'react';
import axios from 'axios';
import './GetQuote.css';
const GetQuote = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [quoteFor, setQuoteFor] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      
      const response = await axios.post('http://localhost:3001/api/quote', {
        name,
        email,
        contactNumber,
        quoteFor,
        message,
      });
      
      setName('');
      setEmail('');
      setContactNumber('');
      setQuoteFor('');
      setMessage('');
      setSubmitted(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="quote-container">
      <h2 className='quote'>Get a Quote</h2>
      {submitted ? (
        <p>Thank you for your quote request!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="quoteFor"><b>Quote For</b></label>
              <select
                id="quoteFor"
                value={quoteFor}
                onChange={(e) => setQuoteFor(e.target.value)}
                required
              >
                <option value="">Select an option</option>
                <option value="Web Development">Web Development</option>
                <option value="Corporate Gifting">Corporate Gifting</option>
                <option value="Logo Designing">Logo Designing</option>
                <option value="Social Media Advertisement">Social Media Advertisement</option>
                <option value="Digital Marketing">Digital Marketing</option>
              </select>
            </div>
            <div className="form-group n">
              <label htmlFor="name"><b>Name</b></label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group c">
              <label htmlFor="contact"><b>Contact Number</b></label>
              <input
                type="text"
                id="contact"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className=" form-group email">
              <label htmlFor="email"><b>Email</b></label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group message">
              <label htmlFor="message"><b>Your Requirement</b></label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default GetQuote;
