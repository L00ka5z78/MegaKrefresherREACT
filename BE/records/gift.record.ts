import { pool } from '../utils/db';
import { ValidationError } from '../utils/error';
import { v4 as uuid } from 'uuid';
import { FieldPacket } from 'mysql2';
import { GiftEntity } from '../types';

type GiftRecordResult = [GiftRecord[], FieldPacket[]];

export class GiftRecord implements GiftEntity {
  id?: string;
  name: string;
  count: number;
  desc: string;

  constructor(obj: GiftEntity) {
    if (!obj.name || obj.name.length < 3 || obj.name.length > 55) {
      throw new ValidationError(
        'Gifts name has to be between 3 - 55 characters'
      );
    }
    if (!obj.count || obj.count < 1 || obj.count > 999999) {
      throw new ValidationError('Gifts amount has to be from 1 to 999999');
    }

    this.id = obj.id;
    this.name = obj.name;
    this.count = obj.count;
    this.desc = obj.desc;
  }

  async insert(): Promise<string> {
    if (!this.id) {
      this.id = uuid();
    }
    await pool.execute(
      'INSERT INTO `gifts` VALUES(:id, :name, :count, :desc)',
      {
        id: this.id,
        name: this.name,
        count: this.count,
        desc: this.desc,
      }
    );
    return this.id;
  }

  static async listAll(): Promise<GiftRecord[]> {
    const [results] = (await pool.execute(
      'SELECT * from `gifts`'
    )) as GiftRecordResult;
    return results.map((obj) => new GiftRecord(obj));
  }

  static async getOne(id: string): Promise<GiftRecord | null> {
    const [results] = (await pool.execute(
      'SELECT * from `gifts` WHERE `id` = :id',
      {
        id,
      }
    )) as GiftRecordResult;
    return results.length === 0 ? null : new GiftRecord(results[0]);
  }

  async delete(): Promise<void> {
    const [results] = await pool.execute(
      'DELETE FROM `gifts` WHERE `id` = :id',
      {
        id: this.id,
      }
    );
  }

  async countGivenGifts(): Promise<number> {
    const [[{ count }]] = (await pool.execute(
      'SELECT COUNT (*) AS `count` FROM `children` WHERE `giftId` = :id',
      {
        id: this.id,
      }
    )) as GiftRecordResult;
    return count;
  }
}
