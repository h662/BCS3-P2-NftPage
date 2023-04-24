import { useEffect, useState } from "react";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "./web3.config";
import Web3 from "web3";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import Detail from "./pages/datail";

const web3 = new Web3(window.ethereum);
const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);

function App() {
  const [account, setAccount] = useState("");
  const [page, setPage] = useState(0);

  const [myNfts, setMyNfts] = useState(0);
  const [mintedNfts, setMintedNfts] = useState(0);

  const getMyNfts = async () => {
    try {
      if (!contract || !account) return;

      const response = await contract.methods.balanceOf(account).call();

      setMyNfts(response);
    } catch (error) {
      console.error(error);
    }
  };
  const getMintedNft = async () => {
    try {
      if (!contract) return;

      const response = await contract.methods.totalSupply().call();

      setMintedNfts(response);
      setPage((parseInt(response) - 1) / 10 + 1);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMyNfts();
    getMintedNft();
  }, [contract, account]);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-950 text-white">
        <Header account={account} setAccount={setAccount} />
        <Routes>
          <Route
            path="/"
            element={
              <Main
                setPage={setPage}
                myNfts={myNfts}
                mintedNfts={mintedNfts}
                page={page}
              />
            }
          />
          <Route path="/:tokenId" element={<Detail account={account} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
