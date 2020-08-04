import IEventConsumer from './IEventConsumer'

export interface ISubscriberDeps{
  event: string
  durableName: string
  eventConsumer: IEventConsumer
}

export default abstract class Subscriber {
  constructor({ event, durableName, eventConsumer }: ISubscriberDeps) {
    eventConsumer.subscribe(event, durableName, async (msg: any) => {
      const data = JSON.parse(msg.getData())
      await this.handler(data)
      msg.ack()
    })
  }

  abstract async handler(data: any): Promise<void>
}
