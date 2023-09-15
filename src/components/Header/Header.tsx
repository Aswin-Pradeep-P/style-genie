import { UserIcon } from "@assets/icons";
import Logo from "@assets/icons/StyleGenieLogo.png";

const Header = () => {
  return (
    <header className="flex bg-white w-full items-center justify-between border-b h-[100px]  py-2">
      <img src={Logo} alt="StyleGenie" className="h-[50px] mx-4" />
      <UserIcon className="bg-[#40798C] rounded-full text-blue-2 mx-4" />
    </header>
  );
};
export default Header;
