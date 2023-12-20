import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import CardList from './CardList';
// import Card from './Card';
// import data, { robots } from './data.js';
import reportWebVitals from './reportWebVitals';
import 'tachyons';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <div>
//       <Card id={robots[0].id} name={robots[0].name} username={robots[0].username} email={robots[0].email}/>
//       <Card id={robots[1].id} name={robots[1].name} username={robots[1].username} email={robots[1].email}/>
//       <Card id={robots[7].id} name={robots[7].name} username={robots[7].username} email={robots[7].email}/>
//     </div> 
//   </React.StrictMode>
// );

// ReactDOM.render(
//     // <CardList robots={robots}/>,
//     <App />,
//     document.getElementById('root')
// );
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
      <App />
    </div> 
);

reportWebVitals();
