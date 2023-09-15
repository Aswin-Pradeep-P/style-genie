import { colors } from '@Constants/common';

const styles = {
  root: {
    height: '100%'
  },
  footerWrapper: {
    display: 'flex',
    bottom: 0,
    position: 'sticky'
  },
  modalContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    outline: '0',
    borderWidth: 0
  },
  modalStyleContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'end',
    alignItems: 'end',
    outline: '0'
  },
  modalClose: {
    padding: '5px',
    backgroundColor: colors.GREYED_OUT,
    borderRadius: '99px',
    zIndex: 1,
    fontWeight: 800
  },
  modalStyle: {
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItem: 'center',
    maxWidth: '350px',
    outline: '0',
    zIndex: 1
  },
  linkStyle: {},
  disabledLinkStyle: { pointerEvents: 'none' }
};

export default styles;
