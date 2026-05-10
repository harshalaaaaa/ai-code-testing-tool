import React from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [code, setCode] = useState("");
  const [result, setResult] = useState("");

  const handleAnalyze = async () => {
    try {
      const response = await fetch(
        "https://ai-code-testing-tool.onrender.com/analyze",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ code }),
        }
      );

      const data = await response.json();
      setResult(data.choices[0].message.content);
    } catch (error) {
      console.error(error);
      setResult("Error connecting to server");
    }
  };

  return (
    <div className="container">
      <h1>AI Code Testing Tool</h1>
      <h2>TEST</h2>

      <textarea
        rows="10"
        cols="50"
        placeholder="Paste your code here..."
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />

      <br />

      <button onClick={handleAnalyze}>
        Analyze Code
      </button>

      <div className="result">
        <h2>AI Analysis:</h2>
        <pre>{result}</pre>
      </div>
    </div>
  );
}

export default App;