import { createTheme } from '@mui/material';

export const theme = createTheme({
  typography: {
    button: {
      textTransform: 'none',
    },
  },
  palette: {
    primary: {
      main: '#16A34A',
    },
  },
  shape: {
    borderRadius: 8,
  },
});
