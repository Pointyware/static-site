
/**
 * 
 */
export class Post {
  title:string
  date:Date
  body:string
  constructor(title:string,date:Date) {
    this.title = title
    this.date = date
    this.body = "Empty Body"
  }
}
