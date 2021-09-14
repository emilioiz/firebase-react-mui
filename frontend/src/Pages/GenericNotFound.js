import { useHistory } from 'react-router-dom'

import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

export default function GenericNotFound() {
  let history = useHistory()

  setTimeout(() => {
    history.push({ pathname: `/` })
  }, 5000)

  return (
    <Container maxWidth='lg'>
      <Grid
        container
        direction='column'
        justifyContent='center'
        spacing={2}
        sx={{ paddingTop: '6rem' }}
      >
        <Grid item>
          <Typography variant='h4' align='center'>
            404: Not Found
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant='body1'
            align='center'
            sx={{ fontSize: '1.25rem' }}
          >
            Please contact the admin if you belive this is an error. You are
            being redirected to the home page.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  )
}
