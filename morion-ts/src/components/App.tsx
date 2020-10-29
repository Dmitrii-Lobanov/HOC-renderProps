import React, { useState } from 'react';
import '../App.scss';
import DateForm from './DateForm';

const App = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [disabled, setDisabled] = useState(false);

  const handleChange = (data: any) => {
    console.log('data', data);
    setStartDate(data);
  }

  const handleDisabled = () => {
    setDisabled(!disabled);
  }

  return (
    <div className="App">
      <DateForm 
        startDate={startDate} 
        disabled={disabled}
        handleChange={handleChange}
        handleDisabled={handleDisabled}
    />
    </div>
  );
}

export default App;
