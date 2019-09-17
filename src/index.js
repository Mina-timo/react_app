import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import N from './Components/Navbar'
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import Navbar from './Components/Navbar';

// import { render } from 'react-dom';
// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

ReactDOM.render(( 
      <BrowserRouter>
        <App />
      </BrowserRouter>
    ), document.getElementById('root'));

ReactDOM.render(( 
  <BrowserRouter>
    <N />
   </BrowserRouter>
), document.getElementById('Header'));

registerServiceWorker();