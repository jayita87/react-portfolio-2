import React from 'react';
import '../../styles/style.css';
import Header from '../Header';
import Footer from '../Footer';
import portrait from '../../assets/portrait.jpeg';

export default function About() {
  return (
    <div>
      <Header />

      <div className="content">
        <h2 id="h2">About me</h2>
        <img className="image" src={portrait} alt="portrait" width="150"></img>
        <div className="bio">
          <p>
            My name is Jayita Chowdhury. I live in Phoenix, Arizona with my family.I love to cook food and travel all around the world.
          I love to learn new things. I am studying full stack web developer course from university of Arizona
          coding bootcamp. I am a hard-working, detail-oriented Software Developer passionate about learning,
          researching, and writing code and I relish the opportunity to take my programming skills and
           experience to a company where
           I can continue to learn and grow as a professional software developer.
          <br />
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
