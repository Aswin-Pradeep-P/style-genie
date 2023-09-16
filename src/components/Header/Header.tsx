import { UserIcon } from "@assets/icons";
import Logo from "@assets/icons/StyleGenieLogo.png";
import { Box, IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";
import { FC } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import NotificationsIcon from "@mui/icons-material/Notifications";
import styles from "./styles";

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
        <button onClick={handleBackClick}>
          <ArrowBackIosIcon style={{ color: "#40798C" }} className="ml-4" />
        </button>

        <img src={Logo} alt="StyleGenie" className="h-[50px] mx-4" />
      </div>
      <div>
        {isDesigner ? (
          <UserIcon className="bg-[#40798C] rounded-full text-blue-2 mx-4" />
        ) : (
          <>
            <IconButton sx={styles.iconButton} disableRipple>
              <NotificationsIcon style={{ color: "#40798C" }} />
            </IconButton>
            <IconButton sx={styles.iconButton} disableRipple>
              <ShoppingCartIcon style={{ color: "#40798C" }} />
            </IconButton>
          </>
        )}
      </div>
    </header>
  );
};
export default Header;
