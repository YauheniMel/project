import { createTheme } from '@mui/material';

const Colors = {
  primary_main: '#455A64',
  primary_light: '#607D8B',
  secondary_main: '#00BCD4',
  error: '#E53935',
  warning: '#FFA000',
  white: '#f1f1f1',
  black: '#1f2a2f',
};

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: Colors.primary_main,
      light: Colors.primary_light,
    },
    common: {
      white: Colors.white,
      black: Colors.black,
    },
    secondary: {
      main: Colors.secondary_main,
    },
    error: {
      main: Colors.error,
    },
    warning: {
      main: Colors.warning,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '::-webkit-scrollbar': {
          width: '4px',
          height: '4px',
          backgroundColor: Colors.white,
        },
        '::-webkit-scrollbar-thumb': {
          backgroundColor: Colors.black,
        },
      },
    },
    MuiLink: {
      defaultProps: {
        // color: 'red',
      },
    },
  },
});

export default theme;
