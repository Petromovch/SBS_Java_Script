import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import CommonPage from './Components/Commons/Common_page/CommonPage';



function App() {
    return (
        <div>
          <CommonPage />
        </div>
    )
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App/>
);
reportWebVitals();
