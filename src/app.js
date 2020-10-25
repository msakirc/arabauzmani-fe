import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';



const darkTheme = createMuiTheme({
    palette: {
      type: 'dark',
      primary: {
        main: "#bbe1fa"
      }
    },
    MuiDialogTitle: {
      root:{
        "fontSize": "3rem"
      }
    },
    MuiButton: {
      textSizeLarge:{
        "fontSize": "3rem"
      },
      sizeLarge:{
        "fontSize": "3rem"
      },
      label:{
        "fontSize": "3rem"
      },
    }
  });

ReactDOM.render(
    <ThemeProvider theme={darkTheme}>
        <AppRouter />
    </ThemeProvider>,
    document.getElementById('app')
);
