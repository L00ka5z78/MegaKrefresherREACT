import React, { useState } from 'react';
import { GiftEntity } from 'types';

export const SingleGiftView = () => {
  const [gift, setGift] = useState<GiftEntity | null>(null);
  return (
    <>
      <h1>single gift view</h1>
    </>
  );
};
