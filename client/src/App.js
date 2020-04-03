import React, { Component } from 'react';
import Stock from './Stock';
//import Navbar from './components/view';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { loadQuotesForStock, loadLogoForStock, loadRecentNewsForStock,  loadChartForStock } from "./components/api/iex";
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import List from './components/stockList';
import Active from './components/active'

import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'
//Products 
//Company
//Earn crypto
class App  extends React.Component{
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
       <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Active} />
          <div className="container">
          <Route exact path="/charts" component={Stock} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/topcompany" component={Active} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
          </div>
        </div>
      </Router>
  );
  }
}

export default App;


/*
<Navbar />
{isLoggedIn ? 
<Stock data={this.state.enteredSymbol} />  
:  
<Active changeState={this.onChangeLink.bind(this)}  /> }

*/
