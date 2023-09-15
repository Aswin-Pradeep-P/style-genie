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
    position: 'relative',
    marginLeft: '5px'
  },
  image: {
    height: '290px',
    width: '195px',
    borderTopLeftRadius: '5px',
    borderTopRightRadius: '5px'
  }
};

export default styles;
