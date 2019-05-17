import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline';
import App from './Components/App';

const theme = createMuiTheme({
  palette: {
    text:{
      primary: "#fff",
      secondary: "#fff"
    },
    primary: {
      main: '#1a1a1a'
    },
    secondary: {
      main: '#3c555d'
    },
    spacing: {
      unit: 10
    },
    background: {
      default: "#ebeaed",
    }
  },
  typography: {
    useNextVariants: true,
    "fontWeightLight": 300,
  },
})

/* COLOR SCHEME
===============
   gunmetal 233237
   rusty red 984b43
   warm yellow eac67a
   navy blue 18121e */


ReactDOM.render(
  <MuiThemeProvider theme={theme}>
  <CssBaseline />
    <App />
  </MuiThemeProvider>, 
  document.getElementById('app')
)
