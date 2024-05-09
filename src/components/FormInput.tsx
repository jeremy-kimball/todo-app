import './FormInput.css'
import { useState } from "react";

export default function FormInput({ sendFormData }) {
  const [data, setData] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    sendFormData(data);
    setData("")
  }
  return (
    <>
      <form method='post' onSubmit={handleSubmit}>
        <input className="WriteTodo" type="text" value={data} onChange={(e) => setData(e.target.value)}></input>
        <input className="Submit" type="submit" onSubmit={handleSubmit}></input>
      </form>
    </>
  );
}
