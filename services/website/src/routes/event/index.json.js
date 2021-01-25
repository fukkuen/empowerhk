import events from "./_events";
import getPaginatedPosts from "../../helpers/get-paginated-posts";

export const get = (req, res) => {
	const page = Number(req.query.page) || 0
	const size = 9
	const result = getPaginatedPosts(events, page, size)

	res.writeHead(200, {
		"Content-Type": "application/json",
	});
	res.end(JSON.stringify(result));
};
