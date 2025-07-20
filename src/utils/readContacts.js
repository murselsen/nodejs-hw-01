import { PATH_DB } from '../constants/contacts.js';
import { readFile } from 'fs/promises';

export const readContacts = async () => {
  const res = await readFile(PATH_DB, 'utf-8');
  console.log('readContacts', res);
  return JSON.parse(res);
};


readContacts();
