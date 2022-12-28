import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// this root variable code s says that whereever there is an section of html having id ==  root , just push this app componennt there. 
reportWebVitals();

// this index.js is our js file which will populate our index.html file and things will be seen. 
// hence it is said as our "ENTRY POINT" 
// <App/> is a component which is being called here.."means u bring the app component here and link it to index.html  file and hence this component will be  rendered ."
