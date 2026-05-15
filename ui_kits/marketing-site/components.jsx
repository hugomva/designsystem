/* global React */
const { useState } = React;

// ---- Atoms --------------------------------------------------------------
function PromoBar() {
  return (
    <div className="promo">
      Join us on 1st June. Last few places available!&nbsp;<a href="#">→</a>
    </div>
  );
}

function Header({ onNavigate, current }) {
  const items = [
    { k: "school-life", label: "School Life", caret: true },
    { k: "about", label: "About", caret: true },
    { k: "fees", label: "Fees" },
    { k: "events", label: "Open Events" },
  ];
  return (
    <header className="header">
      <div className="header-inner">
        <a className="header-logo" href="#" onClick={(e) => { e.preventDefault(); onNavigate("home"); }}>
          <img src="../../assets/logos/mva-logo-white.png" alt="MVA" />
          <div className="header-strap">Minerva Virtual Academy</div>
        </a>
        <nav className="nav">
          {items.map(i => (
            <a key={i.k} href="#" onClick={(e) => { e.preventDefault(); onNavigate(i.k); }}>
              {i.label}{i.caret && <span className="caret">▾</span>}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <button className="icon-btn" aria-label="WhatsApp">✆</button>
          <button className="btn btn-fill-w" style={{height:38, padding:'0 16px', fontSize:14}}>Get in touch</button>
          <button className="btn btn-mint" style={{height:38, padding:'0 16px', fontSize:14}} onClick={() => onNavigate("contact")}>Get Started</button>
        </div>
      </div>
    </header>
  );
}

function Btn({ variant = "mint", children, onClick, withArrow = false }) {
  return (
    <button className={`btn btn-${variant}`} onClick={onClick}>
      {children}
      {withArrow && <span className="ico-circle">↓</span>}
    </button>
  );
}

function HeroCard() {
  return (
    <div className="hero-card">
      <div className="avatar" />
      <div>
        <div className="label">Introducing: <b>MVA Start</b></div>
        <div className="body">Your child can begin sooner with MVA, a weekly programme designed to rebuild confidence and prepare them for their full timetable starting 1st June.</div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <img src="../../assets/logos/mva-logo-white.png" alt="MVA" style={{height:42}} />
          <p style={{marginTop: 16, color:'rgba(255,255,255,.7)', fontSize: 14, lineHeight: 1.55, maxWidth: 320}}>
            World-class, award-winning, virtual schooling for ages 11–18. Proudly accredited by the Department for Education.
          </p>
        </div>
        <div>
          <h4>School</h4>
          <ul>
            <li><a href="#">School Life</a></li>
            <li><a href="#">Curriculum</a></li>
            <li><a href="#">Mentoring</a></li>
            <li><a href="#">Wellbeing</a></li>
          </ul>
        </div>
        <div>
          <h4>Admissions</h4>
          <ul>
            <li><a href="#">Fees</a></li>
            <li><a href="#">Open Events</a></li>
            <li><a href="#">Discovery Call</a></li>
            <li><a href="#">Apply</a></li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li><a href="mailto:hello@mva.school">hello@mva.school</a></li>
            <li><a href="#">WhatsApp</a></li>
            <li><a href="#">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-meta">
        <div>© Minerva Virtual Academy 2026</div>
        <div>DfE-accredited · Registered in England</div>
      </div>
    </footer>
  );
}

Object.assign(window, { PromoBar, Header, Btn, HeroCard, Footer });
