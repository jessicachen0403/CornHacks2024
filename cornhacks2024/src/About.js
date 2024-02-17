import './App.css';
import './css/about.css';

function About() {
  return (
    <div className="about-page">
      <div className="about-container">
        <div className="about-header">
          <h2>About Study Buddy</h2>
          <p>Your go-to platform for competitive and collaborative studying!</p>
        </div>

        <div className="feature-section">
          <h3>Key Features</h3>
          <ul>
            <li>Compete in real-time study challenges.</li>
            <li>Connect with study buddies based on shared interests.</li>
            <li>Track progress and earn points for completed tasks.</li>
            <li>Enjoy Pomodoro study sessions for focus.</li>
            <li>Join team competitions for collective goals.</li>
          </ul>
        </div>

        <div className="how-it-works-section">
          <h3>How It Works</h3>
          <p>
            1. Sign up and create your study profile.
            <br />
            2. Join or initiate study challenges.
            <br />
            3. Utilize the Pomodoro timer for focused sessions.
            <br />
            4. Earn points, climb the leaderboard.
            <br />
            5. Collaborate with study buddies for shared learning.
          </p>
        </div>

        <div className="contact-section">
          <h3>Contact Us</h3>
          <p>
            Have questions, suggestions, or feedback? Reach out to us at <a href="mailto:info@studybuddyapp.com">info@studybuddyapp.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
}


export default About;