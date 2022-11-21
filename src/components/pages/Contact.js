import React from 'react';
import Footer from '../Footer';
import Header from '../Header';

export default function Contact() {
  return (
    <div>
      <Header />
      <div className="content">
        <h2 id="h2">Contact</h2>
        <p>Please message me at <a href="mailto:jayita.chowdhury.1987@gmail.com">jayita.chowdhury.1987@gmail.com</a></p>
        <form>
        <div className="form-group">
            <label for="name">Name:</label>
            <textarea className="form-control" name="Name" id="form-body" rows="1"></textarea>
          </div>
        <div className="form-group">
            <label for="email">Email:</label>
            <textarea className="form-control" name="Email" id="form-body" rows="1"></textarea>
          </div>
          <div className="form-group">
            <label for="message">Message:</label>
            <textarea className="form-control" name="messageBody" id="form-body" rows="3"></textarea>
          </div>
         <center> <input className="button1" style={{ marginTop: '20px' }} type="submit" value="Submit" /></center>
        </form>
        
      </div>
      <Footer />
    </div>
  );
}