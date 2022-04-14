import { Link, routes } from '@redwoodjs/router'
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Tabs,
  Tab,
} from '@mui/material'

const BlogLayout = ({ children }) => {
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
            <Tabs>
              <Tab component={Link} to={routes.home()} label="Home Page" />
              <Tab component={Link} to={routes.about()} label="About Page" />
            </Tabs>
          </Toolbar>
        </AppBar>
      </header>
      <main>{children}</main>
    </>
  )
}

export default BlogLayout
