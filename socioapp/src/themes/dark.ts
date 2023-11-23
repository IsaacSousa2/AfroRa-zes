import { createTheme } from "@mui/material";

export const DarkTheme = createTheme({
    palette: {
        primary: {
            main: '#F0F2F5',
            dark: '#000000',
            light: '#0f172a',
            contrastText: '#CCCCCC',
        },

        secondary: {
            main: '#1F1F1F',
            dark: '#252525',
            light: '#777777',
            contrastText: '#ffffff',
        },

        background: {
            default: '#1F1F1F',
            paper: '#252525',
        }
    }
})