import { useState } from "react";
import Header from "./components/Header";
import AddItemForm from "./components/AddItemForm";
import List from "./components/List";
import Container from "./components/Ui/Container";

function App() {
  const [itemvalue, setItemValue] = useState("");
  const [itemsData, setItemsData] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  const addItemHandler = function (enteredItem) {
    //to pass data to list Component
    setItemsData((prevItem = []) => {
      return [enteredItem, ...prevItem];
    });
  };

  const deleteHandler = function (event) {
    // console.log(event.target.id);
    // console.log(items);
    setItemsData(itemsData.filter((item) => item.id !== event.target.id));
  };

  const editHandler = function (e) {
    setItemValue(e.target.value);
    setIsEditing((edit) => !edit);
    setItemsData(() =>
      itemsData.map((item) =>
        item.id === e.target.id ? { ...item, itemvalue: itemvalue } : item
      )
    );
  };

  return (
    <Container>
      <Header />
      <AddItemForm
        isEditing={isEditing}
        onAddItem={addItemHandler}
        itemvalue={itemvalue}
        setItemValue={setItemValue}
      />
      <List
        items={itemsData}
        onDelete={deleteHandler}
        onEdit={editHandler}
        isEditing={isEditing}
      />
    </Container>
  );
}

export default App;
