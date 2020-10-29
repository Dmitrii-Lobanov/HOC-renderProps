import React from 'react';
import { Battery, getTimeM, getT, getD, SolarAcc } from "./Hoc";

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

  return <Watches render={() => <span>Time: {'no solar'} Date: {date}</span>} />
}

export const SolarQuartz = () => {
  const ps = new SolarAcc();
  const time = getTimeM();
  const tachimeter = getT();
  const date = getD();

  return <Watches render={() => <span>Time: {'SOLAR'} Date: {date}</span>} />
}

export default {
  Quartz,
  SolarQuartz
};