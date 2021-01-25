import App from '../App';
import {Component} from 'react';

class Shelf extends Component {
    constructor(props){
        super(props)
   
        
    }



    mappedTitles = this.props.shelf.map((elem)=>{   
    return <div><ul><li key={elem}> {elem} </li></ul></div>})
          
//*onClick={this.props.clearShelf}

    render(){
     console.log(this.props.shelf)
        return (
                <div id="shelf"><h1>Shelf</h1>
                <div id="shelfTitles">
                {this.mappedTitles}   
                <button>clear shelf</button>
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