
type Obj = { type: string }

export class UnimplementedError implements Error {
  name:string
  message: string
  cause?:unknown

  receiver:string|Obj
  method:string

  /**
   * 
   * @param receiver The type-name of the receiver or the receiver itself.
   * @param method The name of the method.
   */
  constructor(receiver:string|Obj,method:string) {
    this.name='UnimplementedError'
    this.receiver = receiver
    this.method = method

    this.message = this.toString()
  }


  toString() {
    const jsType = typeof this.receiver
    const type = typeof this.receiver === 'string' ? jsType : this.receiver.type
    return `${type} does not implement ${this.method}`
  }
}
