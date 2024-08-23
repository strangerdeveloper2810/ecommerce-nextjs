import React from 'react'
import { NextPage } from 'next'
import { styled } from '@mui/material/styles'
import { Toolbar, IconButton, Typography, Badge } from '@mui/material'
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar'

type Props = {
  open: boolean
  toggleDrawer: () => void
}

interface AppBarProps extends MuiAppBarProps {
  open?: boolean
}

const drawerWidth: number = 240

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: prop => prop !== 'open'
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}))

const VerticalLayout: NextPage<Props> = ({ open, toggleDrawer }) => {
  return (
    <AppBar position='absolute' open={open}>
      <Toolbar
        sx={{
          pr: '24px' // keep right padding when drawer closed
        }}
      >
        <IconButton
          edge='start'
          color='inherit'
          aria-label='open drawer'
          onClick={toggleDrawer}
          sx={{
            marginRight: '36px',
            ...(open && { display: 'none' })
          }}
        >
          menu
        </IconButton>
        <Typography component='h1' variant='h6' color='inherit' noWrap sx={{ flexGrow: 1 }}>
          Dashboard
        </Typography>
        <IconButton color='inherit'>
          <Badge badgeContent={4} color='secondary'>
            noti
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default VerticalLayout
