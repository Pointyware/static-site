import styles from '@/app/page.module.css'

export function About() {
  return (
    <section className={styles.about}>
      <h2>About Pointyware</h2>
      <p>Pointyware is a software development company focused on creating innovative applications.</p>
      <p>We are committed to open-source development and community engagement.</p>
      <p>Our projects aim to enhance user experience and provide valuable tools for various purposes.</p>
      <p>We believe in the power of technology to make a positive impact on society.</p>
      <p>Join us on our journey to create meaningful software solutions!</p>
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
