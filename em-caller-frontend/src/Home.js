import React from 'react';
import './Home.css';

function Home() {
  return (
    <div>
      {/* Header */}
      <header className="header">
        <h1>Welcome to EM-Caller</h1>
        <p>Your go-to platform for seamless video conferencing.</p>
        <a href="/signup" className="button">Sign Up for Free</a>
      </header>

      {/* Main Content */}
      <div className="container">
        {/* Introduction Section */}
        <section className="intro">
          <h2>What is EM-Caller?</h2>
          <p>
            EM-Caller is a robust and easy-to-use video conferencing tool designed to help you connect with your team, family, and friends anywhere in the world. It offers secure and high-quality video and audio conferencing, real-time messaging, and screen sharing features.
          </p>
        </section>

        {/* Features Section */}
        <section className="features">
          <h2>Why Choose EM-Caller?</h2>
          <div className="card">
            <h3>Secure Communication</h3>
            <p>EM-Caller ensures your calls are encrypted and your data is protected, keeping your conversations private and secure.</p>
          </div>
          <div className="card">
            <h3>High-Quality Video and Audio</h3>
            <p>Enjoy uninterrupted HD video and crystal-clear audio, even in low-bandwidth conditions.</p>
          </div>
          <div className="card">
            <h3>Easy Scheduling and Management</h3>
            <p>Schedule meetings, set reminders, and share invites with ease through our intuitive interface.</p>
          </div>
        </section>

        {/* Call to Action */}
        <section className="cta">
          <h2>Ready to Get Started?</h2>
          <p>Join thousands of users who trust EM-Caller for their video communication needs.</p>
          <a href="/signup" className="button">Create Your Free Account</a>
        </section>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} EM-Caller. All rights reserved.</p>
        <p>
          <a href="/privacy-policy">Privacy Policy</a> | <a href="/terms-of-service">Terms of Service</a>
        </p>
      </footer>
    </div>
  );
}

export default Home;
