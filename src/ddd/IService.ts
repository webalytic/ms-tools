export default interface IService {
  onInit?(): Promise<void>
  onDestroy?(): Promise<void>
}
