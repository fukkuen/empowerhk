import posts from "./_posts.js";

const authors = posts
		.map(post => post.metadata.author)
		.filter(author => !!author.slug)

export default Array.from(new Set(authors))