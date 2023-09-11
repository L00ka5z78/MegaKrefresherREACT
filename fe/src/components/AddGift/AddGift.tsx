import React, { useState } from 'react';
import { CreateGiftReq } from 'types';

export const AddGift = () => {
  const [form, setForm] = useState<CreateGiftReq>({
    name: '',
    count: 0,
    desc: '',
  });
  const [loading, setLoading] = useState<boolean>(false);

  const updateForm = (key: string, value: any) => {
    setForm((prevForm) => ({
      ...prevForm,
      [key]: value,
    }));
  };
  if (loading) {
    return <p>... loading ... ...</p>;
  }

  return (
    <form>
      <h2>Add gift</h2>
      <p>
        <label>
          Name: <br />
          <input
            type="text"
            value={form.name}
            onChange={(e) => updateForm('name', e.target.value)}
          />
        </label>
      </p>

      <p>
        <label>
          Count: <br />
          <input
            type="number"
            value={form.count}
            onChange={(e) => updateForm('count', Number(e.target.value))}
          />
        </label>
      </p>
      <p>
        <label>
          Description: <br />
          <textarea
            placeholder="description"
            value={form.desc}
            onChange={(e) => updateForm('desc', e.target.value)}
          />
        </label>
      </p>

      <button>ADD</button>
    </form>
  );
};
