import { createTheme } from "@mui/material";

export const DarkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#F0F2F5',
            dark: '#000000',
            light: '#0f172a',
            contrastText: '#CCCCCC',
        },

        background: {
            default: '#1F1F1F',
            paper: '#252525',
        }
    }
})