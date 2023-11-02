import React from 'react'
import { AppBar, Toolbar, IconButton, 
  Typography, Box
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { Link } from 'react-router-dom'
import Moodvies from './Moodvies.png'

const Navigation = () => {
    return (
        <AppBar position="relative">
            <Toolbar>
            <Box
        component="img"
        sx={{ height: 60 }}
        alt="Logo"
        src={Moodvies}
      />
                {/* <IconButton color="inherit">
                    <MenuIcon />
                </IconButton> */}
                {/* <Box
        component="img"
        sx={{ height: 60 }}
        alt="Logo"
        src={Moodvies}
      /> */}
                <Typography variant="h6" style={{ flexGrow: "1" }}>
                    Moodvies.com
                </Typography>
                <ul className="nav-list">
                    <li className="nav-list-item">
                        <Link to="/home">Home</Link>
                    </li>
                    <li className="nav-list-item">
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                </ul>
            </Toolbar>
        </AppBar>
    )
}

export default Navigation