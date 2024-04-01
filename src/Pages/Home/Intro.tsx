import hero from '../../Data/logo/homePageShop.svg'
import but from '../../Data/logo/button.png'
import { Link } from 'react-router-dom';
import {Box, Stack, Typography, Button, useTheme} from '@mui/material';


function Intro() {
    
    const theme = useTheme()  

  return (
    <Box
      bgcolor={theme.palette.primary.main}
      sx={{width:'100svw',height:{lg:'100svh', xs:'auto'} , minHeight:{lg:'100svh'}, paddingTop:'70px', maxWidth:'100%'}}
      >
      <Stack sx={{maxWidth:'1400px', height: '100%', alignItems:'center', marginLeft:'auto', marginRight: 'auto', padding:'30px',
        flexDirection: {lg:'row', xs:'column'}}}>
        <Box sx={{width:{lg:"50%", xs:'100%'}, textAlign:{xs: 'center', lg:'start'}, marginBottom:'40px'}}>
          <Typography variant='h6' sx={{color:'#252731'}}>Trade-in-offer</Typography>
          <Typography variant='h2' sx={{color:'#222328', fontWeight: '500'}}>Super value deals</Typography>
          <Typography variant='h2' sx={{color:'#23A99E', fontWeight: '500'}}>On all products</Typography>
          <Typography variant='subtitle1' my='10px' mb='20px'>save more with coupone & up to 70% off!</Typography>
          <Box sx={{ backgroundImage: `url(${but})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain',
            backgroundPosition: 'center', display:'inline', padding: '60px', paddingTop:'15px', paddingBottom:'15px'}}>
            <Link to='shop' style={{textDecoration:'none',  fontWeight:'600'}}>
              <Button sx={{color:'#23A99E', }}> shop Now </Button>
            </Link>
          </Box>
        </Box>
        <Box sx={{width:{lg:"50%", xs:'100%'}, maxWidth:'fit-content', maxHeight: 'fit-content', height: '100%'}}>
          <img src={hero} style={{width:'100%', height:'100%', userSelect:'none'}}/>
        </Box>
      </Stack>
    </Box>
    )
}

export default Intro