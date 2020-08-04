
export default interface IEventConsumer {
  init(clientId: string): Promise<void>
  destroy(): Promise<void>
  subscribe(event: string, durableName: string, handler: Function): void
}
