
import {Component} from 'react';
import App from '../App'

class SearchBar extends Component {
constructor(){
    super()
    this.state = {
        userInput: ''
    }

    this.handleChange.bind(this)
    this.handleClick.bind(this)
    this.handleClear.bind(this)
}



handleChange=(input)=>{
   this.setState({userInput: input})
}

handleClick=()=>{
return <div key={this.props.filterBooks.index}>{this.props.filterBooks}</div>
}

handleClear=()=>{
    this.setState=({userInput: ''})
    return this.props.reset
}


render(){
    console.log(this.state.userInput)
    //console.log(`this is checking handleClear ${this.handleClear}`)
return( <div id="searchBar" >

<input type="text" placeholder="type here" onChange={(input)=>this.handleChange(input.target.value)} value={this.state.userInput} />
<br></br>
<button onClick={this.handleClick}>Search</button>

<button onClick={this.handleClear}>Clear Search</button>

</div>


)
}
}
export default SearchBar;