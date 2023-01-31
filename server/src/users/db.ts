import { Client } from 'pg';
import { User } from '../../../types';

export const get = async (): Promise<User[]> => {
  const client = new Client({
    user: 'postgres',
    password: 'postgres',
    host: 'localhost',
    database: 'postgres',
  });
  client.connect();
  const { rows } = await client.query(/* sql */ `
    SELECT
      id::text, name
    FROM
      users
  `);
  client.end();
  return rows;
};

export const getByID = async (id: string): Promise<User> => {
  const client = new Client({
    user: 'postgres',
    password: 'postgres',
    host: 'localhost',
    database: 'postgres',
  });
  client.connect();
  const { rows } = await client.query(
    /* sql */ `
    SELECT
      id::text, name
    FROM
      users
    WHERE
      id = $1;
  `,
    [id]
  );
  client.end();
  return rows[0];
};
