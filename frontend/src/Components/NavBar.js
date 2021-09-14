import { Link } from 'react-router-dom'

import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

export default function NavBar() {
  return (
    <Box>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            Template
          </Typography>
          <Button color='inherit'>
            <Link to={{ pathname: '/' }}>Home</Link>
          </Button>
          <Button color='inherit'>
            <Link to={{ pathname: '/theme' }}>Theme</Link>
          </Button>
          <Button color='inherit'>
            <Link to={{ pathname: '/admin' }}>Admin</Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
