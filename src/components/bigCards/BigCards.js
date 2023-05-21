import { Box, Container, Stack } from "@mui/material";
import { Fragment } from "react";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import cardMedia1 from "../../assests/images/cardMedia1.png";
import cardMedia2 from "../../assests/images/cardMedia2.png";
import arrow from "../../assests/images/arrow.png";
import battery from "../../assests/images/battery.png";
import family from "../../assests/images/family.png";
import { lowerTextSx, textSx } from "./style";
import box1 from '../../assests/images/box1.png';
import box2 from '../../assests/images/box2.png';
import box3 from '../../assests/images/box3.png';
import box4 from '../../assests/images/box4.png';
import cardIcon1 from '../../assests/images/cardIcon1.png';
import cardIcon2 from '../../assests/images/cardIcon2.png';
import cardIcon3 from '../../assests/images/cardIcon3.png';
import cardIcon4 from '../../assests/images/cardIcon4.png';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const data1 = [
    {
        name : 'Sistema Plugin'
    },
    {
        name : 'Struttura meccanizzata in poliuera e sensoristica intelligente'
    },
    {
        name : 'Pannelli alta efficienza da 1KW'
    },
    {
        name : 'Inverter e conne ssione aII impianto domestico'
    },
    {
        name : 'App di controllo e gesti one'
    },

]


const data2 = [
  {
      name : 'Te mpo di ricarica medio in estate'
  },
  {
      name : 'TBD Tempo di scarica a 16A.'
  },
  {
      name : 'TBD Autonomia dalla rete elettrica.'
  },
  {
      name : 'TBD Autonomia in casa di blackout.'
  },
  {
      name : '2gg Immissione di CO2 da 1.022 kg a SOO kg annui'
  },
  {
    name : 'Te mpo di ricarica medio in estate.'
},

]


const data3 = [
  {
      name : 'Struttura meccanizzata in poliuera e sensoristica intelligente'
  },
  {
      name : 'Pannelli alta efficienza da 1KW.'
  },
  {
      name : 'Inverter e conne ssione aII impianto domestico'
  },
  {
      name : 'App di controllo e gesti one'
  },
 

]


const data4 = [
  {
      name : 'Siste ma 2 kW con accumuIo.'
  },
  {
      name : 'Tempo di ricarica medio in estate is 5 ore e 30 minuti'
  },
  {
      name : 'Te mpo di scarica a 16A is 8 ore.'
  },
  {
      name : 'Autonomia dalla rete eIettrica 62Po.'
  },
 

]


const BigCards = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Fragment>
      <Container maxWidth="xl">
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
            <Box sx={{
              mb : '50px'
            }}>
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
                Scegli il tuo SIRE
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
          <Stack direction='row' justifyContent='space-around' flexWrap='wrap' sx={{mb : '70px'}}>
            {/* First Card */}
            <Box
              sx={{
                // flex: "0 0 50%",
                mb : {xs : '50px' , lg : '0px'}
              }}
            >
              <Card sx={{ maxWidth: {md : '540px' , sm : '400px' , xs : '350px'} }}>
                {/* <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      /> */}
                <CardMedia />
                <Box component="img" src={cardMedia1}></Box>
                <CardContent>
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontStyle: "normal",
                      fontWeight: 600,
                      fontSize: "24px",
                      lineHeight: "88%",
                      color: "#86BE3F",
                      mb: "26px",
                    }}
                  >
                    S.I.R.E Direct
                  </Typography>

                {data1.map((data) => (

              
                  <Stack
                    direction="row"
                    alignItems="center"
                    sx={{ mb: "20px" }}
                  >
                    <Box
                      component="img"
                      src={arrow}
                      sx={{
                        width: "9px",
                        height: "9px",
                        mr: "15px",
                      }}
                    ></Box>

                    <Typography sx={textSx}>{data.name}</Typography>
                  </Stack>
                  ))}

                  <Typography sx={{
                     fontFamily: "Inter",
                      fontStyle: "normal",
                      fontWeight: 500,
                      fontSize: "16px",
                      lineHeight: "84%",
                      color: "#363636",
                      mb  :'20px'
                  }}>
                  CONSIGLIATO PER:
                  </Typography>

                  <Stack direction='row'>
                    <Box sx={{
                        height : '62px',
                        width :'62px',
                        background: '#F5F5F5',
                        borderRadius : '100px',
                        display : 'flex',
                        justifyContent : 'center',
                        alignItems : 'center',
                        mr : '50px'
                    }}>
                        <Box component='img' src={battery}>

                        </Box>
                       
                    </Box>

                    <Box sx={{
                        height : '62px',
                        width :'62px',
                        background: '#F5F5F5',
                        borderRadius : '100px',
                        display : 'flex',
                        justifyContent : 'center',
                        alignItems : 'center'
                    }}>
                        <Box component='img' src={family}>

                        </Box>
                    </Box>
                  </Stack>

                  <Stack direction='row' spacing={7} sx={{mt : '10px'}}>
                    <Typography sx={textSx}>
                        Devices
                    </Typography>
                    <Typography sx={textSx}>
                        Families
                    </Typography>
                  </Stack>


                </CardContent>
                <CardActions disableSpacing>
                  {/* <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton> */}
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontStyle: "normal",
                      fontWeight: 500,
                      fontSize: "16px",
                      lineHeight: "174%",
                      color: "#363636",
                      // mb: "26px",
                    }}
                  >
                  Scopri le caratteristiche tecniche
                  </Typography>
                  <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <CardContent>

                  {/* First stack */}
                  {data2.map((data) => (

                 
                    <Stack direction='row' sx={{mb : '18px'}}>
                     <Box sx={{
                      width : '6px',
                      height : '6px',
                      background: '#86BE3F',
                      borderRadius :' 100px',
                      mr : '10px'
                     }}></Box>

                     <Box sx={lowerTextSx}>{data.name}</Box>


                    </Stack>
                    ))}
                    {/* End of stack */}

                  </CardContent>
                </Collapse>
              </Card>
            </Box>

            {/* End First card */}

            {/* Second card */}
            <Box
              sx={{
                // flex: "0 0 50%",
                // pb : '80px'
               

              }}
            >
              
              <Card sx={{ maxWidth: {md : '540px' , sm : '400px' , xs : '350px', } }}>
                {/* <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      /> */}
                <CardMedia />
                <Box component="img" src={cardMedia2}></Box>
                <CardContent>
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontStyle: "normal",
                      fontWeight: 600,
                      fontSize: "24px",
                      lineHeight: "88%",
                      color: "#86BE3F",
                      mb: "60px",
                    }}
                  >
                    S.I.R.E Full
                  </Typography>

                {data3.map((data) => (

              
                  <Stack
                    direction="row"
                    alignItems="center"
                    sx={{ mb: "20px" }}
                  >
                    <Box
                      component="img"
                      src={arrow}
                      sx={{
                        width: "9px",
                        height: "9px",
                        mr: "15px",
                      }}
                    ></Box>

                    <Typography sx={textSx}>{data.name}</Typography>
                  </Stack>
                  ))}

                  <Typography sx={{
                     fontFamily: "Inter",
                      fontStyle: "normal",
                      fontWeight: 500,
                      fontSize: "16px",
                      lineHeight: "84%",
                      color: "#363636",
                      mb  :'20px'
                  }}>
                  CONSIGLIATO PER:
                  </Typography>

                  <Stack direction='row'>
                    <Box sx={{
                        height : '62px',
                        width :'62px',
                        background: '#F5F5F5',
                        borderRadius : '100px',
                        display : 'flex',
                        justifyContent : 'center',
                        alignItems : 'center',
                        mr : '50px'
                    }}>
                        <Box component='img' src={battery}>

                        </Box>
                       
                    </Box>

                    <Box sx={{
                        height : '62px',
                        width :'62px',
                        background: '#F5F5F5',
                        borderRadius : '100px',
                        display : 'flex',
                        justifyContent : 'center',
                        alignItems : 'center'
                    }}>
                        <Box component='img' src={family}>

                        </Box>
                    </Box>
                  </Stack>

                  <Stack direction='row' spacing={7} sx={{mt : '10px'}}>
                    <Typography sx={textSx}>
                        Devices
                    </Typography>
                    <Typography sx={textSx}>
                        Families
                    </Typography>
                  </Stack>


                </CardContent>
                <CardActions disableSpacing>
                  {/* <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton> */}
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontStyle: "normal",
                      fontWeight: 500,
                      fontSize: "16px",
                      lineHeight: "174%",
                      color: "#363636",
                      // mb: "26px",
                    }}
                  >
                  Title here if they have othervise remove this
                  </Typography>
                  <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <CardContent>

                  {/* First stack */}
                  {data4.map((data) => (

                 
                    <Stack direction='row' sx={{mb : '18px'}}>
                     <Box sx={{
                      width : '6px',
                      height : '6px',
                      background: '#86BE3F',
                      borderRadius :' 100px',
                      mr : '10px'
                     }}></Box>

                     <Box sx={lowerTextSx}>{data.name}</Box>


                    </Stack>
                    ))}
                    {/* End of stack */}

                  </CardContent>
                </Collapse>
              </Card>
            
            </Box>

            {/* End Second CArd */}
          </Stack>
        </Box>
      </Container>
    </Fragment>
  );
};

export default BigCards;
