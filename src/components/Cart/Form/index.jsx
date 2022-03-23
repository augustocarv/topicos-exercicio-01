const CartForm = ({ onAdd, onInputChanges, form }) => (
  <form className="form-add-item" action="#" method="post" onSubmit={onAdd}>
    <fieldset>
      <label htmlFor="item">Adicionar Novo Item na Lista:</label>
      <div className="form-group mb-3 d-flex">
        <input
          type="number"
          className="form-control"
          id="quantity"
          placeholder="Quantidade"
          style={{ width: "8%" }}
          value={form.quantity}
          onChange={event => onInputChanges(event.target.value, "quantity")}
        />
        <input
          type="text"
          className="form-control"
          id="item"
          placeholder="Item"
          value={form.item}
          onChange={event => onInputChanges(event.target.value, "item")}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Adicionar
      </button>
    </fieldset>
  </form>
);

export default CartForm;
