import { CSSProperties } from 'react';
import { Box, Drawer } from '@mui/material';

import { WIDTH } from '@Constants/common';
import { CloseButton } from '@assets/icons';

import styles from './styles';

interface BottomSheetProps {
  children?: JSX.Element;
  handleClose: () => void;
  open: boolean;
  bottomSheetStyle?: CSSProperties;
  showCloseButton?: boolean;
  fullScreen?: boolean;
}

const BottomSheet = ({
  children,
  handleClose,
  open,
  bottomSheetStyle,
  showCloseButton = false,
  fullScreen = false
}: BottomSheetProps) => {
  return (
    <Drawer
      anchor='bottom'
      open={open}
      onClose={handleClose}
      onBackdropClick={handleClose}
      PaperProps={{
        style: {
          maxWidth: WIDTH,
          margin: 'auto',
          ...(!fullScreen ? { borderTopRightRadius: '16px', borderTopLeftRadius: '16px' } : { height: '100%' }),
          backgroundColor: 'transparent',
          boxShadow: '0px 0px 0px'
        }
      }}
    >
      {showCloseButton && !fullScreen && (
        <>
          <Box sx={{ display: 'flex', justifyContent: 'end' }}>
            <CloseButton style={{ margin: '16px', cursor: 'pointer' }} onClick={handleClose} />
          </Box>
        </>
      )}
      <Box
        sx={[
          bottomSheetStyle ?? styles.wrapper,
          { backgroundColor: 'white', ...(!fullScreen ? { borderRadius: '16px 16px 0px 0px' } : { height: '100%' }) }
        ]}
      >
        {children}
      </Box>
    </Drawer>
  );
};

export default BottomSheet;
