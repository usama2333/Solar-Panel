import { Box, Container, Stack, Typography } from '@mui/material'
import React, { Fragment } from 'react';
import profile1 from '../../assests/images/profile1.png';
import profile2 from '../../assests/images/profile2.png';
import profile3 from '../../assests/images/profile3.png';
import left from '../../assests/images/left.png';
import right from '../../assests/images/right.png';
import dots from '../../assests/images/dots.png';

const Profile = () => {
  return (
    <Fragment>

     <Container maxWidth='xl'>

     <Box sx={{mt : '80px', position :'relative' }}>
     <Box component='img' src={dots} sx={{
        position : 'absolute',
        zIndex : -3
        
     }}>

     </Box>
        <Box sx={{display : 'flex' , alignItems : 'center', flexDirection : 'column'}}>
            <Typography sx={{
                 fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: 600,
              fontSize: {xs : '20px' ,sm :'24px',md :'28px' , lg : '32px', xl :'36px'},
              lineHeight: '84%',
              /* identical to box height */
              textTransform: 'uppercase',
             color: '#363636',
             

            }}>
            Chi Siamo
            </Typography>

            <Box sx={{
                border: '2px solid #86BE3F',
                width : {xs : '80px', sm : '90px' , md : '100px',lg :'100px', xl :'119px'},
                mt  : '20px',
                height : '0px'
                
            }}>

            </Box>

        </Box>
       
        <Typography sx={{
                 fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: {xs : '14px' ,sm : '15px', xl : '17px'},
              lineHeight: '155%',
             color: '#363636',
             textAlign : 'center',
             ml : {xs :'10px' , lg :'100px'},
             mr : {xs :'10px' , lg :'100px'},
             mt : '26px',
             mb : '26px'

            }}>
       Solar Innovatio è una PMI innovativa italiana specializzata nella progettazione e realizzazione di sistemi fotovoltaici intelligenti. Solar Innovatio unisce alla decennale esperienza maturata nel panorama italiano nell'ambito delle soluzioni fotovoltaiche un approccio ingegneristico, innovativo, digitale alla principale fonte di energia rinnovabile.
       </Typography>

  
       <Stack direction='row' justifyContent='space-around' flexWrap='wrap'
       sx={{mt : '150px' , mb : '50px', ml : '50px' , mr : '50px'}}
       >
        <Box sx={{
            position : 'relative',
            pb : {xs : '170px' , lg : '0px'}
        }}>
          <Box sx={{
            background: '#F8F8F8',
            borderRadius: '6px',
            height : {lg :'277px' ,md : '240px', sm : '260px', xs : '240px'},
            width : {lg : '350px' , md : '300px', sm : '320px', xs : '300px'}
          }}>

          <Box component='img' src={profile1} sx={{
            position : 'absolute',
            top : '-100px',
            left : {lg : '85px' , md : '65px', sm :'75px', xs : '65px'},
            width : {lg : '183px' , md : '170px', md :'170px' , xs : '160px'},
            height : {lg : '174px' , md :'160px',  md :'160px', xs : '150px'},
            // display : {sm : 'none' , md : 'flex'}
          }}>

          </Box>

          <Typography sx={{
             fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: {md :'18px' , lg : '20px'},
              lineHeight: '22px',
             color: '#363636',
             textAlign :'center',
             pt :{lg : '98px' , md : '80px', sm : '80px', xs : '70px'}
          }}>
          Cristian Testoni
          </Typography>

          <Typography sx={{
             fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: {md : '13px' , lg : '14px', sm : '13px', xs : '12px'},
              lineHeight: '20px',
             color: '#666666',
             textAlign :'center',
             ml : '10px',
             mr : '10px',
             mt : '10px'
            
          }}>
          Ingegnere Meccanico, MBA. Ho ricoperto cariche di consulente e progettista in aziende meccaniche. Ho avviato come imprenditore svariate iniziative in ambito Automotive e mobilità elettrica. 
          </Typography>


             
          </Box>

        </Box>


        {/* Second box */}

        <Box sx={{
            position : 'relative',
            pb : {xs : '170px' , lg : '0px'}
        }}>
          <Box sx={{
            background: '#F8F8F8',
            borderRadius: '6px',
            height : {lg :'277px' ,md : '240px', sm : '260px', xs : '240px'},
            width : {lg : '350px' , md : '300px', sm : '320px', xs : '300px'}
          }}>

          <Box component='img' src={profile2} sx={{
            position : 'absolute',
            top : '-100px',
            left : {lg : '85px' , md : '65px', sm :'75px', xs : '65px'},
            width : {lg : '183px' , md : '170px', md :'170px' , xs : '160px'},
            height : {lg : '174px' , md :'160px',  md :'160px', xs : '150px'},
            // display : {sm : 'none' , md : 'flex'}
          }}>

          </Box>

          <Typography sx={{
             fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: {md :'18px' , lg : '20px'},
              lineHeight: '22px',
             color: '#363636',
             textAlign :'center',
             pt :{lg : '98px' , md : '80px', sm : '80px', xs : '70px'}
          }}>
          Francesco Gavioli
          </Typography>

          <Typography sx={{
             fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: {md : '13px' , lg : '14px', sm : '13px', xs : '12px'},
              lineHeight: '20px',
             color: '#666666',
             textAlign :'center',
             ml : '10px',
             mr : '10px',
             mt : '10px'
            
          }}>
          Nel corso degli anni ho maturato una profonda conoscenza nella progettazione e realizzazione di impianti elettrici e di energia rinnovabile. Dal 2020 sono fondatore di Gavioli Impianti, azienda all’avanguardia nell’installazione di impianti fotovoltaici 
          </Typography>


             
          </Box>

        </Box>

        {/* Third box */}



        <Box sx={{
            position : 'relative',
            // mb :'170px'
        }}>
          <Box sx={{
            background: '#F8F8F8',
            borderRadius: '6px',
            height : {lg :'277px' ,md : '240px', sm : '260px', xs : '240px'},
            width : {lg : '350px' , md : '300px', sm : '320px', xs : '300px'}
          }}>

          <Box component='img' src={profile3} sx={{
            position : 'absolute',
            top : '-100px',
            left : {lg : '85px' , md : '65px', sm :'75px', xs : '65px'},
            width : {lg : '183px' , md : '170px', md :'170px' , xs : '160px'},
            height : {lg : '174px' , md :'160px',  md :'160px', xs : '150px'},
            // display : {sm : 'none' , md : 'flex'}
          }}>

          </Box>

          <Typography sx={{
             fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: {md :'18px' , lg : '20px'},
              lineHeight: '22px',
             color: '#363636',
             textAlign :'center',
             pt :{lg : '98px' , md : '80px', sm : '80px', xs : '70px'}
          }}>
          Massimo Fabi
          </Typography>

          <Typography sx={{
             fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: {md : '13px' , lg : '14px', sm : '13px', xs : '12px'},
              lineHeight: '20px',
             color: '#666666',
             textAlign :'center',
             ml : '10px',
             mr : '10px',
             mt : '10px'
            
          }}>
         Laurato in Economia e Commercio mi sono occupato per anni di Business Development sia in multinazionali che PMI italiane in differenti settori
          </Typography>


             
          </Box>

        </Box>


       </Stack>


       <Stack direction='row' sx={{
        // ml : '250px' , mr : '250px'
        ml : {xs :'5px',sm : '50px' , md : '100px', lg : '150px' },
        mr : {xs : '5px', sm : '50px', md : '100px', lg : '150px'}
       }}>
          <Box component = 'img' src={left} sx={{width :'20px ' , height :'20px' , mr : '7px'}}>

          </Box>

          <Typography sx={{
             fontFamily: "Poppins",
              fontStyle: "italic",
              fontWeight: 500,
              fontSize: {xs : '16px' , sm : '17px' , md : '18px' , lg : '20px' , xl :'21px'},
              lineHeight: '30px',
             color: '#363636',
          }}>
          Non sviluppiamo pannelli fotovoltaici. Il pannello è solo una componente di una soluzione ingegneristica più completa che comprende sensoristiche avanzate e l'integrazione con i sistemi domotici di casa.
          </Typography>


          <Box component = 'img' src={right} sx={{width :'20px ' , height :'20px' , ml :'3px'}}>

          </Box>
       </Stack>

       <Stack direction='row' alignItems='center' justifyContent='center' sx={{
        mt :'30px'
       }}>
        <Box sx={{
            width : '14px',
            border: '1px solid #86BE3F',
            height : '0px',
            mr : '5px'

        }}>

        </Box>
        <Typography sx={{
             fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: {xs : '16px' , sm : '18px'},
              lineHeight: '91%',
             color: '#86BE3F',
        }}>
        Cristian Testoni
        </Typography>
        <Box sx={{
            width : '14px',
            height :'0px',
            border: '1px solid #86BE3F',
            ml : '5px'
        }}>

        </Box>
       </Stack>

       





     </Box>

     </Container>
      
    </Fragment>
  )
}

export default Profile
