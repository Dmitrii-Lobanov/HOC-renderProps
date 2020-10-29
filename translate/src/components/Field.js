import React from  'react';
import LanguageContext from '../context/LanguageContext';

class Field extends React.Component {
  static contextType = LanguageContext;

  render() {
    const text = this.context.language === 'english' ? 'Name' : 'Имя';

    return (
      <div>
        <label>{text}</label>
        <input />
      </div>
    )
  }
};

export default Field;