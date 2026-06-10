
import { UnimplementedError } from '@/utils/errors'
import { Size } from '@/utils/geom'
import { RefObject, useRef } from 'react'

/**
 * 
 */
export class Environment {

  size:RefObject<Size>
  onSetWidth:(w:number)=>void
  onSetHeight:(h:number)=>void
  constructor(size:Size) {
    console.assert(size != undefined, "Size must be defined")
    this.size = useRef(size)
    this.onSetWidth = (): void=>{}
    this.onSetHeight = (): void=>{}
  }

  setWidth(width:number) {
    this.size.current.width = width
  }

  setHeight(height:number) {
    this.size.current.height = height
  }

  set width(value:number) {
    this.size.current.width = value
    this.onSetWidth()
  }
  get width() { return this.size.current.width }

  set height(value:number) {
    this.size.current.height = value
    this.onSetHeight()
  }
  get height() { return this.size.current.height }

  #unimplemented(method:string) {
    throw new UnimplementedError('Environment', method)
  }

  /**
   * Progresses the environment by some amount of time in seconds.
   * 
   * @param delta 
   */
  step(delta:number) {
    this.#unimplemented('step')
  }
}
