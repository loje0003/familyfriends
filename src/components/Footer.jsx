import { IoHomeOutline } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";
import { BsChat } from "react-icons/bs";
import { GoPerson } from "react-icons/go";

const Footer = () => {
  return (
    <div className="flex justify-between p-4 bg-gray-50 px-12 fixed bottom-0 w-full">
      <IoHomeOutline size={24} />
      <FaRegStar size={24} />
      <BsChat size={24} />
      <GoPerson size={24} />
    </div>
  );
};

export default Footer;
