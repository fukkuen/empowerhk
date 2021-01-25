<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`blog.json`)
				.then(r => r.json());
	}
</script>

<script>
	import Preview from '../../components/blog-post/previews/index.svelte'
	import loadMoreHandler from "../../helpers/load-more-handler";

	export let posts
	export let page
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
		posts = [...posts, ...new_posts]
	}
</script>


{#each posts as post}
	<Preview {post}/>
{/each}

{#if !is_last}
	<div use:loadMoreHandler={loadMore} class="text-center my-4">更多...</div>
{/if}


