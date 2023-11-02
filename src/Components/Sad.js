import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useNavigate } from 'react-router-dom'

<h2>Here is our suggestion: </h2>
export default function BasicSelect() {
  const [genre, setGenre] = React.useState('');

   const navigate = useNavigate ()

  const handleChange = (event) => {
    setGenre(event.target.value);
  };

   const handleSubmit = () => {
    navigate(`/genre/${genre}`)
  }
console.log(genre)

  return (
    <>
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Genre</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={genre}
          label="Genre"
          onChange={handleChange}
        >
          <MenuItem value={5}>Comedy</MenuItem>
          <MenuItem value={6}>Documentary</MenuItem>
        </Select>
      </FormControl>
    </Box>
    <button onClick={handleSubmit}>Submit</button>
    </>
  );
}