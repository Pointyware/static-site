import { UnimplementedError } from "@/utils/errors"

export interface Key<T> {
  id: string
}
function key<T>(id: string): Key<T> {
  return {
    id: id
  }
}

export interface ExpDataSource {
  get<T>(key:Key<T>):T
}

const something: ExpDataSource = {
  get<T>(key:Key<T>):T {
    throw new UnimplementedError('ExpDataSource','get')
  }
}

interface Yum {
  alpha: number
}
const someKey = key<Yum>('hello')

const yumValue = something.get(someKey)

/**
 * 
 */
export interface DataSource {
  get<T>(key:string):T
  getSafe<T>(key:string):T|null
  set(key:string,value:any):void
  remove(key:string):void
}

export class LocalStorageDataSource implements DataSource {
  localStorage:Storage
  constructor() {
    this.localStorage = window.localStorage

    this.localStorage
  }

  get<T>(key:string) {
    const storedValue = this.localStorage.getItem(key)
    if (storedValue === null) throw ''

    return JSON.parse(storedValue) as T
  }

  getSafe<T>(key: string): T | null {
    const storedValue = this.localStorage.getItem(key)
    if (storedValue === null) return null

    return JSON.parse(storedValue) as T
  }

  set(key:string, value:any) {
    this.localStorage.setItem(key, JSON.stringify(value))
  }

  remove(key:string) {
    this.localStorage.removeItem(key)
  }
}
