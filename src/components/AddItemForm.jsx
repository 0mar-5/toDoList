import Button from "./Ui/Button";

function AddItemForm({ onAddItem, itemvalue, setItemValue, isEditing }) {
  // const [itemvalue, setItemValue] = useState("");
  const itemHandler = function (e) {
    setItemValue(e.target.value);
  };

  const submitHandler = function (e) {
    e.preventDefault();
    if (itemvalue.length === 0) return;
    const itemsList = { itemvalue, id: Math.random().toString(), done: false };
    // console.log(itemsList);
    // lift items List to the app Component .
    onAddItem(itemsList);
    setItemValue("");
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        id="item"
        placeholder={isEditing ? "Edit item" : "add item..."}
        value={itemvalue}
        onChange={itemHandler}
      />
      <Button styleType="primery" disabled={isEditing}>
        {isEditing ? "Editing..." : "ADD"}
      </Button>
    </form>
  );
}

export default AddItemForm;
