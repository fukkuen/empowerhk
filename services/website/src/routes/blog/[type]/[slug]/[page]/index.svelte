<script context="module">
	export function preload({ params }) {
		const {type, slug, page} = params
		return this.fetch(`blog/${type}/${slug}/${page}.json`).then(r => r.json());
	}
</script>

<script>
	import Preview from '../../../../../components/blog-post/previews/index.svelte'
	import loadMoreHandler from "../../../../../helpers/load-more-handler";
	import range from "../../../../../helpers/range";

	export let posts
	export let page_number
	export let is_last
	export let total_page_count

	import { stores } from '@sapper/app';
	import {categories, authors} from "../../../../../taxonomy";
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
	$: author = $page.params.type === 'author' && $page.params.slug
	$: tag = $page.params.type === 'tag' && $page.params.slug
	$: category = $page.params.type === 'category' && $page.params.slug
	$: has_meta_query = author || tag || category
	$: entity = !!category ?
			categories.find(cat => cat.slug === category) :
			!!author ? authors.find(a => a.slug === author) : {slug: tag, name: tag}

	const loadMore = async () => {
		try {
			page_number = Number(page_number) + 1
			const res = await fetch(`blog/${type}/${slug}/${page_number}.json`)
			const data = await res.json()
			const new_posts = data.posts
			is_last = data.is_last
			posts = [...posts, ...new_posts]
		} catch (e) {}
	}
</script>

{#if has_meta_query && slug !== 'all'}
	<div class="mb-2 p-4 bg-white shadow">
		<h1 class="text-lg">
			<span class="text-gray-600 mr-4">
				{#if author}作者: {/if}
				{#if category}文章分類:{/if}
				{#if tag}Tag:{/if}
			</span>
			<em class="font-bold text-blue-500 text-lg">{entity.name}</em>
		</h1>

		{#if entity.description}
			<p class="text-gray-700">{entity.description}</p>
		{/if}
	</div>
{/if}

{#if is_render}
	{#if posts && posts.length}
		{#each posts as post}
			<Preview {post}/>
		{/each}
		{#if !is_last}
			<div use:loadMoreHandler={loadMore} class="text-center my-4">更多...</div>
		{/if}
	{:else}
		Not found
	{/if}
{/if}

{#each range(0,total_page_count) as i}
	<a href="blog/{type}/{slug}/{i}" class="w-4 h-4">{i}</a>
{/each}

