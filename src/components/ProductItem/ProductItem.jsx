import "./ProductItem.css";

function ProductItem({ item, removeItem, increment, decrement }) {
  return (
    <div className="card">
      <div>
        <h2>{item.name}</h2>
        <p>{item.price}</p>
        <button
          onClick={() => {
            removeItem(item.id);
          }}
        >
          remove
        </button>
      </div>
      <div>
        <button onClick={increment}>+</button>
        {item.count}
        <button onClick={decrement}>-</button>
      </div>
    </div>
  );
}

export default ProductItem;
