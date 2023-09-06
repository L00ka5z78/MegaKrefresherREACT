import React, { useEffect, useState } from 'react';
import { GiftEntity } from '../../types/gifts';

interface Props {
  gifts: GiftEntity[];
}

export const GiftsTable = (props: Props) => {
  const [giftsList, setGiftsList] = useState<GiftEntity[] | null>(null);

  return null;
};
