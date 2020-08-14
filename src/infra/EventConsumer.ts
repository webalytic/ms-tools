import * as Nats from 'node-nats-streaming'
import { IEventConsumer } from '../ddd'

type EventConsumerOptions = {
  server: string
  cluster: string
  clientId: string
}

export default class EventConsumer implements IEventConsumer {
  private nats: any

  private subscriptions: any[] = []

  constructor(options: EventConsumerOptions) {
    const { server, cluster, clientId } = options
    this.nats = Nats.connect(cluster, clientId, { url: server })
  }

  async init(): Promise<void> {
    return this.nats.nc.connected || new Promise((resolve) => {
      this.nats.on('connect', resolve)
    })
  }

  async destroy(): Promise<void> {
    await new Promise((resolve) => {
      this.nats.close()
      this.nats.on('close', resolve)
    })
  }

  // eslint-disable-next-line @typescript-eslint/ban-types
  subscribe(event: string, durableName: string, handler: Function): void {
    const opts = this.nats.subscriptionOptions()
      .setManualAckMode(true)
      .setAckWait(60 * 1000)
      .setMaxInFlight(1)
      .setDurableName(durableName)

    const subscription = this.nats.subscribe(event, opts)
    subscription.on('message', handler)
    this.subscriptions.push(subscription)
  }
}
