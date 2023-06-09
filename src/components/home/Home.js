import { Box, Container, Typography } from "@mui/material";
import React, { Fragment } from "react";
import main from '../../assests/images/main.png'



const Home = () => {
  return (
    <Fragment>
      <Container
        maxWidth="xl"
        
      >
        <Box
          sx={{
            position: "relative",
          }}
        >
          <Box
            component="img"
            src={main}
            sx={{
              width: "100%",
            }}
          ></Box>

         <Box sx={{
            position : 'absolute',
            top : {md : '200px' , lg : '250px', sm :'70px', xs :'20px'},
            left : {md : '160px' , lg : '250px', sm : '40px', xs : '10px'},
         }}>

        
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: {lg : '60px' , xl : '64px', md :'58px', sm :'45px', xs : '30px'},
              lineHeight: '87%',
              /* identical to box height */

              color: "#FFFFFF",
              ml : {sm : '20px' , md : '80px'},
              mb : '25px'
            }}

          >
            Il tuo accesso al sole
          </Typography>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: {md : '20px' , lg : '22px' , xl : '24px' , sm : '16px', xs :'15px'},
              lineHeight: '141%',
              /* identical to box height */

              color: "#FFFFFF",
              opacity : 0.9
            }}
          >
            Sistemi fotovoltaici intelligenti ad uso residenziale, anche in assenza di tetto. 
          </Typography>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: {md : '20px' , lg : '22px' , xl : '24px', sm :'16px', xs :'15px'},
              lineHeight: '141%',
              /* identical to box height */

              color: "#FFFFFF",
              opacity : 0.9,
              ml : {sm : '40px' , md : '120px'},
            }}
          >
            La tua fonte d'energia, gratuita e sostenibile
          </Typography>
          </Box>
        </Box>
      </Container>
    </Fragment>
  );
};

export default Home;
