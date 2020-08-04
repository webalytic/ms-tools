
export default interface IEventProducer {
  init(): Promise<void>
  destroy(): Promise<void>
  send(event: string, payload: any): Promise<void>
}
