import React, { useEffect, useState } from "react";
import { List, ListItem } from "../../components/list";
import DeleteBtn from "../../components/DeleteBtn/delete";
import API from "../../utils/API";
function Saved() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    loadBooks()
  }, [])


  function loadBooks() {
    API.getBooks()
      .then(res => 
        setBooks(res.data)
      )
      .catch(err => console.log(err));
  }; 
return(
  <div class="container is-max-desktop">
  <div class="notification is-primary">
  <h1 className="title is-1">your saved Books</h1>
  {books.length ? (
              <List>
                {books.map(book => {
                  return (
                    <ListItem key={book._id}>
                      <a href={"/books/" + book._id}>
                        <strong>
                          {book.title} by {book.author}
                        </strong>
                      </a>
                      <DeleteBtn onClick={() =>{}} />
                    </ListItem>
                  );
                })}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
  </div>
</div>



)

}


export default Saved;