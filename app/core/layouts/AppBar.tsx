import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import AppUser from "./AppUser"
import HomeIcon from "@mui/icons-material/Home"
import { Link } from "blitz"

interface Props {
  title: string
}

export default function MainAppBar({ title }: Props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            <Link href="/">
              <HomeIcon sx={{ fontSize: 25 }}>Home</HomeIcon>
            </Link>
            {title}
          </Typography>
          <AppUser />
        </Toolbar>
      </AppBar>
    </Box>
  )
}
