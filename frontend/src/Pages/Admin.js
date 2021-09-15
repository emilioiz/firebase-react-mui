import { useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { useClickEvent } from '../lib/hooks'

import Typography from '@mui/material/Typography'
import useTheme from '@mui/material/styles/useTheme'

import Button from '@mui/material/Button'

export default function Admin() {
  const theme = useTheme()
  const { pathname } = useLocation()

  const adminButtonRef = useRef()
  const onClickEvent = () => {}
  useClickEvent(adminButtonRef, onClickEvent)

  return (
    <div>
      <Typography
        variant='h6'
        component='div'
        sx={{ padding: theme.spacing(2), paddingLeft: 0, paddingTop: 0 }}
      >
        Admin Page
      </Typography>

      <Button
        variant='contained'
        disableElevation
        id='test-click'
        value={pathname}
        ref={adminButtonRef}
      >
        Test Click Event
      </Button>
    </div>
  )
}
