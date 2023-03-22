import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { RootStateType } from './component/Redux/State';


export const rernderEntireTree = (state: RootStateType) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} />
    </BrowserRouter>,
    document.getElementById('root')
  )
}

