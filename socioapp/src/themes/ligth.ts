import { createTheme } from "@mui/material";
import { light } from "@mui/material/styles/createPalette";

export const LigthTheme = createTheme({
    palette: {
        mode:'light',
        primary: {
            main: '#F0F2F5',
            dark: '#ffffff',
            light: '#0f172a',
            contrastText: '#CCCCCC',
        },

        background: {
            default: '#F0F2F5',
            paper: '#CCCCCC',
        }
    }
})