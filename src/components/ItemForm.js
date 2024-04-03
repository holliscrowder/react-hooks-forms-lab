import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onNewName, onNewCategory, onItemFormSubmit }) {
  // form inputs
  const [name, setName] = useState("");
  function onNewName(event) {
    setName(event.target.value);
  }

  const [category, setCategory] = useState("Produce");
  function onNewCategory(event) {
    setCategory(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newItem = {
      id: uuid(),
      name: name,
      category: category,
    };
    onItemFormSubmit(newItem);
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label htmlFor="name">
        Name:
        <input
          type="text"
          name="name"
          id="name"
          onChange={onNewName}
          value={name}
        />
      </label>

      <label htmlFor="category">
        Category:
        <select
          id="category"
          name="category"
          onChange={onNewCategory}
          value={category}
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
