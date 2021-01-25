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
this.clearShelf.bind(this)
this.reset.bind(this)



}

addToShelf =(bookTitle)=>{
this.setState({shelf: [...this.state.shelf, bookTitle]}) //spread this.state.shelf to preserve the shelf array, add bootTitle to push each title to array

  }

clearShelf=()=>{
this.setState({shelf: []})
} 
  

  filterBooks=(input)=>{
  const {books} = this.state  

  let filteredBooks = books.filter((elem)=> elem.includes(input)) 
  this.setState({books: [...filteredBooks]}) 
  
  }

  reset=()=>{
    this.setState({books: data})
  }


render(){

  return (
    <div className="App">
    <Header/>
    <SearchBar filterBooks={this.filterBooks} reset={this.reset}/>
    <BookList books={this.state.books} 
              addToShelf={this.addToShelf}/>
    <Shelf shelf={this.state.shelf} clearShelf={this.clearShelf} />
   
    </div>
  )
}

}
  

export default App;
