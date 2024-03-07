/**
 * # Post Class
 * This class describes a post in a blog
 * @author Fabio
 * @license MIT
 * @copyright Fabio 2024
 * 
 */

export default class Post {

  /**
   * Post class constructor
   * @param {string} image The post image
   * @param {string} title The post title
   * @param {string} summary The post summary
   * @param {string} body The post body
   * @param {number} likes The likes counter on the post
   */
  constructor(image, title, summary, body, likes = 0) {
    this.image = image
    this.title = title
    this.summary = summary
    this.body = body
    this.likes = likes
  }


  /**
   * Increments the likes count of one
   * every time this is called
   * @returns void
   */
  addLike() {
    this.likes++
  }

}
