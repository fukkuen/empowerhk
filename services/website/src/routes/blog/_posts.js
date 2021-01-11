import getAllPosts from '../../helpers/get-all-post'
import processTagString from '../../helpers/process-tag-string'
import {categories, authors} from "../../taxonomy";

const posts = getAllPosts.getAllPosts('./src/blog-posts');

const joinCategory = post => {
  if (post.metadata.category) {
    post.metadata.category = post.metadata.category.map(slug => {
      return categories.find(cat => cat.slug === slug) || {}
    })
  }
}

const joinAuthor = post => {
  if (post.metadata.author) {
    post.metadata.author = authors.find(author => author.slug === post.metadata.author) || {}
  }
}

posts.forEach(p => joinCategory(p))
posts.forEach(p => joinAuthor(p))
posts.forEach(p => processTagString(p))

export default posts