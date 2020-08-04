import { createLogger, format, transports, Logger }  from 'winston'
const { combine, timestamp, label, printf } = format

export default function(labelValue: string): Logger{
  const myFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} [${label}] ${level}: ${JSON.stringify(message)}`
  })

  const logger = createLogger({
    format: combine(format.colorize(), label({ label: labelValue }), timestamp(), myFormat),
    transports: [new transports.Console()],
    silent: process.env.NODE_ENV === 'test'
  })
  
  return logger
} 
