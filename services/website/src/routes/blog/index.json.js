import posts from "./_posts.js";

export const get = (req, res) => {
  console.log('cliff: ', req.query.page)
  const page = Number(req.query.page) || 0
  const size = 9
  const start = page * size
  const end = start + size
  const filtered_post = posts.slice(start, end)
  const total = posts.length
  console.log(start, end, filtered_post.length)

  res.writeHead(200, {
    "Content-Type": "application/json",
  });
  const result = {
    posts: filtered_post,
    page: page,
    is_last: end >= total
  }
  res.end(JSON.stringify(result));
};
