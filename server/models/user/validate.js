const UserSchema = require(`${__dirname}/index.js`);

const isRequired = (k) =>
  UserSchema.properties.users.items.required.indexOf(k) > -1;

const getProp = (k) => UserSchema.properties.users.items.properties[k];

const Validation = {
  isEmailAddress: (value) => {
    const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // eslint-disable-line no-useless-escape
    return pattern.test(value); // returns a boolean
  },

  isNumber: (value) => {
    const pattern = /^-?(0|[1-9]\d*)(\.\d+)?$/;
    return pattern.test(value) || value === ''; // returns a boolean
  },

  set: (valid, message) => ({
    valid,
    message,
  }),
};

const validateProp = (k, value) => {
  console.log(`k is ${k}`);
  const prop = getProp(k);
  console.log(prop);
  const type = prop.format || prop.type;
  const required = isRequired(k);

  console.log(`${k} is ${required ? 'required' : 'not required'}`);
  console.log(`${k} current value is ${value}`);
  console.log(`${k} is of type ${type}`);

  if (required && (!value || value === '')) {
    console.log(`${k} is empty`);
    return Validation.set(false, "can't be empty");
  }

  switch (type) {
    case 'number':
      if (!Validation.isNumber(value)) {
        console.log(`${k} is not a number`);
        return Validation.set(false, 'should be numeric');
      }
      break;
    case 'email':
      if (!Validation.isEmailAddress(value)) {
        console.log(`${k} is not an email`);
        return Validation.set(false, 'should be a valid email');
      }
      break;
    default:
      break;
  }

  console.log(`${k} is valid`);
  return Validation.set(true, 'valid');
};

const getUserErrors = (user) => {
  let errors = false;

  Object.keys(user).forEach((k) => {
    const validation = validateProp(k, user[k]);
    if (!validation.valid) {
      if (!errors) {
        errors = {};
      }

      errors[k] = validation.message;
    }
  });

  console.log(errors);
  return errors;
};

module.exports = getUserErrors;
