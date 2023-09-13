import React from 'react';
import { ChildrenTableRow } from './ChildrenTableRow';
import { ChildEntity } from 'types';
// import '../../index.css'

interface Props {
  children: ChildEntity[];
  onGiftsChange: () => void;
}

export const ChildrenTable = (props: Props) => (
  <table>
    <thead>
      <tr>
        {/* <th>ID</th> */}
        <th>Name</th>
        <th>Count</th>
        <th>Description</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {props.children.map((child) => (
        <ChildrenTableRow
          child={child}
          key={child.id}
          onGiftsChange={props.onGiftsChange}
        />
      ))}
    </tbody>
  </table>
);
