import React from 'react';
import Stock from './Stock';
import Navbar from './components/view';
import { loadQuotesForStock, loadLogoForStock, loadRecentNewsForStock,  loadChartForStock } from "./components/api/iex";
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import List from './components/stockList';
import Active from './components/active'
//Products 
//Company
//Earn crypto
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
        showAllChart: false,
        page : true
      }


  render(){
      const isLoggedIn = this.state.page;
  return (
    <div className="App">
        <Navbar />
        {isLoggedIn ? <Stock />  :  <Active /> }
    </div>
  );
  }
}

export default App;
