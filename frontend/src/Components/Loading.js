import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'

export default function Loading({ size, justify, align }) {
  return (
    <Box display='flex' justifyContent={justify} alignItems={align}>
      <CircularProgress size={size} />
    </Box>
  )
}
