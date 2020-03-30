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
       constructor(){
         super();
        this.state = {
          error: null,
          enteredSymbol: "NFLX",
          quote: null,
          quoteHistory: [],
          showHistory: false,
          news: [],
          showAllNews: false,
          chart: [],
          showAllChart: false,
          page : false
        }

       }
     
      
      onChangeLink(data){
        console.log("test"+ data.page);
        console.log("test"+ data.symbol);
          this.setState({
             page : data.page,
             enteredSymbol : data.symbol
          })
      }



  render(){
      const isLoggedIn = this.state.page;
  return (
    <div className="App">
        <Navbar />
        {isLoggedIn ? 
        <Stock data={this.state.enteredSymbol} />  
        :  
        <Active changeState={this.onChangeLink.bind(this)}  /> }
    </div>
  );
  }
}

export default App;
