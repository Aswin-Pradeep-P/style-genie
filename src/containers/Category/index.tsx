/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Link } from '@mui/material';
import styles from './styles';
import Footer from '@Components/Footer';
import AppBar from '@Components/AppBar';
import { CATEGORY_DATA } from './config';
import { WEB_URL } from '@Constants/config';
import { ArrowRightIcon } from '@assets/icons';
import { Params, createSearchParams } from 'react-router-dom';

const cardColorArray = ['#E1F1FF66', '#FEE7E666', '#EDE8FF66', '#F9F2D766'];
const colorArray = ['#BBD4EB88', '#EFC0BE88', '#CABFF188', '#F3E8C188'];

const FAQPage = () => {
  // states

  const NewRenderCategory = ({ item, color, backgroundColor }: any) => {
    const {
      title,
      sub_title,
      image_url,
      new_image_url,
      color: lineColor,
      background_color: backColor,
      click_event,
      subCategories
    } = item;
    const params: Params = click_event?.params || {};
    const { category, subcategory, tag, sort_by } = params || {};
    const navigationParams = {
      // ...(category && { product_cat: category || '' }),
      // ...(subcategory && { subCategory: subcategory || '' }),
      ...(sort_by && { orderby: sort_by || '' })
    };

    const levelOneLink = tag
      ? `${WEB_URL}collection/${tag}/?${createSearchParams(navigationParams)}`
      : `${WEB_URL}womens-collection/${encodeURIComponent(subcategory || category || '')}/?${createSearchParams(
          navigationParams
        )}`;

    const handleButtonPress = () => {
      //
    };

    return (
      <Box
        onClick={handleButtonPress}
        sx={{ ...styles.cardContainer, backgroundColor: backColor ?? backgroundColor }}
        key={title}
      >
        <Link style={styles.card} href={levelOneLink ?? ''} onClick={(e) => e.preventDefault()}>
          <Box sx={styles.imageContainer}>
            <img
              alt={title ?? 'category_image'}
              src={new_image_url || image_url}
              style={{ ...styles.image, objectFit: 'cover' }}
            />
          </Box>
          <Box sx={styles.titleContainer}>
            <Box sx={styles.textContainer}>
              <div style={styles.title}>{title}</div>
              {sub_title && <div style={styles.subTitle}>{sub_title}</div>}
              <div style={styles.line} />
            </Box>
          </Box>
          <Box sx={{ display: 'flex' }}>
            <Box
              sx={{
                ...styles.arrow,
                ...(subCategories && { transform: 'rotate(90deg)' }),
              }}
            >
              <ArrowRightIcon />
            </Box>
          </Box>
        </Link>
      </Box>
    );
  };

  return (
    <Box sx={[styles.root]}>
      <AppBar />
      <Box sx={styles.contentWrapper}>
        {CATEGORY_DATA?.map((item: any, index: number) => {
          const backgroundColor = cardColorArray[index % colorArray.length];
          const color = colorArray[index % colorArray.length];

          return <NewRenderCategory key={item.title} item={item} color={color} backgroundColor={backgroundColor} />;
        })}
      </Box>
      <Box sx={styles.footerWrapper}>
        <Footer />
      </Box>
    </Box>
  );
};

export default FAQPage;
