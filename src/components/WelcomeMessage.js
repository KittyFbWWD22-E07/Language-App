import React , {useContext} from 'react';
import LanguageContext from '../contexts/LanguageContext'

function WelcomeMessage () {
    const {state} = useContext(LanguageContext);

    let welcomeMessage;
    switch (state.language) {

        case 'de':
            welcomeMessage = 'Hallo Welt!'
            break;
        case 'tr':
            welcomeMessage = 'Merhaba Dünya!'
            break;
        case 'es':
            welcomeMessage = '¡Hola Mundo!'
            break;
        case 'fr':
            welcomeMessage = 'Bonjour le monde!'
            break;
        case 'fa':
            welcomeMessage =  'سلام دنیا!';
            break;
        case 'nl':
            welcomeMessage = 'Hallo Wereld!'
            break;

        default:
            welcomeMessage = 'Hello World!';
    }
    return (
        <div className="welcome">
            <h1>{welcomeMessage}</h1>
        </div>
    )
}

export default WelcomeMessage;