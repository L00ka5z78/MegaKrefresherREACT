import React from 'react';
import { useParams } from 'react-router-dom';
import { AddChild, ChildrenList } from '../components';

export const ChildView = () => (
  <>
    <ChildrenList />
    <AddChild />
  </>
);
