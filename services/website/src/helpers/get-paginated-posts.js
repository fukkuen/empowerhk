export default function getPaginatedPosts (posts, page = 0, size = 9) {
	const start = (page - 1) * size
	const end = start + size
	const filtered_events = posts.slice(start, end)
	const total = posts.length
	return {
		posts: filtered_events,
		page_number: page,
		is_last: end >= total,
		total_page_count: Math.floor(total / size)
	}
}