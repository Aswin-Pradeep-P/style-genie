// @ts-nocheck
import { AppBar } from '@Components/index';
import { ROUTES } from '@Constants/routes';
import { Box, Button, TextField } from '@mui/material';
import { ChangeEvent, MouseEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './styles';

enum BodyParts {
  Shoulder = 'Shoulder',
  Neck = 'Neck',
  Chest = 'Chest',
  Sleeves = 'Sleeves',
  Stomach = 'Stomach',
  Waist = 'Waist',
  Thighs = 'Thighs',
  Knee = 'Knee',
}
const Measurement = () => {
  const navigator = useNavigate();
  const [dimensions, setDimensions] = useState({
    [BodyParts.Neck]: null,
    [BodyParts.Shoulder]: null,
    [BodyParts.Chest]: null,
    [BodyParts.Stomach]: null,
    [BodyParts.Waist]: null,
    [BodyParts.Thighs]: null,
    [BodyParts.Knee]: null
  });

  const handleChange = (e: any, type: BodyParts) => {
    setDimensions({ ...dimensions, [type]: e.target.value });
    console.log(dimensions);
  };

  return (
    <Box sx={[styles.root]}>
      <AppBar />
      <div>Measurement</div>
      <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
        <div style={{ position: 'absolute', top: 111, left: 96 }}>
          <TextField
            onChange={(e) => handleChange(e, BodyParts.Shoulder)}
            variant="standard"
            size="small"
            style={{ width: 70 }}
            label={BodyParts.Shoulder}
            value={dimensions[BodyParts.Shoulder]}
          />
        </div>
        <div style={{ position: 'absolute', top: 83, left: 266 }}>
          <TextField
            onChange={(e) => handleChange(e, BodyParts.Neck)}
            variant="standard"
            size="small"
            style={{ width: 70 }}
            label={BodyParts.Neck}
            value={dimensions[BodyParts.Neck]}
          />
        </div>
        <div style={{ position: 'absolute', top: 155, left: 96 }}>
          <TextField
            onChange={(e) => handleChange(e, BodyParts.Chest)}
            variant="standard"
            size="small"
            style={{ width: 70 }}
            label={BodyParts.Chest}
            value={dimensions[BodyParts.Chest]}
          />
        </div>
        <div style={{ position: 'absolute', top: 210, left: 64 }}>
          <TextField
            onChange={(e) => handleChange(e, BodyParts.Sleeves)}
            variant="standard"
            size="small"
            style={{ width: 70 }}
            label={BodyParts.Sleeves}
            value={dimensions[BodyParts.Sleeves]}
          />
        </div>
        <div style={{ position: 'absolute', top: 250, left: 104 }}>
          <TextField
            onChange={(e) => handleChange(e, BodyParts.Stomach)}
            variant="standard"
            size="small"
            style={{ width: 70 }}
            label={BodyParts.Stomach}
            value={dimensions[BodyParts.Stomach]}
          />
        </div>
        <div style={{ position: 'absolute', top: 290, left: 99 }}>
          <TextField
            onChange={(e) => handleChange(e, BodyParts.Waist)}
            variant="standard"
            size="small"
            style={{ width: 70 }}
            label={BodyParts.Waist}
            value={dimensions[BodyParts.Waist]}
          />
        </div>
        <div style={{ position: 'absolute', top: 383, left: 77 }}>
          <TextField
            onChange={(e) => handleChange(e, BodyParts.Thighs)}
            variant="standard"
            size="small"
            style={{ width: 70 }}
            label={BodyParts.Thighs}
            value={dimensions[BodyParts.Thighs]}
          />
        </div>
        <div style={{ position: 'absolute', top: 438, left: 95 }}>
          <TextField
            onChange={(e) => handleChange(e, BodyParts.Knee)}
            variant="standard"
            size="small"
            style={{ width: 70 }}
            label={BodyParts.Knee}
            value={dimensions[BodyParts.Knee]}
          />
        </div>
        <img style={{ height: 700 }} src="/assets/icons/blueprint.svg" alt="blueprint" />
      </div>
      <Button
        size="large"
        onClick={() => navigator(ROUTES.CAPTURE_IMAGE)}
        style={{ background: '#fff', border: '1px solid #9EC1A3' }}
        variant="contained"
        color="primary"
      >
        Use Camera For Measurements
      </Button>
    </Box>
  );
};

export default Measurement;
