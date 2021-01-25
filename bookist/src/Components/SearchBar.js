
import {Component} from 'react';
import App from '../App'

class SearchBar extends Component {
constructor(){
    super()
    this.state = {
        userInput: ''
    }
}

render(){
return( <div>

<input type="text" placeholder="type here" />
<br></br>
<button>Search</button>

<button>Clear Search</button>

</div>


)
}
}
export default SearchBar;