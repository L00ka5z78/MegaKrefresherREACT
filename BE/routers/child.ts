import { Router, Request, Response } from 'express';
import { ChildRecord } from '../records/child.record';
import { GiftRecord } from '../records/gift.record';
import { ValidationError } from '../utils/error';
import {
  ChildEntity,
  CreateChildReq,
  ListChildrenRes,
  SetGiftForChildReq,
} from '../types';

export const childRouter = Router();

childRouter
  .get('/', async (req, res) => {
    const childrenList = await ChildRecord.listAll();
    const giftsList = await GiftRecord.listAll();
    res.json({
      childrenList,
      giftsList,
    } as ListChildrenRes);
  })

  .post('/', async (req, res) => {
    const newChild = new ChildRecord(req.body);
    await newChild.insert();

    res.json(newChild);
  })

  .patch(
    '/gift/:childId',
    async (req: Request, res: Response): Promise<void> => {
      const {
        body,
      }: {
        body: SetGiftForChildReq;
      } = req;
      // console.log(body);

      const child = await ChildRecord.getOne(req.params.childId);
      if (child === null) {
        throw new ValidationError('Cant find child with given ID.');
      }
      const gift =
        body.giftId === '' ? null : await GiftRecord.getOne(body.giftId);

      if (gift) {
        if (gift.count <= (await gift.countGivenGifts())) {
          throw new ValidationError('To little of this gift.');
        }
      }

      child.giftId = gift?.id ?? null;
      await child.update();

      res.json(child);
    }
  );
