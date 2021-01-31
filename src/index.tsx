import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {Button} from "./lib/component/Button";

ReactDOM.render(
  <React.StrictMode>
      <Button type={"default"} onClick={event => console.log('123')}>click me</Button>
      <Button type={"primary"}>click me</Button>
      <Button type={"success"}>click me</Button>
      <Button type={"danger"}>click me</Button>
      <Button type={"warning"}>click me</Button>
      <Button type={"text"}>click me</Button>
      <Button type={"link"}>click me</Button>
        <button className={"bt"}>click me</button>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
