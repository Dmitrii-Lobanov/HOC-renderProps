import React from 'react';
import { Battery, getTimeM, getT, getD, SolarAcc } from "./Hoc";

const DateTime = (props) => (
  <span>Time: {props.time} Date: {props.date}</span>
)

const Watches = (props) => {
  return (
    <div>
    <h1>Render props</h1>
      {props.render()}
    </div>
  )
}

export const Quartz = () => {
  const ps = new Battery();
  const time = getTimeM();
  const tachimeter = getT();
  const date = getD();

  return <Watches render={() => <DateTime time={'no solar'} date={date} />} />
}

export const SolarQuartz = () => {
  const ps = new SolarAcc();
  const time = getTimeM();
  const tachimeter = getT();
  const date = getD();

  return <Watches render={() => <DateTime time={'SOLAR'} date={date} />} />
}

export default {
  Quartz,
  SolarQuartz
};