import React from 'react';
import { GiftEntity } from '../../types';
import { GiftsTableRow } from './GiftTableRow';

interface Props {
  gifts: GiftEntity[];
}

export const GiftsTable = (props: Props) => {
  //   const [giftsList, setGiftsList] = useState<GiftEntity[] | null>(null);
  console.log(props.gifts);
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Count</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {props.gifts.map((gift) => (
          <GiftsTableRow gift={gift} key={gift.id} />
        ))}
      </tbody>
    </table>
  );
};
// e6 t5 d1 21 31
