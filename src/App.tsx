import FormInput from "./components/FormInput";
import { useState } from "react";
import "./App.css";

const initialValue: string[] = ["Example 1", "Example 2"];

function App() {
  const [formData, setFormData] = useState(initialValue);
  
  function handleFormData(data)
  {
    setFormData([...formData, data]);
  }

  function handleClick(index: number)
  {
    const updatedFormData = formData.filter((item, i) => i !== index);
    setFormData(updatedFormData);
  }
  
  return (
    <>
      <h1>Todo</h1>
      <FormInput sendFormData={handleFormData} />
      <ul>
        {formData.map((item, index) => (
        <li key={index} onClick={() => handleClick(index)}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
