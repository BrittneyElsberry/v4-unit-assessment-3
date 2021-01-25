import App from '../App';
import {Component} from 'react';

class Shelf extends Component {
    constructor(props){
        super(props)
   
        
    }

//add under render
//

    //mappedTitles = this.props.shelf.map((elem, index)=>{   
   // return <div key={index}>{elem}</div>})
          


    render(){
     console.log(this.props.shelf)
        return (
                <div id="shelf"><h1>Shelf</h1>
                <div id="shelfTitles">
                 
                {this.props.shelf.map((elem, index)=>{   
    return <div key={index}>{elem}</div>})}  
                <button onClick={this.props.clearShelf}>clear shelf</button>
                </div>
               </div>

        )
    }

}

export default Shelf;


/*//This component will display a list of the titles that a user clicks
// props: {
    shelf: array,
    clearShelf: function
}


*/