import React, { useEffect, useState } from 'react';
import { GiftEntity } from '../../types';
import { GiftsTable } from '../GiftsTable/GiftsTable';

export const GiftsList = () => {
  const [giftsList, setGiftsList] = useState<GiftEntity[] | null>(null);

  useEffect(() => {
    (async () => {
      const res = await fetch('http://localhost:3001/gift');
      const data = await res.json();
      setGiftsList(
        data.giftList
      ); /**giftList === key from db! not from useState! */
      console.log(data);
    })();
  }, []);

  if (giftsList === null) {
    return <p>Loading ... ...</p>;
  }
  return (
    <>
      <h1>Gifts</h1>
      <GiftsTable gifts={giftsList} />
    </>
  );
};
