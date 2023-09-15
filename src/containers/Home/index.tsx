import { Box } from '@mui/material';
import styles from './styles';
import { Footer } from '@Components/index';

const FAQPage = () => {
  // states

  return (
    <Box sx={[styles.root]}>
      <div>Home page</div>
      <Box sx={styles.footerWrapper}>
        <Footer />
      </Box>
    </Box>
  );
};

export default FAQPage;
