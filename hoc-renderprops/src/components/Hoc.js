import React from 'react';

export class Battery {};
export class SolarAcc {};

export const getTimeM = () => {};
export const getT = () => {};
export const getD = () => {};
export const calculateData = (value) => {};

export const Watches = (props) => {
	return (
    <div>
      <h1>HOC</h1>
      <span>Time: {props.time} Date: {props.date}</span>
    </div>
)
}

const withSolar = (Component) => {
  return (props) => {
    const ps = new SolarAcc();
	  const time = getTimeM();
	  const tachimeter = getT();
	  const date = getD();

	  calculateData(false);

    return (<Component {...props} ps={ps} time={"solar time"} tachimeter={tachimeter} date={date} />)
  }
}

const withNoSolar = (Component) => {
  return (props) => {
    const ps = new Battery();
    const time = getTimeM();
    const tachimeter = getT();
    const date = getD();

	calculateData(true);

	  calculateData(false);

    return (<Component {...props} ps={ps} time={"no solar"} tachimeter={tachimeter} date={date} />)
  }
}

export const Hoc = withSolar(Watches);
export const Hoc2 = withNoSolar(Watches);