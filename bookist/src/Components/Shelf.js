import App from '../App';
import {Component} from 'react';

class Shelf extends Component {
    constructor(){
        super()

    }


    render(){
        return (
                <div id="shelf"><h1>Shelf</h1></div>

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