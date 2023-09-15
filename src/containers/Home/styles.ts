import { colors } from '@Constants/colors';

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
  },
  topBanners: {
    root: {
      display: 'flex',
      justifyContent: 'space-around',
      // width: '450px',
      height: '450px'
    },
    contentWrapper: { display: 'flex' }
  },
  card: {
    display: 'flex',
    // justifyContent: 'space-around',
    width: '170px',
    height: '250px',
    marginRight: '5px'
  },
  footerWrapper: {
    display: 'flex',
    bottom: 0,
    position: 'sticky'
  },
  productsLayout: {
    display: 'flex',
    flexDirection: 'column',
    gap: '23px',
    paddingTop: '17px',
    paddingBottom: '52px'
  },
  products: {
    root: { display: 'flex', flexDirection: 'column' }
  },
  productCardListing: {
    display: 'flex',
    flexDirection: 'row',
    overflow: 'auto',
    cursor: 'pointer',
    '&::-webkit-scrollbar': {
      display: 'none'
    },
    scrollbarWidth: 'none'
  },
  viewAllButton: {
    border: '1px solid #1D6B46',
    color: colors.PRIMARY_DARK,
    borderRadius: '8px',
    display: 'flex',
    // flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '14px',
    paddingBottom: '14px',
    marginLeft: '16px',
    marginRight: '16px',
    fontWeight: 600,
    // textTransform: 'none',
    cursor: 'pointer',
    fontSize: '14px',
    textDecoration: 'none',
    '&:hover': {
      backgroundColor: 'transparent'
    }
  },
  arrowLayout: {
    zIndex: 20,
    height: '45%',
    alignItems: 'center'
  },
  arrowButton: {
    backgroundColor: 'rgba(255,255,255, 0.5)',
    display: 'flex',
    alignItems: 'center',
    borderRadius: '25px',
    padding: '8px',
    justifyContent: 'center',
    boxShadow: '1px 1px 0px rgba(0, 0, 0, 0.25)',
    '&:hover': { backgroundColor: colors.WHITE_SMOKE }
  }
};

export default styles;
