// import { readContacts } from '../utils/readContacts';
import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    return await readContacts();
  } catch (error) {
    console.error('Error getting all contacts:', error);
  }
};

console.log(getAllContacts());
