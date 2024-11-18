import Button from "./Ui/Button";

function ListItem({ item }) {
  return (
    <li>
      <span>{item}</span>

      <div className="btn-group">
        <Button type="secondry">Delete</Button>
        <Button type="secondry">Edit</Button>
      </div>
    </li>
  );
}

export default ListItem;
