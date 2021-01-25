import {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import BookList from './Components/BookList';
import Shelf from './Components/Shelf';
import data from './data';
import SearchBar from './Components/SearchBar';


class App extends Component {
constructor(){
super()
this.state = {
  books: data,
  shelf: []


}
this.addToShelf.bind(this)
//this.clearShelf.bind(this)
//clearShelf={this.clearShelf}


}

addToShelf =(bookTitle)=>{
this.setState({shelf: [...this.state.shelf, bookTitle]}) //spread this.state.shelf to preserve the shelf array, add bootTitle to push each title to array

  }

// clearShelf=()=>{
// return this.state.shelf = []
// } 
  

  // filterBooks=(input)=>{
  
  // }


render(){

  return (
    <div className="App">
    <Header/>
    <BookList books={this.state.books} 
              addToShelf={this.addToShelf}/>
    <Shelf shelf={this.state.shelf} />
    <SearchBar />
    </div>
  )
}

}
  

export default App;
