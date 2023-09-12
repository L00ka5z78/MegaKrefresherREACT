import { Router, Request, Response } from 'express';

import { GiftRecord } from '../records/gift.record';
import { ValidationError } from '../utils/error';
import { CreateGiftReq } from '../types';

export const giftRouter = Router();

giftRouter
  .get('/', async (req: Request, res: Response): Promise<void> => {
    const giftList = await GiftRecord.listAll();
    res.json({
      giftList,
    });
  })

  .delete('/:id', async (req: Request, res: Response) => {
    const gift = await GiftRecord.getOne(req.params.id);

    if (!gift) {
      throw new ValidationError('No such a gift...');
    }
    if ((await gift.countGivenGifts()) > 0) {
      throw new ValidationError('Can not remove given gift');
    }
    await gift.delete();
    res.end();
  })

  .post('/', async (req: Request, res: Response): Promise<void> => {
    const newGift = new GiftRecord(req.body as CreateGiftReq);
    await newGift.insert();
    res.json(newGift);
  });
