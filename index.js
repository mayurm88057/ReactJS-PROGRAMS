import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import FirstPage from './FirstPage';
import SecondPage from './Secondpage'; 
import ControlledReactDemo from'./ControlledReactDemo';
import UncontrolledFormDemo from'./UncontrolledFormDemo';
import CssExample from'./CssExample';
import ButtonGroup1 from'./ButtonGroup1';
import ImageLightBox from'./ImageLightBox';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ImageLightBox/>
</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
