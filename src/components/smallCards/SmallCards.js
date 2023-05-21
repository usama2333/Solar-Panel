import { Box, Container, Stack, Typography } from '@mui/material'
import React, { Fragment } from 'react'
import lamp from '../../assests/images/lamp.png';
import leaves from '../../assests/images/leaves.png';
import battery from '../../assests/images/battery.png';
import pad from '../../assests/images/pad.png';

const data = [
    {
        img : lamp,
        name : '110%',
        text : 'Superbonus'
    },
    {
        img : battery,
        name : '65%',
        text : 'Detrazione DOMOTICA'
    },
    {
        img : pad,
        name : '',
        text : 'Detrazione DOMOTICA'
    },
    {
        img : lamp,
        name : ' ',
        text : 'consulenza fiscale sui bonus'
    },
]

const SmallCards = () => {
  return (
    <Fragment>
      <Container maxWidth='xl' sx={{
        background: '#F9F9F9',
        pt : '30px',
        pb : '30px'
      }}>
      <Box>


        <Stack direction ='row' justifyContent='space-around' flexWrap='wrap'>

        {data.map((data) => (

        
        <Box sx={{
            width : '255px',
            height : '147px',
            color : '#FFFFFF',
            borderRadius : '6px',
            boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.12)',
            mb : {xs : '30px' , lg : '0px'}
        }}>
          <Box sx={{
            display : 'flex',
            flexDirection : 'column',
            alignItems : 'center'
          }}>

           <Box component='img' src ={data.img} sx={{
            mt : '20px',
            mb : '14px'
           }}></Box>
           <Typography sx={{
             fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: 600,
                fontSize: "24px",
                lineHeight: "24px",
                color: "#363636",
                 textAlign :'center',
                 mb : '10px'
           }}>
           {data.name}
           </Typography>

            <Typography sx={{
             fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "24px",
                color: "#666666",
                textTransform : 'uppercase',
                 textAlign :'center'
           }}>
           {data.text}
           </Typography>


          </Box>

        </Box>

        ))}

        </Stack>



      </Box>
        
      </Container>
    </Fragment>
  )
}

export default SmallCards
