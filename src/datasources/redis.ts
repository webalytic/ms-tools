import Redis from 'ioredis'

const redis = new Redis({
  port: +(process.env.REDIS_PORT || 6379), // Redis port
  host: process.env.REDIS_HOST || '127.0.0.1', // Redis host
  family: 4, // 4 (IPv4) or 6 (IPv6)
  password: process.env.REDIS_PASSWORD || 'auth',
  db: 0
})

export default redis
