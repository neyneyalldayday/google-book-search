import React, { useEffect, useState } from "react";
import API from "../utils/API";
import { Input, TextArea, FormBtn } from "../components/form";
function SearchComponent() {
  const [setBooks] = useState([])
  const [formObject, setFormObject] = useState({
    title:"",
    author:"",
    synopsis: ""
  })


  useEffect(() => {
    loadBooks()
  
  }, )

  function loadBooks() {
    API.getBooks()
      .then(res => 
        setBooks(res.data)
      )
      .catch(err => console.log(err));
    
  };

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

 

  function handleFormSubmit(event) {
    event.preventDefault();
    


    if (formObject.title && formObject.author) {
      API.searchBook({
        title: formObject.title,
        author: formObject.author,
        synopsis: formObject.synopsis
      })
      .then(() =>  setFormObject({
        title: "",
        author: "",
        synopsis: ""
      }))
      .then(() => loadBooks())
      .catch(err => console.log(err));
    }
    if (formObject.title && formObject.author) {
      API.saveBook({
        title: formObject.title,
        author: formObject.author,
        synopsis: formObject.synopsis
      })
      .then(() =>  setFormObject({
        title: "",
        author: "",
        synopsis: ""
      }))
      .then(() => loadBooks())
      .catch(err => console.log(err));
    }
  }




  return(
    <div class="container is-max-desktop">
  <div class="notification is-primary">
  <h1 className="title is-1">search for Books</h1>
  <form>
              <Input
                onChange={handleInputChange}
                name="title"
                placeholder="Title (required)"
                value={formObject.title}
              />
              <Input
                onChange={handleInputChange}
                name="author"
                placeholder="Author (required)"
                value={formObject.author}
              />
              <TextArea
                onChange={handleInputChange}
                name="synopsis"
                placeholder="Synopsis (Optional)"
                value={formObject.synopsis}

              />
              <FormBtn
                disabled={!(formObject.author && formObject.title)}
                onClick={handleFormSubmit}>
                Submit Book
              </FormBtn>
            </form>
  </div>
</div>



  )


 

}



export default SearchComponent;