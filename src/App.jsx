import React from 'react';
import Button from '@mui/material/Button';
import './App.css';
import Apk from './assets/treasurequest.apk'; // Assuming 'treasurequest.apk' is your APK file name

const App = () => {
  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <p style={{ fontFamily: 'Pixelify Sans', fontSize: '3rem', textAlign: 'center', color: 'goldenrod', fontWeight: 'bold' }}>Treasure Quest</p>
      <a
        href={Apk}
        download='treasurequest'
        target="_blank"
        rel="noreferrer"
      >
        <Button
          variant="contained"
          style={{ fontFamily: 'Pixelify Sans', textTransform: 'none', fontSize: '1.2rem', marginTop: '20px', backgroundColor: 'goldenrod', color: 'white' }}
        >
          Download APK
        </Button>
      </a>
    </div>
  );
};

export default App;
