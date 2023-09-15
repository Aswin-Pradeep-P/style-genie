import './styles.css';
import { ArrowForward, LoginStep2 } from '../../assets/icons';
import { useState } from 'react';
import { useDesignerContext } from './designer-context';

const SecondStepForm = ({ onPreviousClick, onNextClick }: { onPreviousClick: () => void; onNextClick: () => void }) => {
  const [instagramLink, setInstagramLink] = useState('');
  const [googleMapLink, setGoogleMapLink] = useState('');
  const [profileBio, setProfileBio] = useState('');

  const {
    setInstagramLink: setDesignerInstagramLink,
    setGoogleMapLink: setDesignerGoogleMapLink,
    setProfileBio: setDesignerProfileBio
  } = useDesignerContext();

  const onButtonClick = () => {
    setDesignerInstagramLink(instagramLink);
    setDesignerGoogleMapLink(googleMapLink);
    setDesignerProfileBio(profileBio);

    onNextClick();
  };

  return (
    <>
      <ArrowForward
        className='items-start border-2 border-blue-2 rounded-full rotate-180 cursor-pointer'
        onClick={onPreviousClick}
      />
      <LoginStep2 className='items-center' />
      <div className='formbold-form-title pt-5'>
        <h2>Profile Verification Details</h2>
      </div>
      <div className='w-full'>
        <label htmlFor='instagramLink' className='formbold-form-label'>
          Instagram/Facebook link(optional)
        </label>
        <input
          type='text'
          name='instagramLink'
          id='instagramLink'
          className='formbold-form-input'
          value={instagramLink}
          onChange={(e) => setInstagramLink(e.target.value)}
        />
      </div>
      <div className='w-full'>
        <label htmlFor='googleMapLink' className='formbold-form-label'>
          Google Map link(optional)
        </label>
        <input
          type='text'
          name='googleMapLink'
          id='googleMapLink'
          className='formbold-form-input'
          value={googleMapLink}
          onChange={(e) => setGoogleMapLink(e.target.value)}
        />
      </div>
      <div className='w-full'>
        <label htmlFor='profileBio' className='formbold-form-label'>
          Profile Bio(optional)
        </label>
        <input
          type='text'
          name='profileBio'
          id='profileBio'
          className='formbold-form-input'
          value={profileBio}
          onChange={(e) => setProfileBio(e.target.value)}
        />
      </div>
      <button className='formbold-btn' onClick={onButtonClick}>
        Next
      </button>
    </>
  );
};

export default SecondStepForm;
