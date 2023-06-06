import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <section className="wrapper">
    <div className="container-fostrap">
        <div className="content">
            <div className="container">
            <App/>
            </div>
        </div>
    </div>
</section>

);


