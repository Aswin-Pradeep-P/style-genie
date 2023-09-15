/* eslint-disable jsx-a11y/img-redundant-alt */
import { Box } from '@mui/material';
import styles from './styles';
import Footer from '@Components/Footer';
import AppBar from '@Components/AppBar';

const FAQPage = () => {
  const imageData = [
    'https://i.pinimg.com/564x/76/eb/9f/76eb9ff45025b7b7e054f67d8a7fd947.jpg',
    'https://i.pinimg.com/564x/c8/26/d0/c826d05f91f2f1c682ca62504dc86be7.jpg',
    'https://i.pinimg.com/564x/88/5d/26/885d26e11277f28340f8511081dd4ffd.jpg',
    'https://i.pinimg.com/474x/eb/45/4a/eb454a065e558b7aeebc0c756d7dc4ee.jpg',
    'https://i.pinimg.com/564x/76/eb/9f/76eb9ff45025b7b7e054f67d8a7fd947.jpg',
    'https://i.pinimg.com/564x/c8/26/d0/c826d05f91f2f1c682ca62504dc86be7.jpg',
    'https://i.pinimg.com/564x/88/5d/26/885d26e11277f28340f8511081dd4ffd.jpg',
    'https://i.pinimg.com/474x/eb/45/4a/eb454a065e558b7aeebc0c756d7dc4ee.jpg',
    'https://i.pinimg.com/564x/76/eb/9f/76eb9ff45025b7b7e054f67d8a7fd947.jpg',
    'https://i.pinimg.com/564x/c8/26/d0/c826d05f91f2f1c682ca62504dc86be7.jpg',
    'https://i.pinimg.com/564x/88/5d/26/885d26e11277f28340f8511081dd4ffd.jpg',
    'https://i.pinimg.com/474x/eb/45/4a/eb454a065e558b7aeebc0c756d7dc4ee.jpg',
    'https://i.pinimg.com/564x/76/eb/9f/76eb9ff45025b7b7e054f67d8a7fd947.jpg',
    'https://i.pinimg.com/564x/c8/26/d0/c826d05f91f2f1c682ca62504dc86be7.jpg',
    'https://i.pinimg.com/564x/88/5d/26/885d26e11277f28340f8511081dd4ffd.jpg',
    'https://i.pinimg.com/474x/eb/45/4a/eb454a065e558b7aeebc0c756d7dc4ee.jpg',
    'https://i.pinimg.com/564x/76/eb/9f/76eb9ff45025b7b7e054f67d8a7fd947.jpg',
    'https://i.pinimg.com/564x/c8/26/d0/c826d05f91f2f1c682ca62504dc86be7.jpg',
    'https://i.pinimg.com/564x/88/5d/26/885d26e11277f28340f8511081dd4ffd.jpg',
    'https://i.pinimg.com/474x/eb/45/4a/eb454a065e558b7aeebc0c756d7dc4ee.jpg',
    'https://i.pinimg.com/564x/76/eb/9f/76eb9ff45025b7b7e054f67d8a7fd947.jpg',
    'https://i.pinimg.com/564x/c8/26/d0/c826d05f91f2f1c682ca62504dc86be7.jpg',
    'https://i.pinimg.com/564x/88/5d/26/885d26e11277f28340f8511081dd4ffd.jpg',
    'https://i.pinimg.com/474x/eb/45/4a/eb454a065e558b7aeebc0c756d7dc4ee.jpg',
    'https://i.pinimg.com/564x/76/eb/9f/76eb9ff45025b7b7e054f67d8a7fd947.jpg',
    'https://i.pinimg.com/564x/c8/26/d0/c826d05f91f2f1c682ca62504dc86be7.jpg',
    'https://i.pinimg.com/564x/88/5d/26/885d26e11277f28340f8511081dd4ffd.jpg',
    'https://i.pinimg.com/474x/eb/45/4a/eb454a065e558b7aeebc0c756d7dc4ee.jpg',
    'https://i.pinimg.com/564x/76/eb/9f/76eb9ff45025b7b7e054f67d8a7fd947.jpg',
    'https://i.pinimg.com/564x/c8/26/d0/c826d05f91f2f1c682ca62504dc86be7.jpg',
    'https://i.pinimg.com/564x/88/5d/26/885d26e11277f28340f8511081dd4ffd.jpg',
    'https://i.pinimg.com/474x/eb/45/4a/eb454a065e558b7aeebc0c756d7dc4ee.jpg',
  ];

  return (
    <Box sx={[styles.root]}>
      <AppBar />
      <div  style={{marginTop: '80px'}}/>
      <Box sx={{ display: 'flex',flexWrap: 'wrap', width:'100%'}}>
      {imageData.map((item) => {
        return (
          <Box sx={styles.productCard}>
            <img src={item}  alt='image' style={styles.image} />
          </Box>
        )
      })}
      </Box>
      <div  style={{paddingBottom: '80px'}}/>
      <Box sx={styles.footerWrapper}>
        <Footer />
      </Box>
    </Box>
  );
};

export default FAQPage;
