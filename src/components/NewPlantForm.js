import React, { useState } from "react";

function NewPlantForm({ onFormInfo }) {
  const [name, setName ] = useState("")
  const [image, setImage] = useState("")
  const [price, setPrice] = useState("")

  function handleSubmit(event) {
    event.preventDefault()

    console.log(event.target.name.value)
    console.log(event.target.image.value)
    console.log(event.target.price.value)

    const newPlantInfo = {
      name: event.target.name.value,
      image: event.target.image.value,
      price: event.target.price.value
    }
    return onFormInfo(newPlantInfo)
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" name="image" placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)}/>
        <input type="number" name="price" step="0.01" placeholder="Price" value={price} onChange={(e) => setPrice()}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
