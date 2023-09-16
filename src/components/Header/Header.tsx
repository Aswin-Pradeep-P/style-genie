import { UserIcon } from "@assets/icons";
import Logo from "@assets/icons/StyleGenieLogo.png";
import { Box } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";
import { FC } from "react";

interface HeaderProps {
  isDesigner?: boolean;
}
const Header: FC<HeaderProps> = ({ isDesigner = false }) => {
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate(-1);
  };
  return (
    <header className="flex bg-white w-full items-center justify-between border-b h-[100px]  py-2">
      <div className="flex justify-center items-center">
        {isDesigner && (
          <button onClick={handleBackClick}>
            <ArrowBackIosIcon style={{ color: "#40798C" }} className="ml-4" />
          </button>
        )}
        <img src={Logo} alt="StyleGenie" className="h-[50px] mx-4" />
      </div>
      <UserIcon className="bg-[#40798C] rounded-full text-blue-2 mx-4" />
    </header>
  );
};
export default Header;
