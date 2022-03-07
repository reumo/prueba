import React from "react";
import { SpinnerProps } from './SpinnerProps';
import './Spinner.scss';

const Spinner = (props:SpinnerProps): JSX.Element => {

  return (
    <div className={`spinner-container ${props.show ? 'show-spinner' : ''}`}>
      <div className="bar1" />
      <div className="bar2" />
      <div className="bar3" />
      <div className="bar4" />
      <div className="bar5" />
      <div className="bar6" />
      <div className="bar7" />
      <div className="bar8" />
      <div className="bar9" />
      <div className="bar10" />
      <div className="bar11" />
      <div className="bar12" />
    </div>
  );
};

export default Spinner;
