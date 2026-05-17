import styles from '@/app/page.module.css'

export function About() {
  return (
    <section className={styles.about}>
      <h2>About Pointyware</h2>
      <div>
        <p>Pointyware is a software development company focused on creating 
          innovative applications, using the power of technology to make a 
          positive impact on society.</p>
        <p>Our projects aim to enhance user experience and provide valuable tools for various purposes.</p>
      </div>
      <div>
        <p>We are committed to open-source development and community engagement.</p>
        <h3>Open Source Commitments</h3>
        <ul>
          <li>
            <p>All Software is Open Source, which we believe</p>
            <ul>
              <li>
                <p>can enhance security, stability, and overall quality by increasing 
              the scrutiny software is under</p>
              </li>
              <li>
                <p>improves user trust/confidence, because they know nothing is hidden</p>
              </li>
            </ul>
          </li>
        </ul>
        <h3>Community Commitments</h3>
        <ul>
          <li>
            <p>Software should ultimately serve the end-users as the primary stakeholders</p>
          </li>
          <li>
            <p>Operators of platforms are also stakeholders, with many features designed for their use in moderating that platform; 
              however, investors or financially motivated individuals have no place as stakeholders; all investments must be non-profit
              with no expectation of any kind of direct return (compensation, favor, etc.) to the investor, individual or organization.
            </p>
          </li>
        </ul>
      </div>
      <h3>Mailing List</h3>
      <p>If you would like to receive updates about different events, you can join the mailing list.</p>
      {/* TODO: Add Mailing List Sign-Up Form */}
    </section>
  )
}

export function Contact() {
  return (
    <section className={styles.contact}>
      <h2>Contact Us</h2>
      <p>If you have any questions or inquiries, feel free to reach out to us:</p>
      <p>Email: <a href="mailto:support@pointyware.org">support@pointyware.org</a></p>
      <p>Phone: <a href="tel:14059199221">+1 (405) 919-9221</a></p>
    </section>
  )
}

export function Copyright() {
  return (
    <p className={styles.copyright}>&copy; 2024-2025 Pointyware</p>
  )
}
