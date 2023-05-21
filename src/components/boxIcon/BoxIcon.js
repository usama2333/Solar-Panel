import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React, { Fragment } from "react";
import backgroundBoxes from "../../assests/images/backroundBoxes.png";
import cardIcon1 from "../../assests/images/cardIcon1.png";
import cardIcon2 from "../../assests/images/cardIcon2.png";
import cardIcon3 from "../../assests/images/cardIcon3.png";
import cardIcon4 from "../../assests/images/cardIcon4.png";
import box1 from "../../assests/images/box1.png";
import box2 from "../../assests/images/box2.png";
import box3 from "../../assests/images/box3.png";
import box4 from "../../assests/images/box4.png";
import { iconBox, iconName, iconText } from "./style";

const data = [
  {
    outer: box1,
    icon: cardIcon1,
    name: "Richiedi un Preventivo",
    text: "Senza impegno un nostro Solar expert ti contatterâ per verificare Ie tue esirenzeditilizzn",
  },
  {
    outer: box2,
    icon: cardIcon2,
    name: "Verifica la compatibilitâ",
    text: "Verifica immediata della necessitâ tecniche di installazione",
  },
  {
    outer: box3,
    icon: cardIcon3,
    name: "Installazione",
    text: "Un instalIatore qualificato Solar Innovatio posizionerâ il SIRE in massimo 2 ore",
  },
  {
    outer: box4,
    icon: cardIcon4,
    name: "Enjoy your Sun Power",
    text: "Connettiti alla APP e  goditi la tua energia  solare",
  },
];

const BoxIcon = () => {
  return (
    <Fragment>
      <Container
        maxWidth="xl"
        sx={{
          backgroundImage: `url(${backgroundBoxes})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          //   height: "567px",
        }}
      >
        <Box>
          {/* first text */}
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
                  fontSize: { xs: "30px", sm: "32px", md: "34px", lg: "36px" },
                  lineHeight: "84%",
                  color: "#363636",
                  textAlign: "center",
                }}
              >
                Connettiti al sole anche tu
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

          {/* End */}

          {/* CArds section here */}

          <Stack
            direction="row"
            justifyContent="space-evenly"
            flexWrap="wrap"
            sx={{
              mt: "30px",
            }}
          >
            {data.map((data) => (
              <Box
                sx={{
                  position: "relative",
                  mb: { xs: "50px", sm: "70px", lg: "50px" },
                }}
              >
                <Box
                  component="img"
                  src={data.outer}
                  sx={{
                    position: "absolute",
                    left: "-15px",
                    top: "-15px",
                  }}
                ></Box>
                <Box sx={iconBox}>
                  <Box
                    component="img"
                    src={data.icon}
                    sx={{ mt: "30px" }}
                  ></Box>
                  <Typography sx={iconName}>{data.name}</Typography>
                  <Typography sx={iconText}>{data.text}</Typography>
                </Box>
              </Box>
            ))}
          </Stack>
          {/* End of card section here */}

         <Stack direction='row' justifyContent='center'>
          <Button variant="contained" sx={{
            textTransform : 'capitalize',
            background : '#86BE3F',
            mb : '50px'
          }}>
          Collegati al sole
          </Button>
          </Stack>


        </Box>
      </Container>
    </Fragment>
  );
};

export default BoxIcon;
