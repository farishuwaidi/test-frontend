import { ChangeCircle, Delete } from '@mui/icons-material';
import './App.css';
import MuiButton from './components/MuiButton';
import React,{ useState } from 'react';
import { Stack } from '@mui/material';

function App() {
  const [bgColor, setBgColor] = useState<string>('white')

  const handleButtonClick = (color: string) => {
    setBgColor(color)
  }
  return (
    <div className="App">
      <div style={{backgroundColor: bgColor}} className='container'>
        <Stack direction={'column'} spacing={2}>
          <MuiButton 
            title='Button Blue' 
            caption='Change color to Blue' 
            placement='top-start' 
            startIcon={<ChangeCircle/>} 
            color='primary' 
            size='large' 
            onClick={()=> handleButtonClick('#0d47a1')}
          />
          <MuiButton 
            title='change color to purple' 
            placement='left' 
            endIcon={<ChangeCircle/>} 
            color='secondary' 
            onClick={()=> handleButtonClick('indigo')}
          />          
          <MuiButton 
            title='color change to green' 
            caption='Button Green no icon' 
            placement='bottom-end' 
            color='success' 
            onClick={()=>handleButtonClick('#4caf50')} 
          />
          <MuiButton 
            caption='no tooltip'
          />
        </Stack>
      </div>
    </div>
  );
}

export default App;
