import React, { useState } from "react";
import Header from "./components/Header";
import AddItemForm from "./components/AddItemForm";
import List from "./components/List";
import Container from "./components/Ui/Container";

function App() {
  const [itemsData, setItemsData] = useState([]);
  const addItemHandler = function (enteredItem) {
    //to pass data to list Component
    setItemsData((prevItem) => {
      // const data = [enteredItem, ...prevItem];
      // console.log(data);
      return [enteredItem, ...prevItem];
    });
  };
  return (
    <Container>
      <Header />
      <AddItemForm onAddItem={addItemHandler} />
      <List items={itemsData} />
    </Container>
  );
}

export default App;
