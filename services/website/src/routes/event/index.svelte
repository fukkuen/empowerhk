<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`event.json`)
				.then(r => r.json());
	}
</script>

<script>
	import Preview from '../../components/event-post/previews/index.svelte'
	import loadMoreHandler from "../../helpers/load-more-handler";

	export let posts
	export let page
	export let is_last

	const getCover = (post) => {
		return `event-posts/${
				post.metadata.createdAt.split("T")[0]
		}-${post.metadata.slug}/cover-preview.jpg`
	}

	const loadMore = async () => {
		page = 1 + Number(page)
		const res = await fetch('event.json?page=' + page)
		const data = await res.json()
		const new_posts = data.posts
		is_last = data.is_last
		posts = [...posts, ...new_posts]
	}
</script>

<div class="mx-auto px-4 max-w-screen-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
	{#each posts as post}
		<Preview {post}/>
	{/each}
</div>

{#if !is_last}
	<div use:loadMoreHandler={loadMore} class="text-center my-4">更多...</div>
{/if}