require('dotenv').config()
module.exports = {
  development: {
    database: 'thrift_project_database_dev',
    dialect: 'postgres'
  },
  test: {
    database: 'thrift_project_database_dev_test',
    dialect: 'postgres'
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true
      }
    }
  }
}
