import { Box, Grid, IconButton, Paper, Rating, Stack, Typography } from '@mui/material'
import {Products} from '../../Data/productData'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';

function NewProd() {
    let array = Products.filter(item=>item.status=='new')
    let arr = array.map(item => {
        return(  
            <Grid key={item.id} item xs={12} sm={6} md={4} lg={3} sx={{maxWidth:'340px !important', height:'auto', transition:'All 0.5s',
                "&:hover":{cursor:'pointer', transform:'translateY(-10px)'}
            }} className='gridItem'>
                <Link to={`./shop/${item.id}`} style={{textDecoration:'none',}} onClick={()=>window.scrollTo(0,0)}>
                <Paper sx={{width:'100%', height:'100%', textAlign:'center', padding: '15px', borderRadius:'5px', display:'flex', justifyContent:'space-between',flexDirection:'column' }} elevation={3}>
                    <Box sx={{width:'100%', maxWidth:'fit-content'}}>
                        <img src={item.img} alt="prduct" style={{objectFit:'contain', width:'100%', borderRadius:'10px',maxHeight:'350px'}}/>
                    </Box>
                    <Box  sx={{textAlign:'start', marginTop:'10px'}}>
                        <Typography variant="subtitle1">adidas</Typography>
                        <Typography variant="h6" color="initial">{item.title}</Typography>
                        <Rating name="read-only" value={item.evaluation} readOnly />
                        <Stack direction='row' justifyContent='space-between' alignItems='center'>
                            <Typography variant="h6" color="#23A99E" fontWeight={700}>${item.price}</Typography>
                                <Link to={`./shop/${item.id}`} className ='cart' onClick={()=>window.scrollTo(0,0)}>
                                    <ShoppingCartIcon/>
                                </Link>
                        </Stack>
                    </Box>
                </Paper>    
                </Link>            
            </Grid>
        )
    })
     return (
        <Box sx={{maxWidth:'1400px', marginLeft:'auto', marginRight: 'auto'}}> 
            <Grid container my='40px' mt='5px' spacing={3} sx={{ marginLeft:'atuo', paddingRight:{sm:'20px', xs:'12px'}, paddingLeft:{sm:'20px', xs:'12px'}, justifyContent:'space-around'}}>
                {arr}
            </Grid>
        </Box>
    )
}

export default NewProd