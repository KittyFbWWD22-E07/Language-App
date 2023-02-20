import Header from './components/Header';
import Content from './components/Content';
import LanguageContextProvider from './components/LanguageContextProvider';
import './App.css';



function App() {

  return (
    <div className="container">
      <LanguageContextProvider>
        <Header />
        <Content />
      </LanguageContextProvider>
    </div>
  );
}

export default App;
