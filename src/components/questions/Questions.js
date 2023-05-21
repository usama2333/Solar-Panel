import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React, { Fragment, useState } from "react";
import newDots from "../../assests/images/newDots.png";
import newCircle from "../../assests/images/newCircle.png";
import { innerText, lowerText, outerBox, textBox } from "./style";

const data = [
    {
        name : 'Chi monta l’impianto S.I.R.E.?'
    },
    {
        name : 'E’ necessario richiedere autorizzazioni al condominio?'
    },
    {
        name : 'E’ necessario predisporre pratiche per il GSE? '
    },
    {
        name : 'L’impianto è garantito?'
    },
    {
        name : 'E’ possibile usufruire di bonus fiscali?'
    },
]

const Questions = () => {

    const [boxHeight , setBoxHeight] = useState('97px');
    const [show , setShow] = useState('flex');

    const checkHeight = () => {
        setBoxHeight((pre) => (pre == "97px" ? "56px" : "97px"));
        setShow((pre) => (pre == "flex" ? "none" : "flex"));
      };
  return (
    <Fragment>
      <Container maxWidth="xl" >
        <Box>
          {/* first text */}
          <Box sx={{ position: "relative" , }}>
            <Box
              component="img"
              src={newDots}
              sx={{
                position: "absolute",
                right: "150px",
                top: "30px",
                zIndex: 2,
                display : {xs : 'none' , md : 'flex'}
              }}
            ></Box>
            <Box
              component="img"
              src={newCircle}
              sx={{
                position: "absolute",
                top: "50px",
                right: "100px",
                display : {xs : 'none' , md : 'flex'}
              }}
            ></Box>

            <Box
              sx={{
                pt: "50px",

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
                    fontSize: {
                      xs: "30px",
                      sm: "32px",
                      md: "34px",
                      lg: "36px",
                    },
                    lineHeight: "84%",
                    color: "#363636",
                    textAlign: "center",
                  }}
                >
                  Frequently Asked Questions
                </Typography>

                <Typography
                  sx={{
                    border: "2px solid #86BE3F",
                    height: "0px",
                    width: "119px",
                    mt: "30px",
                    ml: { xs: "120px", sm: "130px", md: "150px", lg: "170px" },
                  }}
                ></Typography>
              </Box>
            </Box>
          </Box>
          {/* End */}

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Stack>
              {/* First box */}
              <Box
                sx={{
                  width: {lg : '1100px' , md : '900px', sm : '590px', xs : 'auto'},
                  height: boxHeight,
                  background: "#FFFFFF",
                  boxShadow: "0px 1px 10px rgba(0, 0, 0, 0.08)",
                  borderRadius: "6px",
                  mb :'20px'
                }}
              >
                <Box>
                  <Stack direction="row" sx={{ mt: "16px", mb: {xs : '6px' , md : '16px'} }}>
                    <Typography onClick={checkHeight}
                      sx={{
                        fontFamily: "Poppins",
                        fontStyle: "normal",
                        fontWeight: 500,
                        fontSize: "16px",
                        lineHeight: "24px",
                        color: "#363636",
                        ml: "30px",
                      }}
                    >
                      -
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        fontStyle: "normal",
                        fontWeight: 500,
                        fontSize: {xs : '14px' , sm : '16px'},
                        lineHeight: "24px",
                        color: "#363636",
                        ml: "30px",
                      }}
                    >
                      Chi monta limpianto S.I.R.E.?
                    </Typography>
                  </Stack>
                </Box>
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: {xs : '12px' , sm :'12px' , md : '14px'},
                    lineHeight: {xs : '20px' , sm : '24px'},
                    color: "#54595F",
                    ml: {xs : '10px' , sm : '30px'},
                    display : show
                  }}
                >
                  S.I.R.E. può essere montato come una tenda sul balcone o come
                  pensilina sulla vetrina, porta, finestra
                </Typography>
              </Box>

              {/* End first box */}

               {/* Other */}
               {data.map((data) => (

              
               <Box
                sx={{
                  width: {lg : '1100px' , md : '900px' , sm : '590px' , xs : 'auto'},
                  height: '56px',
                  background: "#FFFFFF",
                  boxShadow: "0px 1px 10px rgba(0, 0, 0, 0.08)",
                  borderRadius: "6px",
                  mb : '20px'
                }}
              >
                <Box>
                  <Stack direction="row" sx={{ mt: {xs : '10px' , sm :'16px'}, mb: {xs : '10px' , sm :'16px'} }}>
                    <Typography 
                      sx={{
                        fontFamily: "Poppins",
                        fontStyle: "normal",
                        fontWeight: 500,
                        fontSize: "16px",
                        lineHeight: "24px",
                        color: "#363636",
                        ml: "30px",
                      }}
                    >
                      +
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        fontStyle: "normal",
                        fontWeight: 500,
                        fontSize: {xs : '14px' , md : '16px'},
                        lineHeight: "24px",
                        color: "#363636",
                        ml: "30px",
                      }}
                    >
                      {data.name}
                    </Typography>
                  </Stack>
                </Box>
                
              </Box>
              ))}
              {/* Other box */}
            </Stack>
          </Box>
          <Stack direction='row' justifyContent='center'>
          <Button variant="contained" sx={{
            textTransform : 'capitalize',
            background : '#86BE3F',
            mb : '50px',
            mt : '50px'
          }}>
          Collegati al sole
          </Button>
          
          </Stack>

          <Box sx={{
            position : 'relative'
          }}>

<Box
              component="img"
              src={newDots}
              sx={{
                position: "absolute",
                left: {xs : '0px' , sm : '170px'},
                top: "-80px",
                zIndex: 2,
              }}
            ></Box>
            <Box
              component="img"
              src={newCircle}
              sx={{
                position: "absolute",
                top: "-50px",
                left: {xs : '0px' , sm : '120px'},
              }}
            ></Box>

          </Box>
          
        </Box>
      </Container>
    </Fragment>
  );
};

export default Questions;
