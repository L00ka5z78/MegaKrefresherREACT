import React from 'react';
import { useParams } from 'react-router-dom';

export const TestView = () => {
  const params = useParams();
  console.log(params);
  return (
    <>
      <h1>test</h1>
    </>
  );
};
