import { useState } from "react";
import Button from "./Ui/Button";

function AddItemForm({ onAddItem }) {
  const [item, setItem] = useState("");

  const itemHandler = function (e) {
    setItem(e.target.value);
  };
  const submitHandler = function (e) {
    e.preventDefault();
    if (item.length === 0) return;
    const itemsList = { item, id: Math.random().toString() };
    // lift itemsList to the app Component .
    onAddItem(itemsList);
    setItem("");
  };
  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        id="item"
        placeholder="add item..."
        value={item}
        onChange={itemHandler}
      />
      <Button type="primery">ADD</Button>
    </form>
  );
}

export default AddItemForm;
