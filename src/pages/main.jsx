import Intro from "../components/Intro";
import Nfts from "../components/Nfts";

const Main = ({ setPage, myNfts, mintedNfts, page }) => {
  return (
    <>
      <Intro setPage={setPage} myNfts={myNfts} mintedNfts={mintedNfts} />
      <Nfts page={page} mintedNfts={mintedNfts} />
    </>
  );
};

export default Main;
