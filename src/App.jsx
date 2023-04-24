import { useEffect, useState } from "react";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Nfts from "./components/Nfts";

function App() {
  const [account, setAccount] = useState("");
  const [page, setPage] = useState(0);

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Header account={account} setAccount={setAccount} />
      <Intro account={account} setPage={setPage} />
      <Nfts page={page} />
    </div>
  );
}

export default App;
