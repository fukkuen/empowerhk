<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`blog.json?page=1`)
				.then(r => r.json());
	}
</script>

<script>
	import Preview from '../../components/blog-post/previews/index.svelte'

	export let page
	export let posts
	export let is_last

	const getCover = (post) => {
		return `blog-posts/${
				post.metadata.createdAt.split("T")[0]
		}-${post.metadata.slug}/cover-preview.jpg`
	}

	const loadMore = async () => {
		page = 1 + Number(page)
		const res = await fetch('blog.json?page=' + page)
		const data = await res.json()
		const new_posts = data.posts
		is_last = data.is_last
		console.log('new_posts', new_posts)
		posts = [...posts, ...new_posts]
	}

	const loadMoreHandler = node => {
		const observer = new IntersectionObserver((entries, observer) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					loadMore()
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


{#each posts as post}
	<Preview {post}/>
{/each}

{#if !is_last}
	<div use:loadMoreHandler class="text-center my-4">更多...</div>
{/if}


