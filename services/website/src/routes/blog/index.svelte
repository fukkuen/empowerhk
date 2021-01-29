<script context="module">
	import getPostsJsonUrlWithQuery from "../../helpers/get-posts-json-url-with-query";
	export function preload({ query }) {
		let url = getPostsJsonUrlWithQuery(query)
		return this.fetch(url).then(r => r.json());
	}
</script>

<script>
	import Preview from '../../components/blog-post/previews/index.svelte'
	import loadMoreHandler from "../../helpers/load-more-handler";

	export let posts
	export let page_number
	export let is_last

	import { stores } from '@sapper/app';
	import {categories, authors} from "../../taxonomy";
	const { page } = stores();

	$: author = $page.query.author
	$: tag = $page.query.tag
	$: category = $page.query.category
	$: has_meta_query = author || tag || category
	$: entity = !!category ?
			categories.find(cat => cat.slug === category) :
			!!author ? authors.find(a => a.slug === author) : {slug: tag, name: tag}

	// to re-render during switch query (otherwise post cover wont update)
	let saved_query = $page.query
	let is_render = true
	$: {
		if (saved_query !== $page.query) {
			is_render = false
			setTimeout(() => {
				is_render = true
			}, 10)
		}
	}

	const loadMore = async () => {
		const query = {
			...$page.query,
			...{
				page: page_number += 1
			}
		}
		const url = getPostsJsonUrlWithQuery(query, true)
		try {
			const res = await fetch(url)
			const data = await res.json()
			const new_posts = data.posts
			is_last = data.is_last
			posts = [...posts, ...new_posts]
		} catch (e) {}
	}
</script>

{#if has_meta_query}
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
	{#if posts}
		{#each posts as post}
			<Preview {post}/>
		{/each}
	{:else}
		Not found
	{/if}
{/if}

{#if !is_last}
	<div use:loadMoreHandler={loadMore} class="text-center my-4">更多...</div>
{/if}


