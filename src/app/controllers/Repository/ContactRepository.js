const { v4 } = require('uuid');

let contacts = [
  {
    id: v4(),
    name: 'kaio',
    email: 'kaiocarvalho@gmail.com',
    phone: '83923932982',
    category_id: v4(),

  },
  {
    id: v4(),
    name: 'pit',
    email: 'pitocarvalho@gmail.com',
    phone: '8392903932982',
    category_id: v4(),

  },
];

class ContactRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }

    findById(id) {
      return new Promise((resolve) => resolve(
        contacts.find((contact)=> contact.id === id),
       ));
  }

  findByEmail(email) {
    return new Promise((resolve) => resolve(
      contacts.find((contact)=> contact.email === email),
     ));
}


  delete(id)  {
    return new Promise((resolve) => {
    contacts = contacts.filter((contact)=> contact.id !== id);
    resolve();
    });
   }

   create({name ,email, phone, category_id})  {
    return new Promise((resolve) => {
    const newContact = {
      id: v4(),
      name,
      email,
      phone,
      category_id,
    };
    contacts.push(newContact);
    resolve(newContact);
    });
   }

   update(id, {name ,email, phone, category_id,
  })  {
    return new Promise((resolve) => {
    const updateContact = {
      id,
      name,
      email,
      phone,
      category_id,
    };

    contacts = contacts.map((contact)=> (
      contact.id === id ? updateContact : contact
    ));
    resolve(updateContact);

    });
   }
}

module.exports = new ContactRepository();


eslinc

module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: 'airbnb-base',
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'linebreak-style': 0,
    'class-methods-use-this': 'off',
    'consistent-return': ' off',
  },
};
