import express from 'express';
import { get, getByID } from './db';

const router = express.Router();

router.get('/', async (req, res) => {
  let result;
  if (req.query.id === undefined) {
    result = await get();
    return res.send(result);
  }
  result = await getByID(req.query.id.toString());
  return res.send(result);
});

export default router;
