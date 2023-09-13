import React, { useEffect, useState } from 'react';
import { ChildEntity, GiftEntity, ListChildrenRes } from 'types';

interface Props {
  giftsList: GiftEntity[];
  selectedId: string;
}

export const ChildGiftSelect = (props: Props) => {
  const [selected, setSelected] = useState<string>(props.selectedId);
  return (
    <select value={selected} onChange={(e) => setSelected(e.target.value)}>
      {props.giftsList.map((gift) => (
        <option value={gift.id} key={gift.id}>
          {gift.name}
        </option>
      ))}{' '}
    </select>
  );
};
