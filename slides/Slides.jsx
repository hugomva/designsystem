/* global React, ReactDOM */

const Logo = ({ white }) => (
  <img className="logo" src={`../assets/logos/mva-logo-${white ? 'white' : 'navy'}.png`} alt="MVA" />
);
const Watermark = ({ white, lightBg }) => (
  <img
    className="va-overlay"
    src="../assets/logos/va-overlay.png"
    alt=""
    style={lightBg ? { filter: 'invert(1)', opacity: 0.35, mixBlendMode: 'multiply' } : { opacity: 1 }}
  />
);

/* 01, Cover, big mint headline on navy */
function CoverSlide() {
  return (
    <div className="slide og cover">
      <Watermark white />
      <div className="slide-inner">
        <div className="badge">MVA · GESS Talk</div>
        <h1 className="title" style={{color:'#fff', fontSize:156}}>Education,<br/>evolved for<br/><span className="hl hl-mint">modern life</span></h1>
      </div>
      <Logo white />
      <div className="corner-num" style={{color:'#fff'}}>01 / 09</div>
    </div>
  );
}

/* 02, Opener: huge serif on pink */
function TalkAboutSlide() {
  return (
    <div className="slide pink">
      <Watermark lightBg />
      <div className="slide-inner" style={{justifyContent:'center'}}>
        <h1 className="title">Today I want to talk to you about</h1>
      </div>
      <Logo />
      <div className="corner-num">02 / 09</div>
    </div>
  );
}

/* 03, Provocative question on yellow */
function FutureOfSchoolSlide() {
  return (
    <div className="slide yellow">
      <Watermark lightBg />
      <div className="slide-inner" style={{justifyContent:'center'}}>
        <h1 className="title">Is this the <span className="hl hl-mint">future</span><br/>of school?</h1>
      </div>
      <Logo />
      <div className="corner-num">03 / 09</div>
    </div>
  );
}

/* 04, Full-bleed photo of two students with MVA logo bottom-left */
function PhotoFullBleedSlide() {
  return (
    <div className="slide" style={{padding:0}}>
      <img
        src="../assets/imagery/students-laptop-mva-watermark.jpg"
        alt=""
        style={{position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover', zIndex:1}}
      />
      <div className="corner-num" style={{color:'#fff', textShadow:'0 1px 4px rgba(0,0,0,.4)'}}>04 / 09</div>
    </div>
  );
}

/* 05, "It's not the curriculum" on teal */
function NotCurriculumSlide() {
  return (
    <div className="slide teal">
      <Watermark white />
      <div className="slide-inner" style={{justifyContent:'center'}}>
        <h1 className="title" style={{color:'#fff'}}>It's not the<br/>curriculum</h1>
        <p className="lead" style={{color:'rgba(255,255,255,.92)', marginTop: 32, maxWidth:'30ch'}}>It's the location, the environment, the style, and the time.</p>
      </div>
      <Logo white />
      <div className="corner-num" style={{color:'#fff'}}>05 / 09</div>
    </div>
  );
}

/* 06, Four barriers, list of four headers on navy */
function FourBarriersSlide() {
  const barriers = ['Location', 'Environment', 'Style', 'Time'];
  return (
    <div className="slide navy">
      <Watermark white />
      <div className="slide-inner">
        <div className="eyebrow" style={{color:'var(--mva-mint)'}}>Four barriers to happiness</div>
        <h2 className="title" style={{color:'#fff', fontSize:130, marginBottom:60}}>The things that<br/>get in the way</h2>
        <div style={{display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:36}}>
          {barriers.map((b, i) => (
            <div key={b} style={{
              borderTop:'2px solid rgba(255,255,255,.25)',
              paddingTop:28
            }}>
              <div style={{fontFamily:'var(--font-mono)', fontSize:18, opacity:.65, color:'#fff', letterSpacing:'.08em'}}>0{i+1}</div>
              <div style={{fontFamily:'var(--font-display)', fontSize:64, fontWeight:700, color:'#fff', lineHeight:1.05, marginTop:12, letterSpacing:'-.015em'}}>{b}</div>
            </div>
          ))}
        </div>
      </div>
      <Logo white />
      <div className="corner-num" style={{color:'#fff'}}>06 / 09</div>
    </div>
  );
}

/* 07, Happiness = Results, big stats on mint */
function HappinessResultsSlide() {
  return (
    <div className="slide mint">
      <Watermark lightBg />
      <div className="slide-inner">
        <div className="eyebrow" style={{opacity:.7}}>The proof</div>
        <h2 className="title" style={{fontSize:120, marginBottom:48}}>Happiness <span style={{opacity:.4}}>=</span> Results</h2>
        <div style={{display:'grid', gridTemplateColumns:'repeat(2,1fr)', gap:'48px 80px'}}>
          <div>
            <div style={{fontFamily:'var(--font-display)', fontSize:160, fontWeight:700, lineHeight:1, letterSpacing:'-.025em', color:'var(--mva-navy)'}}>96%</div>
            <div style={{fontSize:22, lineHeight:1.4, color:'var(--mva-navy)', marginTop:14, maxWidth:'30ch'}}>attendance, vs 38% national persistent absence for SEN students.</div>
          </div>
          <div>
            <div style={{fontFamily:'var(--font-display)', fontSize:160, fontWeight:700, lineHeight:1, letterSpacing:'-.025em', color:'var(--mva-navy)'}}>90%</div>
            <div style={{fontSize:22, lineHeight:1.4, color:'var(--mva-navy)', marginTop:14, maxWidth:'30ch'}}>English Language GCSE pass rate (grades 9–4), exceeding national averages.</div>
          </div>
          <div>
            <div style={{fontFamily:'var(--font-display)', fontSize:160, fontWeight:700, lineHeight:1, letterSpacing:'-.025em', color:'var(--mva-navy)'}}>71%</div>
            <div style={{fontSize:22, lineHeight:1.4, color:'var(--mva-navy)', marginTop:14, maxWidth:'30ch'}}>Maths pass rate, significantly above the national figure of 58%.</div>
          </div>
          <div>
            <div style={{fontFamily:'var(--font-display)', fontSize:160, fontWeight:700, lineHeight:1, letterSpacing:'-.025em', color:'var(--mva-navy)'}}>85%</div>
            <div style={{fontSize:22, lineHeight:1.4, color:'var(--mva-navy)', marginTop:14, maxWidth:'30ch'}}>of graduates reach their first-choice university.</div>
          </div>
        </div>
      </div>
      <Logo />
      <div className="corner-num">07 / 09</div>
    </div>
  );
}

/* 08, Take a bold approach, big serif on orange */
function BoldApproachSlide() {
  return (
    <div className="slide orange">
      <Watermark white />
      <div className="slide-inner" style={{justifyContent:'center'}}>
        <h1 className="title" style={{color:'#fff', fontSize:170}}>Take a bold<br/>approach</h1>
      </div>
      <Logo white />
      <div className="corner-num" style={{color:'#fff'}}>08 / 09</div>
    </div>
  );
}

/* 09, Closer */
function FutureFitsSlide() {
  return (
    <div className="slide blue">
      <Watermark white />
      <div className="slide-inner" style={{justifyContent:'center'}}>
        <h1 className="title" style={{color:'#fff', fontSize:150}}>The future<br/>fits <span className="hl hl-mint">every child</span></h1>
        <p className="lead" style={{color:'rgba(255,255,255,.92)', marginTop:40, maxWidth:'30ch'}}>Thank you. Find us at mva.school.</p>
      </div>
      <Logo white />
      <div className="corner-num" style={{color:'#fff'}}>09 / 09</div>
    </div>
  );
}

const mounts = [
  ["s1", CoverSlide],
  ["s2", TalkAboutSlide],
  ["s3", FutureOfSchoolSlide],
  ["s4", PhotoFullBleedSlide],
  ["s5", NotCurriculumSlide],
  ["s6", FourBarriersSlide],
  ["s7", HappinessResultsSlide],
  ["s8", BoldApproachSlide],
  ["s9", FutureFitsSlide],
];
mounts.forEach(([id, Comp]) => {
  const el = document.getElementById(id);
  if (el) ReactDOM.createRoot(el).render(<Comp />);
});
