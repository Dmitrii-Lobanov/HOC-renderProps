import React from 'react';
import UserCreate from './UserCreate';
import { LanguageStore } from '../context/LanguageContext';
import ColorContext from '../context/ColorContext';
import LanguageSelector from './LanguageSelector';

class App extends React.Component {
  render() {
    // const text = this.state.language === 'english' ? 'Select a language: ' : 'Выберите язык: ';

    return (
      <div className="ui container">
        <LanguageStore>
          <LanguageSelector />
          <ColorContext.Provider value="primary">
              <UserCreate />
          </ColorContext.Provider>
        </LanguageStore>
      </div>
    );
  };
};

export default App;