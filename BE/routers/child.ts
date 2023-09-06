import {Router, Request, Response} from "express";
import {ChildRecord} from "../records/child.record";
import {GiftRecord} from "../records/gift.record";
import {ValidationError} from "../utils/error";


export const childRouter = Router();

childRouter
    .get('/', async (req, res) => {
        const childrenList = await ChildRecord.listAll();
        const giftsList = await GiftRecord.listAll();
        res.render('children/list', {
            childrenList,
            giftsList,
        });
    })

    .post('/', async (req, res) => {
    const newChild = new ChildRecord(req.body);
    await newChild.insert();
    res.redirect('/child')
})

    .patch('/gift/:childId', async (req: Request, res: Response): Promise<void> => {
        const child = await ChildRecord.getOne(req.params.childId);
        if(child === null) {
            throw new ValidationError('Cant find child with given ID.')
        }
    const gift = req.body.giftId === '' ? null : await GiftRecord.getOne( req.body.giftId);

        if(gift) {
            if (gift.count <= await gift.countGivenGifts()) {
                throw new ValidationError('To little of this gift.');

            }
        }

        child.giftId = gift?.id ?? null;
        await child.update();

        res.redirect('/child')

    })
