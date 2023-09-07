import React from 'react';
import { GiftEntity } from '../../types/gifts';
import { GiftsTableRow } from './GiftTableRow';

interface Props {
  gifts: GiftEntity[];
}

export const GiftsTable = (props: Props) => {
  //   const [giftsList, setGiftsList] = useState<GiftEntity[] | null>(null);

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Count</th>
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
