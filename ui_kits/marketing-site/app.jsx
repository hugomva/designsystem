/* global React, ReactDOM, PromoBar, Header, Footer, HomeScreen, AboutScreen, ContactScreen */
const { useState } = React;

function App() {
  const [route, setRoute] = useState("home");
  return (
    <div className="site" data-screen-label={`Marketing · ${route}`}>
      <PromoBar />
      <Header current={route} onNavigate={setRoute} />
      {route === "home" && <HomeScreen onNavigate={setRoute} />}
      {route === "about" && <AboutScreen />}
      {route === "school-life" && <AboutScreen />}
      {route === "fees" && <AboutScreen />}
      {route === "events" && <AboutScreen />}
      {route === "contact" && <ContactScreen />}
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
