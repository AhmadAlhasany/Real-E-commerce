import { Box, Button, Grid, Stack, Typography } from "@mui/material"
import logo from '../Data/logo/logo.png'
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
import AppStore from '../Data/pay/app.jpg'
import Play from '../Data/pay/play.jpg'
import Pay from '../Data/pay/pay.png'

function Footer() {
  return (
    <Box>
        <Box sx={{padding:'20px', width:'100%', backgroundColor:'#041D44'}}>
            <Stack spacing={3} sx={{maxWidth:'1400px', marginLeft:'auto', marginRight:'auto', flexDirection:{xs:'column', md:'row'}, justifyContent:{md:'space-between'},
             alignItems:{md:'center'},padding:{md:'20px'}, paddingBottom:'20px', paddingTop:'20px' }} >
                <Stack direction='column'>
                    <Typography variant="h5" color="white">Sign Up For Newsletters</Typography>
                    <Typography variant="subtitle1" color="whitesmoke">
                        <span style={{opacity:'0.8'}}>Get E-mail updates about our latest shop and</span> <span style={{color:'#B49362'}}>special offers.</span>
                    </Typography>
                </Stack>
                <Stack direction='row'>
                    <input type='text' placeholder='Your email address' className='emIn'
                     style={{padding:'10px', borderTopLeftRadius:'5px', borderBottomLeftRadius:'5px', outline:'none',border:'none'}}/>
                    <Button variant="contained" sx={{padding:{sm:'10px'},backgroundColor:'#23A99E', color:'white', borderTopLeftRadius:'0px', borderBottomLeftRadius:'0px', width:'90px'}}>
                        Sign Up
                    </Button>
                </Stack>
            </Stack>
        </Box>
        <Box>
            <Grid container sx={{maxWidth:'1400px', padding:'20px', marginLeft:'auto', marginRight:'auto', justifyContent:'space-around'}}>
                <Grid item xs={12} sm={8} lg={4}>
                    <img src={logo} style={{marginBottom:'20px'}}/>
                    <Typography variant="h6" color='black' sx={{marginBottom: '20px', marginTop: '8px'}}>Contact</Typography>
                    <Typography variant="subtitle1" ><strong style={{color:"black", fontWeight:'500'}}>Address:</strong> 562 Wellington Road, Street 32, San Francisco</Typography>
                    <Typography variant="subtitle1" ><strong style={{color:"black", fontWeight:'500'}}>Phone:</strong> +01 2222 365/(+91)01234 56789</Typography>
                    <Typography variant="subtitle1" ><strong style={{color:"black", fontWeight:'500'}}>Hours:</strong> 10:00-18:00, Mon-Sat</Typography>
                    <Typography variant="h6" color='black' sx={{marginBottom: '20px', marginTop: '20px'}}>Follow Us</Typography>
                    <FacebookIcon sx={{width:'35px', height: '35px', marginRight:'2px'}}/>
                    <TwitterIcon sx={{width:'35px', height: '35px', marginRight:'2px'}}/>
                    <InstagramIcon sx={{width:'35px', height: '35px', marginRight:'2px'}}/>
                    <PinterestIcon sx={{width:'35px', height: '35px', marginRight:'2px'}}/>
                    <YouTubeIcon sx={{width:'35px', height: '35px', marginRight:'2px'}}/>
                </Grid>
                <Grid item xs={12} sm={4} lg={2}>
                    <Typography variant="h6" color='black' sx={{marginBottom: '20px', marginTop: '20px'}}>About</Typography>
                    <Typography variant="subtitle1">About Us</Typography>
                    <Typography variant="subtitle1">Delivery Information</Typography>
                    <Typography variant="subtitle1">Privacy Policy</Typography>
                    <Typography variant="subtitle1">Terms & Confitions</Typography>
                    <Typography variant="subtitle1">Contact Us</Typography>
                </Grid>
                <Grid item xs={12} sm={8} lg={4}>
                    <Typography variant="h6" color='black' sx={{marginBottom: '20px', marginTop: '20px'}}>Install App</Typography>
                    <Typography variant="subtitle1">From App Store or Google Play</Typography>
                    <Box>
                        <img src={AppStore} style={{border:'2px solid #23A99E', borderRadius:'5px', marginTop:'10px', marginBottom:'10px',  marginRight:'10px'}}/>
                        <img src={Play} style={{border:'2px solid #23A99E', borderRadius:'5px', marginTop:'10px', marginBottom:'10px' }}/>
                    </Box>
                    <Typography variant="subtitle1">Secured Payment Gateways</Typography>
                    <img src={Pay} style={{ marginTop:'10px', marginBottom:'10px' }}/>
                </Grid>
                <Grid item xs={12} sm={4} lg={2}>
                    <Typography variant="h6" color='black' sx={{marginBottom: '20px', marginTop: '20px'}}>My Account</Typography>
                    <Typography variant="subtitle1">Sing in</Typography>
                    <Typography variant="subtitle1">View Cart</Typography>
                    <Typography variant="subtitle1">My wishlist</Typography>
                    <Typography variant="subtitle1">Track My Order</Typography>
                    <Typography variant="subtitle1">Help</Typography>
                </Grid>
            </Grid>
        </Box>
    </Box>
  )
}

export default Footer