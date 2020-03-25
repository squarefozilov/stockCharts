import React from 'react';
import Plot from 'react-plotly.js';
import Data from './components/api/data.json'
import ReactDOM from 'react-dom';
import ads_list from './components/api/data.json'
class Stock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stockChartXValues: [],
      stockChartYValues: [], 
      search : 'FB',
      active : [],
      fix : [],
  
    }
    this.onChange  = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit(e) {
    e.preventDefault()
    this.fetchStock();
    console.log(this.state.search);
    const user = {
      email: this.state.email,
      password: this.state.password
    }

  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  componentDidMount() {
    this.fetchStock();
    this.fetchMostActive();
  }

  fetchMostActive(){
 
    const activePoint = this;

    let mostActive = [];

    //const pointerToThis = this;
   // console.log(pointerToThis);
    //const API_KEY = 'HGJWFG4N8AQ66ICD';
    let StockSymbol = this.state.search;
    let API_Call = `https://financialmodelingprep.com/api/v3/stock/actives`;
    
    fetch(API_Call)
      .then(
        function(response) {
          console.log("test");
          
         //console.log(response);
          return response.json();
        }
      )
      .then(
        function(data) {
           

          console.log(data.mostActiveStock);
           JSON.stringify(data)
           mostActive.push(data.mostActiveStock)
           activePoint.setState({active: data.mostActiveStock})
           
          // console.log(stockChartXValuesFunction);
          //
          //"ticker": "BRK-A",
 
        
        }
      )

  }

  fetchStock() {
    const pointerToThis = this;
    console.log(pointerToThis);
    const API_KEY = 'HGJWFG4N8AQ66ICD';
    let StockSymbol = this.state.search;
    let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${StockSymbol}&outputsize=compact&apikey=${API_KEY}`;
    let stockChartXValuesFunction = [];
    let stockChartYValuesFunction = [];

    fetch(API_Call)
      .then(
        function(response) {
          return response.json();
        }
      )
      .then(
        function(data) {
          console.log(data);

          for (var key in data['Time Series (Daily)']) {
            stockChartXValuesFunction.push(key);
            stockChartYValuesFunction.push(data['Time Series (Daily)'][key]['1. open']);
          }

          // console.log(stockChartXValuesFunction);
          pointerToThis.setState({
            stockChartXValues: stockChartXValuesFunction,
            stockChartYValues: stockChartYValuesFunction
          });
        }
      )
  }

  render() {

   let str =  JSON.stringify(this.state.active)
     
    console.log("Abbosfozilov" + str);
   // console.log(this.state.active);
  //  console.log("map");
    var innerj
    let ith = 0;
    const items = this.state.active.map((item , index) =>{
  
      console.log("222");
      //console.log(item[0][0].ticker);
      console.log(item.ticker);
      console.log(item.companyName);
          return <div>
          <div className="card" style= {{ marginTop : "8px" ,margin : "4px",height: "20rem" ,width: "20rem",float:"left"}}>
            <div className="card-body">
                <h5 className="card-title">{item.companyName}</h5>
                  <p className="card-text"> Changes {item.changes} {item.ticker}   </p>
                  <p> Price ${item.price}  Changes % {item.changesPercentage} </p>
                  <button  style= {{ }} type="button" class="btn btn-secondary align-self-end btn btn-lg btn-block btn-primary">Price Charts</button>
             </div>
             </div>
            </div>
     // console.log(item[0]changesPercentage)
     
      //console.log(index.index.ticker);
    //  console.log(item[index].ticker);
     // console.log(item[1].ticker);
     //{ticker, changes, price, changesPercentage, companyName}).
     
    });

    console.log(this.setState.fix)
    return (
      <div> 
           
        
             {items}
     
            <div className="container">
  
                    <div className="row">
                      <div className="col-md-6 mt-5 mx-auto">
                        <form noValidate onSubmit={this.onSubmit}>
                          <div className="form-group">
                            <input
                              type="email"
                              className="form-control"
                              name="search"
                              placeholder="Company by ticker (AAPL,FB,GOOG)"
                              value={this.state.email}
                              onChange={this.onChange}
                            />
                          </div>
                          <button type="submit"
                            className="btn btn-secondary"> Search
                          </button>
                        </form>

                      </div>
                    </div>
                  </div>   


         
    
         
        <Plot
          data={[
            {
              x: this.state.stockChartXValues,
              y: this.state.stockChartYValues,
              type: 'scatter',
              mode: 'lines+markers',
              marker: {color: 'red'},
            }
          ]}
          layout={{width: 1220, height: 440, title: 'A Fancy Plot'}}
        />
      </div>
    )
  }
}

export default Stock;