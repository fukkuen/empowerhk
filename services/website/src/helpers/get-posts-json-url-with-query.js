export default function getPostsJsonUrlWithQuery (query, is_next_page) {
	let url = 'blog.json'

	let query_string = ''
	for (let [key, value] of Object.entries(query)) {
		if (query_string === '')
			query_string += '?'
		else
			query_string += '&'
		if (is_next_page && key === 'page')
			value = 1 + Number(value)
		query_string += `${key}=${value}`
	}
	url += query_string
	return url
}