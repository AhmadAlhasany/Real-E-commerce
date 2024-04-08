import React from 'react'
import Banner from '../../Components/Banner'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, IconButton, Box, Grid, Button } from '@mui/material'
import banner from '../../Data/banner/b1.jpg'
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import {Products} from '../../Data/productData'
import { useAppDispatch, useAppSelector } from '../../RTK/Hooks';
import { clearAll, remove } from '../../RTK/curProductsSlice';

type data ={
  id: string,
  img: string,
  name: string,
  size: string,
  price: number,
  quantity: number,
  subtotal: number,
}

function createData(
  id: string,
  img: string,
  name: string,
  size: string,
  price: number,
  quantity: number,
  subtotal: number,
) {
  return {id, img, name, size, price ,quantity, subtotal };
}


function Cart() {
  const products = Products;
  const dispatch = useAppDispatch();
  const [total, setTotal] = React.useState(0);
  const state = useAppSelector(state=>state).curPro
  const [rows, setRows ]= React.useState<data[]>([])
  
  React.useEffect(() =>{
    function initiateTable (){
      setRows([]) 
      setTotal(0);
      for (const id in state) {
        let arr = createData(id,products[Number(id)-1].img,products[Number(id)-1].title,state[id].size,products[Number(id)-1].price,state[id].quantity, products[Number(id)-1].price*state[id].quantity)
        setTotal (pre=> pre+=products[Number(id)-1].price*state[id].quantity)
        setRows(prev => [...prev, arr])
      }
    }
    initiateTable();
  }
  , [state])

  return (
    <>
      <Banner url={banner} my='60px' jCen mdCon>
        <Typography variant="h3" color="white" mb='7px'>#KnowUs</Typography>
        <Typography variant="subtitle1" color='#E3E3E3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</Typography>
      </Banner>
      <TableContainer component={Box} className='table' sx={{marginBottom:'60px', maxWidth:'1400px', marginLeft:'auto', marginRight:'auto'}}>
      <Table sx={{ minWidth: 700}} aria-label="customized table">
        <TableHead>
          <TableRow>
            <TableCell align='center'>Remove</TableCell>
            <TableCell align='center'>Image</TableCell>
            <TableCell align='center'>Product</TableCell>
            <TableCell align='center'>Size</TableCell>
            <TableCell align='center'>Price</TableCell>
            <TableCell align='center'>Quantity</TableCell>
            <TableCell align='center'>Subtotal</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell align='center' scope="row">
                <IconButton aria-label="" onClick={()=>{dispatch(remove(row.id)); console.log(row.id)}}>
                  <RemoveShoppingCartIcon/>
                </IconButton>
              </TableCell>
              <TableCell align='center'>
                <img src={row.img} style={{height:'100%', maxHeight:'70px'}}/>
              </TableCell>
              <TableCell align='center'>{row.name}</TableCell>
              <TableCell align='center'>{row.size}</TableCell>
              <TableCell align='center'>{row.price}</TableCell>
              <TableCell align='center'>{row.quantity}</TableCell>
              <TableCell align='center'>{row.subtotal}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Paper sx={{boxShadow:'0px 0px 3px 0px' , marginLeft:'auto', marginRight:'auto', maxWidth:'1400px', p:'20px', mb:'30px'}}>
      <Typography variant="h6" color="initial" mb='10px'>Cart Totals</Typography>
      <Grid container>
        <Grid item xs={6} sx={{border:'1px solid gray', padding:{xs:'10px',md:'20px'},borderTopLeftRadius:'5px'}}>Cart Subtotal</Grid>
        <Grid item xs={6} sx={{border:'1px solid gray', padding:{xs:'10px',md:'20px'},borderTopRightRadius:'5px'}}>${total.toFixed(2)}</Grid>
        <Grid item xs={6} sx={{border:'1px solid gray', padding:{xs:'10px',md:'20px'}}}>Shipping</Grid>
        <Grid item xs={6} sx={{border:'1px solid gray', padding:{xs:'10px',md:'20px'}}}>Free</Grid>
        <Grid item xs={6} sx={{border:'1px solid gray', padding:{xs:'10px',md:'20px'},borderBottomLeftRadius:'5px', color:'black', fontWeight:'500'}}>Total</Grid>
        <Grid item xs={6} sx={{border:'1px solid gray', padding:{xs:'10px',md:'20px'},borderBottomRightRadius:'5px', color:'black', fontWeight:'500'}}>${total.toFixed(2)}</Grid>
      </Grid>
      <Button variant="contained" sx={{backgroundColor:'#23A99E', color:'white', mt:'20px'}} onClick={()=>{alert('Congratulations !!'); dispatch(clearAll())}} disabled={Object.keys(state).length == 0}>
        Proceed to checkout
      </Button>
    </Paper>
    </>
  )
}

export default Cart