import { Box } from '@mui/material';
import styles from './styles';
import { AppBar, Footer } from '@Components/index';
import { useRef, useState } from 'react';
import { ArrowRightIcon } from '@assets/icons';

const FAQPage = () => {
  // states

  const data = [1, 2, 3, 4, 5, 6];

  const containerRef = useRef<HTMLInputElement>(null);

  const [scrolling, setScrolling] = useState(false);
  const [scrollLeft, setScrollLeft] = useState(0);

  const renderTopBanners = () => {
    return (
      <Box sx={styles.topBanners.root}>
        <Box sx={styles.topBanners.contentWrapper}>
          <div />
        </Box>
      </Box>
    );
  };

  const handleMouseDown = (event: { clientX: any }) => {
    setScrolling(true);
    const container = containerRef.current;
    const startX = event.clientX;
    const scrollLeft = container?.scrollLeft ?? 0;

    const handleMouseMove = (event: { clientX: number }) => {
      const x = event.clientX - startX;

      if (container !== null) {
        container.scrollLeft = scrollLeft - x;
        setScrollLeft(container.scrollLeft);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    document.addEventListener('mouseup', () => {
      document.removeEventListener('mousemove', handleMouseMove);
    });
  };

  const handleBackClick = () => {
    const container = containerRef.current;

    if (container !== null) {
      container.scrollLeft -= 180;
      setScrollLeft(container.scrollLeft);
    }
  };

  const handleNextClick = () => {
    const container = containerRef.current;

    if (container !== null) {
      container.scrollLeft += 180;
      setScrollLeft(container.scrollLeft);
    }
  };

  const handleMouseUp = () => {
    setScrolling(false);
  };

  const handleClick = (event: { preventDefault: () => void }) => {
    if (scrolling) event.preventDefault();
  };

  const showNextArrow = () =>
    (scrollLeft === 0 ||
      (containerRef?.current &&
        containerRef?.current?.scrollWidth - containerRef?.current?.clientWidth - scrollLeft > 1)) &&
    data?.length > 0;

  const renderCards = () => {
    return (
      <Box sx={styles.products.root}>
        <Box position='relative' sx={styles.productsLayout}>
          <Box
            sx={styles.productCardListing}
            ref={containerRef}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onClick={handleClick}
          >
            {scrollLeft > 0 && (
              <Box className='carousel-arrow-button' sx={[styles.arrowLayout, { left: 0, position: 'absolute' }]}>
                <Box onClick={handleBackClick} sx={[styles.arrowButton]}>
                  <ArrowRightIcon
                    stroke='white'
                    strokeWidth={2}
                    style={{ transform: 'rotate(180deg)', width: '14px', height: '14px' }}
                  />
                </Box>
              </Box>
            )}
            {showNextArrow() && (
              <Box className='carousel-arrow-button' sx={[styles.arrowLayout, { right: 0, position: 'absolute' }]}>
                <Box onClick={handleNextClick} sx={[styles.arrowButton, { marginRight: '5px' }]}>
                  <ArrowRightIcon stroke='white' strokeWidth={2} style={{ width: '14px', height: '14px' }} />
                </Box>
              </Box>
            )}
            {data.map((item) => {
              return <div key={item} style={styles.card} />;
            })}
          </Box>
          {/* <Link href={getLink(linkData) ?? ''} style={styles.viewAllButton} onClick={onViewAllPress}>
          {translate('view_all')}
        </Link> */}
        </Box>
      </Box>
    );
  };

  return (
    <Box sx={[styles.root]}>
      <div>Home page</div>
      <AppBar />
      {renderTopBanners()}
      {renderCards()}
      {renderTopBanners()}
      {renderCards()}
      {renderTopBanners()}
      {renderCards()}
      <Box sx={styles.footerWrapper}>
        <Footer />
      </Box>
    </Box>
  );
};

export default FAQPage;
