import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';

export const addOneContact = async () => {
    try {
        const number = 1; // We are adding one contact
          const contants = await readContacts();
                let newContacts = [];
                newContacts.push(...contants);
                for (let i = 0; i < number; i++) {
                        const contact = createFakeContact();
                        newContacts.push(contact);
                }
                await writeContacts(newContacts);

        console.log('Contact added successfully.');

    } catch (error) {
        console.error('Error adding contact:\n', error);

    }
};

addOneContact();
