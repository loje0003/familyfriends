import Image from "next/image";
import { FaRegStar } from "react-icons/fa";

const Card = ({ breedGroup, origin, image }) => {
  return (
    <div className="w-65 rounded-2xl bg-gray-100 overflow-hidden m-4">
      <div className="relative">
        <Image src={image} alt="Picture of the animal" width={300} height={200} className="rounded-xl object-cover" />
        <button className="absolute top-3 right-3 bg-white/40 backdrop-blur-md p-2 rounded-full">
          <FaRegStar className="w-5 h-5 text-white" />
        </button>
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{breedGroup}</h2>
        <p className="text-gray-500 text-sm">{origin}</p>
      </div>
    </div>
  );
};

export default Card;
