const user = {
  firstName: 'John',
  lastName: 'Doe',
};

const {
  firstName = 'unknown',
  job = 'unknown',
} = user;

export {
  firstName,
  lastName,
  job,
};
