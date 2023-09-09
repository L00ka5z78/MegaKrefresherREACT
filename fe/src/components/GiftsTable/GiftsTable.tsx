import React from 'react';
import { GiftsTableRow } from './GiftTableRow';
import { GiftEntity } from 'types';

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
          <th>Action</th>
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
