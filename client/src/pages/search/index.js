import React, { useEffect, useState } from "react";
import API from "../../utils/API";
import { Input, TextArea, FormBtn } from "../../components/form";
function Search() {
  const [ setBooks] = useState([])
  const [formObject, setFormObject] = useState({})


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
  <h1 className="title is-1">search for Books</h1>
  <form>
              <Input
                onChange={() => {}}
                name="title"
                placeholder="Title (required)"
              />
              <Input
                onChange={() => {}}
                name="author"
                placeholder="Author (required)"
              />
              <TextArea
                onChange={() => {}}
                name="synopsis"
                placeholder="Synopsis (Optional)"
              />
              <FormBtn
                disabled={!(formObject.author && formObject.title)}
                onClick={() => {}}>
                Submit Book
              </FormBtn>
            </form>
  </div>
</div>



  )


 

}



export default Search;