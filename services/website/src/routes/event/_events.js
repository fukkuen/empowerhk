import {event_categories} from "../../taxonomy";
import getAllPosts from '../../helpers/get-all-post'
import processTagString from '../../helpers/process-tag-string'

const events = getAllPosts.getAllPosts('./src/event-posts', 'event_start_date');

const joinCategory = post => {
	if (post.metadata.category) {
		post.metadata.category = post.metadata.category.map(slug => {
			return event_categories.find(cat => cat.slug === slug) || {}
		})
	}
}

events.forEach(e => joinCategory(e))
events.forEach(e => processTagString(e))

export default events
