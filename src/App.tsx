import { useEffect, useState } from "react";
import FirstPage from "./components/FirstPage/FirstPage";
import Header from "./components/Header/Header";
import "./styles/global.css";
import Overview from "./components/Overview/Overview";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.className = "";
    document.body.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div>
       <video className="video" autoPlay muted loop playsInline>
        <source src={`${process.env.PUBLIC_URL}/video_bg.mp4`} type="video/mp4" />

      </video>
      <Header toggleTheme={toggleTheme} theme={theme} />
      <div className="content">
        <FirstPage theme={theme} />
        {/* <div style={{ padding: "100px 0" }}>
          <Map theme={theme}/>
        </div> */}
        <Overview theme={theme}/>
      </div>
    </div>
  );
}

export default App;
