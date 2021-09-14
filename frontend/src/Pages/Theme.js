import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import useTheme from '@mui/material/styles/useTheme'

export default function Theme() {
  const theme = useTheme()

  return (
    <Container sx={{ paddingTop: '2rem' }}>
      <>
        <pre>
          <Typography
            variant='h6'
            component='div'
            sx={{ padding: '1rem', paddingLeft: '0rem', paddingTop: '0rem' }}
          >
            Material UI Theme
          </Typography>
          {JSON.stringify(theme, null, 2)}
        </pre>
      </>
    </Container>
  )
}
