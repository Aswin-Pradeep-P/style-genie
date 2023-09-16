import { AppBar, Box, IconButton, Toolbar } from "@mui/material";
import styles from "./styles";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from '@mui/icons-material/Search';

import Logo from "@assets/icons/StyleGenieLogo.png";

const FAQPage = ({ title = "" }) => {
  // states
  const navigate = useNavigate();

  const handleBackClick = () => {
    // if (backButtonPress) backButtonPress();
    navigate(-1);
  };

  return (
    <Box
      sx={[
        styles.appbarWrapper,
        { boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.06)" },
      ]}
    >
      {/* <AppBar position='static' sx={styles.appbar} elevation={0}>
        <Toolbar sx={styles.toolbar}>
          <Box onClick={handleBackClick}>
             <ArrowBackIosIcon style={{color: '#40798C'}}  />
          </Box>
          {title || ''}
          <Box sx={styles.actionWrapper}>


            <IconButton sx={styles.iconButton} disableRipple >
              <NotificationsIcon style={{color: '#40798C'}}/>
            </IconButton>

            <IconButton sx={styles.iconButton} disableRipple>
             <ShoppingCartIcon style={{color: '#40798C'}} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar> */}
      <header className="flex w-full items-center justify-between h-[100px] p-5">
        <div style={{display: 'flex', flexDirection: 'row'}}>
        <Box onClick={handleBackClick}>
             <ArrowBackIosIcon style={{color: '#40798C', marginTop: '10px', marginRight: '10px'}}  />
          </Box>
          <img src={Logo} alt="StyleGenie" className="h-[50px]" />
        </div>
        <div>
        {/* <IconButton sx={styles.iconButton} disableRipple>
            <SearchIcon style={{ color: "#40798C" }} />
          </IconButton> */}
          <IconButton sx={styles.iconButton} disableRipple>
            <NotificationsIcon style={{ color: "#40798C" }} />
          </IconButton>
          <IconButton sx={styles.iconButton} disableRipple>
            <ShoppingCartIcon style={{ color: "#40798C" }} />
          </IconButton>
        </div>
      </header>
    </Box>
  );
};

export default FAQPage;
