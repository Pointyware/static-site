
export default function MealProgramPage() {

  return (
    <main>
      <div className="container">
          <div className="header">
              <h1>Oklahoma Meal Program</h1>
              <p>Last Updated: 2026-06-01</p>
          </div>

          <div className="section">
              <h2>Introduction</h2>
            <p>Thank you for your interest in the Oklahoma Meal Program! We are just getting started and will update this 
              site with additional information as it becomes available!</p>
          </div>

          <div className="section">
              <h2>Information We Collect</h2>
            
              <h3>Contact Information</h3>
              <p>The information collected is optional and limited to:</p>
              <ol>
                  <li>Phone Number to contact for delivery drop-off/pick-up.</li>
                  <li>Email to update or notify about events or changes.</li>
                  <li>Home Address for delivery drop-off/pick-up.</li>
              </ol>
          </div>

          <div className="section">
              <h2>How Information is Used</h2>
              <p>The limited account information collected is used solely to:</p>
              <ul>
                  <li>Allows users to log-in</li>
                  <li>Allow users to connect with each other</li>
                  <li>Allow users to communicate with each other</li>
              </ul>
              <p>The limited technical information collected is used solely to:</p>
              <ul>
                  <li>Identify and fix app bugs</li>
                  <li>Improve app stability and performance</li>
                  <li>Address technical issues</li>
              </ul>
          </div>

          <div className="section">
              <h2>Contact Us</h2>
              <p>If you have any questions about this Privacy Policy or our privacy practices, please contact us at:</p>
              <p>Pointyware LLC<br/>
                  <a href="mailto:support@pointyware.org">support@pointyware.org</a>
              </p></div>
      </div>
    </main>
  )
}
