import React, { useState } from "react";
import "./modal.css";
import { v4 as uuidv4 } from 'uuid';


function Modal({ setOpenModal,addNewMovie}) {
  
        const [inputs,setInputs] = useState({

          image:'',
          name:'',
          description:'',
          rate:''
        })
        
        const handleChange = (e) => {
          setInputs({...inputs,[e.target.name]:e.target.value})
        }

        const handleAdd = () => {
          addNewMovie({...inputs, id: uuidv4()})
        }
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            className="closebtn"
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="body">
          <input className="filmImage" placeholder="Enter Film Image" name="image" onChange={handleChange}></input>
          <input className="filmName" placeholder="Enter Film Name" name="name" onChange={handleChange}></input>
          <input className="filmDescription" placeholder="Enter Film Description" name="description" onChange={handleChange}></input>  
          <input className="filmRate" placeholder="Enter Film Rate" name="rate" onChange={handleChange}></input>

        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button variant='light' onClick={handleAdd}>Add</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
