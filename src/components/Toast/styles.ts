import { colors } from '@Constants/colors';

const styles = {
  toastWrapper: {
    padding: '0 8px',
    width: '100%',
    maxWidth: '450px',
    boxSizing: 'border-box'
  },
  toastContent: {
    borderRadius: '6px',
    padding: '18px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  errorToastWrapper: {
    backgroundColor: colors.LIGHT_RED,
    boxShadow: '0px 10px 20px rgba(255, 40, 40, 0.12)'
  },
  iconWrapper: {
    display: 'flex',
    alignItems: 'center'
  },
  errorMessage: {
    color: colors.RED,
    marginLeft: '14px'
  },
  successToastWrapper: {
    backgroundColor: colors.LIGHT_GREEN,
    boxShadow: '0px 10px 20px rgba(170,238,215, 0.12)'
  },
  successMessage: {
    color: colors.DARK_GREEN,
    marginLeft: '14px'
  },
  chipContainer: {
    padding: '16px',
    borderRadius: '32px',
    maxWidth: '50%',
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: colors.PRIMARY_DARK,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: 2
  },
  chipText: {
    color: colors.WHITE,
    fontSize: '12px',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
};

export default styles;
