import { createContext, useState, useEffect } from "react";
import {THEMES} from "@/utils/constants"

const defaultSettings = {
    theme: THEMES.LIGHT
}

export const restoreSettings = ({storedData}: any) => {
    let settings = null
    try {
        const storeData = window.localStorage.getItem('settings');

        if (storeData) {
            settings = JSON.parse(storedData)
        }
    } catch (err) {
        console.error(err)
    }
}

const SettingsContext = createContext (
    {
        settings:defaultSettings,
        saveSettings: () => {}
    }
)

export const storeSettings = ({settings}: any) => {
    window.localStorage.setItem('settings', JSON.stringify(settings))
}

export const SettingsProvider = ({settings, children} : any) => {

    const [currentSettings, setCurrentSettings] = useState(
        settings || defaultSettings,
    )
    const handleSaveSettings = (update = {}) => {
        const mergedSettings = update;
        setCurrentSettings(mergedSettings);
        storeSettings(mergedSettings);
    }

}