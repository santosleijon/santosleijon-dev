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
          <h2>Hello, I&apos;m Santos!</h2>
          <Image
            alt="Santos Leijon portrait"
            src={santosLeijonPortrait}
          />
          <p>
            I&apos;m an experienced software developer with a passion for maintainable and scalable enterprise software.
          </p>
          <p>
            I have worked on a broad range of projects since becoming a professional in 2017, from maintaining old legacy systems to developing brand new web applications using the latest tech stacks.
          </p>
          <p>
            <strong>Feel free to contact me:</strong> <a href="https://www.linkedin.com/in/santos-leijon">linkedin.com/in/santos-leijon</a>
          </p>
        </section>

        <section>
          <h2>Professional experience</h2>
          <Experience timePeriod="2024-01 - " role="Software Developer" organization="Ida Infront AB">
            <ul>
              <li>
                <p>Maintained and developed a <em>Laboratory Information Management System</em> (LIMS) for a Swedish government authority as a part of an application modernization program.</p>
                <Chip>Java</Chip>
                <Chip>J2EE/Jakarta EE</Chip>
                <Chip>JBoss</Chip>
                <Chip>MySQL</Chip>
                <Chip>Apache Wicket</Chip>
                <Chip>JavaScript</Chip>
                <Chip>REST</Chip>
                <Chip>SOAP</Chip>
                <Chip>OpenAPI Specification</Chip>
                <Chip>IntelliJ</Chip>
                <Chip>Message brokers</Chip>
                <Chip>Workflow engines</Chip>
                <Chip>Case management</Chip>
              </li>
            </ul>
          </Experience>

          <Experience timePeriod="2021-03 - 2024-01" role="Software Developer" organization="Fortnox AB">
            <ul>
              <li>
                <p>Developed Fortnox Business Mailbox, a new product aimed at small businesses used to receive government mail, supplier invoices and other sensitive business documents.</p>
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
                <p>Maintained Fortnox Document Archive, a core legacy product used by more than 400 000 Fortnox customers to receive, process and archive business documents such as invoices and receipts.</p>
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
                <p>Lead the development of an integration service used to deliver invoices and direct debit payment files for more than 1 000 000 customers to banks and mail distributors across Europe.</p>
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
                <p>Designed and developed new microservices as part of Verisure&apos;s technical transformation from a monolith architecture to microservices hosted in Kubernetes.</p>
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
                <p>Migrated mutliple organization&apos;s ERP data from a multi-tenant on-premise Microsoft Dynamics NAV installation to a global Oracle Fusion Cloud Applications instance.</p>
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
                <p>Developed an email marketing tool for managing email campaigns, writing marketing emails and managing marketing segments.</p>
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
                <p>Created and managed affiliate marketing websites receiving over 1 000 000 visitors and generating over 94,000 leads for advertisers.</p>
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
          <Experience timePeriod="2023" role="Voidium Market">
            <>
              <p>
                An event sourced and event driven experimental marketplace application for the fictional natural resource &qout;voidium&qout;.
                Created for fun, not for actual use.
              </p>
              <p>
                <a href="https://github.com/santosleijon/voidium-market"><strong>github.com/santosleijon/voidium-market</strong></a>
              </p>
              <Chip>Java</Chip>
              <Chip>Spring Boot</Chip>
              <Chip>Apache Kafka</Chip>
              <Chip>PostgreSQL</Chip>
              <Chip>Thymeleaf</Chip>
              <Chip>Pure CSS</Chip>
              <Chip>REST</Chip>
              <Chip>Docker</Chip>
            </>
          </Experience>
          <Experience timePeriod="2022" role="Frugal Fennec Expense Manager">
            <>
              <p>
                An experimental single page web application for tracking expenses.
                It allows users to record expenses in a customizable accounts structure, view expense reports and login without a password using email verification.
                Created for fun, not for actual use.
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
