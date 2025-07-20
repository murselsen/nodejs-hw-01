import { PATH_DB } from '../constants/contacts.js';
import { readFile } from 'fs/promises';

export const readContacts = async () => {
  let result;
  const res = await readFile(PATH_DB, 'utf-8');
  result = res.trim();
  if (!result) {
    console.warn('No contacts found, returning an empty array.');
    return [];
  }
  return  JSON.parse(res) || [];
};


