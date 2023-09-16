import './styles.css';
import { ArrowForward, LoginStep3 } from '../../assets/icons';
import { useState } from 'react';
import { useDesignerContext } from './designer-context';

const ThirdStepForm = ({ onPreviousClick, onNextClick }: { onPreviousClick: () => void; onNextClick: () => void }) => {
  const [bankAccountHolderName, setBankAccountHolderName] = useState('');
  const [bankAccountNumber, setBankAccountNumber] = useState('');
  const [bankIfscCode, setBankIfscCode] = useState('');

  const {
    setBankAccountHolderName: setDesignerBankAccountHolderName,
    setBankAccountNumber: setDesignerBankAccountNumber,
    setBankIfscCode: setDesignerBankIfscCode
  } = useDesignerContext();

  const onButtonClick = () => {
    setDesignerBankAccountHolderName(bankAccountHolderName);
    setDesignerBankAccountNumber(bankAccountNumber);
    setDesignerBankIfscCode(bankIfscCode);

    onNextClick();
  };

  return (
    <>
      <ArrowForward
        className='items-start border-2 border-blue-2 rounded-full rotate-180 cursor-pointer'
        onClick={onPreviousClick}
      />
      <LoginStep3 className='items-center' />
      <div className='formbold-form-title pt-5'>
        <h2>Payment & Banking</h2>
      </div>
      <div className='w-full'>
        <label htmlFor='bankAccountHolderName' className='formbold-form-label'>
          Bank Account Holder Name
        </label>
        <input
          type='text'
          name='bankAccountHolderName'
          id='bankAccountHolderName'
          className='formbold-form-input'
          value={bankAccountHolderName}
          onChange={(e) => setBankAccountHolderName(e.target.value)}
        />
      </div>
      <div className='w-full'>
        <label htmlFor='bankAccountNumber' className='formbold-form-label'>
          Bank Account Number
        </label>
        <input
          type='text'
          name='bankAccountNumber'
          id='bankAccountNumber'
          className='formbold-form-input'
          value={bankAccountNumber}
          onChange={(e) => setBankAccountNumber(e.target.value)}
        />
      </div>
      <div className='w-full'>
        <label htmlFor='bankIfscCode' className='formbold-form-label'>
          Bank IFSC Code
        </label>
        <input
          type='text'
          name='bankIfscCode'
          id='bankIfscCode'
          className='formbold-form-input'
          value={bankIfscCode}
          onChange={(e) => setBankIfscCode(e.target.value)}
        />
      </div>
      <button
        className='formbold-btn'
        disabled={
          bankAccountHolderName.trim().length === 0 ||
          bankAccountNumber.trim().length === 0 ||
          bankIfscCode.trim().length === 0
        }
        onClick={onButtonClick}
      >
        Next
      </button>
    </>
  );
};

export default ThirdStepForm;
