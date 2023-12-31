import React, { useEffect, useState } from 'react';
import { GiftEntity } from 'types';
import { GiftsTable } from '../GiftsTable';
import { Spinner } from '../Spinner';

export const GiftsList = () => {
  const [giftsList, setGiftsList] = useState<GiftEntity[] | null>(null);

  const refreshGifts = async () => {
    setGiftsList(null);
    const res = await fetch('http://localhost:3001/gift');
    const data = await res.json();
    setGiftsList(data.giftList);
  };

  useEffect(() => {
    refreshGifts();
  }, []);

  if (giftsList === null) {
    return <Spinner />;
  }
  return (
    <>
      <h1>GIFTS</h1>
      <GiftsTable gifts={giftsList} onGiftsChange={refreshGifts} />
    </>
  );
};
