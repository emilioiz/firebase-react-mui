import Typography from '@mui/material/Typography'
import useTheme from '@mui/material/styles/useTheme'

export default function Theme() {
  const theme = useTheme()

  return (
    <pre>
      <Typography
        variant='h6'
        component='div'
        sx={{ padding: theme.spacing(2), paddingLeft: 0, paddingTop: 0 }}
      >
        Material UI Theme
      </Typography>
      {JSON.stringify(theme, null, 2)}
    </pre>
  )
}
