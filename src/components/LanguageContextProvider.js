import React, { useReducer } from "react";
import LanguageContext from "../contexts/LanguageContext";

const languageReducer = function (state, action) {
    switch (action.type) {
        case "setLanguage":
            return {
                ...state,
                language: action.selection,
            };
        default:
            return state;
    }
};

const initialState = { language: "en" };

function LanguageContextProvider({ children }) {
    // const [language, setLanguage] = useState('en');
    const [state, dispatch] = useReducer(languageReducer, initialState);
    // const { language } = state;
    return (
        <LanguageContext.Provider value={{ state, dispatch }}>
            {children}
        </LanguageContext.Provider>
    );
}

export default LanguageContextProvider;
