import { colors } from '@Constants/colors';

const styles = {
  appbarWrapper: {
    position: 'fixed',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    maxWidth: '450px',
    zIndex: 100,
    backgroundColor: 'white'
  },
  appbar: {
    backgroundColor: colors.SECONDARY,
    top: 0,
    left: 0,
    maxWidth: 450,
    width: '100%'
  },
  actionWrapper: { display: 'flex' },
  iconButton: { marginLeft: '12px', position: 'relative' },
  toolbar: { display: 'flex', justifyContent: 'space-between' },
  titleText: {
    fontSize: '16px',
    fontWeight: 500,
    lineHeight: '24px',
    color: colors.FONT_SECONDARY
  },
  cartCount: {
    position: 'absolute',
    top: '-3px',
    left: '19px',
    width: '20px',
    height: '20px',
    backgroundColor: colors.PRIMARY,
    color: colors.WHITE,
    fontSize: '12px',
    borderRadius: '10px',
    paddingTop: '3px',
    boxSizing: 'border-box'
  }
};

export default styles;
