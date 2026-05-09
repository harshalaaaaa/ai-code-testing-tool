import { useState } from "react";
import "./App.css";

function App() {
  const [code, setCode] = useState(`function login(user, password){
  if(user == "admin"){
    console.log("welcome")
  }
}`);

  const [result, setResult] = useState("");

  const handleAnalyze = async () => {
    try {
      const response = await fetch("https://ai-code-testing-tool.onrender.com/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code }),
      });

      const data = await response.json();

      // Extract AI message only
      const aiMessage =
        data.choices?.[0]?.message?.content || "No AI response";

      setResult(aiMessage);
    } catch (error) {
      console.error(error);
      setResult("Error connecting to server");
    }
  };

  return (
    <div
      style={{
        textAlign: "center",
        padding: "40px",
        fontFamily: "Arial",
      }}
    >
      <h1>AI Test Generator 🚀</h1>

      <textarea
        rows="10"
        cols="60"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        style={{
          padding: "10px",
          fontSize: "14px",
        }}
      />

      <br />
      <br />

      <button
        onClick={handleAnalyze}
        style={{
          padding: "10px 20px",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        Analyze Code
      </button>

      <br />
      <br />

      <div
        style={{
          width: "80%",
          margin: "auto",
          textAlign: "left",
          background: "#f4f4f4",
          padding: "20px",
          borderRadius: "10px",
          whiteSpace: "pre-wrap",
        }}
      >
        <h3>AI Analysis:</h3>

        <pre
          style={{
            whiteSpace: "pre-wrap",
            wordWrap: "break-word",
          }}
        >
          {result}
        </pre>
      </div>
    </div>
  );
}

export default App;