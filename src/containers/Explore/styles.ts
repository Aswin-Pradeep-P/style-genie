import { colors } from '@Constants/colors';

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    backGroundColor: colors.DIM_GRAY
  },
  footerWrapper: {
    display: 'flex',
    bottom: 0,
    position: 'sticky'
  },
  productCard: {
    width: '48.5%',
    marginBottom: '17px',
    position: 'relative',
  },
  image: {
    width: '95%',
    height: '250px',
    borderRadius: '10px'
  }
};

export default styles;
