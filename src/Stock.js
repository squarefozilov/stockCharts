import React from 'react';
import Plot from 'react-plotly.js';
 
import ReactDOM from 'react-dom';
class Stock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stockChartXValues: [],
      stockChartYValues: [], 
      search : 'FB',
  
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
    return (
      <div>
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