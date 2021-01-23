import {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import BookList from './Components/BookList';
import Shelf from './Components/Shelf';
import data from './data';


class App extends Component {
constructor(){
super()
this.state = {
  books: data,
  shelf: []


}

//this.setState=({books: data})


}

addToShelf =(bookClicked)=>{
  //this function adds a book to the empty shelf array on state once the book is clicked.
  this.setState({shelf: bookClicked})


  }


render(){

  return (
    <div className="App">
    <Header/>
    <BookList books={this.state.books} 
              addToShelf={this.addToShelf}/>
    <Shelf />
    </div>
  )
}

}
  

export default App;
