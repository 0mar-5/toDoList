import Button from "./Ui/Button";

function ListItem({ item, id, onDelete, onEdit, isEditing }) {
  return (
    <li>
      <span>{item}</span>

      <div className="btn-group">
        <Button
          onDelete={onDelete}
          type="deleting"
          id={id}
          styleType="secondry"
          disabled={isEditing}
        >
          Delete
        </Button>
        <Button styleType="secondry" id={id} onEdite={onEdit} value={item}>
          Edit
        </Button>
      </div>
    </li>
  );
}

export default ListItem;
