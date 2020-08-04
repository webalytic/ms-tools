import { Sequelize, Dialect } from 'sequelize'

const options = {
  timezone: process.env.POSTGRES_TIMEZONE || '00:00',
  database: process.env.POSTGRES_DATABASE || 'database',
  username: process.env.POSTGRES_USERNAME || 'username',
  password: process.env.POSTGRES_PASSWORD || 'password',
  port: +(process.env.POSTGRES_PORT || 5432),
  host: process.env.POSTGRES_HOST || '127.0.0.1',
  dialect: 'postgres' as Dialect,
  debug: !!process.env.DEBUG
}

const {
  timezone, database, username, password, port, host, dialect
} = options

const sequelize = new Sequelize(database, username, password, {
  port,
  host,
  dialect,
  timezone,
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
  benchmark: options.debug,
  logging: options.debug
})

export default sequelize
