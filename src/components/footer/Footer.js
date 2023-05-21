import { Box, Container, Stack, Typography } from "@mui/material";
import React, { Fragment } from "react";
import footerBackground from "../../assests/images/footerBackground.png";
import footerLogo from "../../assests/images/footerLogo.png";
import frey from "../../assests/images/frey.png";
import phoneFooter from "../../assests/images/phoneFooter.png";
import messageFooter from "../../assests/images/messageFooter.png";
import locationFooter from "../../assests/images/locationFooter.png";
import insta from '../../assests/images/insta.png';
import facebook from '../../assests/images/facebook.png';
import twitter from '../../assests/images/twitter.png';

import { footerText, footerTextLast } from "./style";


const Footer = () => {
  return (
    <Fragment>
      <Container
        maxWidth="xl"
        sx={{
          // backgroundImage : `url(${footerBackground})`,
          // backgroundRepeat : 'no-repeat',
          // backgroundSize : 'cover',
          backgroundColor: "grey",
        //   height: "500px",
        }}
      >
        <Box>
          <Stack
            sx={{ pt: "74px" }}
            direction={{xs:'column' , sm :'row'}}
            justifyContent="space-around"
            alignItems="center"
            flexWrap='wrap'
          >
            {/* First column */}
            <Box sx={{mb : {xs :'20px' , lg : '0px'}}}>
              <Box component="img" src={footerLogo}></Box>
              <Typography
                sx={{
                  maxWidth: "274px",
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "146%",
                  /* identical to box height */

                  color: "#FFFFFF",
                  mt: "25px",
                  mb: "10px",
                }}
              >
                Leo dui fermentum tristique urna tellus eget amet aliquam. Id
                vitae orci maecenas tortor odio Leo dui fermentum tristique urna
                tellus eget amet aliquam.
              </Typography>

              <Box component="img" src={frey} sx={{ mr: "10px" }}></Box>
              <Box component="img" src={frey} sx={{ mr: "10px" }}></Box>
              <Box component="img" src={frey}></Box>
              <Box></Box>
              <Box component="img" src={frey} sx={{ mr: "10px" }}></Box>
              <Box component="img" src={frey} sx={{ mr: "10px" }}></Box>
              <Box component="img" src={frey}></Box>
            </Box>

            {/* End of first column */}

            {/* Second  box start here */}

            <Box sx={{mb : {xs :'20px' , lg : '0px'}}}>
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: 600,
                  fontSize: "16px",
                  lineHeight: "95%",
                  color: "#FFFFFF",
                  mb: "25px",
                }}
              >
                Quick Links
              </Typography>
              <Typography sx={footerText}> Home </Typography>
              <Typography sx={footerText}> Chi Siamo </Typography>
              <Typography sx={footerText}> S.I.R.E </Typography>
              <Typography sx={footerText}> SIRE Features </Typography>
              <Typography sx={footerText}> Why SIRE? </Typography>
              <Typography sx={footerText}> SIRE Product </Typography>
              <Typography sx={footerTextLast}> How it Works </Typography>
            </Box>

            {/* Second box end here */}

            {/* Third  box start here */}

            <Box sx={{mb : {xs :'20px' , lg : '0px'}}}>
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: 600,
                  fontSize: "16px",
                  lineHeight: "95%",
                  color: "#FFFFFF",
                  mb: "25px",
                }}
              >
                Useful Links
              </Typography>
              <Typography sx={footerText}> Help Center </Typography>
              <Typography sx={footerText}> Privacy Policy </Typography>
              <Typography sx={footerText}> Terms & Condition</Typography>
              <Typography sx={footerText}> FaQ </Typography>
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: 500,
                  fontSize: "16px",
                  lineHeight: "95%",
                  color: "#FFFFFF",
                  mt : '48px',
                  mb :'32px'
                }}
              >
                
                Documents
              </Typography>
              <Typography sx={{
                fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: 500,
                  fontSize: "16px",
                  lineHeight: "95%",
                  color: "#FFFFFF",
                  opacity: 0.8,
                  textDecorationLine : 'underline'
              }}> Lindked Here </Typography>
            </Box>

            {/* Third box end here */}

            {/* Fourth box */}
            <Box>
            <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: 600,
                  fontSize: "16px",
                  lineHeight: "95%",
                  color: "#FFFFFF",
                  mb: "25px",
                  mt : {xs :'30px' , sm :'0px'}
                }}
              >
                Contact Us
              </Typography>

              <Stack
                  direction="row"
                  alignItems="flex-start"
                  sx={{ mb: "30px" }}
                >
                  <Box component="img" src={locationFooter}></Box>
                  <Typography
                    sx={{
                        width : '267px',
                      fontFamily: "Poppins",
                      fontStyle: "normal",
                      fontWeight: 400,
                      fontSize: {xs : '14px' , sm : '16px'},
                      lineHeight: "133%",
                      color: "#FFFFFF",
                      ml: "20px",
                    }}
                  >
                    Leo dui fermentum tristique urna tellus eget amet aliquam.
                    Id vitae orci
                  </Typography>
                </Stack>

                <Stack
                  direction="row"
                  alignItems="flex-start"
                  sx={{ mb: "30px" }}
                >
                  <Box component="img" src={messageFooter}></Box>
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontStyle: "normal",
                      fontWeight: 400,
                      fontSize: {xs : '14px' , sm : '16px'},
                      lineHeight: "133%",
                      color: "#666666",
                      ml: "20px",
                      width : '200px',
                      color : ' #FFFFFF',
                      opacity  : 0.8
                    }}
                  >
                    email@email.com 
                    support@email.com
                  </Typography>
                </Stack>

                <Stack
                  direction="row"
                  alignItems="flex-start"
                  sx={{ mb: "30px" }}
                >
                  <Box component="img" src={phoneFooter}></Box>
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontStyle: "normal",
                      fontWeight: 400,
                      fontSize: {xs : '14px' , sm : '16px'},
                      lineHeight: "133%",
                      color : ' #FFFFFF',
                      opacity  : 0.8,
                      ml: "20px",
                    }}
                  >
                    +29 98595 8998
                  </Typography>
                </Stack>
            </Box>

            {/* End of fourth box */}
          </Stack>
           <Box sx={{
            height : '0px',
            border: '1px solid #C9C9C9',
            mt : '50px',
            ml : {xs :'10px' , sm : '20px', md : '60px'},
            mr : {xs :'10px' , sm : '20px', md : '60px'},
           }}>

           </Box>
           <Box>
            <Stack direction='row' justifyContent='space-between' sx={{
                mt : '25px',
                pb : '25px',
                ml : {xs :'10px' , sm : '20px', md : '60px'},
                mr : {xs :'10px' , sm : '20px', md : '60px'},
            }}>
                <Typography sx={{
                     fontFamily: "Poppins",
                      fontStyle: "normal",
                      fontWeight: 400,
                      fontSize:'14px' ,
                      lineHeight: "91%",
                      color : ' #FFFFFF',
                      
                }}>
                All Rights Reserved
                </Typography>
                <Box>
                 <Box component='img' src={facebook} sx={{mr : '20px'}}></Box>
                 <Box component='img' src={insta} sx={{mr : '20px'}}></Box>
                 <Box component='img' src={twitter}></Box>
                </Box>
            </Stack>
           </Box>
        </Box>
      </Container>
    </Fragment>
  );
};

export default Footer;
