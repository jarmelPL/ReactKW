import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Heading from './components/heading/Heading'
import App from './App';
import Footer from './components/footer/Footer'
import reportWebVitals from './reportWebVitals';

const companyData = {
  email: "contact@example2.com",
  city: "Warsaw",
  street: "Ulicowa"
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Heading headerTitle="Props info"/>
    <App />
    <Footer companyData={companyData} contactEmail="lol@example.com"/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
