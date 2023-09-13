import React, { MouseEvent } from 'react';
import { ChildEntity, GiftEntity } from 'types';
import '../../index.css';
import { Link } from 'react-router-dom';

interface Props {
  child: ChildEntity;
  giftsList: GiftEntity[];
}

export const ChildrenTableRow = (props: Props) => {
  // const deleteGift = async (e: MouseEvent) => {
  //   e.preventDefault();
  //   if (
  //     !window.confirm(`Are you sure you want to remove ${props.child.name}?`)
  //   ) {
  //     return;
  //   }
  //   const res = await fetch(`http://localhost:3001/gift/${props.child.id}`, {
  //     method: 'DELETE',
  //   });
  //   // console.log(res);
  //   if ([400, 500].includes(res.status)) {
  //     const error = await res.json();
  //     alert(`Error has occurred: ${error.message}`);
  //     return;
  //   }
  // };

  return (
    <tr>
      {/* <th> */}
      {/* <Link to={`/gift/${props.child.id}`}>{props.child.name}</Link> */}
      {/* linkuje do widoku prezentu */}
      {/* </th> */}
      <th>{props.child.name}</th>
      <td>{props.child.giftId}</td>
      <td>{props.child.desc}</td>
      {/* <td>
        <a href="#" onClick={deleteGift}>
          🗑
        </a>
      </td> */}
    </tr>
  );
};
