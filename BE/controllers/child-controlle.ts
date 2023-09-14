import { Router, Request, Response } from 'express';
import { ChildRecord } from '../records/child.record';
import { GiftRecord } from '../records/gift.record';
import { ListChildrenRes } from '../types';

export const getChildren = () => {
  async (req: Request, res: Response) => {
    const childrenList = await ChildRecord.listAll();
    const giftsList = await GiftRecord.listAll();
    res.json({
      childrenList,
      giftsList,
    } as ListChildrenRes);
  };
};

export const addChild = () => {
  async (req: Request, res: Response) => {
    const newChild = new ChildRecord(req.body);
    await newChild.insert();

    res.json(newChild);
  };
};
