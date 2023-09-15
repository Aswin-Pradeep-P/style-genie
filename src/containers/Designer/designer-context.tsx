/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, Dispatch, FC, SetStateAction, useContext, useState } from 'react';

export const DesignerContext = createContext<{
  name: string;
  setName: Dispatch<SetStateAction<string>>;
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  contact: string;
  setContact: Dispatch<SetStateAction<string>>;
  instagramLink: string;
  setInstagramLink: Dispatch<SetStateAction<string>>;
  googleMapLink: string;
  setGoogleMapLink: Dispatch<SetStateAction<string>>;
  profileBio: string;
  setProfileBio: Dispatch<SetStateAction<string>>;
  bankAccountHolderName: string;
  setBankAccountHolderName: Dispatch<SetStateAction<string>>;
  bankAccountNumber: string;
  setBankAccountNumber: Dispatch<SetStateAction<string>>;
  bankIfscCode: string;
  setBankIfscCode: Dispatch<SetStateAction<string>>;
}>({
  name: '',
  setName: () => {},
  email: '',
  setEmail: () => {},
  contact: '',
  setContact: () => {},
  instagramLink: '',
  setInstagramLink: () => {},
  googleMapLink: '',
  setGoogleMapLink: () => {},
  profileBio: '',
  setProfileBio: () => {},
  bankAccountHolderName: '',
  setBankAccountHolderName: () => {},
  bankAccountNumber: '',
  setBankAccountNumber: () => {},
  bankIfscCode: '',
  setBankIfscCode: () => {}
});

export const DesignerContextProvider: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [instagramLink, setInstagramLink] = useState('');
  const [googleMapLink, setGoogleMapLink] = useState('');
  const [profileBio, setProfileBio] = useState('');
  const [bankAccountHolderName, setBankAccountHolderName] = useState('');
  const [bankAccountNumber, setBankAccountNumber] = useState('');
  const [bankIfscCode, setBankIfscCode] = useState('');

  return (
    <DesignerContext.Provider
      value={{
        name,
        setName,
        email,
        setEmail,
        contact,
        setContact,
        instagramLink,
        setInstagramLink,
        googleMapLink,
        setGoogleMapLink,
        profileBio,
        setProfileBio,
        bankAccountHolderName,
        setBankAccountHolderName,
        bankAccountNumber,
        setBankAccountNumber,
        bankIfscCode,
        setBankIfscCode
      }}
    >
      {children}
    </DesignerContext.Provider>
  );
};

export const useDesignerContext = () => useContext(DesignerContext);
