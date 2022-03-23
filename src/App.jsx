import "./App.css";
import CartForm from "./components/Cart/Form";
import CartList from "./components/Cart/List";
import useCart from "./hooks/useCart";
function App() {
  const { list, onAdd, onInputChanges, form, onRemove } = useCart();

  return (
    <div className="App">
      <CartList list={list} onRemove={onRemove} />
      <CartForm onAdd={onAdd} onInputChanges={onInputChanges} form={form} />
    </div>
  );
}

export default App;
