import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
let postData = [
    {id: '1', message: 'Hello my friend', likeCount: 11},
    {id: '2', message: 'Hello Hello', likeCount: 22},
]
let dialogsData = [
    {id: '1', name: 'Andrei'},
    {id: '2', name: 'Iryna'},
    {id: '3', name: 'Vanya'},
    {id: '4', name: 'Sofia'},
    {id: '5', name: 'Roma'},
]
let messagesData = [
    {id: '1', message: 'Hi'},
    {id: '2', message: 'Hi-Hi'},
    {id: '3', message: 'You'},
]

ReactDOM.render(

  <React.StrictMode>
    <App postData={postData} dialogsData={dialogsData} messagesData={messagesData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
