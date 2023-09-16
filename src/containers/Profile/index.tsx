import { Box, Paper } from '@mui/material';
import styles from './styles';
import { AppBar, Footer } from '@Components/index';
import RedeemIcon from '@mui/icons-material/Redeem';
import SquareFootIcon from '@mui/icons-material/SquareFoot';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@Constants/routes';
import { colors } from '@Constants/colors';
import { useGetProfileMutation } from '@Containers/Home/apiSlice';
import { useEffect } from 'react';
import LocalStorage from '@Utils/storage';

const firstName = 'John';
const lastName = 'Doe';
const email = 'johndoe@email.com';

const ProfilePage = () => {

  const [getProfile, {data}] = useGetProfileMutation()

  const navigate = useNavigate();

  useEffect(() => {
   const id =  LocalStorage.getItem('genie-user-id');
   setTimeout(() => {
    getProfile({id});
   }, 500);
  }, [])

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
      <AppBar />
      <div>
        <div style={{ background: 'white', padding: 10, marginTop: '70px' }}>John Doe</div>
        <div style={{ display: 'flex', padding: '20px', alignItems: 'center', justifyContent: 'space-between' , backgroundColor: colors.LIGHT_GRAY}}>
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
              <div style={{ color: 'gray' }}>{data?.measurement?.[0]?.nickname || email}</div>
            </div>
          </div>
          <div style={{ color: '#1f363d' }}>Edit</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', marginTop: '10px' }}>
          {options.map((option) => {
            return (
              <Paper style={{ display: 'flex', padding: 15, background: 'white', margin: '10px 10px', justifyContent: 'space-between', cursor: 'pointer', fontSize: '14px',
                }} onClick={option.onClick}>
                <div>
                  <span style={{ marginRight: 15 }}>{option.icon}</span>
                  <span>{option.text}</span>
                </div>
                <div>
              <ArrowForwardIosIcon fontSize='small' />
                  </div>
              </Paper>
            );
          })}
        </div>
      </div>

      <Box sx={styles.footerWrapper}>
        <Footer />
      </Box>
    </Box>
  );
};

export default ProfilePage;
