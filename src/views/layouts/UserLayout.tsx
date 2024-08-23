import React from 'react'
import { NextPage } from 'next'
import { Box, Toolbar, Container } from '@mui/material'
import VerticalLayout from './VerticalLayout'
import HorizontalLayout from './HorizontalLayout'

type Props = {
  children: React.ReactNode
}

const UserLayout: NextPage<Props> = ({ children }) => {
  const [open, setOpen] = React.useState(true)
  const toggleDrawer = () => {
    setOpen(!open)
  }
  return (
    <div>
      <Box sx={{ display: 'flex' }}>
        <HorizontalLayout open={open} toggleDrawer={toggleDrawer} />
        <VerticalLayout open={open} toggleDrawer={toggleDrawer} />
        <Box
          component='main'
          sx={{
            backgroundColor: theme =>
              theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto'
          }}
        >
          <Toolbar />
          <Container maxWidth='lg' sx={{ mt: 4, mb: 4 }}>
            {children}
          </Container>
        </Box>
      </Box>
    </div>
  )
}

export default UserLayout
