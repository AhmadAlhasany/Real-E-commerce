import { Box, Button, Grid, Typography } from '@mui/material'
import Banner from '../../Components/Banner'
import banner1 from '../../Data/banner/b16.jpg'
import banner2 from '../../Data/banner/b10.jpg'
import banner3 from '../../Data/banner/b7.jpg'
import banner4 from '../../Data/banner/b4.jpg'
import banner5 from '../../Data/banner/b18.jpg'


function Banners() {
  return (
    <Box>
        <div className='grid' >
            <Grid item sx={{height: {xs:'250px',md:'370px'},gridRow: {lg:'1 / span 3'}, gridColumn: {lg:'1 / span 6', xs:'1/span12'}, maxWidth:'1000px', width:'100%',justifySelf:'center'}}>
                <Banner url={banner1} height="100%" mdCon jCen tCen>
                    <Typography variant="h6" color='whitesmoke' sx={{opacity:'0.9'}}>Crazy deals</Typography>
                    <Typography variant="h3" color="white">Buy 1 get 1 for free</Typography>
                    <Typography variant="h6" color='whitesmoke' sx={{opacity:'0.9',}}>The best classic dress on sale at cara</Typography>
                    <Button variant="outlined" sx={{marginTop:'20px',border:'1.5px solid white','&:hover':{backgroundColor:'#23A99E', border:'none'}, color:'white', alignSelf:'self-start'}}>
                        Learn More
                    </Button>
                </Banner>
            </Grid>
            <Grid item sx={{gridRow: {lg:'1 / span 3'}, gridColumn: {lg:'7 / span 6', xs:'1/span12'}, maxWidth:'1000px', width:'100%',justifySelf:'center'}}>
                <Banner url={banner2} height="100%" mdCon jCen tCen>
                    <Typography variant="h6"  color='whitesmoke' sx={{opacity:'0.9'}}>Spring/summer</Typography>
                    <Typography variant="h3" color="white">Upcoming season</Typography>
                    <Typography variant="h6" color='whitesmoke' sx={{opacity:'0.9',}}>The best classic dress on sale at cara</Typography>
                    <Button variant="outlined" sx={{marginTop:'20px',border:'1.5px solid white','&:hover':{backgroundColor:'#23A99E', border:'none'}, color:'white', alignSelf:'self-start'}}>
                        Collection
                    </Button>
                </Banner>
            </Grid>
            <Grid item sx={{gridRow: {lg:'4 / span 2'}, gridColumn: {lg:'1 / span 4', xs:'1/span12'}, maxWidth:'1000px', width:'100%',justifySelf:'center'}}>
                <Banner url={banner3} height="100%" mdCon jCen tCen>
                    <Typography variant="h3" color="white">SEASONAL SALE</Typography>
                    <Typography variant="h6" color='red' sx={{}}>Winter Collection -50% off?</Typography>
                </Banner>
            </Grid>
            <Grid item sx={{gridRow: {lg:'4 / span 2'}, gridColumn: {lg:'5 / span 4', xs:'1/span12'}, maxWidth:'1000px', width:'100%',justifySelf:'center'}}>
                <Banner url={banner4} height="100%" mdCon jCen tCen>
                    <Typography variant="h3" color="white">FOOTWEAR COLLECTION</Typography>
                    <Typography variant="h6" color='red' sx={{}}>Spring/Summer 2024</Typography>
                </Banner>
            </Grid>
            <Grid item sx={{gridRow: {lg:'4 / span 2'}, gridColumn: {lg:'9 / span 4', xs:'1/span12'}, maxWidth:'1000px', width:'100%',justifySelf:'center'}}>
                <Banner url={banner5} height="100%" mdCon jCen tCen>
                    <Typography variant="h3" color="white">T-SHIRT</Typography>
                    <Typography variant="h6" color='red' sx={{}}>New Trendy</Typography>
                </Banner>
            </Grid>
        </div>
    </Box>
  )
}

export default Banners