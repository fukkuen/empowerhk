<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`event.json`)
				.then(r => r.json());
	}
</script>

<script>
	import Preview from '../../components/event-post/previews/index.svelte'

	export let events

	const getCover = (post) => {
		return `event-posts/${
				post.metadata.createdAt.split("T")[0]
		}-${post.metadata.slug}/cover-preview.jpg`
	}
</script>

<div class="container mx-auto px-4">
	{#each events as post}
		<Preview {post}/>
	{/each}
</div>
