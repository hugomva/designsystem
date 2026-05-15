/* global React, PromoBar, Header, Btn, HeroCard, Footer */

function HomeScreen({ onNavigate }) {
  return (
    <div className="page-enter">
      {/* HERO */}
      <section className="hero">
        <div className="hero-circle-bg c1" />
        <div className="hero-circle-bg c2" />
        <div className="hero-grid">
          <div>
            <h1>
              Education, evolved<br />for <span className="hl-mint">modern life</span>
            </h1>
            <p className="lead">Welcome to MVA, the award-winning, DfE-accredited online school for 11–18 year olds, putting young people first, wherever they are.</p>
            <HeroCard />
            <div className="cta-row">
              <Btn variant="mint" withArrow onClick={() => onNavigate("about")}>Discover MVA</Btn>
              <Btn variant="outline-w" onClick={() => onNavigate("contact")}>Book a Discovery Call</Btn>
            </div>
            <div className="video-pill">
              <div className="play">▶</div>
              <div className="text">
                <div className="t">Play 'About MVA' Video</div>
                <div className="h">Get to know MVA in minutes</div>
              </div>
            </div>
          </div>
          <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
            <div className="hero-photo" aria-label="Two MVA students walking through a winter market" />
          </div>
        </div>
      </section>

      {/* FEATURE GRID */}
      <section className="section">
        <div className="eyebrow-row"><span className="eyebrow">School Life</span></div>
        <h2>A new vision for education in the 21st century.</h2>
        <p className="lead" style={{maxWidth: 640, color:'var(--fg-2)'}}>We combine the best of independent schooling with homeschooling, and deliver it all online, with a personal mentor at the heart of every student's day.</p>
        <div className="feature-grid">
          <article className="feature">
            <div className="num">01</div>
            <h3>Live group lessons</h3>
            <p>Taught in real time by teachers from the UK's top schools, on a full British curriculum timetable.</p>
          </article>
          <article className="feature">
            <div className="num">02</div>
            <h3>A personal mentor</h3>
            <p>Every student is matched with a mentor who knows them, supports them weekly, and stays with them year after year.</p>
          </article>
          <article className="feature">
            <div className="num">03</div>
            <h3>Wellbeing built in</h3>
            <p>A 45-minute weekly wellbeing session sits inside the timetable, health and happiness at the core of school life.</p>
          </article>
        </div>
      </section>

      {/* COLOURED BAND, pink */}
      <section className="band band-pink">
        <img className="a-mark" src="../../assets/logos/mva-a-mark-navy.png" alt="" />
        <div className="band-inner">
          <div className="eyebrow" style={{color:'var(--mva-navy)', opacity:.7}}>MVA Wellbeing Programme</div>
          <h2>Helping every student thrive in the face of any challenge.</h2>
          <p>Each week, students join a fun 45-minute session on Google Meet that fits perfectly into the MVA timetable, alongside Live Lessons and self-study. By focusing on wellbeing, we positively impact both personal growth and academic success.</p>
          <Btn variant="outline-n" onClick={() => onNavigate("about")}>Learn about wellbeing</Btn>
        </div>
      </section>

      {/* PRINCIPAL QUOTE, navy */}
      <section className="band band-navy">
        <img className="a-mark" src="../../assets/logos/mva-a-mark-white.png" alt="" />
        <div className="band-inner">
          <div className="principal">
            <div className="principal-photo" aria-label="Suzanne Lindley, MVA Principal" />
            <div>
              <div className="eyebrow" style={{color:'var(--mva-mint)'}}>Meet Suzanne · MVA Principal</div>
              <h2 style={{marginTop:14}}>"Traditional schooling isn't the perfect fit for every child."</h2>
              <p>We are a new vision for education in the 21st century, combining the best of independent schooling with homeschooling, and delivering it all online. We look forward to your family joining ours so that we can help your child thrive.</p>
              <Btn variant="mint" withArrow>Book a Discovery Call</Btn>
            </div>
          </div>
        </div>
      </section>

      {/* STATS, yellow */}
      <section className="band band-yellow">
        <img className="a-mark" src="../../assets/logos/mva-a-mark-navy.png" alt="" />
        <div className="band-inner">
          <div className="eyebrow" style={{opacity:.7}}>By the numbers</div>
          <h2>A school that works for ages 11 to 18.</h2>
          <div className="stats">
            <div className="stat"><div className="n">11–18</div><div className="l">Years welcomed</div></div>
            <div className="stat"><div className="n">1:1</div><div className="l">Personal mentor for every student</div></div>
            <div className="stat"><div className="n">45m</div><div className="l">Weekly wellbeing sessions</div></div>
            <div className="stat"><div className="n">DfE</div><div className="l">Accredited</div></div>
          </div>
        </div>
      </section>
    </div>
  );
}

function AboutScreen() {
  return (
    <div className="page-enter">
      <section className="band band-teal" style={{paddingTop:80, paddingBottom:120}}>
        <img className="a-mark" src="../../assets/logos/mva-a-mark-white.png" alt="" />
        <div className="band-inner">
          <div className="eyebrow" style={{color:'rgba(255,255,255,.85)'}}>About MVA</div>
          <h2>A beacon of hope for families looking for a fresh start.</h2>
          <p>At MVA, we offer a fully-supportive, student-centred, and future-looking school environment to help students thrive and achieve fantastic results. Students follow the British curriculum from the comfort and safety of their home, or wherever they are in the world.</p>
        </div>
      </section>
      <section className="section">
        <h2 style={{maxWidth:'20ch'}}>Founded on personal mentoring and community.</h2>
        <p className="lead" style={{maxWidth:640,color:'var(--fg-2)'}}>Students learn at their own pace through a mixture of live group lessons and online modules, all with the support and care of a personal mentor. They take their GCSE and A-level exams, join clubs, attend weekly school assemblies, make life-long friends and get fantastic results.</p>
      </section>
    </div>
  );
}

function ContactScreen({ onSubmitted }) {
  const [submitted, setSubmitted] = React.useState(false);
  return (
    <div className="page-enter">
      <section className="band band-blue" style={{paddingTop:80, paddingBottom:120}}>
        <img className="a-mark" src="../../assets/logos/mva-a-mark-white.png" alt="" />
        <div className="band-inner" style={{display:'grid', gridTemplateColumns:'1.1fr 1fr', gap:60, alignItems:'center'}}>
          <div>
            <div className="eyebrow" style={{color:'rgba(255,255,255,.85)'}}>Get in touch</div>
            <h2>Book a Discovery Call.</h2>
            <p>One of our admissions team will get back to you within one working day. We'll learn about your child, answer your questions, and walk you through how MVA works.</p>
          </div>
          <form
            onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
            style={{background:'#fff', padding:28, borderRadius:18, boxShadow:'var(--shadow-lg)', color:'var(--mva-navy)', display:'grid', gap:14}}
          >
            {submitted ? (
              <div style={{padding:'24px 4px'}}>
                <h3 style={{fontFamily:'var(--font-display)',fontSize:24,marginBottom:8}}>Thanks, we'll be in touch.</h3>
                <p style={{margin:0,fontSize:15,color:'var(--fg-2)'}}>One of our team will reach out within one working day.</p>
              </div>
            ) : (
              <>
                <div style={{display:'grid',gap:6}}>
                  <label style={{fontSize:11,fontWeight:600,letterSpacing:'.06em',textTransform:'uppercase',color:'var(--fg-2)'}}>Parent's name</label>
                  <input required style={inputStyle} defaultValue="" placeholder="Hannah Ostlere" />
                </div>
                <div style={{display:'grid',gap:6}}>
                  <label style={{fontSize:11,fontWeight:600,letterSpacing:'.06em',textTransform:'uppercase',color:'var(--fg-2)'}}>Email</label>
                  <input required type="email" style={inputStyle} placeholder="hannah@example.com" />
                </div>
                <div style={{display:'grid',gap:6}}>
                  <label style={{fontSize:11,fontWeight:600,letterSpacing:'.06em',textTransform:'uppercase',color:'var(--fg-2)'}}>Child's year group</label>
                  <select style={inputStyle}><option>Year 7</option><option>Year 8</option><option>Year 9</option><option>Year 10</option><option>Year 11</option><option>Year 12</option><option>Year 13</option></select>
                </div>
                <button type="submit" className="btn btn-mint" style={{height:48, justifyContent:'center', marginTop:6}}>Book my call <span className="ico-circle">→</span></button>
              </>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}

const inputStyle = {
  height: 46, padding: '0 14px', borderRadius: 12,
  border: '1.5px solid var(--line)', background: '#fff',
  fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--mva-navy)',
};

Object.assign(window, { HomeScreen, AboutScreen, ContactScreen });
