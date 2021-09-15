import { useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { useClickEvent } from '../lib/hooks'
import { func } from '../lib/firebase'

import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import useTheme from '@mui/material/styles/useTheme'

import Button from '@mui/material/Button'

export default function Admin() {
  const theme = useTheme()
  const { pathname } = useLocation()

  const onClickEvent = () => {}

  const testButtonRef = useRef()
  useClickEvent(testButtonRef, onClickEvent)

  const seedButtonRef = useRef()
  useClickEvent(seedButtonRef, onClickEvent)

  const handleSeedClick = async () => {
    const seedFirestore = func.httpsCallable('seedFirestore')

    await seedFirestore()
  }

  return (
    <Grid container direction='column' spacing={2}>
      <Grid item>
        <Typography
          variant='h6'
          component='div'
          sx={{ padding: theme.spacing(2), paddingLeft: 0, paddingTop: 0 }}
        >
          Admin Page
        </Typography>
      </Grid>
      <Grid item>
        <Grid container spacing={3}>
          <Grid item>
            <Button
              variant='contained'
              disableElevation
              id='test-click'
              value={pathname}
              ref={testButtonRef}
            >
              Test Click Event
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant='contained'
              disableElevation
              id='seed-firestore'
              value={pathname}
              ref={seedButtonRef}
              onClick={handleSeedClick}
            >
              Seed Firestore
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
