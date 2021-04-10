import { createMuiTheme } from '@material-ui/core';
import { ptBR } from '@material-ui/core/locale';

import 'typeface-montserrat';

export default createMuiTheme({
  palette: {
    primary: {
      main: '#2b385b',
    },
    secondary: {
      main: '#e16e0e',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  typography: {
    fontFamily: [
      'Montserrat',
      'serif',
    ].join(','),
    fontSize: 14,
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        'html, body': {
          WebkitFontSmoothing: 'auto',
          backgroundColor: '#f7f7f7',
          color: '#2b385b',
        },
      },
    },
    MuiButton: {
      root: {
        borderRadius: '20px',
      },
    },
  },
});
