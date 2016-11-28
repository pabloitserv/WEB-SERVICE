const PORT = process.env.PORT || '3000';
const DATABASE_URL = 'mongodb://localhost/synBase';
const SESSION_URL = '/session';
const SESSION_USER_URL = '/session/user';
const USER_TO_MONGO_URL = '/user/populate';
const DATABASE_USER_URL = '/user';
const RUN_URL = '/run';

let cache = []

module.exports = {
  port: PORT,
  db_url: DATABASE_URL,
  session: SESSION_URL,
  session_user: SESSION_USER_URL,
  user_mongo: USER_TO_MONGO_URL,
  data_base: DATABASE_USER_URL,
  cache: cache
};
