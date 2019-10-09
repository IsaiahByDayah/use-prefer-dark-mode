import { useState, useEffect } from "react"

const usePreferDarkMode = (): boolean => {
    const [darkMode, setDarkMode] = useState(window.matchMedia("(prefers-color-scheme: dark)").matches)

    useEffect(() => {
        const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)")
        setDarkMode(mediaQueryList.matches)

        const handlePreferedColorSchemeChange = (e: MediaQueryListEvent) => setDarkMode(e.matches)

        mediaQueryList.addListener(handlePreferedColorSchemeChange)
        return () => mediaQueryList.removeListener(handlePreferedColorSchemeChange)
    }, [])

    return darkMode
}

export default usePreferDarkMode
