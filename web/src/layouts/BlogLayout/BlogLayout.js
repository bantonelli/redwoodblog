import { Link, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Tabs,
  Tab,
} from '@mui/material'

import { useState } from 'react'

const styles = {
  tabContainer: {
    '& .MuiTabs-indicator': {
      backgroundColor: '#FFF'
    }
  },
  tab: {
    color: '#FFF',
    '&.Mui-selected': {
      color: '#FFF'    
    }
  },
  button: {
    // ...theme.typography.estimate,
    borderRadius: '8px',
    marginLeft: '16px',
    marginRight: '16px',
    height: '45px',
    color: 'white',
    border: '2px solid white'
  },
  menu: {
    '& .MuiMenu-paper': {
      // backgroundColor: theme.palette.primary.main,
      // color: theme.palette.primary.contrastText,
      borderRadius: '0px',
    },
    '& .MuiMenuItem-root': {
      // ...theme.typography.tab,`
      opacity: 0.7,
      '&:hover': {
        opacity: 1,
      },
      '&.selected': {
        opacity: 1,
      },
    },
  },
}

const BlogLayout = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0)
  const {isAuthenticated, currentUser, logOut} = useAuth()

  const handleChange = (e, newValue) => {
    setActiveTab(newValue)
  }

  return (
    <>
      <header>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            ></IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Redwood blog
            </Typography>
            {isAuthenticated ? (
              <div>
                <span>Logged in as {currentUser.email}</span>
                <Button onClick={logOut} sx={styles.button}>
                  Login
                </Button>
              </div>
            ) : (
              <Button component={Link} to={routes.login()} sx={styles.button}>
                Login
              </Button>
            )}
            <Tabs
              value={activeTab}
              onChange={handleChange}
              indicatorColor="secondary"
              sx={styles.tabContainer}
            >
              <Tab
                component={Link}
                to={routes.home()}
                label="Home Page"
                value={0}
                sx={styles.tab}
              />
              <Tab
                component={Link}
                to={routes.about()}
                label="About Page"
                value={1}
                sx={styles.tab}
              />
              <Tab
                component={Link}
                to={routes.contact()}
                label="Contact"
                value={2}
                sx={styles.tab}
              />
            </Tabs>
          </Toolbar>
        </AppBar>
      </header>
      <main>{children}</main>
    </>
  )
}

export default BlogLayout
