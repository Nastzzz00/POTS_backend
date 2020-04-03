import { createSchema, createModel } from 'gsheeez';

const UserSchema = new createSchema({
  range: 'A:D',
  header: ['userId', 'userName', 'password', 'userLevel'],
});

export default createModel(UserSchema);
