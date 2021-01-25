import {Component} from 'react';
import App from '../App';



 class BookList extends Component {
constructor(props){
super(props)  


}

    mappedBooks = this.props.books.map((elem)=>{
            
    return <ul><li key={elem.title}> {elem.title} </li> <li key={elem.author}></li></ul>, <img key={elem.img} id="bookImages" src={elem.img} height="100px" onClick={(e)=>this.props.addToShelf(e)}/> })
      
            
//    testing = this.props.addToShelf
//    {this.testing} 

    render(){
     
        return(

            <div>
          <div>
          {this.mappedBooks}

            </div>
           
              
         
             
           </div>


        )
    }
}


export default BookList;


