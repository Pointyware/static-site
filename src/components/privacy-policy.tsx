
import styles from './privacy-policy.module.css'

export interface PrivacyDatum {
  name: string
  collected?: boolean
  retained?: boolean
  transferred?: boolean
  shared?: boolean
}

export interface PolicyProps {
  projectName?: string
  lastUpdated?: string
  data: PrivacyDatum[]
}

export default function PrivacyPolicy(props: PolicyProps) {
  const theApp = props.projectName ? props.projectName : 'The App'
  const lastUpdated = props.lastUpdated ? <p>Last Updated: {props.lastUpdated}</p> : 'May 31, 2026'
  return (
    <article className={styles.container + ' ' + styles.policy}>
      <header>
        <h1>{ props.projectName ? props.projectName + ' ' : '' }Privacy Policy</h1>
        { lastUpdated }
      </header>

      <section>
        <h2>Introduction</h2>
        <p>Thank you for choosing to use our collective action app. This Privacy Policy explains our practices regarding the limited data collection associated with {theApp}. We are committed to privacy by design and collect minimal information.</p>
      </section>

      <section>
        <h2>Information We Collect</h2>
        <p>{theApp} is designed to collect as little information as possible. We do not collect, store, or process:</p>
        <ul>
          <li>Location data</li>
          <li>Usage statistics</li>
          <li>Payment information</li>
        </ul>

        <h3>Automatically Collected Information</h3>
        <p>The information collected is limited to:</p>
        <ol>
          <li><strong>Account and Social Information</strong>:
            <ul>
              <li>Account ID and Username</li>
              <li>Password</li>
              <li>Account IDs of connections</li>
              <li>Message content</li>
            </ul>
          </li>
          <li><strong>Crash Reports</strong>: Through Google's automatic crash reporting service, which may collect:
            <ul>
              <li>Basic device information (device type, OS version)</li>
              <li>Painted Dogs crash reports and Application Not Responding (ANR) logs</li>
              <li>Technical information necessary to diagnose app stability issues</li>
            </ul>
          </li>
        </ol>

        <p>The information collected by Google (both crash reports
            and advertising IDs) is shared with us only for the purposes of
            improving app stability, fixing bugs, and providing relevant advertising
            experiences. This data is pseudonymous and is not combined with other
            information that would allow us to personally identify you.</p>
      </section>

      <section>
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
      </section>

      <section>
        <h2>Third-Party Services</h2>
        <p>Google Play Services acts as a third-party service
            provider that collects limited technical data as described above. We do
            not share any information with additional third parties beyond what is
            necessary for the functioning of Google's advertising and analytics
            services.</p>
      </section>

      <section>
        <h2>Your Choices Regarding Crash Reporting</h2>
        <p>You can choose to disable Google's automatic crash
            reporting through your device settings by turning off "Backup &amp;
            reset" &gt; "Back up my data" in your Android settings, though this will
            affect all apps on your device, not just ours.</p>
      </section>
      
      <section>
        <h2>Children's Privacy</h2>
        <p>{theApp} is appropriate for all working people, including children
            16 years of age and older. Since we do not collect personal information 
            from any users,
            no special provisions are required for children's data.
            {theApp}
            complies with the Children's Online Privacy Protection Act (COPPA).</p>
      </section>
      <section>
        <h2>Data Security</h2>
        <p>Since {theApp} collects minimal data, there is very
            little risk to your privacy. The crash reports collected by Google are
            transmitted using secure protocols.</p>
      </section>
      <section>
        <h2>Changes to This Privacy Policy</h2>
        <p>We may update this Privacy Policy from time to time. The
            updated version will be indicated by an updated "Last Updated" date. Any
            changes will be reflected on this page.</p>
      </section>
      <section>
        <h2>Contact Us</h2>
        <p>If you have any questions about this Privacy Policy or our privacy practices, please contact us at:</p>
        <p>Pointyware LLC<br/>
            <a className='mail' href="mailto:privacy@pointyware.org">privacy@pointyware.org</a>
        </p>
      </section>
      <section>
        <h2>Consent</h2>
        <p>By using Painted Dogs, you consent to our Privacy Policy.
            Since Painted Dogs collects minimal information only, your
            continued use of Painted Dogs constitutes acceptance of this policy.</p>
      </section>
    </article>
  )
}
