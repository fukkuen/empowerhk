<script>
	export let src
	export let pt = 3/4*100

	let image_el

	const onLazyLoad = node => {
		const observer = new IntersectionObserver((entries, observer) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					node.style.backgroundImage = `url(${src})`
					observer.disconnect();
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
</script>

<div bind:this={image_el} use:onLazyLoad class="bg-contain bg-no-repeat bg-center" style="padding-top: {pt}%;"></div>