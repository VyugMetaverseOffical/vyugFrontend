import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
const Header = () =>{
return(
    <div style={{height:"100px",backgroundColor:"white"}}>
       <div className='h-full flex items-center justify-between'>
    <Paper
    component="form"
    sx={{  display: 'flex', alignItems: 'center', width: 400,backgroundColor:"#f3f4f6",borderRadius:"20px"}}
  >
   <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
      <SearchIcon />
    </IconButton>
    <InputBase
      sx={{ ml: 1, flex: 1 }}
      placeholder="Search..."
      inputProps={{ 'aria-label': 'search google maps' }}
    />
    
  
   
  </Paper>
  </div>
  </div>

)
}
export default Header