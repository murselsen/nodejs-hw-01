// Modules
import { appendFile, readFile } from 'fs/promises';

// Constants
import { PATH_DB } from '../constants/contacts.js';

// Utils
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {

    try {
        let contacts = [];
        const dbData = await readFile(PATH_DB, 'utf-8');
        console.log('DB Data Reading:', dbData);

        contacts.push(...JSON.parse(dbData));

        console.log(contacts,'Contacts before generation:', contacts.length);
        for (let i = 0; i < number; i++) {
            // const contact = createFakeContact();
            // await appendFile(PATH_DB, JSON.stringify(contact) + ',');
            return false;
        }
        console.log(`${number} contacts generated successfully.`);
    } catch (error) {
        console.error('Error generating contacts:', error);

    }



};

generateContacts(5);
