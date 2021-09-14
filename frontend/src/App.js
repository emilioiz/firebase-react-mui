import useTheme from '@mui/material/styles/useTheme'
import Button from '@mui/material/Button'

import './App.css'

function App() {
  const theme = useTheme()
  console.log('MUI Theme:', theme)

  return (
    <div>
      <Button variant='contained' disableElevation>
        Hello World
      </Button>
    </div>
  )
}

export default App
