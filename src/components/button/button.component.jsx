import React from 'react';
import { Route } from 'react-router-dom';
import './button.styles.scss';


const Button = (props) => (
  <Route render={({ history}) => (
    <button
      className={`${props.btn} button`}
      type='button'
      onClick={() => { history.push(props.url) }}
    >
      {props.name}
    </button>
  )} />
);

export default Button;