import { PATH_DB } from '../constants/contacts.js';

import { writeFile } from 'fs/promises';

export const writeContacts = async (updatedContacts) => {
  if (updatedContacts.length === 0) {
    await writeFile(PATH_DB, '[]', 'utf-8');
  } else {

    const newContacts = [];

    updatedContacts.forEach((element) => {
      newContacts.push(element);
    });
    console.log('Contact List Formed at the End:', newContacts.length);

    await writeFile(PATH_DB, JSON.stringify(newContacts), 'utf-8');
    console.log('Contacts successfully written to file.\n');
  }
};
