import React, { useEffect, useState } from "react";
import { List, ListItem } from "../components/list";
import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
function Saved() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    loadBooks()
  }, [])

  function deleteBook(id) {
    API.deleteBook(id)
    .then(res => loadBooks())
    .catch(err => console.log(err));
  }


  function loadBooks() {
    API.getBooks()
      .then(res => 
        setBooks(res.data)
      )
      .catch(err => console.log(err));
  }; 
  
return(
  <div className="main">
  <div className="container is-max-desktop">
  <div className="notification is-primary">
  <h1 className="title is-1">your saved Books</h1>
  {books.length ? (
              <List>
                {books.map(book => {
                  return (
                    <ListItem  key={book._id} >
                      <a href={"/books/" + book._id}>
                        <strong>
                          {book.title} by {book.author}
                        </strong>
                      </a>
                      <DeleteBtn onClick={() => deleteBook(book._id)} />
                    </ListItem>
                  );
                })}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
  </div>
</div>
</div>


)

}


export default Saved;