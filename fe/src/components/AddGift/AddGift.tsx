import React, { useState } from 'react';
import { CreateGiftReq } from 'types';

export const AddGift = () => {
  const [form, setForm] = useState<CreateGiftReq>({
    name: '',
    count: 0,
    desc: '',
  });

  return (
    <form>
      <button>ADD</button>
    </form>
  );
};
