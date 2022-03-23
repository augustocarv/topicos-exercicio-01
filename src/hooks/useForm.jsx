import { useState } from "react";

const useForm = defaultValues => {
  const [form, setForm] = useState(defaultValues);

  const onChange = (value, name) => setForm(prev => ({ ...prev, [name]: value }));

  const onResetForm = () => setForm(defaultValues);

  return { form, onChange, onResetForm };
};

export default useForm;
