import ListItem from "./ListItem";

function List({ items = [], onDelete, onEdit, isEditing }) {
  return (
    <ul>
      {items?.length === 0 ? (
        <h2>There is No items .</h2>
      ) : (
        items.map((item) => (
          <ListItem
            key={item.id}
            id={item.id}
            item={item.itemvalue}
            onDelete={onDelete}
            onEdit={onEdit}
            isEditing={isEditing}
          />
        ))
      )}
    </ul>
  );
}

export default List;
