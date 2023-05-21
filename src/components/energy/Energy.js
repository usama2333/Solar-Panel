import { Box, Container, Stack, Typography } from "@mui/material";
import React, { Fragment } from "react";
import secondDots from "../../assests/images/secondDots.png";
import roundDots from "../../assests/images/roundDots.png";
import circle from "../../assests/images/circle.png";
import satellite from "../../assests/images/satellite.png";
import panel from "../../assests/images/panel.png";

const Energy = () => {
  return (
    <Fragment>
      <Container maxWidth="xl">
        <Box
          sx={{
            ml: "50px",
            mr: {sm : '50px' },
            mt: "80px",
          }}
        >
          <Stack  direction={{xs : 'column' , lg :'row'}}>
            <Box
              sx={{
                flex: "0 0 50%",
                ml : {lg : '10px' , md : '150px', sm :'10px'},
               
              }}
            >
              <Box
                sx={{
                  position: "relative",
                }}
              >
                <Box
                  component="img"
                  src={satellite}
                  sx={{
                    position: "absolute",
                    width : {xs : '180px' , sm :'auto'},
                    height : {xs : '180px' , sm :'auto'}
                  }}
                ></Box>
                <Box
                  component="img"
                  src={panel}
                  sx={{
                    position: "absolute",
                    top: {sm :'260px' , xs :'110px'},
                    left: {sm :'170px' , xs : '100px'},
                    width : {xs : '180px' , sm :'auto'},
                    height : {xs : '180px' , sm :'auto'}

                  }}
                ></Box>
                <Box
                  component="img"
                  src={secondDots}
                  sx={{
                    position: "absolute",
                    top: "-20px",
                    left: "-22px",
                    zIndex: -1,
                  }}
                ></Box>
                <Box
                  component="img"
                  src={secondDots}
                  sx={{
                    position: "absolute",
                    top: {xs :'210px' , sm :'445px'},
                    left: {xs : '230px' , sm : '470px'},
                    zIndex: -5,
                  }}
                ></Box>
                <Box
                  component="img"
                  src={circle}
                  sx={{
                    position: "absolute",
                    top: {sm :'100px' , xs :'40px'},
                    left: {sm :'100px' , xs :'40px'},
                    zIndex: -3,
                    width : {xs : '200px' , sm :'auto'},
                    height : {xs : '200px' , sm :'auto'}

                  }}
                ></Box>
              </Box>
            </Box>

            <Box
              sx={{
                flex: "0 0 50%",
                ml : '-40px',
                mt :{md : '500px' , lg : '0px', sm :'500px', xs : '200px'},
                // display : 'none'
              }}
            >
              <Box
                sx={{
                  position: "relative",
                }}
              >
                <Box
                  component="img"
                  src={secondDots}
                  sx={{
                    position: "absolute",
                    top :'-70px',
                    left : '370px',
                    display : {xs : 'none' , md : 'flex'}
                    
                  }}
                ></Box>

                <Box
                  component="img"
                  src={roundDots}
                  sx={{
                    position: "absolute",
                    top :{lg : '-50px', md : '0px', sm :'50px', xs : '100px' },
                    left : {lg : '400px' , md : '600px', sm : '400px', xs : '180px'}
                    
                  }}
                ></Box>
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: 500,
                    fontSize: "30px",
                    lineHeight: "84%",
                    mt: "170px",
                    /* identical to box height */

                    color: "#86BE3F",
                  }}
                >
                  S.I.R.E
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: 600,
                    fontSize: { xl: "34px", lg: "32px" , md : '30px', sm :'28px', xs : '24px' },
                    lineHeight: "45px",
                    /* identical to box height */

                    color: "#363636",
                    mt: "13px",
                    mb: "20px",
                  }}
                >
                  Smart Integrated Renewable Energy
                </Typography>
                <Box
                  sx={{
                    border: "2px solid #86BE3F",
                    width: "119px",
                    height: "0px",
                    mb: "20px",
                  }}
                ></Box>
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: "17px",
                    lineHeight: "160%",
                    /* identical to box height */

                    color: "#666666",
                    mb : {md :'30px' , lg : '0px'}
                  }}
                >
                  S.I.R.E. è il primo sistema fotovoltaico intelligente al mondo
                  per la produzione, conversione e gestione dell'energia solare,
                  studiato specificatamente per installazioni all'interno di
                  condomini.
                </Typography>
              </Box>
            </Box>
          </Stack>
        </Box>
      </Container>
    </Fragment>
  );
};

export default Energy;
