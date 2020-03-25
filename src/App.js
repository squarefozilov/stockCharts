import React from 'react';
import Stock from './Stock';
import Navbar from './components/view';
import { loadQuotesForStock, loadLogoForStock, loadRecentNewsForStock,  loadChartForStock } from "./components/api/iex";
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import List from './components/stockList';
import Active from './components/active'


class App  extends React.Component {
      state = {
        error: null,
        enteredSymbol: "NFLX",
        quote: null,
        quoteHistory: [],
        showHistory: false,
        news: [],
        showAllNews: false,
        chart: [],
        showAllChart: false
      }


  render(){

  
  return (
    <div className="App">
      <Navbar />
      <Stock />
      <Active />
     
    </div>
  );
  }
}

export default App;
