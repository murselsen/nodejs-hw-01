// import { readContacts } from '../utils/readContacts';
import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const contacts = await readContacts();
    if (contacts.length === 0) {
      return [];
    }
    console.log('All contacts:');
    return contacts;
  } catch (error) {
    console.error('Error getting all contacts:', error);
  }
};

console.log(await getAllContacts());
