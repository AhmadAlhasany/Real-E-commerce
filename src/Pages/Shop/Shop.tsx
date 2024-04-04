import { Box, ButtonGroup, Grid, Paper, Rating, Stack, Typography, Button } from "@mui/material"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Banner from "../../Components/Banner"
import banner from '../../Data/banner/b1.jpg'
import {Products} from '../../Data/productData'
import { Link } from "react-router-dom"
import React from "react";

function Shop() {
    const [filter, setFilter] = React.useState<String|null>('all');
    let arr = Products.filter(item => item.type == filter || filter == 'all').map(item => {
        return(  
            <Grid key={item.id} item xs={12} sm={6} md={4} lg={3} sx={{maxWidth:'340px !important', height:'auto',
                "&:hover":{cursor:'pointer', transform:'translateY(-10px)'}
            }} className="gridItem">
                <Link to={`./${item.id}`} style={{textDecoration:'none',}}>
                <Paper sx={{width:'100%', height:'100%', textAlign:'center', padding: '15px', borderRadius:'5px', display:'flex', justifyContent:'space-between',flexDirection:'column'}} elevation={3}>
                    <Box sx={{width:'100%'}}>
                        <img src={item.img} alt="prduct" style={{objectFit:'contain', width:'100%', borderRadius:'10px',maxHeight:'350px'}}/>
                    </Box>
                    <Box  sx={{textAlign:'start', marginTop:'10px'}}>
                        <Typography variant="subtitle1">adidas</Typography>
                        <Typography variant="h6" color="initial">{item.title}</Typography>
                        <Rating name="read-only" value={item.evaluation} readOnly />
                        <Stack direction='row' justifyContent='space-between' alignItems='center'>
                            <Typography variant="h6" color="#23A99E" fontWeight={700}>${item.price}</Typography>
                                <Link to={`./${item.id}`} className ='cart'>
                                    <ShoppingCartIcon/>
                                </Link>
                        </Stack>
                    </Box>
                </Paper>    
                </Link>            
            </Grid>
        )})
  return (
    <Box mt='62px'>
        <Banner url={banner} jCen my="60px" mdCon>
            <Typography variant="h3" color="white">#stayhome</Typography>
            <Typography variant="subtitle1" color="white" sx={{opacity:0.8}}>Save more with coupons & up to 70% off!</Typography>
        </Banner>
        <Stack sx={{width:'100%', alignItems:'center', marginBottom:'30px'}}>
            <ButtonGroup variant="contained" aria-label="Basic button group" sx={{width:'min-conten', flexWrap:'wrap', boxShadow:'none', alignItems:'center', justifyContent: 'center', paddingRight:'15px', paddingLeft:'15px'}}>
                <Button onClick={(e)=>{setFilter( e.currentTarget.getAttribute('name') )}} name='all' sx={{backgroundColor:filter=='all'?'white':'#23A99E', color:filter=='all'?'#23A99E':'white', '&:hover':{backgroundColor:'#3F8D88'}, border:'1px solid white !important',borderRadius:'5px !important'}}>All</Button>
                <Button onClick={(e)=>{setFilter( e.currentTarget.getAttribute('name') )}} name ='shoes'sx={{backgroundColor:filter=='shoes'?'white':'#23A99E', color:filter=='shoes'?'#23A99E':'white', '&:hover':{backgroundColor:'#3F8D88'}, border:'1px solid white !important',borderRadius:'5px !important'}}>Shoes</Button>
                <Button onClick={(e)=>{setFilter( e.currentTarget.getAttribute('name') )}} name ='jacket'sx={{backgroundColor:filter=='jacket'?'white':'#23A99E', color:filter=='jacket'?'#23A99E':'white', '&:hover':{backgroundColor:'#3F8D88'}, border:'1px solid white !important',borderRadius:'5px !important'}}>Jackets</Button>
                <Button onClick={(e)=>{setFilter( e.currentTarget.getAttribute('name') )}} name ='shirt'sx={{backgroundColor:filter=='shirt'?'white':'#23A99E', color:filter=='shirt'?'#23A99E':'white', '&:hover':{backgroundColor:'#3F8D88'}, border:'1px solid white !important',borderRadius:'5px !important'}}>Shirts</Button>
                <Button onClick={(e)=>{setFilter( e.currentTarget.getAttribute('name') )}} name ='bag'sx={{backgroundColor:filter=='bag'?'white':'#23A99E', color:filter=='bag'?'#23A99E':'white', '&:hover':{backgroundColor:'#3F8D88'}, border:'1px solid white !important',borderRadius:'5px !important'}}>Bags</Button>
                <Button onClick={(e)=>{setFilter( e.currentTarget.getAttribute('name') )}} name ='hat'sx={{backgroundColor:filter=='hat'?'white':'#23A99E', color:filter=='hat'?'#23A99E':'white', '&:hover':{backgroundColor:'#3F8D88'}, border:'1px solid white !important',borderRadius:'5px !important'}}>Hats</Button>
                <Button onClick={(e)=>{setFilter( e.currentTarget.getAttribute('name') )}} name ='pants'sx={{backgroundColor:filter=='pants'?'white':'#23A99E', color:filter=='pants'?'#23A99E':'white', '&:hover':{backgroundColor:'#3F8D88'}, border:'1px solid white !important',borderRadius:'5px !important'}}>Pants</Button>
                <Button onClick={(e)=>{setFilter( e.currentTarget.getAttribute('name') )}} name ='watch'sx={{backgroundColor:filter=='watch'?'white':'#23A99E', color:filter=='watch'?'#23A99E':'white', '&:hover':{backgroundColor:'#3F8D88'}, border:'1px solid white !important',borderRadius:'5px !important'}}>Watches</Button>
            </ButtonGroup>
        </Stack>
        <Box sx={{maxWidth:'1400px', marginLeft:'auto', marginRight: 'auto'}}> 
            <Grid container my='40px' mt='5px' spacing={3} sx={{ marginLeft:'atuo', paddingRight:{sm:'20px', xs:'12px'}, paddingLeft:{sm:'20px', xs:'12px'}, justifyContent:'space-around'}}>
                {arr}
            </Grid>
        </Box>
    </Box>
  )
}

export default Shop