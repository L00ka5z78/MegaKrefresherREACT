import React from 'react';
import { GiftEntity } from '../../types/gifts';

interface Props {
  gift: GiftEntity;
}

export const GiftsTableRow = (props: Props) => {
  //   const deleteGift = async (e: SyntheticEvent) => {
  //     e.preventDefault();
  //     if (
  //       !window.confirm(`Are you sure you want to remove ${props.gift.name}?`)
  //     ) {
  //       return;
  //     }
  //   };

  //   const res = await fetch(`http://localhost:3001/gift/${props.gift.id}`, {
  //     method: 'DELETE',
  //   });
  //   if ([400, 500].includes(res.status)) {
  //     const error = await res.json();
  //     alert(`Error has occurred: ${error.message}`);
  //     return;
  //   }
  return (
    <tr>
      <td>{props.gift.id}</td>
      <td>{props.gift.name}</td>
      <td>{props.gift.count}</td>
      <td>{props.gift.desc}</td>
      <td></td>
    </tr>
  );
};
