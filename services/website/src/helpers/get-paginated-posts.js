export default function getPaginatedPosts (posts, page = 0, size = 9) {
	const start = page * size
	const end = start + size
	const filtered_events = posts.slice(start, end)
	const total = posts.length
	return {
		posts: filtered_events,
		page: page,
		is_last: end >= total
	}
}