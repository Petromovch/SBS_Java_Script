import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import CommonPage from './Components/Commons/Common_page/CommonPage';

let usersRank = [
    {
        place : 1,
        username : "petro228",
        rank : 2000,
    },
    {
        place : 2,
        username : "petro227",
        rank : 1990,
    },
    {
        place : 3,
        username : "petro226",
        rank : 1988,
    },
    {
        place : 4,
        username : "petro225",
        rank : 1987,
    },
]

function App() {
    return (
        <div>
          <>
          <CommonPage />
          </>
        </div>
    )
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App/>
);
reportWebVitals();
