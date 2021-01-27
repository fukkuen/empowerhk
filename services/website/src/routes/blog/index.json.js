import posts from "./_posts";
import getPaginatedPosts from "../../helpers/get-paginated-posts";

export const get = (req, res) => {
  try {
    let { tag, category, author, page } = req.query;

    let filtered_posts = posts

    if (tag || category || author) {
      if (tag) tag = decodeURI(tag)
      filtered_posts = posts.filter(p => {
        if (tag) {
          return p.metadata.tags.indexOf(tag) > -1
        } else if (author) {
          return p.metadata.author.slug === author
        } else if (category) {
          return p.metadata.category.map(c => c.slug).indexOf(category) > -1
        }
      })
      if (!filtered_posts.length)
        throw ('Not found')
    }

    page = page || 0
    const size = 9
    const result = getPaginatedPosts(filtered_posts, page, size)

    res.writeHead(200, {
      "Content-Type": "application/json",
    });
    res.end(JSON.stringify(result));
  } catch (e) {
    res.end(
        JSON.stringify({
          message: e,
        })
    );
  }
};
