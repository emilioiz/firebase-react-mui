import { useRef, useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useClickEvent } from '../lib/hooks'

import Stack from '@mui/material/Stack'
import Grid from '@mui/material/Grid'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import useTheme from '@mui/material/styles/useTheme'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'

import GitHubIcon from '@mui/icons-material/GitHub'

import { getAllDocuments, dropCollection, postToJSON } from '../lib/functions'
import { Loading } from '../components'

const dayjs = require('dayjs')

export default function Home() {
  const theme = useTheme()
  const { pathname } = useLocation()
  const [data, setData] = useState(false)
  const [loading, setLoading] = useState(false)

  const onClickEvent = () => {}

  const dataButtonRef = useRef()
  useClickEvent(dataButtonRef, onClickEvent)

  const clearDataButtonRef = useRef()
  useClickEvent(clearDataButtonRef, onClickEvent)

  const getData = () => {
    setLoading(true)
    setTimeout(async () => {
      const docs = await getAllDocuments('events')
      const data = docs.map((doc) => postToJSON(doc))
      setData(data)
    }, 200)
  }

  const clearData = () => {
    setLoading(true)
    dropCollection('events')
    setTimeout(() => {
      getData()
    }, 200)
  }

  useEffect(() => {
    data && setLoading(false)
  }, [data])

  return (
    <Stack spacing={2}>
      <Typography
        variant='h6'
        component='div'
        sx={{ padding: theme.spacing(2), paddingLeft: 0, paddingTop: 0 }}
      >
        Home
      </Typography>
      <Grid container justifyContent='space-between'>
        <Grid item>
          <Grid container spacing={2}>
            <Grid item>
              <Button
                variant='contained'
                disableElevation
                id='get-event-data'
                value={pathname}
                ref={dataButtonRef}
                onClick={getData}
              >
                Get Data
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant='contained'
                disableElevation
                id='clear-event-data'
                value={pathname}
                ref={clearDataButtonRef}
                onClick={clearData}
              >
                Clear Event Data
              </Button>
            </Grid>
            <Grid item>
              {loading ? (
                <Loading size={30} justify='left' align='center' />
              ) : null}
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <IconButton color='secondary' aria-label='github link'>
            <a href='https://github.com/emilioiz/firebase-react-mui'>
              <GitHubIcon style={{ height: '2rem', width: '2rem' }} />
            </a>
          </IconButton>
        </Grid>
      </Grid>

      {data && (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label='event table'>
              <TableHead>
                <TableRow>
                  <TableCell style={{ minWidth: 170 }}>
                    Timestamp (UTC)
                  </TableCell>
                  <TableCell style={{ minWidth: 170 }}>Event</TableCell>
                  <TableCell style={{ minWidth: 170 }}>Element Id</TableCell>
                  <TableCell style={{ minWidth: 170 }}>Event Page</TableCell>
                  <TableCell style={{ minWidth: 305 }}>Landing Page</TableCell>
                  <TableCell style={{ minWidth: 305 }}>Browser Id</TableCell>
                  <TableCell style={{ minWidth: 305 }}>Session Id</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row) => (
                  <TableRow
                    key={row.docId}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell>
                      {dayjs(row.created).format('MM-DD-YY HH:mm:ss')}
                    </TableCell>
                    <TableCell>{row.event}</TableCell>
                    <TableCell>{row.elementId || null}</TableCell>
                    <TableCell>{row.pathname}</TableCell>
                    <TableCell>{row.originalLocation}</TableCell>
                    <TableCell>{row.browserId}</TableCell>
                    <TableCell>{row.sessionId}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      )}
    </Stack>
  )
}
