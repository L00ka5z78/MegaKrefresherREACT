import React, { FormEvent, useEffect, useState } from 'react';
import {
  ChildEntity,
  GiftEntity,
  ListChildrenRes,
  SetGiftForChildReq,
} from 'types';

interface Props {
  giftsList: GiftEntity[];
  selectedId: string;
  childId: string;
}

export const ChildGiftSelect = (props: Props) => {
  const [selected, setSelected] = useState<string>(props.selectedId);
  const sendForm = async (e: FormEvent) => {
    e.preventDefault();
    await fetch(`http://localhost:3001/child/gift/${props.childId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        giftId: selected,
      } as SetGiftForChildReq),
    });
  };

  return (
    <form onSubmit={sendForm}>
      <select value={selected} onChange={(e) => setSelected(e.target.value)}>
        {props.giftsList.map((gift) => (
          <option value={gift.id} key={gift.id}>
            {gift.name}
          </option>
        ))}{' '}
      </select>
      <button type="submit">Save</button>
    </form>
  );
};
