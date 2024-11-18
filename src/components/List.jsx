import ListItem from "./ListItem";

function List({ items, onDelete }) {
  const deleteHandler = function (event) {
    // console.log(event.target.id);
    // console.log(items);
    onDelete(items.filter((item) => item.id !== event.target.id));
  };

  return (
    <ul>
      {items.length === 0 ? (
        <h2>There is No items .</h2>
      ) : (
        items.map((item) => (
          <ListItem
            key={item.id}
            id={item.id}
            item={item.item}
            onDelete={deleteHandler}
          />
        ))
      )}
    </ul>
  );
}

export default List;
