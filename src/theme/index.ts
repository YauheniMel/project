import { createTheme } from '@mui/material';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';

const Colors = {
  primary_dark: '#1f2a2f',
  primary_main: '#1f2a2f',
  primary_light: '#607D8B',
  secondary_main: '#00BCD4',
  error: '#E53935',
  warning: '#FFA000',
  gray: '#f1f1f1',
  white: '#ffffff',
  black: '#1f2a2f',
};

const breakpoints = createBreakpoints({});

export const themeLight = createTheme({
  palette: {
    primary: {
      main: Colors.primary_main,
      light: Colors.primary_light,
      dark: Colors.primary_dark,
    },
    common: {
      white: Colors.gray,
      black: Colors.black,
    },
    secondary: {
      main: Colors.secondary_main,
    },
    background: {
      default: Colors.white,
    },
    error: {
      main: Colors.error,
    },
    warning: {
      main: Colors.warning,
    },
  },
  shape: {
    borderRadius: 0,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '::-webkit-scrollbar': {
          width: '0.3rem',
          height: '0.3rem',
        },
        '::-webkit-scrollbar-thumb': {
          backgroundColor: Colors.black,
        },
        ':root': {
          height: '100%',

          body: {
            height: '100%',
          },

          '#root': {
            height: '100%',
          },

          '.App': {
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
          },

          '.MuiPaper-root': {
            backgroundColor: Colors.white,
          },

          [breakpoints.up('md')]: {
            fontSize: '18px',
          },
          [breakpoints.down('md')]: {
            fontSize: '16px',
          },
          [breakpoints.down('xs')]: {
            fontSize: '14px',
          },
        },
      },
    },
  },
});

export const themeDark = createTheme({
  palette: {
    primary: {
      main: Colors.secondary_main,
      light: Colors.primary_dark,
      dark: Colors.primary_light,
    },
    common: {
      white: Colors.black,
      black: Colors.gray,
    },
    secondary: {
      main: Colors.secondary_main,
    },
    background: {
      default: Colors.black,
    },
    error: {
      main: Colors.error,
    },
    warning: {
      main: Colors.warning,
    },
  },
  shape: {
    borderRadius: 0,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '::-webkit-scrollbar': {
          width: '0.3rem',
          height: '0.3rem',
        },
        '::-webkit-scrollbar-thumb': {
          backgroundColor: Colors.black,
        },
        ':root': {
          height: '100%',

          body: {
            height: '100%',
          },

          '#root': {
            height: '100%',
          },

          '.App': {
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
          },

          '.MuiPaper-root': {
            backgroundColor: Colors.primary_light,
          },

          [breakpoints.up('md')]: {
            fontSize: '18px',
          },
          [breakpoints.down('md')]: {
            fontSize: '16px',
          },
          [breakpoints.down('xs')]: {
            fontSize: '14px',
          },
        },
      },
    },
  },
});
