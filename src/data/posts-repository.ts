import { Post } from '/model/post'
import { PostsDataSource } from "./posts-data-source"

/**
 * - resident of the model-layer
 * - resident of 
 * 
 */
class PostsRepository {
  dataSource: PostsDataSource
  data?: Post[]
  constructor(dataSource: PostsDataSource) {
    this.dataSource = dataSource
  }

  async load() {
    
  }

  async getPostList(): Promise<Post[]> {
    if (this.data) return this.data
    this.data = await this.dataSource.load()

    throw "Could not load posts"
  }

  async getPost(id:string) {

  }
}

/**
 * 
 */
class CrudObject {
  constructor(endpoint:string,id:string) {
    
  }
  /**
   * Create the Object properties at the given resource endpoint
   */
  create() {}
  /**
   * Read the object state from the given resource endpoint
   */
  read() {}
  /**
   * Send current object state to the given resource endpoint.
   */
  update() {}
  /**
   * Remove object from given resource endpoint.
   */
  delete() {}
}
class LazyObject {

  isUnloaded: boolean = true
  fetchUri: string
  #data: object|null = null

  /**
   * 
   * @param fetchUri 
   */
  constructor(fetchUri: string) {
    this.fetchUri = fetchUri
  }

  async #load() {
    try {
      this.#data = await fetch(this.fetchUri)
    } catch (error) {

    }
  }

  async data() {
    if (this.isUnloaded) {
      await this.#load()
    }
    return this.#data
  }
}
