import { FaChessRook } from "react-icons/fa";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "../web3.config";
import { useEffect, useState } from "react";
import Web3 from "web3";

const ranNum = Math.floor(Math.random() * 1000) + 1;
const imgSrc = `${process.env.REACT_APP_IMAGE_URL}/${ranNum}.png`;

const web3 = new Web3(window.ethereum);
const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);

const Intro = ({ account }) => {
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

      console.log(response);

      setMintedNfts(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMyNfts();
    getMintedNft();
  }, [contract, account]);

  return (
    <div className="bg-gradient-to-b from-transparent  to-red-400 pt-10 px-4">
      <div className="max-w-screen-xl mx-auto relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-9xl opacity-40 text-yellow-300 truncate">
          Da Den Bu
        </div>
        <div className="relative w-40 h-40">
          <img
            className="w-40 h-40 rounded-full z-10 absolute top-0"
            src={imgSrc}
            alt="NFT"
          />
          <div className="w-40 h-40 rounded-full bg-white text-gray-950 absolute top-0 z-0 flex justify-center items-center text-xs">
            Loading...
          </div>
        </div>
        <div className="mt-4 text-2xl font-bold flex items-center">
          Da Den Bu
          <div className="bg-main w-6 h-6 rounded-full flex justify-center items-center ml-4 text-gray-950">
            <FaChessRook size={16} />
          </div>
        </div>
        <div className="mt-2 flex items-center text-gray-300">
          by
          <div className="text-main ml-2">{CONTRACT_ADDRESS}</div>
        </div>
        <div className="mt-2 flex items-center text-gray-300">
          다덴부란(.env란 "environment"의 약어)은 소프트웨어 개발에서 자주
          사용되는 파일 형식 중 하나입니다. 이 파일은 소프트웨어 개발자들이
          프로젝트에서 사용되는 환경 변수(environment variable)를 저장하는 데
          사용됩니다.
        </div>
        <div className="py-4 flex text-center">
          <div>
            <div className="font-bold">1,000</div>
            <div className="text-gray-300">총 NFT</div>
          </div>
          <div className="ml-4">
            <div className="font-bold">{mintedNfts}</div>
            <div className="text-gray-300">발행된 NFT</div>
          </div>
          <div className="ml-4">
            <div className="font-bold">{myNfts}</div>
            <div className="text-gray-300">내 NFT</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
