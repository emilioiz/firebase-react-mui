import { useEffect, useState } from 'react'
import Stack from '@mui/material/Stack'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import useTheme from '@mui/material/styles/useTheme'

import { getAllDocuments } from '../lib/functions'

export default function Home() {
  const theme = useTheme()
  const [data, setData] = useState(null)

  const getData = async () => {
    const docs = await getAllDocuments('events')
    setData(docs)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <Stack spacing={2}>
      <Typography
        variant='h6'
        component='div'
        sx={{ padding: theme.spacing(2), paddingLeft: 0, paddingTop: 0 }}
      >
        Home
      </Typography>
      {!data ? (
        <div>Loading...</div>
      ) : (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label='event table'>
              <TableHead>
                <TableRow>
                  {/* <TableCell>Timestamp</TableCell> */}
                  <TableCell align='center' style={{ minWidth: 170 }}>
                    Event
                  </TableCell>
                  <TableCell align='center' style={{ minWidth: 170 }}>
                    Element Id
                  </TableCell>
                  <TableCell align='center' style={{ minWidth: 170 }}>
                    Event Page
                  </TableCell>
                  <TableCell align='center' style={{ minWidth: 305 }}>
                    Landing Page
                  </TableCell>
                  <TableCell align='center' style={{ minWidth: 305 }}>
                    Browser Id
                  </TableCell>
                  <TableCell align='center' style={{ minWidth: 305 }}>
                    Session Id
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row) => (
                  <TableRow
                    key={row.docId}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    {/* <TableCell align='right'>{row.created}</TableCell> */}
                    <TableCell align='center'>{row.event}</TableCell>
                    <TableCell align='left'>{row.elementId || null}</TableCell>
                    <TableCell align='left'>{row.pathname}</TableCell>
                    <TableCell align='left'>{row.originalLocation}</TableCell>
                    <TableCell align='left'>{row.browserId}</TableCell>
                    <TableCell align='left'>{row.sessionId}</TableCell>
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
