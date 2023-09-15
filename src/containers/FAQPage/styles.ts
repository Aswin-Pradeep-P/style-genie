import { colors } from '@Constants/colors';

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'space-between',
    height: '100%',
    backgroundColor: colors.SILVER
  },
  image: {
    width: '400px',
    height: '400px',
    objectFit: 'contain',
    margin: 'auto 0'
  },
  optionContainer: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'center'
  },
  fullScreenImage: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    background: 'transparent',
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    zIndex: 1001
  },
  footerWrapper: {
    display: 'flex',
    bottom: 0,
    position: 'sticky'
  }
};

export default styles;
