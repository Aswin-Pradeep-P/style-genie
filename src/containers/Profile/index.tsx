import { Box, Paper } from '@mui/material';
import styles from './styles';
import { Footer } from '@Components/index';
import RedeemIcon from '@mui/icons-material/Redeem';
import SquareFootIcon from '@mui/icons-material/SquareFoot';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@Constants/routes';

const firstName = 'John';
const lastName = 'Doe';
const email = 'johndoe@email.com';

const ProfilePage = () => {

  const navigate = useNavigate();

  const options = [
    {
      icon: <RedeemIcon />,
      text: 'Orders',
      onClick: () => {}
    },
    {
      icon: <SquareFootIcon />,
      text: 'Measurement',
      onClick: () => navigate(ROUTES.MEASUREMENT)
    },
    {
      icon: <HomeIcon />,
      text: 'Address',
      onClick: () => {}
    },
    {
      icon: <LogoutIcon />,
      text: 'Logout',
      onClick: () => {}
    },
  ];

  return (
    <Box sx={[styles.root]}>
      <div style={{ border: '1px solid black', height: '100%' }}>
        <div style={{ background: 'white', padding: 10 }}>John Doe</div>
        <div style={{ display: 'flex', padding: 10, alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div
              style={{
                height: 50,
                width: 50,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '50%',
                background: '#70A9A1',
                marginRight: 10,
              }}
            >
              {firstName[0]}
              {lastName[0]}
            </div>
            <div style={{ fontSize: '12px' }}>
              <div>
                <b>{`${firstName} ${lastName}`}</b>
              </div>
              <div style={{ color: 'gray' }}>{email}</div>
            </div>
          </div>
          <div style={{ color: '#1f363d' }}>Edit</div>
        </div>
        <Paper style={{ display: 'flex', flexDirection: 'column' }}>
          {options.map((option) => {
            return (
              <div style={{ display: 'flex', padding: 15, background: 'white',
               borderBottom: '1px solid grey', justifyContent: 'space-between', cursor: 'pointer', fontSize: '14px',
                }} onClick={option.onClick}>
                <div>
                  <span style={{ marginRight: 15 }}>{option.icon}</span>
                  <span>{option.text}</span>
                </div>
                <div>
              <ArrowForwardIosIcon fontSize='small' />
                  </div>
              </div>
            );
          })}
        </Paper>
      </div>

      <Box sx={styles.footerWrapper}>
        <Footer />
      </Box>
    </Box>
  );
};

export default ProfilePage;
