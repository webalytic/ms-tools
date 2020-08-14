export default interface IEventConsumer {
  init(clientId: string): Promise<void>
  destroy(): Promise<void>
  // eslint-disable-next-line @typescript-eslint/ban-types
  subscribe(event: string, durableName: string, handler: Function): void
}
