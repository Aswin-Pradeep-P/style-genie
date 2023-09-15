import './styles.css';
import { ArrowForward, LoginStep1 } from '../../assets/icons';
import { useState } from 'react';
import { useDesignerContext } from './designer-context';

const FirstStepForm = ({ onNextClick }: { onNextClick: () => void }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');

  const { setName: setDesignerName, setEmail: setDesignerEmail, setContact: setDesignerContact } = useDesignerContext();

  const onButtonClick = () => {
    setDesignerName(name);
    setDesignerEmail(email);
    setDesignerContact(contact);

    onNextClick();
  };

  return (
    <>
      <ArrowForward className='scale-0' />
      <LoginStep1 className='items-center' />
      <div className='formbold-form-title pt-5'>
        <h2>My Boutique Profile</h2>
      </div>
      <div className='w-full'>
        <label htmlFor='shopName' className='formbold-form-label'>
          Shop name
        </label>
        <input
          type='text'
          name='shopName'
          id='shopName'
          className='formbold-form-input'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className='w-full'>
        <label htmlFor='email' className='formbold-form-label'>
          E-mail
        </label>
        <input
          type='text'
          name='email'
          id='email'
          className='formbold-form-input'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className='w-full'>
        <label htmlFor='contact' className='formbold-form-label'>
          Business contact number
        </label>
        <input
          type='text'
          name='contact'
          id='contact'
          className='formbold-form-input'
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />
      </div>
      <button
        className='formbold-btn'
        disabled={name.trim().length === 0 || email.trim().length === 0 || contact.trim().length < 10}
        onClick={onButtonClick}
      >
        Next
      </button>
    </>
  );
};

export default FirstStepForm;
