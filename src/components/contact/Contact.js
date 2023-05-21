import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React, { Fragment } from "react";
import mobile from "../../assests/images/mobile.png";
import letter from "../../assests/images/letter.png";
import location from "../../assests/images/location.png";
import TextField from "@mui/material/TextField";

const Contact = () => {
  return (
    <Fragment>
      <Container maxWidth="xl" sx={{ pb: "70px" }}>
        <Box>
          {/* first text */}
          <Box
            sx={{
              pt: "40px",
              // pb : '40px',
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                mb: "50px",
              }}
            >
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
                CONTATTACI
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

          <Stack direction={{lg : 'row' , md : 'column'}} justifyContent="space-around" alignItems='center'>
            <Box
              sx={
                {
                  // flex: "0 0 40%",
                }
              }
            >
              <Box
                sx={{
                  width: "350px",
                  //   height: "344px",
                  background: "#FFFFFF",
                  border: "1px solid #DEDEDE",
                  borderRadius: "9px",
                  boxSizing: "border-box",
                  padding: "20px",
                  mb : {xs : '50px' , lg : '0px'}
                }}
              >
                <Stack
                  direction="row"
                  alignItems="flex-start"
                  sx={{ mb: "30px" }}
                >
                  <Box component="img" src={location}></Box>
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontStyle: "normal",
                      fontWeight: 400,
                      fontSize: {xs : '14px' , sm : '16px'},
                      lineHeight: "133%",
                      color: "#666666",
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
                  <Box component="img" src={letter}></Box>
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontStyle: "normal",
                      fontWeight: 400,
                      fontSize: {xs : '14px' , sm : '16px'},
                      lineHeight: "133%",
                      color: "#666666",
                      ml: "20px",
                    }}
                  >
                    email@email.com support@email.com
                  </Typography>
                </Stack>

                <Stack
                  direction="row"
                  alignItems="flex-start"
                  sx={{ mb: "30px" }}
                >
                  <Box component="img" src={mobile}></Box>
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontStyle: "normal",
                      fontWeight: 400,
                      fontSize: {xs : '14px' , sm : '16px'},
                      lineHeight: "133%",
                      color: "#666666",
                      ml: "20px",
                    }}
                  >
                    +29 98595 8998
                  </Typography>
                </Stack>

                <Box
                  sx={{
                    height: "0px",
                    width: "auto",
                    border: "1px solid #DEDEDE",
                  }}
                ></Box>

                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: {xs : '14px' , sm : '16px'},
                    lineHeight: "133%",
                    color: "#363636",
                    mt: "18px",
                    mb: "20px",
                  }}
                >
                  We Will get back to you within 24 hours. Or Call us Now
                </Typography>
              </Box>
            </Box>

            <Box
              sx={
                {
                  // flex: "0 0 60%",
                }
              }
            >
              <Box
                sx={{
                  width: "auto",
                  height: "344px",
                  background: "#FFFFFF",
                  border: "1px solid #DEDEDE",
                  borderRadius: "9px",
                  display : 'flex',
                  flexDirection :'column',
                  alignItems : 'center'
                }}
              >
                <Stack
                  direction="row"
                //   justifyContent="space-between"
                  sx={{ mt: "28px" }}
                >
                  <Box>
                    <TextField
                      sx={{ width: {sm : '250px' , md :'329px',xs : '130px' }, height: "5px", mr : '30px' }}
                      id="outlined-basic"
                      label="First Name"
                      variant="outlined"
                    />
                  </Box>
                  <Box>
                    <TextField
                      sx={{  width: {sm : '250px' , md :'329px', xs : '130px'}, height: "45px" }}
                      id="outlined-basic"
                      label="Last Name"
                      variant="outlined"
                    />
                  </Box>
                </Stack>
                <TextField
                  sx={{
                    width: {md :'690px' , sm : '550px', xs : '300px'},
                    height: "45px",
                    mt: "24px",
                    ml: "12px",
                    mr : '12px' 
                  }}
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                />
                <Box
                  sx={{
                    height: "115px",
                    width: {md :'690px' , sm : '550px', xs : '300px'},
                    boxSizing: "border-box",
                    border: "1px solid #DEDEDE",
                    borderRadius: "5px",
                    mt : '30px',
                    // ml : '20px'
                    ml: "12px",
                    mr : '12px'
                  }}
                >
                   <Typography sx={{
                     fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: "70%",
                    color: "#999999",
                    mt :'17px',
                    ml :'17px'
                   
                   }}>
                    Message
                   </Typography>
                </Box>
                <Stack direction='row' justifyContent='end' alignSelf='flex-end' sx={{mr :'20px'}}>
          <Button variant="contained" sx={{
            textTransform : 'capitalize',
            background : '#86BE3F',
            // mb : '50px',
            mt : '10px',
            padding : '5px 40px'
          }}>
          Send
          </Button>
        
          </Stack>
              </Box>
            </Box>
          </Stack>
          
        </Box>
      </Container>
    </Fragment>
  );
};

export default Contact;
