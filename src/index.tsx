import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import {ThemeProvider, createTheme} from '@mui/material';
import { Provider } from 'react-redux';
import { store } from './RTK/store';

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
    secondary:{
      main:'#1B887F'
    },
    text:{
      primary: '#616472'
    },
    error:{
      main: '#23999E'
    }
  }
})

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>
  ,
  document.getElementById('root')
);
