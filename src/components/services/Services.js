import { Box, Container, Stack, Typography } from "@mui/material";
import React, { Fragment } from "react";
import backgroundImg from "../../assests/images/background.png";
import icon1 from "../../assests/images/icon1.png";
import icon2 from "../../assests/images/icon2.png";
import icon3 from "../../assests/images/icon3.png";
import icon4 from "../../assests/images/icon4.png";
import icon5 from "../../assests/images/icon5.png";

const data = [
  {
    img: icon1,
    name: "Versatile",
    text: "Installabile in qualsiasi balcone anche all interno del condominio. Non richiede autorizzazioni ne opere murarie. Utile anche come schermatura solare",
  },
  {
    img: icon2,
    name: "Automatizzato",
    text: "Totalmente automatico e retraibile, S.I.R.E regola la quantità di sole in casa in base alle necessità. Un perfetto connubio tra sole e ombra. I suoi sensori regolano l esposizione in base alle condizioni atmosferiche.",
  },
  {
    img: icon3,
    name: "Efficiente",
    text: "Il sistema di accumulo permette di conservare l’energia generata in eccesso e renderla disponibile quando serve, per esempio di sera o in giornate nuvolose.",
  },
];

const data2 = [
  {
    img: icon3,
    name: "Indipendente e Green",
    text: "dalle fonte non rinnovabili non è più un’utopia. S.i.r.e. fornisce l’accesso a fonti energetiche green anche a chi non ha un tetto di proprietà.",
  },
  {
    img: icon4,
    name: "Connesso",
    text: "Il sistema si connette ai dispositivi Alexa, Google, elettrodomestici 2.0 wi-fi. Tramite l’app accedi ai dati di produzione dell’energia e ricevi notifiche e suggerimenti per l’utilizzo ottimale dell’energia autoprodotta.",
  },
  {
    img: icon5,
    name: "Resistente",
    text: "Il sistema è realizzato con un rivestimento protettivo, impermeabile, isolante e resistente a fenomeni atmosferici aggressivi, all’abrasione, urti e graffi.",
  },
];

const Services = () => {
  return (
    <Fragment>
      <Container
        maxWidth="xl"
        sx={{
          background: `url(${backgroundImg})`,
          backgroundSize: "cover",
        //   height: "757px",
          mt: {xs  :'80px' , sm : '250px'},
        }}
      >
        <Box
          sx={{
            pt: "80px",
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
                 textAlign :'center'
              }}
            >
              Connesso, Intelligente, Resistente
            </Typography>
            <Typography
              sx={{
                border: "2px solid #86BE3F",
                height: "0px",
                width: "119px",
                mt: "30px",
                ml: {xs : '120px' , sm : '200px'},
              }}
            ></Typography>
          </Box>
        </Box>

        <Box
          sx={{
            ml: {xs : '20px' , sm :'90px'},
            // mr : '20px',
            mt: "70px",
            // width: "75%",
          }}
        >
          <Stack  direction={{xs : 'column' , md : 'row'}}>
            <Box
              sx={{
                flex: "0 0 50%",
                // ml : '100px'
              }}
            >
              {data.map((data) => (
                <Stack
                  direction="row"
                  sx={{
                    mb: "40px",
                  }}
                >
                  <Box
                    component="img"
                    src={data.img}
                    sx={{
                      height: "25px",
                      width: "30px",
                      border: "3px solid #86BE3F",
                      borderRadius: "100%",
                      padding: "8px",
                      mr: "20px",
                    }}
                  ></Box>
                  <Box>
                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        fontStyle: "normal",
                        fontWeight: 600,
                        fontSize: "20px",
                        lineHeight: "84%",
                        color: "#1E1E1E",
                        mb: "10px",
                      }}
                    >
                      {data.name}
                    </Typography>

                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: "18px",
                        lineHeight: "128%",
                        color: "#363636",
                        width :{xs : '100%' , sm : '75%'}
                      }}
                    >
                      {data.text}
                    </Typography>
                  </Box>
                </Stack>
              ))}
            </Box>

            <Box
              sx={{
                flex: "0 0 50%",
                
              }}
            >
              {data2.map((data) => (
                <Stack
                  direction="row"
                  sx={{
                    mb: "40px",
                  }}
                >
                  <Box
                    component="img"
                    src={data.img}
                    sx={{
                      height: "25px",
                      width: "30px",
                      border: "3px solid #86BE3F",
                      borderRadius: "100%",
                      padding: "8px",
                      mr: "20px",
                    }}
                  ></Box>
                  <Box>
                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        fontStyle: "normal",
                        fontWeight: 600,
                        fontSize: "20px",
                        lineHeight: "84%",
                        color: "#1E1E1E",
                        mb: "10px",
                      }}
                    >
                      {data.name}
                    </Typography>

                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: "18px",
                        lineHeight: "128%",
                        color: "#363636",
                        width : '75%'
                      }}
                    >
                      {data.text}
                    </Typography>
                  </Box>
                </Stack>
              ))}
            </Box>
          </Stack>
        </Box>
      </Container>
    </Fragment>
  );
};

export default Services;
