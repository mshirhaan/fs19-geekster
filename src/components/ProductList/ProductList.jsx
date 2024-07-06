import "./ProductList.css";

function ProductList(props) {
  const products = [
    { id: 1, name: "iphone", price: 60000 },
    { id: 2, name: "macbook", price: 80000 },
    { id: 3, name: "washing machine", price: 20000 },
  ];

  return (
    <div className="productList">
      {products.map((product) => {
        return (
          <div key={product.id} className="product">
            <p>{product.name}</p>
            <button
              onClick={() => {
                props.onAdd(product);
              }}
            >
              Add to cart
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default ProductList;
