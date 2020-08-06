import {
  createLogger, format, transports, Logger
} from 'winston'

const {
  combine, printf
} = format

export default (labelValue: string): Logger => {
  const myFormat = printf(({
    level, message, label, timestamp
  }) =>
    `${timestamp} [${label}] ${level}: ${JSON.stringify(message)}`)

  const logger = createLogger({
    level: process.env.DEBUG ? 'debug' : undefined,
    format: combine(format.colorize(), format.label({ label: labelValue }), format.timestamp(), myFormat),
    transports: [new transports.Console()],
    silent: process.env.NODE_ENV === 'test'
  })

  return logger
}
