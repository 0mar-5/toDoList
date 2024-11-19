import Button from "./Ui/Button";

function ListItem({
  item,
  id,
  onDelete,
  onEdit,
  isEditing,
  isDone,
  onToggleItem,
}) {
  return (
    <li>
      <span
        style={isDone ? { textDecoration: "line-through", color: "green" } : {}}
      >
        {item}
      </span>

      <div className="btn-group">
        <button
          className="btn btn-secondry"
          id={id}
          onClick={(e) => onToggleItem(e)}
          disabled={isEditing}
        >
          {isDone ? "Undo" : "Done"}
        </button>
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
