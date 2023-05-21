import { Box, Container, Stack, Typography } from "@mui/material";
import React, { Fragment } from "react";
import green from "../../assests/images/green.png";
import rocket from "../../assests/images/rocket.png";

const NewsLetter = () => {
  return (
    <Fragment>
      <Container
        maxWidth="xl"
        sx={{
          backgroundImage: `url(${green})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          //   height: "133px",
        }}
      >
        <Box>
          <Stack
            direction={{xs :'column' , md : 'row'}}
            justifyContent="space-around"
            alignItems="center"
          >
            <Box sx={{ flex: "0 0 50%" }}>
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: 600,
                  fontSize: {xs :'20px' , sm : '22px' , md :'24px'},
                  lineHeight: "80%",
                  color: "#FFFFFF",
                  mt: "35px",
                  mb: "17px",
                }}
              >
                Subscribe for Newsletter
              </Typography>

              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "112%",
                  color: "#FFFFFF",
                  mb: "28px",
                }}
              >
                Leo dui fermentum tristique urna tellus eget amet aliquam. Id
                vitae orci maecenas tortor odio
              </Typography>
            </Box>

            <Box>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent='space-between'
                sx={{
                  height: "50px",
                  width: {xs : '300px' , sm :'427px'},
                  background: "#FFFFFF",
                  borderRadius: "25px",
                  mb : {xs : '30px' , sm : '0px'}
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "80%",
                    color: "#979797",
                    ml: "27px",
                  }}
                >
                  Inserisci la tua email
                </Typography>

                <Box
                  sx={{
                    height: "39px",
                    width: "39px",
                    background: "#86BE3F",
                    borderRadius: "20px",
                    display: 'flex',
                    justifyContent : 'center',
                    alignItems : 'center',
                    mr : '5px'
                  }}
                >
                  <Box component="img" src={rocket}></Box>
                </Box>
              </Stack>
            </Box>
          </Stack>
        </Box>
      </Container>
    </Fragment>
  );
};

export default NewsLetter;
