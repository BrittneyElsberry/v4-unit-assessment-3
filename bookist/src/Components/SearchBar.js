
import {Component} from 'react';
import App from '../App'

class SearchBar extends Component {
constructor(){
    super()
    this.state = {
        userInput: ''
    }
}


handleChange=(input)=>{
   return this.setState({userInput: input})
}

handleClick=(elem)=>{
return <div key={elem.index}>{this.props.filterBooks}</div>
}

handleClear=()=>{
    this.setState=({userInput: ''})
    return this.props.reset
}


render(){
    console.log(this.state.userInput)
return( <div>

<input type="text" placeholder="type here" onChange={(input)=>this.handleChange(input.target.value)} value={this.state.userInput} />
<br></br>
<button onClick={this.handleClick}>Search</button>

<button onClick={this.handleClear}>Clear Search</button>

</div>


)
}
}
export default SearchBar;