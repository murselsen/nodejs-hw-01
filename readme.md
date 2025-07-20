# Node.js Contact Management System

A simple contact management system built with Node.js that uses JSON file storage and ES6 modules.

## 📋 Features

- **Create Contacts**: Generate fake contacts using Faker.js
- **Read Contacts**: View all stored contacts
- **Count Contacts**: Get total number of contacts
- **Delete Contacts**: Remove individual or all contacts
- **JSON Storage**: Simple file-based storage system

## 🛠 Technologies Used

- **Node.js** (ES6 Modules)
- **@faker-js/faker** - Generate realistic fake contact data
- **ESLint** - Code quality and style checking
- **File System Promises** - Asynchronous file operations

## 📁 Project Structure

```
nodejs-hw-01/
├── src/
│   ├── constants/
│   │   └── contacts.js          # Database path configuration
│   ├── db/
│   │   └── db.json              # JSON storage file
│   ├── scripts/
│   │   ├── getAllContacts.js    # List all contacts
│   │   ├── generateContacts.js  # Generate 5 fake contacts
│   │   ├── addOneContact.js     # Add single contact
│   │   ├── countContacts.js     # Count total contacts
│   │   ├── removeLastContact.js # Remove last contact
│   │   └── removeAllContacts.js # Remove all contacts
│   ├── utils/
│   │   ├── readContacts.js      # Read contacts from JSON
│   │   ├── writeContacts.js     # Write contacts to JSON
│   │   └── createFakeContact.js # Generate fake contact data
│   └── index.js                 # Main entry point
├── eslint.config.js             # ESLint configuration
├── package.json                 # Project dependencies and scripts
└── readme.md                    # Project documentation
```

## 🚀 Installation

1. Clone the repository:
```bash
git clone https://github.com/murselsen/nodejs-hw-01.git
cd nodejs-hw-01
```

2. Install dependencies:
```bash
npm install
```

## 📖 Usage

The project includes several npm scripts for managing contacts:

### Available Commands

| Command | Description | Usage |
|---------|-------------|-------|
| `npm run get-all` | Display all contacts | `npm run get-all` |
| `npm run generate` | Generate 5 fake contacts | `npm run generate` |
| `npm run add-one` | Add one fake contact | `npm run add-one` |
| `npm run count` | Show total number of contacts | `npm run count` |
| `npm run remove-last` | Remove the last contact | `npm run remove-last` |
| `npm run remove-all` | Remove all contacts | `npm run remove-all` |

### Example Usage

```bash
# Start with generating some contacts
npm run generate

# Check how many contacts you have
npm run count

# View all contacts
npm run get-all

# Add one more contact
npm run add-one

# Remove the last contact
npm run remove-last

# Clear all contacts
npm run remove-all
```

## 📊 Contact Data Structure

Each contact contains the following fields:

```javascript
{
  "id": "550e8400-e29b-41d4-a716-446655440000",  // UUID
  "name": "John Doe",                             // Full name
  "phone": "+1-555-123-4567",                     // Phone number
  "email": "john.doe@example.com",                // Email address
  "job": "Software Engineer"                      // Job title
}
```

## 🔧 Development

### Code Quality

The project uses ESLint for code quality assurance:

```bash
npx eslint src/**/*.js
```

### ESLint Rules

- Semicolons are required
- No unused variables (except function arguments)
- No undefined variables

## 📝 API Functions

### Core Utilities

- **`readContacts()`** - Reads contacts from JSON file
- **`writeContacts(updatedContacts)`** - Writes contacts to JSON file
- **`createFakeContact()`** - Generates a fake contact object

### Scripts

- **`getAllContacts()`** - Returns all contacts
- **`generateContacts(number)`** - Generates specified number of contacts
- **`addOneContact()`** - Adds a single contact
- **`countContacts()`** - Returns contact count
- **`removeLastContact()`** - Removes the last contact
- **`removeAllContacts()`** - Clears all contacts

## 🎯 Learning Objectives

This project demonstrates:

- **ES6 Modules** - Modern JavaScript module system
- **Async/Await** - Asynchronous programming patterns
- **File System Operations** - Reading and writing JSON files
- **Node.js Best Practices** - Project structure and organization
- **NPM Scripts** - Task automation
- **Error Handling** - Try-catch patterns
- **Code Quality** - ESLint configuration

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

 

## 🙏 Acknowledgments

- [Faker.js](https://fakerjs.dev/) for generating realistic fake data
- [GoIT](https://goit.global/) for the project inspiration

---

**Note:** This is an educational project designed to learn Node.js fundamentals and file-based data management.
