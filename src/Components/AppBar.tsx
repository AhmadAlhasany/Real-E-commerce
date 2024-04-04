import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import logo from '../Data/logo/logo.png'
import { useTheme } from '@mui/material/styles';
import { Divider, Drawer, List, ListItem, ListItemButton, ListItemText, Stack, StepIcon } from '@mui/material';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { Link } from 'react-router-dom';

const navItems = ['Home', 'Shop', 'Blog', 'About', 'Contact'];

function DrawerAppBar() {
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    console.log(mobileOpen)

    const handleDrawerToggle = () => {
      setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box sx={{ textAlign: 'center' }}>
          <Stack sx={{ my: 2 ,alignItems:'center', justifyContent:'center'}}>
             <img src={logo} style={{ paddingLeft:'50px'}}/>
          </Stack>
          <Divider />
          <List onClick={handleDrawerToggle}>
            {navItems.map((item) => (
            <Link to={item!= 'Home' ? `${item.toLocaleLowerCase()}`:""} style={{
               textDecoration: 'none', color: 'inherit'}} onClick={()=>window.scrollTo(0,0)} >
              <ListItem key={item} disablePadding>
                <ListItemButton sx={{ textAlign: 'center' }}>
                  <ListItemText primary={item} />
                </ListItemButton>
              </ListItem>
            </Link>
            ))}
          </List>
        </Box>
      );

  return (
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />
      <AppBar component="nav" sx={{padding:'4px'}}>
        <Toolbar
        disableGutters
         sx={{
            maxWidth: '1400px',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '100%',
            paddingLeft: {xs: '12px', sm:'24px'},
            paddingRight: '4px' 
          }}>
          <Box sx={{ display: {xs:'flex', sm: 'none' } , alignItems:'center', justifyContent:'space-between', width:'100%'}}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{ mr: 2, "&:hover":{ color : '#23A99E'}}}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <img src={logo} style={{ paddingLeft:'50px'}}/>
            <IconButton
                sx={{"&:hover":{ color : '#23A99E'}}}
            >
            <Link to="./cart" style={{ textDecoration: 'none', color: 'inherit'}} onClick={()=>window.scrollTo(0,0)}>
            <ShoppingBagIcon/>
            </Link>
          </IconButton>
          </Box>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }}}
          >
            <img src={logo} className='logo' alt='logo'/>
          </Typography>

          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => {
              let mar = item == "Contact" ? '20px':'';
              return(
              <Box  sx={{
                height:'100%', display: 'inline-block', "&:hover":{borderBottom: '4px solid #23A99E'},marginRight: mar}}>
                <Link onClick={()=>window.scrollTo(0,0)}
                 to={item!= 'Home' ? `${item.toLocaleLowerCase()}`:""} style ={{height: '100%'}}>
                  <Button key={item} sx={{ color: theme.palette.text.primary, fontSize:{md:"18px"},
                    "&:hover":{ color : '#23A99E'}}}>
                    {item} 
                  </Button>
                </Link>
              </Box>
            )})}

            <IconButton
              sx={{"&:hover":{ color : '#23A99E'}}}
            >
              <Link to="./cart" style={{ textDecoration: 'none', color: 'inherit'}} onClick={()=>window.scrollTo(0,0)}>
                <ShoppingBagIcon sx={{marginLeft:'0px'}}/>
              </Link>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '260px' },
          }}
        >
          {drawer}
        </Drawer>
      </nav>

      </Box>
  )
}



export default DrawerAppBar;