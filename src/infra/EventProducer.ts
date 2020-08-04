import * as Nats from 'node-nats-streaming'
import { IEventProducer } from '../ddd'

type EventProducerOptions = {
  server: string
  cluster: string
  clientId: string
}

export default class EventProducer implements IEventProducer {
  private nats: any

  constructor(options: EventProducerOptions) {
    const { server, cluster, clientId } = options
    this.nats = Nats.connect(cluster, clientId, { url: server })
  }

  async init(): Promise<void> {
    return this.nats.nc.connected || new Promise((resolve) => {
      this.nats.on('connect', () => {
        this.nats.on('connection_lost', (error: any) => {
          console.error('disconnected from stan', error)
        })

        resolve()
      })
    })
  }

  async destroy(): Promise<void> {
    await new Promise((resolve) => {
      this.nats.on('close', resolve)
      this.nats.close()
    })
  }

  async send(event: string, payload: any): Promise<void> {
    return new Promise((resolve, reject) => {
      this.nats.publish(event, JSON.stringify(payload), (err: any) => {
        if (err) reject(err)
        else resolve()
      })
    })
  }
}
