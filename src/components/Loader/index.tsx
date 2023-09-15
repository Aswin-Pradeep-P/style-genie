import { Box } from '@mui/material';
import { useLottie } from 'lottie-react';

import { colors } from '@Constants/colors';

import { LoaderProps } from './type';
import LoaderLottie from '@assets/lottie/loader.json';
import styles from './styles';

const Loader = ({ isLoading, isWhiteBackground = false }: LoaderProps) => {
  const options = {
    animationData: LoaderLottie,
    loop: true
  };

  const { View } = useLottie(options);

  if (!isLoading) return null;

  return (
    <Box sx={[styles.loaderWrapper, isWhiteBackground && { backgroundColor: colors.WHITE }]} position='fixed'>
      <Box sx={{ width: 350 }}>{View}</Box>
    </Box>
  );
};

export default Loader;
