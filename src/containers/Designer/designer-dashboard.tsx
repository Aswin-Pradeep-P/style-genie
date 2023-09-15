import { Box } from '@mui/material';
import styles from './styles';
import './styles.css';
import { DesignerContextProvider } from './designer-context';
import { Navbar } from './navbar';

const DesignerDashboard = () => {
  return (
    <DesignerContextProvider>
      <Box sx={[styles.root]}>
        <div className='h-full flex flex-col space-y-5 p-[48px] bg-green-1'>Hey there</div>
        <Navbar />
      </Box>
    </DesignerContextProvider>
  );
};

export default DesignerDashboard;
