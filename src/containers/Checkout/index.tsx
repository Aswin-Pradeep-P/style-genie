import { AppBar } from '@Components/index';
import CurrencyRupeeOutlined from '@mui/icons-material/CurrencyRupeeOutlined';
import { Button } from '@mui/material';
import React from 'react';

const Checkout = () => {
  return (
    <>
      <AppBar />
      <div style={{ height: '100vh', background: 'white' }}>
        <div style={{ paddingTop: '120px', paddingLeft: '20px', paddingRight: '20px' }}>
          <div style={{ marginBottom: 20, fontWeight: 'bold' }}>Billing Summary</div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
            <div style={{ color: 'gray' }}>Material Cost</div>
            <div>
              <CurrencyRupeeOutlined fontSize="small" />
              1200
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
            <div style={{ color: 'gray' }}>Stiching Cost</div>
            <div>
              <CurrencyRupeeOutlined fontSize="small" />
              1000
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
            <div style={{ color: 'gray' }}>Enhancements</div>
            <div>
              <CurrencyRupeeOutlined fontSize="small" />
              300
            </div>
          </div>
          <div style={{height: '1px', background: "lightgray", marginLeft: '20px', marginRight: '20px', marginBottom: '10px'}} />
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
            <div style={{fontWeight: 'bold'}}>Total</div>
            <div  style={{fontWeight: 'bold'}}>
              <CurrencyRupeeOutlined fontSize="small" />
              2500
            </div>
          </div>
          <Button style={{width: '100%', backgroundColor: '#40798C', color: 'white'}} variant="text">
            Pay &#8377; 2500
          </Button>
        </div>
      </div>
    </>
  );
};

export default Checkout;
