import { Box, Container, Stack, Typography } from "@mui/material";
import React, { Fragment } from "react";
import hands from '../../assests/images/hands.png';
import car from '../../assests/images/car.png';
import clouds from '../../assests/images/clouds.png';
import lamp from '../../assests/images/lamp.png';
import leaves from '../../assests/images/leaves.png';
import battery from '../../assests/images/battery.png';
import pad from '../../assests/images/pad.png';

const data = [
  {
    img : hands,
    name : 'Risparmio Energetico',
    text : 'Risparmia da un minimo del 60% sulla bolletta fino all indipendenza energetica anche grazie alla schermatura solare che consente una riduzione fino al 95% dei raggi UV e quindi un minor utilizzo del condizionatore.'
  },

  {
    img : car,
    name : 'Mobilità Elettrica',
    text : 'Lunica soluzione che rende lutilizzo di unauto elettrica veramente economico.  Lefficienza dei pannelli e le batterie di accumulo garantiscono fino a 29.000 chilometri annui a emissioni zero.'
  },

  {
    img : clouds,
    name : 'Comunità Energetica',
    text : 'Dal concetto di condominio al concetto di comunità energetica: Si.Re. è il sistema che rende possibile realizzare una Comunità Energetica Rinnovabile senza acquisto di energia elettrica dalla rete.'
  },
]

const Cards = () => {
  return (
    <Fragment>
      <Container
        maxWidth="xl"
        sx={{
          // background: "#E5E5E5",
          pb : '40px'
        }}
      >
        <Box>
          {/* first text */}
          <Box
            sx={{
              pt: "80px",
              // pb : '40px',
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: 600,
                  fontSize: "36px",
                  lineHeight: "84%",
                  color: "#363636",
                  textAlign: "center",
                }}
              >
                Perchè S.I.R.E.
              </Typography>

              <Typography
                sx={{
                  border: "2px solid #86BE3F",
                  height: "0px",
                  width: "119px",
                  mt: "30px",
                  ml: { lg: "70px" },
                }}
              ></Typography>
            </Box>
          </Box>

          {/* End */}

          <Stack direction='row' flexWrap='wrap' justifyContent='space-around' sx={{mt : '50px'}}>
          {data.map((data) => (

         
            <Box
              sx={{
                width: {xs : '320px' , sm :'350px'},
                height: "370px",
                background: "#FFFFFF",
                boxShadow: "0px 0px 14px rgba(0, 0, 0, 0.1)",
                borderRadius: "10px",
                display :'flex',
                alignItems : 'center',
                flexDirection :'column',
                mb : {xs : '50px' , lg : '0px'}
              }}
            >
              <Box component='img' src ={data.img} sx={{
                width : '67px',
                height :'70px',
                mt : '40px',
                mb : '20px'
              }}>
              </Box>

              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: 600,
                  fontSize: {xs : '20px' , sm :'24px'},
                  lineHeight: "50px",
                  color: "#363636",
                  textAlign: "center",
                }}
              >
               {data.name}
               </Typography>

               <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: {xs : '14px' , sm :'16px'},
                  lineHeight: "26px",
                  color: "#363636",
                  textAlign: "center",
                }}
              >
              {data.text}
               </Typography>

            </Box>
            ))}
          </Stack>

          
        </Box>
      </Container>
    </Fragment>
  );
};

export default Cards;
