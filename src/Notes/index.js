import React, { useState } from "react";
import Fotter from "../Fotter";
import "./index.css";
const Index = () => {
  const [tittle, setTittle] = useState('');
  const [message, setMessage] = useState({ text: "", id: "" });
  const [note, setNote] = useState('');
  const [message1, setMessage1] = useState({ text1: "", id1: "" });
  const [status, setStatus] = useState(false);
  const [error,setError] = useState('')
  const changeMessage = (e) => {
    setMessage({
      ...message,
      text: e.target.value,
    });
  };
  const changeMessage1 = (e) => {
    setMessage1({
      ...message1,
      text1: e.target.value,
    });
  };
  const handelSubmit = (e) => {
   if (tittle!=='' && note!=='') {
    e.preventDefault();
    setStatus(true);
    
    let newTodo = {
      text: message.text,
      text1: message1.text1,
      id: new Date().getTime().toString(),
      id1: new Date().getTime().toString(),
    };
    setTittle([...tittle, newTodo]);
    setNote([...note, newTodo]);
    setMessage({
      text: "",
      id: "",
    });
    setMessage1({
      text1: "",
      id1: "",
    });
    setError('')
  }
  else{
    setError('message and tittle should be not empty')
  }
}
  const handelRemove =(id)=>{
           let newItem=tittle.filter((eachItem)=>{
               return eachItem.id !== id
           })  
           setTittle(newItem)
  }

  return (
    <div>
      <h1 className="heading">Notes</h1>
      <div className="container">
        <form>
          <input
            className="tittle"
            type="text"
            id="message"
            name="message"
            placeholder="Tittle"
            value={message.text}
            onChange={changeMessage}
          />
          <br />
        </form>
        <input
          className="content"
          type="text"
          id="message"
          name="message"
          placeholder="Take a note"
          value={message1.text1}
          onChange={changeMessage1}
        />
        <br />
        <p>{error}</p>
        <button className="button"  onClick={handelSubmit} type="submit">
          Add
        </button>
      </div>
      <p>
        {status ? (
          <div className="grid-containers">
            {tittle.map((eachTittle) => {
              const { text, text1, id } = eachTittle;
              return (
                <div className="box-container">
                  <ul key={id}>
                    <h1>{text}</h1>
                    <p>{text1}</p>
                    <button className="box-button" onClick={()=>handelRemove(id)}>Delete</button>
                  </ul>
                  
                </div>
              );
            })}
          </div>
        ) : (
          <div>
          <Fotter/>
          </div>
        )}
      </p>
    </div>
  );
};

export default Index;
