import ClickHouse from '@apla/clickhouse'

export default (): ClickHouse =>
  new ClickHouse({
    host: process.env.CLICKHOUSE_HOST || 'localhost',
    port: process.env.CLICKHOUSE_PORT || 8123,
    user: process.env.CLICKHOUSE_USER,
    password: process.env.CLICKHOUSE_PASSWORD
  })
