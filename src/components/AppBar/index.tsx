import { AppBar, Box, IconButton, Toolbar } from '@mui/material';
import styles from './styles';
import { ROUTES } from '@Constants/routes';
import { SearchIcon } from '@assets/icons';
import { useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NotificationsIcon from '@mui/icons-material/Notifications';

const FAQPage = () => {
  // states
  const navigate = useNavigate();

  // const handleBackClick = () => {
  //   // if (backButtonPress) backButtonPress();
  //   navigate('-1');
  // };

  const handleSearchNavigation = () => {
    navigate(ROUTES.EXPLORE);
  };

  return (
    <Box sx={[styles.appbarWrapper, { boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.06)' }]}>
      <AppBar position='static' sx={styles.appbar} elevation={0}>
        <Toolbar sx={styles.toolbar}>
          <Box sx={{ display: 'flex', flexDirection: 'row', gap: '16px', alignItems: 'center' }}>
            {/* {showBackButton && (
              <LeftArrow
                style={{ width: '24px', height: '24px', cursor: 'pointer' }}
                onClick={() => handleBackClick()}
              />
            )} */}
          </Box>
          <Box sx={styles.actionWrapper}>
            {/* <IconButton onClick={() => handleSearchNavigation()} disableRipple>
              <SearchIcon />
            </IconButton> */}

            <IconButton sx={styles.iconButton} disableRipple onClick={() => navigate(ROUTES.EXPLORE)}>
              <NotificationsIcon style={{color: '#40798C'}}/>
            </IconButton>

            <IconButton sx={styles.iconButton} disableRipple>
             <ShoppingCartIcon style={{color: '#40798C'}} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default FAQPage;
