import { colors } from '@Constants/common';

const styles = {
  footerWrapper: {
    position: 'fixed',
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    maxWidth: '450px',
    zIndex: 100,
    bottom: 0,
    filter: 'drop-shadow(0px -1px 2px rgba(0, 0, 0, 0.13))'
  },
  appbar: {
    backgroundColor: colors.SECONDARY,
    top: 'unset',
    borderRadius: '10px 10px 0px 00px'
  },
  logo: {
    width: 60,
    height: 33
  },
  actionWrapper: {
    display: 'flex',
    justifyContent: 'space-evenly',
    width: '100%'
  },
  iconButton: { width: '24px', height: '24px', paddingTop: '10px' },
  toolbar: {
    paddingLeft: 0,
    paddingRight: 0
  },
  label: {
    color: colors.FONT_SECONDARY,
    fontSize: '12px',
    fontWeight: 500
  },
  tabWrapper: {
    textAlign: 'center',
    marginBottom: 2,
    marginTop: '2px',
    cursor: 'pointer'
  }
};

export default styles;
