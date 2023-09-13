import React, { useEffect, useState } from 'react';
import { ChildEntity } from 'types';
import { Spinner } from '../Spinner';
import { ChildrenTable } from './ChildrenTable';

export const ChildrenList = () => {
  const [childrenList, setChildrenList] = useState<ChildEntity[] | null>(null);

  const refreshGifts = async () => {
    setChildrenList(null);
    const res = await fetch('http://localhost:3001/child');
    const data = await res.json();
    setChildrenList(data.childrenList);
  };

  useEffect(() => {
    refreshGifts();
  }, []);

  if (childrenList === null) {
    return <Spinner />;
  }
  return (
    <>
      <h1>GIFTS</h1>
      <ChildrenTable children={childrenList} onGiftsChange={refreshGifts} />
    </>
  );
};
