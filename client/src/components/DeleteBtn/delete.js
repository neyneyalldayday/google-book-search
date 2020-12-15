import React from "react";

function DeleteBtn(props) {
    return (
      <span className="button is-danger" {...props} role="button" tabIndex="0">
        ✗
      </span>
    );
  }
  
  export default DeleteBtn;
  