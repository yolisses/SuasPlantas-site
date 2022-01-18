import { createTheme } from '@mui/material';
import { mainColor } from '../common/mainColor';

export const theme = createTheme({
  typography: {
    button: {
      textTransform: 'none',
    },
  },
  palette: {
    primary: {
      main: mainColor,
    },
  },
  shape: {
    borderRadius: 8,
  },
});
