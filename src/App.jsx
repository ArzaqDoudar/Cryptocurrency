import React from 'react';
import {Switch , Route , Link} from 'react-dom';
import {Layout , Typography , space} from 'antd';

const App = () => {
  return (
    <div className="app">
      <div className="navbar"></div>
      <div className="main"></div>
      <div className="footer"></div>
    </div>
  )
}

export default App  

//! these are some packages we will installed to help us in this project:
//* ant design :for styling
//* redux : for 
//* axios : to make an api request
//* chart.js : for creating a chart
//* react-chartjs-2 : to render chartjs
//* html-react-parser : to parse some html data
//* millify:
//* moment : to parse times and dates
