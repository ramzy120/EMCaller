import React from 'react';
import './Home.css';

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <header className="hero">
        <h1>Welcome to EM-Caller</h1>
        <p>Your go-to platform for seamless video conferencing.</p>
        <a href="/signup" className="button">Sign Up for Free</a>
      </header>

      {/* Features Section */}
      <section className="features">
        <h2>Why Choose EM-Caller?</h2>
        <div className="card-container">
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
          <div className="card">
            <h3>Screen Sharing & Collaboration</h3>
            <p>Share your screen easily to enhance collaboration and productivity during meetings.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Users Say</h2>
        <p>"EM-Caller has transformed the way we communicate with our team!" - <b>Dr. Princess Davidson</b></p>
        <p>"The audio and video quality are exceptional, even in low bandwidth." - <b>Utuedor Vwairhe </b></p>
      </section>

      {/* Integrations Section */}
      <section className="integrations">
        <h2>Integrate Seamlessly</h2>
        <p>Connect EM-Caller with your favorite tools for enhanced productivity.</p>
        <div className="integration-logos">
          <img src="/path/to/slack-logo.png" alt="Slack" />
          <img src="/path/to/google-calendar-logo.png" alt="Google Calendar" />
          <img src="/path/to/zoom-logo.png" alt="Zoom" />
          <img src="/path/to/teams-logo.png" alt="Microsoft Teams" />
        </div>
      </section>

      {/* Security Features Section */}
      <section className="security">
        <h2>Your Security is Our Priority</h2>
        <p><b>At Em-Caller, </b>let we prioritize your privacy and security with state-of-the-art features:</p>
        <ul>
          <li>End-to-End Encryption: Ensure that only you and your participants can access the conversation.</li>
          <li>Secure Data Storage: All data is stored securely in compliance with industry standards.</li>
          <li>Two-Factor Authentication: An added layer of security to protect your account.</li>
          <li>Regular Security Audits: We conduct frequent assessments to identify and mitigate potential vulnerabilities.</li>
        </ul>
      </section>

      {/* Support Section */}
      <section className="support">
        <h2>Need Help?</h2>
        <p>Our support team is here for you. Reach out for assistance anytime.</p>
        <a href="/support" className="button">Contact Support</a>
      </section>

      {/* Call to Action Section */}
      <section className="cta">
        <h2>Ready to Get Started?</h2>
        <p>Join thousands of users who trust EM-Caller for their video communication needs.</p>
        <a href="/signup" className="button">Create Your Free Account</a>
      </section>

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
