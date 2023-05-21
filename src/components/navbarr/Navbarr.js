import { Box, Container, Stack, Typography } from '@mui/material'
import React, { Fragment } from 'react'
import { homeText, navTextt } from './style'

const Navbarr = () => {
  return (
    <Fragment>
     <Container maxWidth = 'xl'>
       <Box sx={{
        ml :'75px',
        mr : '75px'
       }}>
        <Stack direction='row' justifyContent='space-between' flexWrap='wrap'>
            <Typography sx={homeText}>
                Home
            </Typography>
            <Typography sx={navTextt}>Chi Siamo</Typography>
                <Typography sx={navTextt}>S.I.R.E</Typography>
                <Typography sx={navTextt}>SIRE Features</Typography>
                <Typography sx={navTextt}>WHY SIRE?</Typography>
                <Typography sx={navTextt}>SIRE Products</Typography>
                <Typography sx={navTextt}>How it Works?</Typography>

        </Stack>
       </Box>

     </Container>
      
    </Fragment>
  )
}

export default Navbarr
