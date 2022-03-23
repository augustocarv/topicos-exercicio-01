import { useCallback, useState } from "react";
import { makeId } from "../utils/makeid";
import useForm from "./useForm";

const useCart = () => {
  const [list, setList] = useState([]);
  const { form, onChange, onResetForm } = useForm({
    quantity: 0,
    item: "",
  });

  const onRemove = id => setList(prev => prev.filter(item => item.id !== id));

  const onAdd = useCallback(
    event => {
      event.preventDefault();

      setList(prev => [
        ...prev,
        {
          id: makeId(7),
          quantity: form.quantity,
          item: form.item,
        },
      ]);

      onResetForm();
    },
    [form.quantity, form.item]
  );

  return { list, onAdd, onInputChanges: onChange, onRemove, form };
};

export default useCart;
