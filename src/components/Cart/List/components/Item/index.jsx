import classNames from "classnames";
import { memo, useState } from "react";

const CartItem = ({ item, quantity, onRemove }) => {
  const [hasBought, setHasBought] = useState(false);

  return (
    <div className="item">
      <p
        className={classNames({
          ["bought"]: hasBought,
        })}>
        {item} - {quantity}
      </p>
      <div>
        <button
          className={classNames({
            ["btn"]: true,
            ["btn-sm"]: true,
            ["btn-success"]: !hasBought,
            ["btn-secondary"]: hasBought,
          })}
          type="button"
          style={{ marginRight: "8px" }}
          onClick={() => setHasBought(prev => !prev)}>
          {hasBought ? "Desfazer" : "Comprado"}
        </button>
        <button className="btn btn-danger btn-sm" type="button" onClick={onRemove}>
          Excluir
        </button>
      </div>
    </div>
  );
};

export default memo(CartItem);
