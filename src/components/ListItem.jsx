import Button from "./Ui/Button";

function ListItem({ item, id, onDelete }) {
  return (
    <li>
      <span>{item}</span>

      <div className="btn-group">
        <Button onClick={onDelete} id={id} type="secondry">
          Delete
        </Button>
        <Button type="secondry">Edit</Button>
      </div>
    </li>
  );
}

export default ListItem;
