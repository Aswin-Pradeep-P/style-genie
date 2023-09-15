import { BrowserRouter } from 'react-router-dom';

import { Layout } from './layouts';
import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
declare global {
  interface Window {
    dataLayer: any;
  }
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
