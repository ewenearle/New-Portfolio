import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline';
import App from './Components/App';


const theme = createMuiTheme({
  palette: {
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
      default: "#ebeaed"
    }
  },
  typography: {
    useNextVariants: true,
    "fontFamily": "\"Merriweather Sans\", sans-serif",
    "fontSize": 16,
    "fontWeightLight": 300,
    "fontWeightRegular": 400,
    "fontWeightMedium": 500
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
