import { Box, Snackbar } from '@mui/material';

import { ToastProps, ToastTypes } from './type';
import { ErrorIcon, ErrorCloseIcon, TickCircleIcon } from '@assets/icons';
import { Positions } from './type';

import styles from './styles';

const Toast = ({ message, type, open, onClose, position = Positions.TOP, customStyle }: ToastProps) => {
  const toastStyle = customStyle ? customStyle : position === Positions.TOP ? { top: '40px' } : { bottom: '120px' };

  const renderErrorToast = () => (
    <Box sx={[styles.toastContent, styles.errorToastWrapper]}>
      <div style={styles.iconWrapper}>
        <ErrorIcon />
        <div style={styles.errorMessage}>{message}</div>
      </div>
      <ErrorCloseIcon onClick={onClose} style={{ cursor: 'pointer' }} />
    </Box>
  );

  const renderSuccessToast = () => (
    <Box sx={[styles.toastContent, styles.successToastWrapper]}>
      <div style={styles.iconWrapper}>
        <TickCircleIcon />
        <div style={styles.successMessage}>{message}</div>
      </div>
      <ErrorCloseIcon onClick={onClose} style={{ cursor: 'pointer' }} />
    </Box>
  );

  const renderBlackChip = () => (
    <Box sx={styles.chipContainer}>
      <div style={styles.chipText}>{message}</div>
    </Box>
  );

  const renderToastBody = () => {
    switch (type) {
      case ToastTypes.ERROR:
        return renderErrorToast();
      case ToastTypes.SUCCESS:
        return renderSuccessToast();
      case ToastTypes.CHIP:
        return renderBlackChip();
      default:
        return null;
    }
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={type === ToastTypes.CHIP ? 2000 : 6000}
      onClose={onClose}
      anchorOrigin={{ vertical: position, horizontal: 'center' }}
      sx={toastStyle}
      ClickAwayListenerProps={{ onClickAway: () => null }}
    >
      <Box sx={styles.toastWrapper}>{renderToastBody()}</Box>
    </Snackbar>
  );
};

export default Toast;
export { Positions };
