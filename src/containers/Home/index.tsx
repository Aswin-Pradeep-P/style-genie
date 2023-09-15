/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box } from "@mui/material";
import styles from "./styles";
import { AppBar, Footer } from "@Components/index";
import { useEffect, useRef, useState } from "react";
import { ArrowRightIcon, Star } from "@assets/icons";
import { useGetHomePageMutation } from "./apiSlice";
import { Carousel } from "react-responsive-carousel";
import { colors } from "@Constants/colors";

const FAQPage = () => {
  // states

  const sampledata = [
    "https://wforwoman.com/content/wp-content/uploads/2020/04/Ecru-Mandarin-Neck-Khadi-Kurta-1.jpg",
  ];

  const carouselData = [
    "/assets/carousel/c1.png",
    "/assets/carousel/c2.png",
    "/assets/carousel/c3.png",
    "/assets/carousel/c4.png",
  ];

  const containerRef = useRef<HTMLInputElement>(null);

  const [scrolling, setScrolling] = useState(false);
  const [scrollLeft, setScrollLeft] = useState(0);

  const [getHomepage, { data }] = useGetHomePageMutation();

  useEffect(() => {
    getHomepage({});
  }, []);

  const renderTopBanners = (index: number, ext: string) => {
    return (
      <Box sx={styles.topBanners.root}>
        <Box sx={styles.topBanners.contentWrapper}>
          <img
            src={`/assets/icons/banner${index}.${ext}`}
            width={"450px"}
            height={"450px"}
          />
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

    document.addEventListener("mousemove", handleMouseMove);

    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", handleMouseMove);
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
        containerRef?.current?.scrollWidth -
          containerRef?.current?.clientWidth -
          scrollLeft >
          1)) &&
    sampledata?.length > 0;

  const renderCards = () => {
    return (
      <Box sx={styles.products.root}>
        <Box position="relative" sx={styles.productsLayout}>
          <Box
            sx={styles.productCardListing}
            ref={containerRef}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onClick={handleClick}
          >
            {/* {data?.out?.length > 0 && (
              <>
                {scrollLeft > 0 && (
                  <Box
                    className="carousel-arrow-button"
                    sx={[styles.arrowLayout, { left: 0, position: "absolute" }]}
                  >
                    <Box onClick={handleBackClick} sx={[styles.arrowButton]}>
                      <ArrowRightIcon
                        stroke="white"
                        strokeWidth={2}
                        style={{
                          transform: "rotate(180deg)",
                          width: "14px",
                          height: "14px",
                        }}
                      />
                    </Box>
                  </Box>
                )}
                {showNextArrow() && (
                  <Box
                    className="carousel-arrow-button"
                    sx={[
                      styles.arrowLayout,
                      { right: 0, position: "absolute" },
                    ]}
                  >
                    <Box
                      onClick={handleNextClick}
                      sx={[styles.arrowButton, { marginRight: "30px" }]}
                    >
                      <ArrowRightIcon
                        stroke="white"
                        strokeWidth={2}
                        style={{ width: "14px", height: "14px" }}
                      />
                    </Box>
                  </Box>
                )}
              </>
            )} */}

            {data?.out?.slice(0,5).map((item: any) => {
              console.log('item ', item);
              
              return (
                <div key={item} style={styles.card}>
                  <img src={item?.image_url} />
                </div>
              );
            })}
          </Box>
          {/* <Link href={getLink(linkData) ?? ''} style={styles.viewAllButton} onClick={onViewAllPress}>
          {translate('view_all')}
        </Link> */}
        </Box>
      </Box>
    );
  };

  const renderCarousel = () => {
    return (
      <>
        <Carousel
          autoPlay={true}
          showIndicators={true}
          showThumbs={false}
          centerMode={false}
          showArrows={false}
          swipeable={true}
          interval={1500}
          infiniteLoop
          showStatus={false}
        >
          {carouselData?.map((item, index) => (
            <img
              key={`c${index}`}
              src={item}
              width={"450px"}
              height={"550px"}
            />
          ))}
        </Carousel>
        <div style={{ marginBottom: "20px" }} />
      </>
    );
  };

  return (
    <Box sx={[styles.root]}>
      <AppBar />
      <Box sx={{ backgroundColor: "white" }}>
        <div style={{ marginTop: "100px" }} />
        {renderCarousel()}
        {renderTopBanners(1, "jpg")}
        {renderCards()}
        {renderTopBanners(2, "jpg")}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "20px",
          }}
        >
        </Box>
      </Box>

      <div style={{ paddingBottom: "80px" }} />
      <Box sx={styles.footerWrapper}>
        <Footer />
      </Box>
    </Box>
  );
};

export default FAQPage;
