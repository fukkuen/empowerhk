import posts from "./_events";
import getPaginatedPosts from "../../helpers/get-paginated-posts";

export const get = (req, res) => {
	try {
		let { tag, category, author, page } = req.query;

		let filtered_posts = posts

		if (tag || category || author) {
			console.log('tag', tag)
			if (tag) tag = decodeURI(tag)
			filtered_posts = posts.filter(p => {
				const target_meta = p.metadata[type]
				if (!target_meta) return false
				if (tag) {
					return p.metadata.tags.indexOf(tag) > -1
				} else if (author) {
					return p.metadata.author === author
				} else if (category) {
					return p.metadata.category.indexOf(category) > -1
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
