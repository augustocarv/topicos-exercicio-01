import CartItem from "./components/Item";

const CartList = ({ list, onRemove }) => (
  <>
    <header>
      <h2>Lista de Compras:</h2>
    </header>
    <div className="lista-compras-container">
      <div className="lista-items">
        {list.map(({ id, item, quantity }) => (
          <CartItem key={id} item={item} quantity={quantity} onRemove={() => onRemove(id)} />
        ))}
      </div>
    </div>
  </>
);

export default CartList;
