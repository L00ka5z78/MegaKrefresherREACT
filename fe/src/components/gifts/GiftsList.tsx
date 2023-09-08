import React, { useEffect, useState } from 'react';
import { GiftsTable } from '../GiftsTable';
import { GiftEntity } from 'types';

export const GiftsList = () => {
  const [giftsList, setGiftsList] = useState<GiftEntity[] | null>(null);

  useEffect(() => {
    (async () => {
      const res = await fetch('http://localhost:3001/gift');
      const data = await res.json();
      setGiftsList(data.giftList);
      /**giftList === key from db! not from useState!
      {giftList: Array(10)}
          giftList: Array(10)
          0: count: 50 id: "0fa47f48-3559-4c3c-80ee-1a2695a39165"
          name: "Throw hammer"
          [[Prototype]]: Object */
      // console.log(data);
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
