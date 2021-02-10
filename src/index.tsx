import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {Input} from "./lib/component/Input";


ReactDOM.render(


  <React.StrictMode>
      <Input prefix={"帐号"} name={"123"} suffix={"密码"} size={"small"} type={"danger"}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
