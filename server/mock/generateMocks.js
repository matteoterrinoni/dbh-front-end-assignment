const jsf = require('json-schema-faker');
const UserSchema = require('../models/user');
const fs = require('fs');
const faker = require('faker');

jsf.extend('faker', () => faker);

jsf.option({
  alwaysFakeOptionals: true,
});

const json = JSON.stringify(jsf(UserSchema));
console.log(json);

fs.writeFile(`${__dirname}/db.json`, json, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Mock data generated.');
  }
});
