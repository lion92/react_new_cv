import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './header/Header'
import reportWebVitals from './reportWebVitals';
import Projets from './projets/Projets'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Header></Header>
        <Projets></Projets>
    </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
