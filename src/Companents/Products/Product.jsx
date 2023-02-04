import "./Product.css";
function Product(props) {
  return (
    <div className="card">
      <img src={props.image} alt="" />
      <div className="price">{props.price} ₽</div>
      <div className="prod-name">{props.name}</div>
      <button className="btn-prod">Купить</button>
    </div>
  );
}

export default Product;
