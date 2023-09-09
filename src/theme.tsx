import { createTheme } from "@mui/material/styles";


const customPalette = {
  primary: {
    main: "#978ce1",
    dark: "#463f7a",
  },
  secondary: {
    main: "#3a6fb9",
    contrastText: "#fff",
  },
  danger: {
    main: "#cb5252",
  },
};

export const theme = createTheme({
  palette: customPalette, 
});
