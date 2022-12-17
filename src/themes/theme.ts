import { createTheme } from "@mui/material/styles"
import { orange } from "@mui/material/colors"

declare module '@mui/material/styles' {
    interface Theme {
      status: {
        danger: string;
      };
    }
    // allow configuration using `createTheme`
    interface ThemeOptions {
      status?: {
        danger?: string;
      };
    }
  }


export const theme = createTheme({
    direction: 'rtl',
    typography: {
        fontFamily: 'iransans'
    },
    status: {
      danger: orange[500],
    },
  });
  