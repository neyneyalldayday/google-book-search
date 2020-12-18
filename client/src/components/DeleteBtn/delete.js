import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function DeleteBtn(props) {
    return (
      <span className="button is-danger ml-2" {...props} role="button" tabIndex="0" >
        delete
         <FontAwesomeIcon icon="skull-crossbones" />
      </span>
    );
  }
  
  export default DeleteBtn;
  