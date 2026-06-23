import { useEffect, useState } from "react";
import axios from "axios";
import List from "./List";
import reactLogo from "./assets/react.svg";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/contacts")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={{
      minHeight: "100vh",
      backgroundColor: "#1e2533",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "40px 20px",
    }}>
      <img
        src={reactLogo}
        alt="react"
        style={{ width: "160px", height: "160px", marginBottom: "24px" }}
      />

      <h2 style={{
        color: "#ffffff",
        fontSize: "18px",
        fontWeight: "400",
        letterSpacing: "4px",
        marginBottom: "28px",
      }}>
        DAFTAR KONTAK
      </h2>

      <List data={data} />
    </div>
  );
}

export default App;
