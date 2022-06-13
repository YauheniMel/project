import { createTheme } from '@material-ui/core';

const Colors = {
  primary_main: '#455A64',
  primary_light: '#607D8B',
  secondary_main: '#00BCD4',
  error: '#E53935',
  warning: '#FFA000',
};

const theme = createTheme({
  palette: {
    primary: {
      main: Colors.primary_main,
      light: Colors.primary_light,
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
});

export default theme;
