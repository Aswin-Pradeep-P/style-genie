// @ts-nocheck
import { CloseIcon } from '@assets/icons';
import { AppBar, Loader } from '@Components/index';
import { Box, Button, IconButton, TextField } from '@mui/material';
import { uploadImageFile } from '@Utils/s3Service';
import { useState, useRef, useEffect } from 'react';
import { useNavigate,useLocation } from 'react-router-dom';
import styles from './styles';
import { useGetMeasurementsMutation } from '@Containers/Home/apiSlice';
import LocalStorage from '@Utils/storage';

enum BodyParts {
  Shoulder = 'Shoulder',
  Neck = 'Neck',
  Chest = 'Chest',
  Sleeves = 'Sleeves',
  Stomach = 'Stomach',
  Hip = 'Hip',
  Thighs = 'Thighs',
  InseamLength = 'Inseam Length',
}
enum SelectedStep {
  FRONT_VIEW = 'Front View',
  SIDE_VIEW = 'Side View',
}

const Measurement = () => {
  const inputRef = useRef(null);
  const navigator = useNavigate();
  const {state} = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  console.log(state);
  const [dimensions, setDimensions] = useState({
    [BodyParts.Neck]: '',
    [BodyParts.Shoulder]: '',
    [BodyParts.Chest]: '',
    [BodyParts.Stomach]: '',
    [BodyParts.Hip]: '',
    [BodyParts.Thighs]: '',
    [BodyParts.InseamLength]: ''
  });
  const [overlay, setOverlay] = useState(false);
  const [height, setHeight] = useState();
  const [selectedStep, setSelectedStep] = useState(SelectedStep.FRONT_VIEW);
  const [imageData, setImageData] = useState({
    [SelectedStep.FRONT_VIEW]: null,
    [SelectedStep.SIDE_VIEW]: null,
  });
  const [file, setFile] = useState(null);
  const [getProfile, {data}] = useGetMeasurementsMutation()

  useEffect(() => {
    const id =  LocalStorage.getItem('genie-user-id');
    setTimeout(() => {
     getProfile({id});
    }, 500);
   }, [])

   useEffect(() => {
    if(data){
      setDimensionFromApi({
        data: {
          measurement: data.measurement[0]
        }
      })
    }
   }, [data])

   const handleHeightChange = (e) => {
    setHeight(e.target.value)
   }

  const getOverlay = () => {
    return (
      <div
        style={{
          position: 'absolute',
          background: 'rgba(250,250,250, 1)',
          display: 'flex',
          flexDirection: 'column',
          height: 810,
          width: 448,
          zIndex: 1,
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%'}} onClick={() =>{
           setOverlay(false);
           inputRef.current.click();
           }}>
         <Button style={{paddingTop: '120px', paddingRight: '20px'}}>Take picture</Button>
        </div>
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
        <div style={{display: 'flex'}}>
            {selectedStep === SelectedStep.FRONT_VIEW && <div><img src="/assets/icons/front-view.svg" style={{height: 500}} alt="front-view" /></div>}
            {selectedStep === SelectedStep.SIDE_VIEW && <div><img src="/assets/icons/side-view.svg" style={{height: 500}} alt="side-view" /></div>}
        </div>
        </div>
      </div>
    );
  };

  const handleChange = (e: any, type: BodyParts) => {
    setDimensions({ ...dimensions, [type]: e.target.value });
    console.log(dimensions);
  };

  const mapper = {
    chestSize: [BodyParts.Chest],
    shoulder: [BodyParts.Shoulder],
    hipSize: [BodyParts.Hip],
    inseamLength: [BodyParts.InseamLength]
  }

  const setDimensionFromApi= (res: any) => {
    if(res?.data?.measurement){
      const newObj = Object.keys(res.data.measurement).reduce((acc, current) => {
        if(mapper[current]){
          return {...acc, [mapper[current]]: res?.data?.measurement[current].toFixed(2)}
        }
        return acc;
      }, {})
      setDimensions((current) => ({...current, ...newObj}))
    }
  }

  const handleFrontFileChange = event => {
    const fileObj = event.target.files && event.target.files[0];
    if (!fileObj) {
      return;
    }

    setFile(fileObj);
    setSelectedStep(SelectedStep.SIDE_VIEW);
    setOverlay(true);

    // setIsLoading(true);
    // uploadImageFile(fileObj, (res) => { 
    //   setDimensionFromApi(res);
    //   setIsLoading(false)
    // }, () => { setIsLoading(false) })
  }

  const handleSideFileChange = event => {
    const fileObj = event.target.files && event.target.files[0];
    if (!fileObj) {
      return;
    }

    setSelectedStep(null);
    setOverlay(false);

    setIsLoading(true);
    console.log('entered height .......', height);
    
    uploadImageFile(file, height, (res) => { 
      setDimensionFromApi(res);
      setIsLoading(false)
    }, () => { setIsLoading(false) })
  }

  const handleFileClick = () => {
    // 👇️ open file input box on click of another element
    return setOverlay(true)
    // return inputRef.current.click();
  };

  return (
    <Box sx={[styles.root]}>
      <AppBar />
      <div>Measurement</div>
      {overlay && getOverlay()}
     
      {isLoading && <Loader />}
      <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', background: 'white' }}>
      <div style={{ position: 'absolute', top: -10, left: 20 }}>
      <TextField
            onChange={handleHeightChange}
            variant="standard"
            size="small"
            style={{ width: 350 }}
            label={'Enter your height(cm) to get accurate results'}
            value={height}
          />
      </div>
        <div style={{ position: 'absolute', top: 71, left: 96 }}>
          <TextField
            onChange={(e) => handleChange(e, BodyParts.Shoulder)}
            variant="standard"
            size="small"
            style={{ width: 70 }}
            label={BodyParts.Shoulder}
            value={dimensions[BodyParts.Shoulder]}
            focused={dimensions[BodyParts.Shoulder]}
          />
        </div>
        {/* <div style={{ position: 'absolute', top: 45, left: 255 }}>
          <TextField
            onChange={(e) => handleChange(e, BodyParts.Neck)}
            variant="standard"
            size="small"
            style={{ width: 70 }}
            label={BodyParts.Neck}
            value={dimensions[BodyParts.Neck]}
            focused={dimensions[BodyParts.Neck]}
          />
        </div> */}
        <div style={{ position: 'absolute', top: 115, left: 133 }}>
          <TextField
            onChange={(e) => handleChange(e, BodyParts.Chest)}
            variant="standard"
            size="small"
            style={{ width: 70 }}
            label={BodyParts.Chest}
            value={dimensions[BodyParts.Chest]}
            focused={dimensions[BodyParts.Chest]}
          />
        </div>
        {/* <div style={{ position: 'absolute', top: 160, left: 291 }}>
          <TextField
            onChange={(e) => handleChange(e, BodyParts.Sleeves)}
            variant="standard"
            size="small"
            style={{ width: 70 }}
            label={BodyParts.Sleeves}
            value={dimensions[BodyParts.Sleeves]}
            focused={dimensions[BodyParts.Sleeves]}
          />
        </div> */}
        {/* <div style={{ position: 'absolute', top: 169, left: 118 }}>
          <TextField
            onChange={(e) => handleChange(e, BodyParts.Stomach)}
            variant="standard"
            size="small"
            style={{ width: 70 }}
            label={BodyParts.Stomach}
            value={dimensions[BodyParts.Stomach]}
            focused={dimensions[BodyParts.Stomach]}
          />
        </div> */}
        <div style={{ position: 'absolute', top: 213, left: 113 }}>
          <TextField
            onChange={(e) => handleChange(e, BodyParts.Hip)}
            variant="standard"
            size="small"
            style={{ width: 70 }}
            label={BodyParts.Hip}
            value={dimensions[BodyParts.Hip]}
            focused={dimensions[BodyParts.Hip]}
          />
        </div>
        {/* <div style={{ position: 'absolute', top: 271, left: 110 }}>
          <TextField
            onChange={(e) => handleChange(e, BodyParts.Thighs)}
            variant="standard"
            size="small"
            style={{ width: 70 }}
            label={BodyParts.Thighs}
            value={dimensions[BodyParts.Thighs]}
            focused={dimensions[BodyParts.Thighs]}
          />
        </div> */}
        <div style={{ position: 'absolute', top: 318, left: 109 }}>
          <TextField
            onChange={(e) => handleChange(e, BodyParts.InseamLength)}
            variant="standard"
            size="small"
            style={{ width: 120 }}
            label={BodyParts.InseamLength}
            value={dimensions[BodyParts.InseamLength]}
            focused={dimensions[BodyParts.InseamLength]}
          />
        </div>
        <img style={{ height: 530 }} src="/assets/icons/blueprint.svg" alt="blueprint" />
      </div>
    <div style={{marginTop: '-70px'}}>
    <Button
        size="large"
        onClick={handleFileClick}
        style={{ background: '#fff', border: '1px solid #9EC1A3', width: '100%', margingBottom: '5px'}}
        variant="contained"
        color="primary"
      >
        Upload Picture
        <input
        style={{display: 'none'}}
        ref={inputRef}
        type="file"
        onChange={selectedStep === SelectedStep.FRONT_VIEW ?  handleFrontFileChange : handleSideFileChange}
      />
      </Button>
      {/* <Button
        size="large"
        onClick={() => navigator(ROUTES.CAPTURE_IMAGE)}
        style={{ background: '#fff', border: '1px solid #9EC1A3', width: '100%', marginTop: '10px' }}
        variant="contained"
        color="primary"
      >
        Use Camera For Measurements
      </Button> */}
    </div>
    </Box>
  );
};

export default Measurement;
