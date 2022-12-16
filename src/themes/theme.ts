import { createTheme } from "@mui/system";
import { orange } from "@mui/material/colors";

declare module '@mui/system' {
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
    status: {
      danger: orange[500],
    },
  });
  