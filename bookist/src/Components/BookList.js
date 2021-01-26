import {Component} from 'react';
import App from '../App';



 class BookList extends Component {
constructor(props){
super(props)  


}

    // mappedBooks = this.props.books.map((elem)=>{
    // return (<div><ul><li key={elem}> {elem.title} </li> <li key={elem.author}>{elem.author}</li></ul> 
    // <img key={elem.image} id="bookImages" src={elem.img} height="100px" onClick={()=>this.props.addToShelf(elem.title)}/></div>)})
      
            

    render(){
     
        return(

            <div>
          <div id="bookList">
        
              {this.props.books.map((elem)=>{
    return (<div><ul><li key={elem}> {elem.title} </li> <li key={elem.author}>{elem.author}</li></ul> 
    <img key={elem.image} id="bookImages" src={elem.img} height="100px" onClick={()=>this.props.addToShelf(elem.title)}/></div>)})}
              
            </div>
           
              
         
             
           </div>


        )
    }
}


export default BookList;


