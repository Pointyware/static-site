import { Url } from "url";
import { Post } from '/model/post'

/**
 * 
 */
export class PostsDataSource {
  url: Url
  constructor(url: Url) {
    this.url = url
  }

  async load(): Promise<Post[]> {
    const response = await fetch(this.url.toString())
    const json = await response.json()
    return json as Post[]
  }
}
