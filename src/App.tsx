import {ThemeProvider, createTheme} from '@mui/material';
import AppBar from './Components/AppBar';
import Home from './Pages/Home/Home'

function App() {

  const theme = createTheme({
      typography:{
        h2:{
          fontSize: '1.7rem',
          '@media (min-width: 400px)':{
            fontSize:'2.5rem'
          },
          '@media (min-width:600px)': {
          fontSize: '3.75rem',}
        },
        h3:{
          fontSize: '1.4rem',
          '@media (min-width: 400px)':{
            fontSize:'2rem'
          },
          '@media (min-width:600px)': {
          fontSize: '3.25rem',}
        },
        fontFamily:[
          "Rubik",
          'sans-serif',
        ].join(',')
      },
      
      palette:{
        primary:{
          main: '#E4E6F4',
        },
        text:{
          primary: '#616472'
        }
      }
    })

  return (
    <ThemeProvider theme={theme}>
      <AppBar/>
      <Home/>
    </ThemeProvider>
  );
}

export default App;
