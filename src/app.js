import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import CssBaseline from '@material-ui/core/CssBaseline';

import { createMuiTheme, ThemeProvider, responsiveFontSizes } from '@material-ui/core/styles';



const darkTheme =
  responsiveFontSizes(
    createMuiTheme({
      palette: {
        type: 'dark',
        primary: {
          main: "#bbe1fa"
        }
      },
      MuiDialogTitle: {
        root: {
          "fontSize": "3rem"
        }
      },
      MuiButton: {
        textSizeLarge: {
          "fontSize": "3rem"
        },
        sizeLarge: {
          "fontSize": "3rem"
        },
        label: {
          "fontSize": "3rem"
        },
      }
    }) 
  );

ReactDOM.render(
  <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <AppRouter />
  </ThemeProvider>,
  document.getElementById('root')
);
