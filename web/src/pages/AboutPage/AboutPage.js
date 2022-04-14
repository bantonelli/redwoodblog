import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Tabs,
  Tab
} from '@mui/material'

// import MenuIcon from '@mui/icons-material/Menu'

const AboutPage = () => {
  return (
    <>
      <MetaTags title="About" description="About page" />
      <p>About Page</p>
    </>
  )
}

export default AboutPage
