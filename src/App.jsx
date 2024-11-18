import React from "react";
import Header from "./components/Header";
import AddItemForm from "./components/AddItemForm";
import List from "./components/List";
import Container from "./components/Ui/Container";

function App() {
  return (
    <Container>
      <Header />
      <AddItemForm />
      <List />
    </Container>
  );
}

export default App;
