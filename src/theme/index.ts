import { createTheme } from '@mui/material';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';

const Colors = {
  primary_dark: '#1f2a2f',
  primary_main: '#1f2a2f',
  primary_light: '#607D8B',
  secondary_main: '#00BCD4',
  error: '#E53935',
  warning: '#FFA000',
  white: '#f1f1f1',
  black: '#1f2a2f',
};

const breakpoints = createBreakpoints({});

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: Colors.primary_main,
      light: Colors.primary_light,
      dark: Colors.primary_dark,
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
          width: '0.3rem',
          height: '0.3rem',
          backgroundColor: Colors.white,
        },
        '::-webkit-scrollbar-thumb': {
          backgroundColor: Colors.black,
        },
        ':root': {
          [breakpoints.down('md')]: {
            fontSize: '18px',
          },
          [breakpoints.down('md')]: {
            fontSize: '16px',
          },
          [breakpoints.down('xs')]: {
            fontSize: '12px',
          },
        },
      },
    },
  },
});

export default theme;
