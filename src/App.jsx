import { useState } from "react";
import Header from "./components/Header";

function App() {
  const [account, setAccount] = useState("");

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Header account={account} setAccount={setAccount} />
    </div>
  );
}

export default App;
