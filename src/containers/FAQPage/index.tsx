import { Box } from '@mui/material';
import styles from './styles';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import useWindowDimensions from '@Utils/useWindowDimensions';
import { useState, CSSProperties, useEffect } from 'react';
import BottomSheet from '@Components/BottomSheet';
import { CloseButton } from '@assets/icons';
import { useGetProfileTestMutation } from './apliSlice';
import Footer from '@Components/Footer';

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
];

const Home = () => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [showFullScreenImage, setShowFullScreenImage] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [transformStyle, setTransformStyle] = useState({
    transform: 'scale(1.5) translateY(0%)'
  });
  const { isMobileView } = useWindowDimensions();
  const [openDrawer, setOpenDrawer] = useState(false);

  const [getProfile] = useGetProfileTestMutation();

  useEffect(() => {
    getProfile({});
  }, []);

  const linkPress = () => {
    setOpenDrawer(true);
  };

  const handleFullScreenImageClose = () => {
    setShowFullScreenImage(false);
  };

  const handleCarouselItemClick = (index: number) => {
    console.log('handleCarouselItemClick ', selectedIndex);

    setShowFullScreenImage(true);
    setSelectedIndex(index);
  };

  const handleCloseDrawer = () => {
    setOpenDrawer(false);
  };
  const fullScreenImagePress = (e: any) => {
    const clickedY = e.clientY;
    const containerHeight = e.currentTarget.clientHeight;

    const third = containerHeight / 3;

    setIsZoomed(!isZoomed);

    if (clickedY <= third)
      setTransformStyle({
        transform: 'scale(1.5) translateY(28%)'
      });
    else if (clickedY <= third * 2)
      setTransformStyle({
        transform: 'scale(1.5) translateY(0%)'
      });
    else
      setTransformStyle({
        transform: 'scale(1.5) translateY(-28%)'
      });
  };

  const handleCarouselChange = (index: number) => {
    setActiveIndex(index);
  };

  const fullScreenImageRenderItem = (item: any, index: number) => (
    <Box
      key={index}
      onClick={isMobileView ? undefined : fullScreenImagePress}
      sx={{
        display: activeIndex !== index && isZoomed ? 'none' : 'flex',
        margin: '0 auto',
        width: '100vw',
        height: isMobileView ? '100%' : isZoomed ? '400px' : '350px',
        cursor: isZoomed ? 'zoom-out' : 'zoom-in',
        ...(isZoomed && !isMobileView ? transformStyle : {})
      }}
    >
      <img src={item} alt='carousel-images' style={styles.image as CSSProperties} />
    </Box>
  );

  const renderNormalImage = (item: any, index: number) => {
    return (
      <Box onClick={() => handleCarouselItemClick(index)}>
        <img src={item} alt='carousel-images' />
      </Box>
    );
  };

  const renderFullScreenImage = () => {
    return (
      <Box sx={styles.fullScreenImage}>
        <Box sx={styles.closeButton} onClick={handleFullScreenImageClose}>
          <CloseButton />
        </Box>

        <Carousel
          autoPlay={false}
          axis='horizontal'
          swipeable={isMobileView}
          showThumbs={false}
          showArrows={true}
          showStatus={false}
          emulateTouch
          showIndicators={false}
          centerMode={false}
          preventMovementUntilSwipeScrollTolerance={true}
          swipeScrollTolerance={50}
          stopOnHover={false}
          onChange={handleCarouselChange}
        >
          {imageData?.map((item, index) => (
            <div key={index}>{fullScreenImageRenderItem(item, index)}</div>
          ))}
        </Carousel>
      </Box>
    );
  };

  return (
    <Box sx={styles.root}>
      <div>Home page</div>
      <Carousel
        autoPlay={false}
        showIndicators={true}
        showThumbs={false}
        centerMode={true}
        showArrows={true}
        swipeable={isMobileView}
      >
        {imageData?.map((item, index) => (
          <div key={index}>{renderNormalImage(item, index)}</div>
        ))}
      </Carousel>
      {showFullScreenImage && <>{renderFullScreenImage()}</>}
      <Box sx={styles.optionContainer}>
        <Box onClick={linkPress}>Neck</Box>
        <Box>Material</Box>
        <Box>Sleeves</Box>
      </Box>
      <Box sx={styles.footerWrapper}>
        <Footer />
      </Box>
      <BottomSheet
        open={openDrawer}
        handleClose={handleCloseDrawer}
        bottomSheetStyle={{ padding: '32px 32px', position: 'relative' }}
        showCloseButton
      >
        <>
          <div>Show options</div>
        </>
      </BottomSheet>
    </Box>
  );
};

export default Home;
