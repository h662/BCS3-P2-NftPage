import { useState } from "react";
import Header from "./components/Header";
import Intro from "./components/Intro";

function App() {
  const [account, setAccount] = useState("");

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Header account={account} setAccount={setAccount} />
      <Intro account={account} />
    </div>
  );
}

export default App;
