export default abstract class Entity<T> {
  readonly id: string

  props: T

  constructor(id: string, props: T) {
    this.id = id
    this.props = props
  }
}
