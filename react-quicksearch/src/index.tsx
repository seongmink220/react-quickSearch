import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';
import App from './App';
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
        <React.StrictMode>
            <RecoilRoot>
                <App />
            </RecoilRoot>
        </React.StrictMode>
    </BrowserRouter>,
    document.getElementById('root')
);



// import React from 'react';
// import ReactDOM from 'react-dom/client';
// // import './index.css';
// import App from './App';
// // import reportWebVitals from './reportWebVitals';
//
// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
//
// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// // reportWebVitals();
