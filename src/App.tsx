import React, { useEffect, useState } from "react";
import "./App.css";
import { getDragon } from "./api/dragons";
import Dragon from "./components/Dragon";

function App() {
  const [dragonData, setDragonData] = useState(null);
  useEffect(() => {
    const fetch = async () => {
      const data = await getDragon({ id: "dragon2" });
      setDragonData(data);
    };
    fetch();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img
          src="https://www.spacex.com/static/images/share.jpg"
          className="Spacex-logo"
          alt="logo"
          width="450"
        />
        <p>Dragon data:</p>
      </header>
      <div className="content">
        {dragonData && (
          <Dragon dragonData={dragonData} labelButton={"Give me all"} />
        )}
      </div>
    </div>
  );
}

export default App;
