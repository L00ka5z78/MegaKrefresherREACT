import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GetSingleGiftRes } from 'types';
// import { GetSingleGiftRes } from 'types';

export const SingleGiftView = () => {
  const [giftInfo, setGiftInfo] = useState<GetSingleGiftRes | null>(null);
  const { idOfGift } = useParams();

  useEffect(() => {
    (async () => {
      const res = await fetch(`http://localhost:3000/gift/${idOfGift}`);
      const data = await res.json();
    })();
  }, []);

  if (giftInfo === null) {
    return null;
  }

  return (
    <>
      <h1>{giftInfo.gift.name}</h1>
      <p>
        Gift ID is: <strong>{giftInfo.gift.id}</strong>
      </p>
      <p>
        There is: <strong>{giftInfo.gift.count} pcs.</strong> and{' '}
        <strong>{giftInfo.givenCount} </strong> is already given.
      </p>
      <p>Short description: {giftInfo.gift.desc}</p>
    </>
  );
};
