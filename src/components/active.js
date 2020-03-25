import React,{Component} from 'react'

class MostActive extends Component{
    constructor(props) {
        super(props);
        this.state = {
          search : 'FB',
          active : [],
        }

        this.chartsClick = this.chartsClick.bind(this);

     
      }
      componentDidMount() {
        this.fetchMostActive();
      }

      chartsClick(e){
        e.preventDefault()

          console.log(e.target.id);
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
                 
              <div className="card" style= {{ marginTop : "8px" ,margin : "4px",height: "15rem" ,width: "20rem",float:"left"}}>
                <div className="card-body">
                    <h5 className="card-title">{item.companyName}</h5>
                      <p className="card-text"> Changes {item.changes} {item.ticker}   </p>
                      <p> Price ${item.price}  Changes % {item.changesPercentage} </p>
                     
                 </div>
                 <button id={item.ticker} onClick={this.chartsClick} name={item.ticker} type="button" class="btn btn-secondary align-self-end btn btn-lg btn-block btn-primary">Price Charts</button>
                 </div>
                </div>
         
        });
        return(
            <div> <br/> <br/>
                {items}
            </div>
        )
    }

}

export default  MostActive;