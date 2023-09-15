import { UserIcon } from "@assets/icons";
import Logo from "@assets/icons/StyleGenieLogo.png";

const Header = () => {
  return (
    <header className="flex bg-white w-full items-center justify-between h-[100px] p-4 py-3">
      <img src={Logo} alt="StyleGenie" className="h-[50px]" />
      <UserIcon className="bg-[#40798C] rounded-full text-blue-2" />
    </header>
  );
};
export default Header;
