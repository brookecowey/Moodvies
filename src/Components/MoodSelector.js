import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect() {
  const [age, setAge] = React.useState('');

  const navigate = useNavigate ()


  const handleChange = (event) => {
    setAge(event.target.value);
  };
      const handleSubmit = () => {
        navigate(`/genre/${age}`)
      }
    console.log(age)
  return (
    <>
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Mood</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={1}>Happy</MenuItem>
          <MenuItem value={2}>Sad</MenuItem>
          <MenuItem value={3}>Nostalgic</MenuItem>
        </Select>
      </FormControl>
    </Box>
    <button onClick={handleSubmit}>Submit</button>
    </>
  );
}



      
    
  
