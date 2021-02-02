<script context="module">
	export function preload({ params }) {
		const {type, slug, page} = params
		return this.fetch(`event/${type}/${slug}/${page}.json`).then(r => r.json());
	}
</script>

<script>
	import Preview from '../../../../../components/event-post/previews/index.svelte'
	import loadMoreHandler from "../../../../../helpers/load-more-handler";
	import { stores } from '@sapper/app';
	import range from "../../../../../helpers/range";

	export let posts
	export let is_last
	export let page_number
	export let total_page_count
	const { page } = stores();

	let is_render = true
	const saved_param = $page.params
	$: {
		if (saved_param !== $page.params) {
			is_render = false
			setTimeout(() => {
				is_render = true
			}, 10)
		}
	}

	$: type = $page.params.type
	$: slug = $page.params.slug

	const loadMore = async () => {
		page_number = Number(page_number) + 1
		const res = await fetch(`event/${type}/${slug}/${page_number}.json`)
		const data = await res.json()
		const new_posts = data.posts
		is_last = data.is_last
		posts = [...posts, ...new_posts]
	}
</script>

{#if is_render}
<div class="mx-auto px-4 max-w-screen-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
	{#each posts as post}
		<Preview {post}/>
	{/each}
</div>
{/if}

{#if !is_last}
	<div use:loadMoreHandler={loadMore} class="text-center my-4">更多...</div>
{/if}

{#each range(0,total_page_count) as i}
	<a href="blog/{type}/{slug}/{i}" class="w-4 h-4">{i}</a>
{/each}