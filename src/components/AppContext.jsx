
import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

// TODO: move to utils
// get the theme from local storage
//      is used to keep the theme set on page refresh
function getThemeFromLocalStorage() {
    let theme = localStorage.getItem('theme');

    if (theme == null || theme === "light-theme") {
        theme = "light-theme";
        document.body.classList.remove("dark-theme");
    } else {
        document.body.classList.add("dark-theme");
    }
    return theme;
}

/*  ===============================================
 *  COMPONENT DEFINITION
 * ============================================= */
export const AppProvider = ({ children }) => {

    /*  =======================================================================
     *      Theme State
     * ===================================================================== */
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

    /*  =======================================================================
     *      Note Editor State
     * ===================================================================== */

    const [ wasEditNoteClicked, setEditNoteWasClicked] = useState(false);

    /*  =======================================================================
     *     searchTarget
     * ===================================================================== */

    const [ searchTarget, setSearchTarget ] = useState("");

    /*  =======================================================================
     *      context values
     * ===================================================================== */
    const value = {
        // theme dark / light
        theme,
        toggleTheme,
        // note
        wasEditNoteClicked,
        setEditNoteWasClicked,
        // seearch
        searchTarget,
        setSearchTarget,
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => useContext(AppContext);
