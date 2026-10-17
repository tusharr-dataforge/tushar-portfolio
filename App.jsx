
import { useState } from "react";
import "./App.css";

const skills = [
  {
    name: "Excel",
    icon: "▦",
    status: "Building foundations",
    description: "Developing spreadsheet and data-analysis skills.",
    learned: ["Excel fundamentals"],
    practising: ["Working with data and formulas"],
    next: "Practise lookup functions, PivotTables, charts and data cleaning."
  },
  {
    name: "SQL",
    icon: "⌘",
    status: "Studied concepts · Practising queries",
    description: "Learning SQL for data analysis and database development.",
    learned: [
      "SQL, databases, DBMS and RDBMS",
      "Tables, rows, columns, schemas and data types",
      "NULL values and SQL comments",
      "DDL: CREATE, ALTER, DROP, TRUNCATE, RENAME",
      "DML: INSERT, UPDATE, DELETE",
      "DQL: SELECT",
      "DCL: GRANT, REVOKE",
      "TCL: COMMIT, ROLLBACK, SAVEPOINT, START TRANSACTION",
      "SELECT, DISTINCT, WHERE, ORDER BY and aliases",
      "AND, OR, NOT and comparison operators",
      "BETWEEN, IN, NOT IN, LIKE and wildcards",
      "IS NULL and IS NOT NULL",
      "Arithmetic, comparison and logical operators",
      "CASE WHEN and concatenation",
      "COUNT, SUM, AVG, MIN and MAX",
      "GROUP BY, HAVING and WHERE vs HAVING",
      "String, date, time and numeric function concepts",
      "JOIN types and joining multiple tables",
      "UNION, UNION ALL, INTERSECT and EXCEPT / MINUS",
      "Primary keys, foreign keys and constraints",
      "Subqueries, EXISTS, ANY and ALL",
      "Database relationships, ER diagrams and normalization",
      "Views, indexes, procedures, functions and triggers",
      "ACID properties and transaction concepts",
      "Query execution order and basic performance concepts",
      "Creating tables, inserting records and handling NULLs or duplicates"
    ],
    practising: [
      "Writing basic SQL queries",
      "Practising JOINs",
      "Practising aggregation and GROUP BY",
      "Solving data-analysis questions"
    ],
    next: "Practise CTEs, window functions, correlated subqueries, execution plans and business questions using datasets."
  },
  {
    name: "Python",
    icon: "⌘",
    status: "Next to learn",
    description: "A future tool for data analysis and machine learning.",
    learned: [],
    practising: [],
    next: "Start with variables, data types, conditions, loops and functions."
  },
  {
    name: "Power BI",
    icon: "◧",
    status: "Next to learn",
    description: "Interested in building interactive data reports.",
    learned: [],
    practising: [],
    next: "Learn data import, cleaning, visualizations and dashboard design."
  },
  {
    name: "Statistics",
    icon: "∑",
    status: "Building foundations",
    description: "Learning the ideas that help explain data.",
    learned: ["Statistics fundamentals"],
    practising: ["Connecting concepts to data questions"],
    next: "Practise descriptive statistics, probability and interpreting distributions."
  },
  {
    name: "Machine Learning",
    icon: "✳",
    status: "Future goal",
    description: "An area I aim to explore as my data-science foundation grows.",
    learned: [],
    practising: [],
    next: "Build foundations in Python, statistics and data preparation."
  }
];

function App() {
  const [activeSkill, setActiveSkill] = useState(null);
  const selectedSkill =
    activeSkill === null ? null : skills[activeSkill];

  return (
    <div className="portfolio" id="home">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="site-header">
        <a className="brand" href="#home" aria-label="Tushar Bhoj home">
          T<span>B</span><i>.</i>
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#certifications">Certificates</a>
        </nav>

        <a className="nav-cta" href="#contact">
          Let's connect <span>↗</span>
        </a>
      </header>

      <main>
        {/* HERO */}
        <section className="hero section-wrap">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="status-dot" />
              IT ENGINEERING STUDENT
              <span className="eyebrow-line" />
            </div>

            <h1>
              Tushar <span className="gradient-text">Bhoj.</span>
            </h1>

            <h2>Aspiring Data Scientist</h2>

            <p className="hero-description">
              Turning data into insights, one query at a time.
              Exploring analytics, databases and AI — one practical
              step at a time.
            </p>

            <div className="hero-actions">
              <a className="button-primary" href="#skills">
                Explore my journey <span>↘</span>
              </a>
              <a className="button-secondary" href="#certifications">
                View certification <span>↗</span>
              </a>
            </div>

            <div className="hero-footnote">
              <span className="status-dot" />
              LEARNING <b>·</b> BUILDING <b>·</b> GROWING
            </div>

            <div className="hero-stats">
              <div>
                <strong>01</strong>
                <span>Learning journey</span>
              </div>
              <div>
                <strong>SQL</strong>
                <span>Current focus</span>
              </div>
              <div>
                <strong>AI</strong>
                <span>Future direction</span>
              </div>
            </div>
          </div>

          <div
            className="hero-visual"
            aria-label="Abstract data science visualization"
          >
            <div className="visual-grid" />
            <div className="visual-orbit orbit-outer">
              <i /><i /><i />
            </div>
            <div className="visual-orbit orbit-inner">
              <i /><i />
            </div>
            <div className="visual-orbit orbit-flat" />

            
<div className="visual-core portrait-core">
  <img
    src="/tushar.jpeg"
    alt="Tushar Bhoj"
    className="hero-portrait"
  />
  <span className="core-caption">
    DATA <b>/</b> INSIGHTS
  </span>
</div>


            <div className="float-card float-card-top">
              <span className="float-icon cyan">⌘</span>
              <div>
                <strong>SQL</strong>
                <small>Querying data</small>
              </div>
            </div>

            <div className="float-card float-card-right">
              <span className="float-icon purple">▥</span>
              <div>
                <strong>ANALYTICS</strong>
                <small>Finding patterns</small>
              </div>
            </div>

            <div className="float-card float-card-bottom">
              <span className="float-icon cyan">✳</span>
              <div>
                <strong>AI / ML</strong>
                <small>Future learning</small>
              </div>
            </div>

            <span className="visual-tag tag-one">01 / EXPLORE</span>
            <span className="visual-tag tag-two">
              DATA • LOGIC • DISCOVERY
            </span>
          </div>

          <a className="hero-scroll" href="#about">
            <span /> SCROLL TO EXPLORE
          </a>
        </section>

        {/* ABOUT */}
        <section className="about section-wrap section-block" id="about">
          <div className="section-heading">
            <span className="section-index">01 — ABOUT ME</span>
            <h2>
              Curious mind.
              <br />
              <span className="gradient-text">Data-focused future.</span>
            </h2>
          </div>

          <div className="about-content">
            <div className="about-lead">
              <span className="quote-mark">“</span>
              <p>
                I’m building the skills to turn raw data into meaningful
                decisions.
              </p>
              <div className="about-tags">
                <span>Data Science</span>
                <span>Analytics</span>
                <span>Artificial Intelligence</span>
                <span>Stock Market</span>
                <span>Crypto</span>
                <span>Forex Trading</span>
              </div>
            </div>

            <div className="about-detail">
              <p>
                I'm Tushar Bhoj, a third-year Information Technology
                engineering student at Jawahar Institute of Technology, Nashik,
                aspiring to build a future in Data Science, Analytics and AI.
                I'm developing my foundations in Excel, SQL and statistics
                while working towards practical, data-driven projects.
              </p>
              <p>
                Beyond technology, I'm also a professional trader interested
                in stock markets, cryptocurrency and forex. I enjoy studying
                charts, price movements and market behaviour, and continuously
                sharpening my analytical and decision-making skills.
              </p>
              <p>
                This portfolio reflects my journey: learning with intent,
                practising consistently and turning curiosity into useful work.
                I'm focused on growing my technical skills and sharing real
                projects as I build experience.
              </p>

              <div className="about-callout">
                <span className="callout-mark">↗</span>
                <div>
                  <strong>My approach</strong>
                  <p>
                    Learn the concept. Practise the skill. Build something
                    useful.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section
          className="skills-section section-wrap section-block"
          id="skills"
        >
          <div className="section-heading heading-row">
            <div>
              <span className="section-index">02 — SKILLS & LEARNING</span>
              <h2>
                Building my <span className="gradient-text">toolkit.</span>
              </h2>
            </div>
            <p>
              Select any skill to explore studied topics, current practice
              and next steps.
            </p>
          </div>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <button
                className={`skill-card ${
                  activeSkill === index ? "selected" : ""
                }`}
                key={skill.name}
                onClick={() =>
                  setActiveSkill(activeSkill === index ? null : index)
                }
                aria-expanded={activeSkill === index}
              >
                <div className="skill-card-top">
                  <span className="skill-icon">{skill.icon}</span>
                  <span className="card-arrow">↗</span>
                </div>
                <h3>{skill.name}</h3>
                <p>{skill.description}</p>
                <div className="skill-card-bottom">
                  <span className="status-dot" />
                  {skill.status}
                </div>
              </button>
            ))}
          </div>

          {selectedSkill && (
            <div className="skill-detail-panel">
              <div className="detail-panel-heading">
                <div>
                  <span className="section-index">
                    LEARNING NOTES / 0{activeSkill + 1}
                  </span>
                  <h3>{selectedSkill.name}</h3>
                  <p>{selectedSkill.description}</p>
                </div>
                <button
                  className="close-detail"
                  onClick={() => setActiveSkill(null)}
                  aria-label="Close skill details"
                >
                  ×
                </button>
              </div>

              <div className="detail-columns">
                {selectedSkill.learned.length > 0 && (
                  <div>
                    <span className="detail-label">Studied topics</span>
                    <ul className="topic-list">
                      {selectedSkill.learned.map((topic) => (
                        <li key={topic}>{topic}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedSkill.practising.length > 0 && (
                  <div>
                    <span className="detail-label">
                      Currently practising
                    </span>
                    <ul className="topic-list">
                      {selectedSkill.practising.map((topic) => (
                        <li key={topic}>{topic}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div>
                  <span className="detail-label">Next to learn</span>
                  <p>{selectedSkill.next}</p>
                </div>
              </div>

              {selectedSkill.name === "SQL" && (
                <div className="sql-certificate-card">
                  <div className="certificate-icon">✦</div>
                  <div className="certificate-copy">
                    <span className="detail-label">
                      HACKERRANK CERTIFICATION
                    </span>
                    <h4>SQL (Intermediate)</h4>
                    <p>Certificate details for Tushar Bhoj.</p>
                    <a
                      className="button-primary"
                      href="https://www.hackerrank.com/certificates/109b920aa7c9"
                      target="_blank"
                      rel="noreferrer"
                    >
                      View certificate ↗
                    </a>
                    <a
                      className="profile-link"
                      href="https://www.hackerrank.com/profile/noirtush_exe"
                      target="_blank"
                      rel="noreferrer"
                    >
                      View HackerRank profile ↗ · 4 stars · Silver level
                    </a>
                  </div>
                </div>
              )}

              <p className="honesty-note">
                Studied concepts and practical ability are different.
                The practising section reflects my current hands-on level.
              </p>
            </div>
          )}
        </section>

        {/* PROJECTS */}
        <section
          className="projects section-wrap section-block"
          id="projects"
        >
          <div className="section-heading heading-row">
            <div>
              <span className="section-index">03 — PROJECTS</span>
              <h2>
                From learning to <span className="gradient-text">building.</span>
              </h2>
            </div>
            <p>A space for practical work as it takes shape.</p>
          </div>

          <div className="project-showcase">
            <div className="project-graphic">
              <div className="project-graphic-grid" />
              <div className="mock-dashboard">
                <div className="mock-top">
                  <span /><span /><span />
                </div>
                <div className="mock-chart">
                  <i /><i /><i /><i /><i /><i /><i />
                </div>
                <div className="mock-lines">
                  <span /><span /><span />
                </div>
              </div>
              <span className="project-orbit" />
            </div>

            <div className="project-copy">
              <span className="project-state">
                <span className="status-dot" /> IN THE WORKS
              </span>
              <h3>My first data project is on the horizon.</h3>
              <p>
                I’m strengthening my foundations before publishing projects.
                This space will feature real datasets, the questions I
                investigate, my process, and what I learn from the results.
              </p>
              <div className="project-next">
                <span>UP NEXT</span>
                <strong>
                  Explore a dataset · Ask a question · Share the findings
                </strong>
              </div>
              <div className="project-tags">
                <span>SQL</span>
                <span>Data analysis</span>
                <span>Learning in public</span>
              </div>
            </div>
          </div>
        </section>

        {/* EDUCATION */}
        <section
          className="education section-wrap section-block"
          id="education"
        >
          <div className="section-heading">
            <span className="section-index">04 — EDUCATION</span>
            <h2>
              Learning with <span className="gradient-text">purpose.</span>
            </h2>
          </div>

          <div className="education-card">
            <div className="education-icon">⌘</div>
            <div className="education-copy">
              <span className="education-label">CURRENT STATUS · THIRD YEAR</span>
              <h3>Jawahar Institute of Technology, Nashik</h3>
              <p>
                B.E. in Information Technology · Currently in 3rd year ·
                Expected graduation: 2028.
              </p>
            </div>
            <span className="education-status">2028</span>
          </div>

          <p className="education-note">
            More academic details can be added when you’re ready to share them.
          </p>
        </section>

        {/* CERTIFICATIONS */}
        <section
          className="certifications section-wrap section-block"
          id="certifications"
        >
          <div className="section-heading heading-row">
            <div>
              <span className="section-index">05 — CERTIFICATION</span>
              <h2>
                Proof of <span className="gradient-text">progress.</span>
              </h2>
            </div>
            <p>A milestone in my SQL learning journey.</p>
          </div>

          <div className="cert-card">
            <div className="cert-emblem">
              <span>SQL</span>
              <i>✦</i>
            </div>

            <div className="cert-main">
              <span className="detail-label">
                HACKERRANK · SKILL CERTIFICATION
              </span>
              <h3>SQL (Intermediate)</h3>
              <p>
                A milestone that reflects progress in SQL concepts and
                problem-solving.
              </p>
              <div className="cert-actions">
                <a
                  className="button-primary"
                  href="https://www.hackerrank.com/certificates/109b920aa7c9"
                  target="_blank"
                  rel="noreferrer"
                >
                  View certificate ↗
                </a>
                <a
                  className="button-secondary"
                  href="https://www.hackerrank.com/profile/noirtush_exe"
                  target="_blank"
                  rel="noreferrer"
                >
                  HackerRank profile ↗
                </a>
              </div>
            </div>

            <div className="cert-stamp">
              SKILL
              <br />
              MILESTONE
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section
          className="contact section-wrap section-block"
          id="contact"
        >
          <div className="contact-panel">
            <div className="contact-orb">↗</div>
            <span className="section-index">06 — LET'S CONNECT</span>
            <h2>
              Good things start
              <br />
              with a <span className="gradient-text">conversation.</span>
            </h2>
            <p>
              Interested in data, analytics or learning together? I'd be
              happy to connect.
            </p>

            <div className="contact-socials">
              {/* 1. EMAIL */}
              <a
                className="contact-social"
                href="mailto:noirtush.exe@gmail.com"
              >
                <span className="social-icon">✉</span>
                <span className="social-label">
                  <strong>Email</strong>
                  <small>Let's talk</small>
                </span>
                <span className="social-arrow">↗</span>
              </a>

              {/* 2. GITHUB — COMING SOON */}
              <div className="contact-social coming-soon" aria-disabled="true">
                <span className="social-icon">⌘</span>
                <span className="social-label">
                  <strong>GitHub</strong>
                  <small>Coming soon</small>
                </span>
                <span className="social-arrow">⌁</span>
              </div>

              {/* 3. LINKEDIN — COMING SOON */}
              <div className="contact-social coming-soon" aria-disabled="true">
                <span className="social-icon">in</span>
                <span className="social-label">
                  <strong>LinkedIn</strong>
                  <small>Coming soon</small>
                </span>
                <span className="social-arrow">⌁</span>
              </div>

              {/* 4. HACKERRANK */}
              <a
                className="contact-social"
                href="https://www.hackerrank.com/profile/noirtush_exe"
                target="_blank"
                rel="noreferrer"
              >
                <span className="social-icon">⌘</span>
                <span className="social-label">
                  <strong>HackerRank</strong>
                  <small>Coding profile</small>
                </span>
                <span className="social-arrow">↗</span>
              </a>

              {/* 5. WHATSAPP */}
              <a
                className="contact-social"
                href="https://wa.me/qr/T2BPR3HLNRIBI1"
                target="_blank"
                rel="noreferrer"
              >
                <span className="social-icon">☏</span>
                <span className="social-label">
                  <strong>WhatsApp</strong>
                  <small>Message me</small>
                </span>
                <span className="social-arrow">↗</span>
              </a>

              {/* 6. INSTAGRAM */}
              <a
                className="contact-social"
                href="https://www.instagram.com/_tusharr94/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="social-icon">◎</span>
                <span className="social-label">
                  <strong>Instagram</strong>
                  <small>Follow me</small>
                </span>
                <span className="social-arrow">↗</span>
              </a>
            </div>

            <span className="contact-footnote">
              OPEN TO LEARNING · GROWING · COLLABORATING
            </span>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#home">
          T<span>B</span><i>.</i>
        </a>
        <span>© {new Date().getFullYear()} Tushar Bhoj</span>
        <span>Built with curiosity and a data-driven mindset.</span>
        <a className="back-top" href="#home">BACK TO TOP ↑</a>
      </footer>
    </div>
  );
}

export default App;
