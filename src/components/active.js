import React,{Component} from 'react'

class MostActive extends Component{
    constructor(props) {
        super(props);
        this.state = {
          search : 'FB',
          active : [],
        }
     
      }
      componentDidMount() {
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

    render(){


       
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
         
        });
        return(
            <div>
                {items}
            </div>
        )
    }

}

export default  MostActive;