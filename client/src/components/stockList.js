import  React ,{ Component} from 'react'
import Active from './api/data.json'
class List extends Component{
    render(){
        return(
            <div>
              
                {Active.map((posts, index) =>{
                    return <h1>{posts}</h1>
                })}
            </div>
        )
    }
}

export default List;