import { AppBar } from '@Components/index';
import { Box, Button, TextField } from '@mui/material';
import styles from './styles';
  
const Measurement = () => {
  return (
    <Box sx={[styles.root]}>
      <AppBar />
      <div>Measurement</div>
      <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
        <div style={{ position: 'absolute', top: 111, left: 96 }}>
          <TextField variant="standard" size="small" style={{ width: 70 }} label="Shoulder" />
        </div>
        <div style={{ position: 'absolute', top: 90, left: 245 }}>
          <TextField variant="standard" size="small" style={{ width: 70 }} label="Neck" />
        </div>
        <div style={{ position: 'absolute', top: 155, left: 96 }}>
          <TextField variant="standard" size="small" style={{ width: 70 }} label="Chest" />
        </div>
        <div style={{ position: 'absolute', top: 210, left: 64 }}>
          <TextField variant="standard" size="small" style={{ width: 70 }} label="Sleeves" />
        </div>
        <div style={{ position: 'absolute', top: 260, left: 104 }}>
          <TextField variant="standard" size="small" style={{ width: 70 }} label="Stomach" />
        </div>
        <div style={{ position: 'absolute', top: 290, left: 99 }}>
          <TextField variant="standard" size="small" style={{ width: 70 }} label="Waist" />
        </div>
        <div style={{ position: 'absolute', top: 374, left: 93 }}>
          <TextField variant="standard" size="small" style={{ width: 70 }} label="Thighs" />
        </div>
        <div style={{ position: 'absolute', top: 438, left: 95 }}>
          <TextField variant="standard" size="small" style={{ width: 70 }} label="Knee" />
        </div>
        <img style={{ height: 700 }} src="/assets/icons/blueprint.svg" alt="blueprint" />
      </div>
      <Button size="large" style={{background: '#fff', border: '1px solid #9EC1A3'}} variant="contained" color="primary">Use Camera For Measurements</Button>
    </Box>
  );
};

export default Measurement;
