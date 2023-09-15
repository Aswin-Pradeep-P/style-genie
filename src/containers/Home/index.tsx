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

  console.log("homepageData ", data);

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
            {data?.out?.length > 0 && (
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
            )}

            {data?.out?.map((item: any) => {
              return (
                <div key={item} style={styles.card}>
                  <img src="https://wforwoman.com/content/wp-content/uploads/2020/04/Ecru-Mandarin-Neck-Khadi-Kurta-1.jpg" />
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
        <div style={{ marginTop: "60px" }} />
        <Box sx={{backgroundColor: 'rgb(247,247,247)', padding: '3px 10px', margin: '30px 0px 5px 0px', alignItems: 'center', display: 'flex', flexDirection: 'column'}}>
        <div style={{
              fontSize: "14px",
              fontWeight: "400",
              textAlign: 'center'
            }}>Please allow 5-7 days for us to deliver your personalized made-to-order dress</div>
       </Box>
        {renderCarousel()}
        {renderTopBanners(1, "png")}
        {renderCards()}
        {renderTopBanners(4, "png")}
        {renderTopBanners(5, "png")}
        {renderTopBanners(6, "png")}
        {renderTopBanners(7, "png")}
        {renderCards()}
        {renderTopBanners(3, "png")}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "20px",
          }}
        >
          <div
            style={{
              fontSize: "16px",
              fontWeight: "700",
              marginBottom: "20px",
            }}
          >
            Customer Speak
          </div>
          <div
            style={{
              fontSize: "12px",
              fontWeight: "500",
              marginBottom: "20px",
            }}
          >
            We love to hear from you. Email us with whatever you'd like to share
            – whether it’s feedback on our products, customer service.
          </div>
          <Box
            sx={{ border: `1px solid ${colors.LIGHT_GRAY}`, padding: "15px" , margin: '10px', width: '410px'}}
          >
            <Box sx={{display: 'flex', flexDirection: 'row', marginBottom: '10px'}}>
              {[1,2,3,4,5].map(i => <Star style={styles.ratingstar} fill='orange' />)}
            </Box>
            <div
              style={{
                fontSize: "11px",
                fontWeight: "400",
                fontStyle: "italic",
              }}
            >
              My entire experience with Style-Genie met and even exceeded my
              expectations. Delivered on time, as promised. The dress is well
              made and BEAUTIFUL! The fit is perfect. I love, love, love it!
              100% pleased. I will definitely be a returning client.
            </div>
            <div
              style={{
                fontSize: "11px",
                fontWeight: "600",
                margin: "10px 0px",
              }}
            >
              -Julie F Cass
            </div>
            <div
              style={{
                fontSize: "11px",
                fontWeight: "400",
              }}
            >
              08/10/2023
            </div>
          </Box>
          <Box
            sx={{ border: `1px solid ${colors.LIGHT_GRAY}`, padding: "15px",  margin: '10px', width: '410px' }}
          >
             <Box sx={{display: 'flex', flexDirection: 'row', marginBottom: '10px'}}>
              {[1,2,3,4,5].map(i => <Star style={styles.ratingstar} fill='orange' />)}
            </Box>
            <div
              style={{
                fontSize: "11px",
                fontWeight: "400",
                fontStyle: "italic",
              }}
            >
              It has been interesting as to the large varieties of dresses to choose from. Enjoying myself as to the ideas that I'm getting in my head
            </div>
            <div
              style={{
                fontSize: "11px",
                fontWeight: "600",
                margin: "10px 0px",
              }}
            >
            -Brandon G.
            </div>
            <div
              style={{
                fontSize: "11px",
                fontWeight: "400",
              }}
            >
             7/18/2023
            </div>
          </Box>
          <Box
            sx={{ border: `1px solid ${colors.LIGHT_GRAY}`, padding: "15px", width: '410px' }}
          >
             <Box sx={{display: 'flex', flexDirection: 'row', marginBottom: '10px'}}>
              {[1,2,3,4,5].map(i => <Star style={styles.ratingstar} fill='orange' />)}
            </Box>
            <div
              style={{
                fontSize: "11px",
                fontWeight: "400",
                fontStyle: "italic",
              }}
            >
             I loved, loved having options to change a dresses neckline, hemline length and sleeve length. The prices are a fair, a great value. The attention to detail is good: pockets and a hook and eye. Highly recommend!! I will purchase again.
            </div>
            <div
              style={{
                fontSize: "11px",
                fontWeight: "600",
                margin: "10px 0px",
              }}
            >
            -Marie N
            </div>
            <div
              style={{
                fontSize: "11px",
                fontWeight: "400",
              }}
            >
             7/18/2023
            </div>
          </Box>
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
