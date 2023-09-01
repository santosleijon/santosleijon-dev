import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Experience from './Experience'
import santosLeijonPortrait from '../public/santos-leijon.jpg'
import Chip from './Chip'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Santos Leijon - Software developer of business systems</title>
        <meta name="description" content="Santos Leijon - Software developer of business systems" />
        <link rel="icon" href="/favicon.ico" /> 
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="./">santosleijon.dev</a>
        </h1>

        <section className={styles.presentation}>
          <h2>Hello! I&apos;m Santos - a software developer of business systems</h2>
          <Image
            alt="Santos Leijon portrait"
            src={santosLeijonPortrait}
          />
          I am an experienced software developer with a special interest in finance and business systems.
          Over the last few years I have worked with both small and large applications, including systems built 25 years ago and brand new applications using the latest web technologies.
          I have also been a part of technical transformations moving from old to new technology, including breaking up large legacy monolith applications into independent microservices.
          <p>
            <strong>Feel free to contact me:</strong> <a href="https://www.linkedin.com/in/santos-leijon">linkedin.com/in/santos-leijon</a>
          </p>
        </section>

        <section>
          <h2>Professional experience</h2>
          <Experience timePeriod="2021-03 - " role="Software Developer" organization="Fortnox AB">
            <ul>
              <li>
                <p>Developed Fortnox Företagsbrevlåda - a new greenfield project to develop a secure digital mailbox for small businesses used to receive goverment mail, supplier invoices and other business documents.</p>
                <Chip>Kotlin</Chip>
                <Chip>Java</Chip>
                <Chip>REST</Chip>
                <Chip>SOAP</Chip>
                <Chip>Apache Kafka</Chip>
                <Chip>PostgreSQL</Chip>
                <Chip>TypeScript</Chip>
                <Chip>React</Chip>
                <Chip>Redux</Chip>
                <Chip>HTML</Chip>
                <Chip>Docker</Chip>
                <Chip>Kubernetes</Chip>
                <Chip>Cucumber</Chip>
                <Chip>Selenium</Chip>
                <Chip>IntelliJ</Chip>
              </li>
              <li>
                <p>Maintained Fortnox Arkivplats - a core legacy product used by more than 400 000 Fortnox customers to receive, process and archive business documents such as invoices and receipts.</p>
                <Chip>PHP</Chip>
                <Chip>PostgreSQL</Chip>
                <Chip>JavaScript</Chip>
                <Chip>Backbone.js</Chip>
                <Chip>Twig</Chip>
                <Chip>HTML</Chip>
                <Chip>Docker</Chip>
                <Chip>Kubernetes</Chip>
                <Chip>IntelliJ</Chip>
              </li>
            </ul>
          </Experience>
          <Experience timePeriod="2018-02 - 2021-03" role="Backend Developer" organization="Verisure Innovation AB">
            <ul>
              <li>
                <p>Lead the maintenance and development of an integration service and associated web application used to deliver invoices and direct debit payment files for more than 1 000 000 customers to banks and distributors across Europe.</p>
                <Chip>Java</Chip>
                <Chip>Spring</Chip>
                <Chip>JBoss / Wildfly</Chip>
                <Chip>SOAP</Chip>
                <Chip>T-SQL</Chip>
                <Chip>SAP Sybase ASE</Chip>
                <Chip>JSP</Chip>
                <Chip>HTML</Chip>
                <Chip>JavaScript</Chip>
                <Chip>jQuery</Chip>
                <Chip>IntelliJ</Chip>
              </li>
              <li>
                <p>Maintained a critical legacy monolith business system used to manage alarms, customer data and billing for over 1 000 000 customer in northern and central Europe.</p>
                <Chip>T-SQL</Chip>
                <Chip>SAP Sybase ASE</Chip>
                <Chip>Delphi / Object Pascal</Chip>
                <Chip>Bash</Chip>
                <Chip>Visual Studio Code</Chip>
              </li>
              <li>
                <p>Designed and developed new microservices as part of Verisure&apos;s digital transformation from a monolith architecture to microservices hosted in Kubernetes.</p>
                <Chip>Java</Chip>
                <Chip>Spring Boot</Chip>
                <Chip>REST</Chip>
                <Chip>Apache Cassandra</Chip>
                <Chip>API Gateway</Chip>
                <Chip>Docker</Chip>
                <Chip>Ansible</Chip>
                <Chip>Kubernetes</Chip>
                <Chip>IntelliJ</Chip>
              </li>
              <li>
                <p>Migrated mutliple organization&apos;s ERP data from a muli-tenant on-premise Microsoft Dynamics NAV installation to a global Oracle Fusion Cloud Applications instance.</p>
                <Chip>MS SQL Server</Chip>
                <Chip>SQL Server Management Studio</Chip>
                <Chip>PowerShell</Chip>
                <Chip>Visual Studio Code</Chip>
              </li>
            </ul>
          </Experience>
          <Experience timePeriod="2017-03 - 2018-01" role="Software Developer" organization="UCS IT Solutions AB">
            <ul>
              <li>
                <p>Developed integrations, migrations and custom extensions for ERP systems like Visma Business, Visma Administration and Fortnox.</p>
                <Chip>C#</Chip>
                <Chip>Windows Forms</Chip>
                <Chip>Entity Framework</Chip>
                <Chip>MS SQL Server</Chip>
                <Chip>Visual Studio</Chip>
              </li>
              <li>
                <p>Developed an email marketing tool used to manage prospects, creating email campaigns, writing emails in an WYSIWYG editior and collecting responses from prospects.</p>
                <Chip>PHP</Chip>
                <Chip>Laravel</Chip>
                <Chip>REST</Chip>
                <Chip>MySQL</Chip>
                <Chip>Bootstrap</Chip>
                <Chip>jQuery</Chip>
                <Chip>Visual Studio Code</Chip>
              </li>
            </ul>
          </Experience>
          <Experience timePeriod="2013-02 - 2016-07" role="Founder & Web Developer (part time)" organization="SNTS Media">
            <ul>
              <li>
                <p>Created and managed affiliate marketing websites recieving over 1 000 000 visitors and generating over 94,000 leads for advertisers.</p>
                <Chip>Wordpress</Chip>
                <Chip>PHP</Chip>
                <Chip>MySQL</Chip>
              </li>
              <li>
                <p>Developed multiple Wordpress plugins for dynamic ad placement, user tracking and for generating infographs.</p>
                <Chip>PHP</Chip>
                <Chip>SQL</Chip>
                <Chip>MySQL</Chip>
                <Chip>HTML</Chip>
                <Chip>JavaScript</Chip>
              </li>
            </ul>
          </Experience>
        </section>

        <section>
          <h2>Personal projects</h2>
          <Experience timePeriod="2022" role="Frugal Fennec Expense Manager">
            <>
              <p>
                A single page web application for tracking expenses. 
                It allows users to record expenses in a customizable accounts structure, view expense reports and login without a password using email verification.
              </p>
              <p>
                <a href="https://github.com/santosleijon/frugal-fennec-expense-manager"><strong>github.com/santosleijon/frugal-fennec-expense-manager</strong></a>
              </p>
              <Chip>Kotlin</Chip>
              <Chip>Spring Boot</Chip>
              <Chip>PostgreSQL</Chip>
              <Chip>React</Chip>
              <Chip>Redux</Chip>
              <Chip>JUnit</Chip>
              <Chip>Cucumber</Chip>
              <Chip>Selenium</Chip>
              <Chip>Docker</Chip>
              <Chip>AWS</Chip>
            </>
          </Experience>
        </section>

        <section>
          <h2>Education</h2>
          <Experience timePeriod="2017" role="Bachelor of Science in Economics" organization="Linköping University" />
          <Experience timePeriod="2017" role="Bachelor of Political Science in Economics" organization="Linköping University" />
          <Experience timePeriod="2014" role="Bachelor of Science in Engineering (swe: Högskoleingenjör i datateknik)" organization="KTH Royal Institute of Technology" />
        </section>
      </main>
    </div>
  )
}
