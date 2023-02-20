import React, { useContext } from "react";
import LanguageContext from "../contexts/LanguageContext";

function LanguageChooser() {
    const { state, dispatch } = useContext(LanguageContext);

    const handleLanguageChange = (e) => {
        dispatch({
            type: 'setLanguage',
            selection: e.target.value});
    };

    return (
        <div className="select-container">
            <select value={state.language} onChange={handleLanguageChange}>
                <option value="en">🇺🇸 &emsp; ENGLISH</option>
                <option value="de">🇩🇪 &emsp; GERMAN</option>
                <option value="tr">🇹🇷 &emsp; TURKISH</option>
                <option value="es">🇪🇸 &emsp; SPANISH</option>
                <option value="fr">🇫🇷 &emsp; FRENCH</option>
                <option value="fa">🇮🇷 &emsp; PERSIAN</option>
                <option value="nl">🇧🇶 &emsp; DUTCH</option>
            </select>
        </div>
    );
}

export default LanguageChooser;
