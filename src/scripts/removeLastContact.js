import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

export const removeLastContact = async () => {
    try {
        const contacts = await readContacts();
        if (contacts.length === 0) {
        console.log('No contacts to remove.');
        return;
        }

        const lastContact = contacts.pop();
        console.log('Removing last contact:', lastContact);

        // Write the updated contacts back to the file
        await writeContacts(contacts.filter(contact => contact !== lastContact));
        console.log('Last contact removed successfully.');
    } catch (error) {
        console.error('Error removing last contact:', error);
    }
};

removeLastContact();
