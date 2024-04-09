import { useParams } from 'react-router-dom'
import { Products } from '../../Data/productData'
import { Box, FormControl, InputLabel, MenuItem, Select, Stack, Typography , SelectChangeEvent, Button} from '@mui/material';
import React, { ChangeEvent } from 'react';
import { useAppDispatch } from '../../RTK/Hooks';
import { buy } from '../../RTK/curProductsSlice';
function ProductDets() {
  const dispatch = useAppDispatch()
  const {id} = useParams();
  const [size, setSize] = React.useState('');
  const [count, setCount] = React.useState(1);
  const [warning, setWarning] = React.useState(false);
  const [label, setLabel] = React.useState(false);

  let Pro = Products.filter(item=> item.id.toString() == id)[0]

  const handleChange = (event: SelectChangeEvent) => {
    setLabel(false)
    setSize(event.target.value as string);
  };
  const handleNumber = (e: ChangeEvent<HTMLInputElement>) => {
    if(Number(e.target.value) == Pro.count)
      setCount(Number(e.target.value))
    else if(Number(e.target.value) > Pro.count)
      setWarning(true);
    else if(Number(e.target.value) >= 0){
      setCount(Number(e.target.value));
      setWarning(false);
    }
  };

  return (
    <Stack sx={{mt:{md:'75px',xs:'62px'} ,maxWidth:'1400px', marginLeft:'auto', marginRight:'auto', flexDirection:{md:'row'}, alignItems:'center'}}>
      <Box sx={{height:'min-content', width:{md:'45%', xs:'100%'}, padding:{md:'30px', xs:'0px'}}}>
        <img src={Pro.img} style={{width:'100%'}} className='proDets'/>
      </Box>
      <Box sx={{padding:{md:'30px', xs:'10px'}, width:{md:'55%'}, paddingLeft:{md:'10px'},paddingTop:{md:'50px'}, marginBottom:{xs:'20px', md:'0px'}}}>
        <Typography variant="subtitle1" color="black">Home / {Pro.type[0].toUpperCase() + Pro.type.slice(1)}</Typography>
        <Typography variant="h6" color="black" sx={{marginTop:'15px', marginBottom:'15px'}}>Fashionable {Pro.type[0].toUpperCase() + Pro.type.slice(1)}</Typography>
        <Typography variant="h6" color="black" sx={{marginBottom:'5px'}}>${Pro.price.toFixed(2)}</Typography>
        <Box sx={{display:'relative'}}>
          <Typography variant="subtitle2" color="red" sx={{fontWeight:'300', paddingLeft:'4px'}}>{label && 'Required *'}</Typography>
          <FormControl sx={{width:'150px', mb:'10px', mt:label?'0px': '10px'}}>
            <InputLabel id="demo-simple-select-label">Size</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={size}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10}>Small</MenuItem>
              <MenuItem value={20}>Medium</MenuItem>
              <MenuItem value={30}>Large</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{marginBottom:'15px'}}>
          {warning ? <span style={{color:'red', display:'block', marginBottom:'5px'}}>There are only {Pro.count} pieces in stock</span>: <></>}
          <input type='number' min={1} value={count}
            style={{height:'36.5px',width:'80px' ,marginRight:'10px', paddingLeft:'10px'}} onChange={(e)=> {handleNumber(e)}}
          ></input>
          <Button variant="contained" sx={{backgroundColor:'#23A99E', color:'white', hegiht:'100%', borderRadius:'2px',
            '&:hover':{backgroundColor:'#23A99E'},}} onClick={()=>{
            if(size.length == 0 || count == 0?true:false)
              setLabel(true);
            else
              dispatch(buy({id, count, size}))
            }}
            >
            Add To Cart
          </Button>
        </Box>
        <Typography variant="h6" color="black">Product Details</Typography>
        <Typography variant="subtitle1" >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Typography>

      </Box>
    </Stack>
  )
}

export default ProductDets