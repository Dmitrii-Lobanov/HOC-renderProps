import React from 'react'
import { connect } from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getDate } from "../actions/index";

interface Props {
  startDate: any,
  handleChange: Function,
  disabled: boolean,
  handleDisabled: Function,
  getDate: Function
}

const DateForm = ({ 
  startDate, 
  handleChange, 
  disabled, 
  handleDisabled,
  getDate
}:Props) => {
  const currentDay = new Date().getDate();
  const currentMonth = (new Date().getMonth() > 9) ? (new Date().getMonth() + 1) : `0${new Date().getMonth() + 1}`;
  const currentYear = new Date().getFullYear();
  const displayDate  = `Сегодня ${currentDay}.${currentMonth}.${currentYear}`;
  
  const onFormSubmit = (e: any) => {
    if(e) e.preventDefault();
    if(!startDate || startDate.length < 1) alert('Выберите дату');
    console.log('startdate', startDate);

    const chosenDay = startDate.getDate();
    const chosenMonth = startDate.getMonth() > 9 ? (startDate.getMonth() + 1) : (`0${startDate.getMonth() + 1}`);
    const chosenYear = startDate.getFullYear();
    const chosenDate = `${chosenDay}.${chosenMonth}.${chosenYear}`;

    getDate(chosenDate);
    console.log(chosenDate);
  }

  return (
    <div className="container">
      <form>
        <label htmlFor="date">Дата: </label>
        <DatePicker 
          className="datepicker"
          dateFormat="dd.MM.yyyy"
          selected={startDate}
          // onChange={() => handleChange()}
          placeholderText={"Нажмите для выбора даты" || startDate}
          disabled={disabled}
          isClearable
          valueName="selected"
          onChange={([selected]) => selected}
      >
          <div className="calendar-footer">{displayDate}</div>
        </DatePicker>
      </form>
      <div>
        <button onClick={() => handleDisabled()} className="button--disable">{disabled ? 'Disabled' : 'Not disabled'}</button>
        <button onClick={(e) => onFormSubmit(e)} className="button--submit">Submit</button>
      </div>
    </div>
  )
}

export default connect(
  null,
  { getDate }
)(DateForm);