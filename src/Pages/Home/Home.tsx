import { Box, Typography, Button } from '@mui/material';
import Features from '../../Components/Features';
import Intro from './Intro';
import FeaturedProd from './FeaturedProd';
import Banner from '../../Components/Banner';
import banner from '../../Data/banner/b2.jpg'
import NewProd from './NewProd';
import Banners from './Banners'
import Footer from '../../Components/Footer';

function Home() {

  return (
  <Box>
    <Intro/>  
    <Features/>
    <Typography variant="h2" color="black" mt='60px' sx={{fontWeight:'500', textAlign:'center'}}>Featured Products</Typography>
    <Typography variant="subtitle1" sx={{textAlign:'center'}}>Summer Collection New Modern Design</Typography>
    <FeaturedProd/>
    <Banner url={banner} my='60px'>
      <Typography variant="h6" color="white">Repair Services</Typography>
      <Typography variant="h3" color="white">Up to <span style={{color:'#23A99E'}}>70% off</span> - All t-Shirts & accessories</Typography>
      <Button sx={{color:'black', backgroundColor:'white', '&:hover':{backgroundColor:'#23A99E', color:'white'}, padding:'10px'}}>Explore More</Button>
    </Banner>
    <Typography variant="h2" color="black" mt='60px' sx={{fontWeight:'500', textAlign:'center'}}>New Arrivals</Typography>
    <Typography variant="subtitle1" sx={{textAlign:'center'}}>Summer Collection New Modern Design</Typography>
    <NewProd/>
    <Banners/>
    <Footer/>
  </Box>
  )
}

export default Home