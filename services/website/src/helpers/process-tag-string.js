export default post => {
	let tags = post.metadata.tags
	if (typeof tags === 'string') {
		if (tags.indexOf('，') > 0) {
			post.metadata.tags = tags.split('，')
		} else {
			post.metadata.tags = tags.split(',')
		}
	}
}