import React, { createContext, useCallback, useContext, useMemo, useState } from "react";/*Hook para contexto */
import { ThemeProvider } from "@mui/material";/**Import ThemeProvider theme */
import {Box} from '@mui/material'
import { LigthTheme } from "../themes/ligth";/*Import light theme */
import { DarkTheme } from "../themes/dark";/*Import dark theme */

type ThemeProps = {
    children: React.ReactNode;
}


interface IThemeContextData {
    themeName: 'light' | 'dark';/*Temas */
    toggleTheme: () => void/*Trocar Tema */
}/*Interface para troca de tema */

const ThemeContext = createContext({} as IThemeContextData);

export const useAppThemeContext = () => {
    return useContext(ThemeContext)
}

export const AppThemeProvider: React.FC = ({ children }: any) => {

    const [themeName, setThemeName] = useState<'light' | 'dark'>('light');
    const toggleTheme = useCallback(() => {
        setThemeName(oldThemeName => oldThemeName === 'light' ? 'dark' : 'light' );
    }, []);
    const theme = useMemo(() => {
       if (themeName == 'light') return LigthTheme

       return DarkTheme;
    }, [themeName])
    return(
        <ThemeContext.Provider value={{ themeName, toggleTheme }}>
            <ThemeProvider theme={theme}>
                <Box width={'100vw'} height={'100vh'} bgcolor={theme.palette.background.default}>
                    {children}
                </Box>
            </ThemeProvider>
        </ThemeContext.Provider>
    )

}