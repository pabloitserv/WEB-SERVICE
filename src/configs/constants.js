const PORT = process.env.PORT || '3000';
const DATABASE_URL = 'mongodb://localhost/synBase';

module.exports = {
  port: PORT,
  db_url: DATABASE_URL
};
