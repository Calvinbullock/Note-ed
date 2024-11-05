
import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

// get the theme from local storage
function getThemeFromLocalStorage() {
        let theme = localStorage.getItem('theme');
        if (theme == null) {
            theme = "light-theme";
    }
    return theme;
}


export const AppProvider = ({ children }) => {
    const [theme, setTheme] = useState(getThemeFromLocalStorage);
    localStorage.setItem('theme', theme);

    const toggleTheme = () => {
        setTheme(theme === "light-theme" ? "dark-theme" : "light-theme");

        if (theme === "dark-theme") {
            document.body.classList.remove("dark-theme");
            document.body.classList.add("light-theme");
        } else {
            document.body.classList.remove("light-theme");
            document.body.classList.add("dark-theme");
        }
    };

    const value = {
        theme,
        toggleTheme,
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => useContext(AppContext);
