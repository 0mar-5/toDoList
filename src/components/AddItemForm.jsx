import Button from "./Ui/Button";
function AddItemForm() {
  return (
    <form>
      <input type="text" id="item" placeholder="add item..." />
      <Button type="primery">ADD</Button>
    </form>
  );
}

export default AddItemForm;
