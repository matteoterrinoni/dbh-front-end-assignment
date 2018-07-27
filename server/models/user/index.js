const schema = {
  type: 'object',
  properties: {
    users: {
      type: 'array',
      minItems: 100,
      items: {
        type: 'object',
        properties: {
          id: {
            type: 'number',
            unique: true,
            minimum: 1,
            $ref: '#/definitions/positiveInt',
          },
          username: {
            name: 'username',
            type: 'string',
            faker: 'internet.userName',
          },
          email: {
            name: 'email',
            type: 'string',
            format: 'email',
            faker: 'internet.email',
          },
          numberOfBookings: {
            name: 'numberOfBookings',
            type: 'number',
            faker: 'random.number',
            $ref: '#/definitions/positiveInt',
          },
          isPremiumUser: {
            name: 'isPremiumUser',
            type: 'boolean',
            dependencies: [{ id: 'premiumCode', value: true }],
          },
          premiumCode: {
            id: 'premiumCode',
            name: 'premiumCode',
            type: 'number',
            unique: true,
          },
        },
        required: ['id', 'username', 'email'],
      },
    },
  },
  required: ['users'],
  definitions: {
    positiveInt: {
      type: 'integer',
      minimum: 0,
      exclusiveMinimum: true,
    },
  },
};

module.exports = schema;
