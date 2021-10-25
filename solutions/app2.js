const user = {
  firstName: 'John',
  lastName: 'Doe',
};

const {
  lastName,
  firstName: f = 'unknown',
  job: j = 'unknown',
} = user;

export {
  l,
  f,
  j,
};
