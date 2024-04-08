import Banner from '../../Components/Banner'
import { Box, Button, Stack, Typography } from '@mui/material'
import banner from '../../Data/banner/b-cart.png'
import about from '../../Data/about/a5.jpg'
import Features from '../../Components/Features'

function About() {
  return (
    <>
      <Banner url={banner} my='60px' jCen mdCon>
        <Typography variant="h3" color="white" mb='7px'>#KnowUs</Typography>
        <Typography variant="subtitle1" color='#E3E3E3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</Typography>
      </Banner>
      <Stack sx={{maxWidth:'1400px', marginLeft:'auto', marginRight:'auto', flexDirection:{md:'row', xs:'column-reverse'}, alignItems:'center', textAlign:{md:'auto', xs:'center'}}}>
        <Box sx={{height:'min-content', width:{md:'45%', xs:'100%'}, padding:{md:'30px', xs:'0px'},}}>
          <img src={about} style={{width:'100%'}} className='proDets'/>
        </Box>
        <Box sx={{padding:{md:'30px', xs:'10px'}, width:{md:'55%'}, marginBottom:{xs:'20px', md:'0px'}}}>
          <Typography variant="h3" color="initial" mb='15px' sx={{fontWeight:'500', textAlign:'self-start'}}>Who Are We ?</Typography>
          <Typography variant="subtitle1" color="smokewhite">Lorem ipsum dolor sit amet conser asicing elit. Eedita ipsum rlendus, veniam natus fugit lauur quaerat ratione peratis? Quod, doore eius. Quos Lorem ipsum dolor sit amet consecte sicing elit. Eum fugit adipici dolorem nisi numquam qbusdam. Aperiam exercitationem consequatur at est delectus eos, praesentium voluptate provident ipsa quod quas incidunt voluptates?</Typography>
          <Typography variant="h6" color="smokewhite" sx={{textDecoration:'underline', mt:'10px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque.</Typography>
        </Box>
      </Stack>
      <Features/>
    </>
  )
}

export default About