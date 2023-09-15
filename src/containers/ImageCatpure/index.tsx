/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import React, { useEffect, useState } from 'react';
import Webcam from 'react-webcam';
import ReplayIcon from '@mui/icons-material/Replay';
import BoyIcon from '@mui/icons-material/Boy';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const videoConstraints = {
  width: 448,
  height: 710,
  facingMode: 'user',
};

enum SelectedStep {
  FRONT_VIEW = 'Front View',
  SIDE_VIEW = 'Side View',
}

const ImageCapture = () => {
  const webcamRef = React.useRef(null);
  const [showOverlay, setShowOverlay] = useState(false);
  const [selectedStep, setSelectedStep] = useState(SelectedStep.FRONT_VIEW);
  const [imageData, setImageData] = useState({
    [SelectedStep.FRONT_VIEW]: null,
    [SelectedStep.SIDE_VIEW]: null,
  });
  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();

    setImageData((current) => ({ ...current, [selectedStep]: imageSrc }));
  }, [webcamRef, selectedStep]);

  const handleNext = () => {
    if (imageData[selectedStep]) {
      if (selectedStep === SelectedStep.FRONT_VIEW) {
        setSelectedStep(SelectedStep.SIDE_VIEW);
      } else {
        // Redirection logic here
      }
    } else {
      // Toas message here
    }
  };

  const getOverlay = () => {
    return (
      <div
        style={{
          position: 'absolute',
          background: 'rgba(250,250,250, 0.7)',
          display: 'flex',
          flexDirection: 'column',
          height: 799,
          width: 448,
          zIndex: 1,
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
          <IconButton onClick={() => setShowOverlay(false)}>
            <CloseIcon />
          </IconButton>
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

  useEffect(() => {
    if(!imageData[selectedStep]){
        setShowOverlay(true)
    }
  }, [selectedStep]);

  return (
    <div style={{ position: 'relative', border: '1px solid #1f363d', height: 799 }}>
      {!showOverlay && (
        <div
          style={{
            position: 'absolute',
            top: 10,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            zIndex: 1,
          }}
        >
          {selectedStep !== SelectedStep.FRONT_VIEW ? (
            <IconButton onClick={() => setSelectedStep(SelectedStep.FRONT_VIEW)}>
              <ArrowCircleLeftIcon />
            </IconButton>
          ) : (
            <span />
          )}

          <span>{selectedStep}</span>
          <IconButton onClick={handleNext}>
            <ArrowCircleRightIcon />
          </IconButton>
        </div>
      )}
      {showOverlay && getOverlay()}
      {!imageData[selectedStep] ? (
        <div>
          <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" videoConstraints={videoConstraints} />
        </div>
      ) : (
        <img src={imageData[selectedStep]} alt="test-ilustartion" />
      )}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: 'rgb(0, 0, 0, 1)',
          padding: 15,
          marginTop: '-7px',
        }}
      >
        <div
          style={{
            bottom: 70,
            left: 10,
            borderRadius: '50%',

            height: 60,
            width: 60,
            backgroundColor: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
          }}
          onClick={() => setShowOverlay(true)}
          role="presentation"
        >
          <BoyIcon fontSize="large" />
        </div>
        <div
          onClick={() => !imageData[selectedStep] && capture()}
          style={{
            bottom: 70,
            left: 200,
            borderRadius: '50%',
            height: 60,
            width: 60,
            backgroundColor: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
          }}
          role="presentation"
        >
          <div
            style={{
              borderRadius: '50%',
              border: '1px solid black',
              height: 50,
              width: 50,
              backgroundColor: 'white',
            }}
            role="presentation"
          />
        </div>
        <div
          style={{
            bottom: 70,
            right: 10,
            borderRadius: '50%',
            height: 60,
            width: 60,
            backgroundColor: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
          }}
          role="presentation"
          onClick={() => setImageData((current) => ({ ...current, [selectedStep]: null }))}
        >
          <ReplayIcon />
        </div>
      </div>
    </div>
  );
};

export default ImageCapture;
