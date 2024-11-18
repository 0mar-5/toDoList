import ListItem from "./ListItem";

function List({ items }) {
  return (
    <ul>
      {items.length === 0 ? (
        <h2>There is No items .</h2>
      ) : (
        items.map((item) => <ListItem key={item.id} item={item.item} />)
      )}
    </ul>
  );
}

export default List;
