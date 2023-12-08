import { useState } from "react";

type Props = {};

export default function Container({}: Props) {
  const [password, setPassword] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [error, setError] = useState("");

  const handleClick = () => {
    if (password == "351") {
      setShowResult(true);
    } else {
      setError("Leiiiidererrr Neinn.....Aber zähle noch 7 dazu...");
      setTimeout(() => {setError("")},2000)
    }
  };


  if (showResult) {
    return <div>
        <h1>SUPER DUPER </h1>
        <p>Ihr habt es geschafft! Die Karte die euch zum Schatz führt findet ihr im Schuh von Papa!</p>
    </div>
  }
  return (
    <div>
      <h1>Gib hier das geheime Passwort ein</h1>
      <div>
        <input
          style={{ padding: 20, fontSize: 30 }}
          type="text"
          value={password}
          onChange={(el) => setPassword(el.target.value)}
        />
      </div>
      <button
        style={{ backgroundColor: "cyan", color: "black", marginTop: 30 }}
        onClick={() => {
          handleClick();
        }}
      >
        Absenden....
      </button>
      {error.length >= 1 && <h1>{error}</h1>}
    </div>
  );
}
