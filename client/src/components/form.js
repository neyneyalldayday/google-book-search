import React from "react";



export function Input(props) {
  return (
    <div className="field">
      <input className="input is-pirmary" {...props} />
    </div>
  );
}

export function TextArea(props) {
  return (
    <div className="field">
      <textarea className="input is-primary" rows="20" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button {...props} style={{ float: "right", marginBottom: 10, marginTop: 20 }} className="button is-primary">
      {props.children}
    </button>
  );
}