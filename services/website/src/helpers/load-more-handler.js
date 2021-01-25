export default function loadMoreHandler (node, cb) {
	const observer = new IntersectionObserver((entries, observer) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				cb()
			}
		});
	});

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
}