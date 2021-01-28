import posts from "./_posts.js";

const category = posts
		.map(post => post.metadata.category)
		.reduce((a,c) => [...a, ...c], [])
		.filter(category => !!category.slug)

export default Array.from(new Set(category))