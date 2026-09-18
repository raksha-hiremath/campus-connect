import './App.css'
import './style.css'

function App() {
  return (
    <div className="app">

      {/* =========================
          NAVIGATION BAR
          ========================= */}
      <header className="navbar">

        <div className="logo-group">
          <div className="brand-badge">
            RV
          </div>

          <div>
            <div className="university-name">
              RV University
            </div>

            <div className="sub-dept">
              Department of Computer Science
            </div>
          </div>
        </div>

        <nav className="nav-actions">
          <a href="#roles" className="btn-secondary">
            Login
          </a>

          <a href="#interactive" className="btn-primary">
            Register
          </a>
        </nav>

      </header>


      <main>

        {/* =========================
            HERO SECTION
            ========================= */}
        <section className="hero-banner">

          <span className="module-tag">
            CS3301 - FULL STACK DEVELOPMENT
          </span>

          <h1>
            CAMPUS CONNECT PORTAL
          </h1>

          <p className="subtitle">
            A centralized digital platform connecting students,
            faculty, and administrators across the university.
          </p>

          <div className="hero-cta-group">

            <a
              href="#roles"
              className="btn-hero-primary"
            >
              Explore Portal
            </a>

            <a
              href="#interactive"
              className="btn-hero-secondary"
            >
              Try Interactive Demo
            </a>

          </div>

        </section>


        {/* =========================
            HIGHLIGHTS SECTION
            ========================= */}
        <section className="section-container">

          <h2 className="section-title">
            Campus Highlights
          </h2>

          <p className="section-subtitle">
            Explore opportunities and activities available
            through Campus Connect.
          </p>

          <div className="highlight-grid">

            <article className="highlight-card">

              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80"
                alt="Students collaborating on campus"
              />

              <div className="card-content">

                <h3>
                  Student Community
                </h3>

                <p>
                  Connect with students, participate in
                  activities, and stay updated with campus events.
                </p>

              </div>

            </article>


            <article className="highlight-card">

              <img
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=900&q=80"
                alt="University campus building"
              />

              <div className="card-content">

                <h3>
                  Campus Resources
                </h3>

                <p>
                  Access important university resources,
                  announcements, and academic information.
                </p>

              </div>

            </article>


            <article className="highlight-card">

              <img
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80"
                alt="Students attending a collaborative workshop"
              />

              <div className="card-content">

                <h3>
                  Events & Activities
                </h3>

                <p>
                  Discover workshops, hackathons, sports,
                  clubs, and other campus activities.
                </p>

              </div>

            </article>

          </div>

        </section>


        {/* =========================
            ROLE SECTION
            ========================= */}
        <section
          id="roles"
          className="section-container bg-light"
        >

          <h2 className="section-title">
            Choose Your Portal
          </h2>

          <p className="section-subtitle">
            Access features designed specifically for your role.
          </p>


          <div className="roles-grid">

            {/* STUDENT */}
            <article className="role-card student-border">

              <div className="role-icon">
                S
              </div>

              <h3>
                Student Portal
              </h3>

              <p>
                Manage your academic activities and stay connected
                with the campus community.
              </p>

              <ul className="feature-bullets">

                <li>
                  View announcements
                </li>

                <li>
                  Register for events
                </li>

                <li>
                  Track academic activities
                </li>

                <li>
                  Connect with campus clubs
                </li>

              </ul>

              <button className="btn-portal student-bg">
                Student Login
              </button>

            </article>


            {/* FACULTY */}
            <article className="role-card faculty-border">

              <div className="role-icon">
                F
              </div>

              <h3>
                Faculty Portal
              </h3>

              <p>
                Manage classes, communicate with students,
                and organize academic activities.
              </p>

              <ul className="feature-bullets">

                <li>
                  Manage course information
                </li>

                <li>
                  Post announcements
                </li>

                <li>
                  Manage student activities
                </li>

                <li>
                  Organize academic events
                </li>

              </ul>

              <button className="btn-portal faculty-bg">
                Faculty Login
              </button>

            </article>


            {/* ADMIN */}
            <article className="role-card admin-border">

              <div className="role-icon">
                A
              </div>

              <h3>
                Admin Portal
              </h3>

              <p>
                Manage users, resources, announcements,
                and overall campus operations.
              </p>

              <ul className="feature-bullets">

                <li>
                  Manage users
                </li>

                <li>
                  Manage campus resources
                </li>

                <li>
                  Publish announcements
                </li>

                <li>
                  Monitor portal activity
                </li>

              </ul>

              <button className="btn-portal admin-bg">
                Admin Login
              </button>

            </article>

          </div>

        </section>


        {/* =========================
            INFORMATION SECTION
            ========================= */}
        <section className="info-section">

          <div className="section-container">

            <h2 className="section-title">
              One Platform. One Campus.
            </h2>

            <p className="section-subtitle">
              Campus Connect brings together students,
              faculty, and administrators through a single
              digital platform.
            </p>

          </div>

        </section>


        {/* =========================
            JAVASCRIPT INTERACTIVE SECTION
            EXPERIMENT 3
            ========================= */}
        <section
          id="interactive"
          className="interactive-section"
        >

          <div className="interactive-content">

            <span className="module-tag">
              JAVASCRIPT INTERACTION
            </span>

            <h2 className="section-title">
              Interactive Campus Updates
            </h2>

            <p className="section-subtitle">
              Use the controls below to interact with the page
              dynamically without reloading it.
            </p>


            {/* NAME INPUT */}
            <div className="input-group">

              <label htmlFor="studentName">
                Enter your name
              </label>

              <input
                type="text"
                id="studentName"
                placeholder="Type your name..."
              />

              <p id="nameOutput">
                Start typing to see your name here.
              </p>

            </div>


            {/* ACTIVITY INPUT */}
            <div className="activity-group">

              <label htmlFor="activityInput">
                Add a campus activity
              </label>

              <input
                type="text"
                id="activityInput"
                placeholder="Example: Coding Workshop"
              />

              <button
                id="addActivityBtn"
                className="interactive-button"
              >
                Add Activity
              </button>

            </div>


            {/* WELCOME BUTTON */}
            <button
              id="welcomeBtn"
              className="welcome-button"
            >
              Show Welcome Message
            </button>

            <p id="welcomeMessage"></p>


            {/* ACTIVITY LIST */}
            <div className="activity-list-container">

              <h3>
                Campus Activities
              </h3>

              <ul id="activityList">

                <li>

                  <span>
                    Hackathon
                  </span>

                  <button className="remove-btn">
                    Remove
                  </button>

                </li>


                <li>

                  <span>
                    Coding Workshop
                  </span>

                  <button className="remove-btn">
                    Remove
                  </button>

                </li>


                <li>

                  <span>
                    Sports Meet
                  </span>

                  <button className="remove-btn">
                    Remove
                  </button>

                </li>

              </ul>

            </div>

          </div>

        </section>

      </main>


      {/* =========================
          FOOTER
          ========================= */}
      <footer className="footer">

        <p>
          © 2026 RV University - Campus Connect Portal
        </p>

        <p>
          CS3301 Full Stack Development
        </p>

      </footer>

    </div>
  )
}

export default App
