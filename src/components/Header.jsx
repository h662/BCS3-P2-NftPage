import { FaChessRook } from "react-icons/fa";
import { BiWallet } from "react-icons/bi";

const Header = ({ account, setAccount }) => {
  const onClickAccount = async () => {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      setAccount(accounts[0]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <header className="max-w-screen-xl mx-auto p-4 flex justify-between font-bold">
      <div className="text-main flex items-center">
        <FaChessRook size={28} />
        <div className="ml-1 text-xl">Ble-Chess</div>
      </div>
      <div>
        {account ? (
          <div className="p-2 bg-gray-800 rounded-full">
            {account.substring(0, 4)}...
            {account.substring(account.length - 4)}
          </div>
        ) : (
          <button
            className="flex items-center p-2 bg-gray-800 rounded-full"
            onClick={onClickAccount}
          >
            <div className="bg-main w-6 h-6 rounded-full flex justify-center items-center">
              <BiWallet />
            </div>
            <div className="ml-1">Connect</div>
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
