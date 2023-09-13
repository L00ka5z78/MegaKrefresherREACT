import React from 'react';
import { ChildrenTableRow } from './ChildrenTableRow';
import { ChildEntity, GiftEntity } from 'types';
// import '../../index.css'

interface Props {
  childrenList: ChildEntity[];
  giftsList: GiftEntity[];
}

export const ChildrenTable = (props: Props) => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Gift</th>
        <th>Description</th>
        {/* <th>Action</th>  */}
      </tr>
    </thead>
    <tbody>
      {props.childrenList.map((child) => (
        <ChildrenTableRow
          child={child}
          key={child.id}
          giftsList={props.giftsList}
        />
      ))}
    </tbody>
  </table>
);
