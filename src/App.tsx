import { useEffect, useState } from "react";
import FirstPage from "./components/FirstPage/FirstPage";
import Header from "./components/Header/Header";
import Map from "./components/Map/Map";
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
      <Header toggleTheme={toggleTheme} theme={theme} />
      <div className="content">
        <FirstPage theme={theme} />
        <div style={{ padding: "100px 0" }}>
          <Map />
        </div>
        <Overview />
      </div>
    </div>
  );
}

export default App;
