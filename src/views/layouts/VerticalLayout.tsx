import React from 'react'
import { NextPage } from 'next'
import { styled } from '@mui/material/styles'
import { Toolbar, IconButton, Divider, List } from '@mui/material'
import MuiDrawer from '@mui/material/Drawer'
import { mainListItems, secondaryListItems } from './ListItem'

type Props = {
  open: boolean
  toggleDrawer: () => void
}

const drawerWidth: number = 240
const Drawer = styled(MuiDrawer, { shouldForwardProp: prop => prop !== 'open' })(({ theme, open }) => ({
  '& .MuiDrawer-paper': {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    }),
    boxSizing: 'border-box',
    ...(!open && {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9)
      }
    })
  }
}))

const HorizontalLayout: NextPage<Props> = ({ open, toggleDrawer }) => {
  return (
    <Drawer variant='permanent' open={open}>
      <Toolbar
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          px: [1]
        }}
      >
        <IconButton onClick={toggleDrawer}>a</IconButton>
      </Toolbar>
      <Divider />
      <List component='nav'>
        {mainListItems}
        <Divider sx={{ my: 1 }} />
        {secondaryListItems}
      </List>
    </Drawer>
  )
}

export default HorizontalLayout
