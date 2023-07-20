import * as React from 'react'
import { Box, Link, BottomNavigation, Typography } from '@mui/material'
import useStyles from './styles'

export default function AdminFooter(props) {
  const [value, setValue] = React.useState(0)
  const classes = useStyles()

  return (
    <Box
      sx={{
        background: 'linear-gradient(237.49deg, #EEF4FA 0.63%, #DEE6ED 85.49%)'
      }}
      className={classes.footer}>
      <BottomNavigation
        sx={{
          background:
            'linear-gradient(237.49deg, #EEF4FA 0.63%, #DEE6ED 85.49%)'
        }}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue)
        }}>
        <Typography className={classes.text}>©2022</Typography>

        <Link
          className={classes.link}
          href="https://happybelly.site/"
          target="_blank"
          underline="none">
          HappyBelly Multivendor
        </Link>
        <Link
          className={classes.link}
          href="http://happybelly.site/about-us/"
          target="_blank"
          underline="none">
          About Us
        </Link>
        
      </BottomNavigation>
    </Box>
  )
}
