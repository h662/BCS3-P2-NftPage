import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaChessRook } from "react-icons/fa";

const Detail = () => {
  const [metadata, setMetadata] = useState();

  const { tokenId } = useParams();

  const getNft = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_JSON_URL}/${tokenId}.json`
      );

      setMetadata(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getNft();
  }, []);

  return (
    <div className="min-h-screen flex justify-center bg-gray-900 py-16">
      {metadata ? (
        <>
          <div className="max-w-[512px]">
            <img className="rounded-t-2xl" src={metadata.image} />
            <ul className="grid grid-cols-4 gap-8 bg-gray-600 py-8 rounded-b-2xl text-center">
              {metadata.attributes.map((v, i) => {
                return (
                  <li key={i} className="mx-4">
                    <div>{v.trait_type}</div>
                    <div className="mt-1 border-t-2 font-bold">{v.value}</div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="ml-8">
            <div className="text-4xl flex items-center">
              {metadata.name}
              <div className="bg-main w-8 h-8 rounded-full flex justify-center items-center ml-2 text-gray-950">
                <FaChessRook size={18} />
              </div>
            </div>
            <div className="mt-8 text-2xl">{metadata.description}</div>
          </div>
        </>
      ) : (
        <div>로딩중입니다...</div>
      )}
    </div>
  );
};

export default Detail;
