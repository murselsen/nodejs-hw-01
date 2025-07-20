// Utils
import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';


const generateContacts = async (number) => {

    try {
         const contants = await readContacts();
        let newContacts = [];
        newContacts.push(...contants);
        for (let i = 0; i < number; i++) {
                const contact = createFakeContact();
                newContacts.push(contact);
        }
        await writeContacts(newContacts);


    } catch (error) {
        console.error('Error generating contacts:\n', error);

    }



};

generateContacts(5);
