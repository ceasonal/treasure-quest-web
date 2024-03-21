import React from 'react';
import './Home.css';
import Apk from '../assets/treasurequest.apk'; 
import { makeStyles } from "@mui/styles";
import { Link } from 'react-router-dom';
import AndroidIcon from '@mui/icons-material/Android';
import ComputerIcon from '@mui/icons-material/Computer';

const useStyles = makeStyles((theme) => ({
  pixelbttn: {
    backgroundColor:'#FFA3F6',
    borderColor: '#FFE5FC #C71AF7 #C71AF7 #FFE5FC',
  	outline: '2px solid #000',
    width: '240px', 
    height: '50px',
    borderWidth: '4px', 
    borderStyle: 'solid',
  },
  pixelbttnHover: {
    '&:hover': {
      backgroundColor: '#B091D7',
      borderColor: '#D0C7DA #5345AC #5345AC #D0C7DA',
      outline: '2px solid #000',
      width: '240px', 
      height: '50px',
      borderWidth: '4px', 
      borderStyle: 'solid',
    },
  },
  gradientText: {
    backgroundImage: 'linear-gradient(to bottom,  #270000, #767474)',
    color: 'transparent',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
  },
}));

const App = () => {
  
  const classes = useStyles();
  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <p  className={classes.gradientText} style={{  fontSize: '3rem', textAlign: 'center', fontWeight: 'bold' }}>Treasure Quest</p>
      <a
        href={Apk}
        download='treasurequest'
        target="_blank"
        rel="noreferrer"
      >
        <button
          variant="contained"
          style={{ fontFamily: 'Minecraft Regular', textTransform: 'none', fontSize: '1.2rem', marginTop: '20px' }}
          className={`${classes.pixelbttn} ${classes.pixelbttnHover}`}
        >
          Download APK &nbsp; <AndroidIcon/>
        </button>
      </a>
      <Link
        to="/webgame"
      >
      <button
          variant="contained" 
          style={{ fontFamily: 'Minecraft Regular', textTransform: 'none', fontSize: '1.2rem', marginTop: '20px' }}
          className={`${classes.pixelbttn} ${classes.pixelbttnHover}`}
        >
          Play On Web &nbsp; <ComputerIcon/>
        </button>
      </Link>
    </div>
  );
};

export default App;
