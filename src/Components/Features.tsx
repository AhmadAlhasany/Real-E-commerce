import { Box, Grid, Paper, Typography } from '@mui/material'
import f1 from '../Data/features/f1.png'
import f2 from '../Data/features/f2.png'
import f3 from '../Data/features/f3.png'
import f4 from '../Data/features/f4.png'
import f5 from '../Data/features/f5.png'
import f6 from '../Data/features/f6.png'


function Features() {
  return (
    <Box sx={{maxWidth:'1400px', marginLeft:'auto', marginRight: 'auto'}}> 
    <Grid container my='40px' spacing={3} sx={{ marginLeft:'atuo', paddingRight:'20px', paddingLeft:'20px', justifyContent:'space-around'}}>
        <Grid item xs={12} sm={6} md={4} lg={2}>
            <Paper sx={{width:'100%', height:'100%', textAlign:'center', padding: '40px', paddingLeft:'20px', paddingRight:'20px',}} elevation={2}>
            <img src={f1} alt="pic" style={{marginBottom:'20px'}}/>
            <div style={{backgroundColor:'#DBF4F6', borderRadius:'5px'}}>
                <Typography variant="h6" color="initial" sx={{color:'#23A99E', opacity:'80%'}}>Free Shipping</Typography>
            </div>
            </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
            <Paper sx={{width:'100%', height:'100%', textAlign:'center', padding: '40px', paddingLeft:'20px', paddingRight:'20px',}} elevation={2}>
            <img src={f2} alt="pic" style={{marginBottom:'20px'}}/>
            <div style={{backgroundColor:'#F8E7F1', borderRadius:'5px'}}>
                <Typography variant="h6" color="initial" sx={{color:'#23A99E', opacity:'80%'}}>Online Order</Typography>
            </div>
            </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
            <Paper sx={{width:'100%', height:'100%', textAlign:'center', padding: '40px', paddingLeft:'20px', paddingRight:'20px',}} elevation={2}>
            <img src={f3} alt="pic" style={{marginBottom:'20px'}}/>
            <div style={{backgroundColor:'#EAF5D8', borderRadius:'5px'}}>
                <Typography variant="h6" color="initial" sx={{color:'#23A99E', opacity:'80%'}}>Save Money</Typography>
            </div>
            </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
            <Paper sx={{width:'100%', height:'100%', textAlign:'center', padding: '40px', paddingLeft:'20px', paddingRight:'20px',}} elevation={2}>
            <img src={f4} alt="pic" style={{marginBottom:'20px'}}/>
            <div style={{backgroundColor:'#DBEBF6', borderRadius:'5px'}}>
                <Typography variant="h6" color="initial" sx={{color:'#23A99E', opacity:'80%'}}>Promotions</Typography>
            </div>
            </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
            <Paper sx={{width:'100%', height:'100%', textAlign:'center', padding: '40px', paddingLeft:'20px', paddingRight:'20px',}} elevation={2}>
            <img src={f5} alt="pic" style={{marginBottom:'20px'}}/>
            <div style={{backgroundColor:'#E3DDF4', borderRadius:'5px'}}>
                <Typography variant="h6" color="initial" sx={{color:'#23A99E', opacity:'80%'}}>Happy Sell</Typography>
            </div>
            </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
            <Paper sx={{width:'100%', height:'100%', textAlign:'center', padding: '40px', paddingLeft:'20px', paddingRight:'20px',}} elevation={2}>
            <img src={f6} alt="pic" style={{marginBottom:'20px'}}/>
            <div style={{backgroundColor:'#F6E5DB', borderRadius:'5px'}}>
                <Typography variant="h6" color="initial" sx={{color:'#23A99E', opacity:'80%'}}>F24/7 Support</Typography>
            </div>
            </Paper>
        </Grid>
    </Grid>
    </Box>
  )
}

export default Features