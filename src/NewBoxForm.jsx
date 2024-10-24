import React, {useState} from "react";

const NewBoxForm = ({ addBox }) => {
  const INITIAL_STATE = {
    width: 490,
    height: 490,
    bgcolor: '#000000'
  }

  const [formData, setFormData] = useState(INITIAL_STATE);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(data => ({
      ...data,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    addBox({...formData});
    setFormData(INITIAL_STATE);
  }

  return (
    <form onSubmit={handleSubmit} className="NewFormBox">
      <label htmlFor="width">Box Width: </label>
      <input 
      id="width"
      type="range"
      name="width"
      min="20"
      max="1000"
      placeholder="Width"
      value={formData.width} 
      onChange={handleChange}
      />
      <label htmlFor="height">Box Height: </label>
      <input 
      id="height"
      type="range"
      name="height"
      min="20"
      max="1000"
      placeholder="Height"
      value={formData.height} 
      onChange={handleChange}
      />
      <label htmlFor="bgcolor">Box Background Color</label>
      <input 
      id="bgcolor"
      type="color"
      name="bgcolor"
      placeholder="Background color"
      value={formData.bgcolor} 
      onChange={handleChange}
      />
      <button>Create Box</button>
    </form>
  )
}

export default NewBoxForm;